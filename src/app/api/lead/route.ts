import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { leads, rateLimits } from "@/db/schema";
import { createHash } from "crypto";
import { eq, and, gt } from "drizzle-orm";
import { sendAdminNotification } from "@/lib/email";

const ALLOWED_ORIGINS = [
  "https://futurotekhealth.com",
  "https://peptides.futurotekhealth.com",
  "https://stemcells.futurotekhealth.com",
];

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  phone: z.string().max(30).optional(),
  interest: z.string().max(100).optional(),
  message: z.string().max(1000).optional(),
  source: z.string().max(50).optional(),
});

const RATE_LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000;

async function checkRateLimit(ipHash: string): Promise<boolean> {
  const key = `lead:${ipHash}`;
  const windowStart = new Date(Date.now() - WINDOW_MS);

  const existing = await db
    .select()
    .from(rateLimits)
    .where(and(eq(rateLimits.key, key), gt(rateLimits.windowStart, windowStart)))
    .limit(1);

  if (existing.length === 0) {
    await db
      .insert(rateLimits)
      .values({ key, count: 1, windowStart: new Date() })
      .onConflictDoUpdate({ target: rateLimits.key, set: { count: 1, windowStart: new Date() } });
    return true;
  }
  if (existing[0].count >= RATE_LIMIT) return false;
  await db
    .update(rateLimits)
    .set({ count: existing[0].count + 1 })
    .where(eq(rateLimits.key, key));
  return true;
}

function corsHeaders(origin: string | null) {
  const allowed = ALLOWED_ORIGINS.includes(origin ?? "");
  return {
    "Access-Control-Allow-Origin": allowed ? (origin as string) : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Client-IP",
  };
}

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(req.headers.get("origin")),
  });
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  const cors = corsHeaders(origin);

  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input." }, { status: 400, headers: cors });
    }

    // Honour X-Client-IP from trusted server-side callers; fall back to request IP
    const clientIp =
      req.headers.get("x-client-ip") ??
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    const ipHash = createHash("sha256").update(clientIp).digest("hex").slice(0, 16);

    const allowed = await checkRateLimit(ipHash);
    if (!allowed) {
      return NextResponse.json({ error: "Too many requests." }, { status: 429, headers: cors });
    }

    const { name, email, phone, interest, message, source } = parsed.data;
    await db.insert(leads).values({
      name,
      email,
      phone: phone ?? null,
      interest: interest ?? "Not sure",
      message: message ?? null,
      source: source ?? "unknown",
      consent: true,
    });

    sendAdminNotification({ name, email, phone, interest, message, source: source ?? "unknown" });

    return NextResponse.json({ success: true }, { headers: cors });
  } catch (err) {
    console.error("[/api/lead]", err);
    return NextResponse.json({ error: "Server error." }, { status: 500, headers: cors });
  }
}
