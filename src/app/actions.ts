"use server";

import { z } from "zod";
import { db } from "@/db";
import { leads, rateLimits } from "@/db/schema";
import { headers } from "next/headers";
import { createHash } from "crypto";
import { eq, and, gt } from "drizzle-orm";
import { sendAdminNotification } from "@/lib/email";

const schema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().max(30).optional(),
  interest: z.enum(["Peptides", "Stem Cells", "Supplements", "Not sure"]),
  message: z.string().max(1000).optional(),
  consent: z.string(),
  website: z.string().max(0),
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

export async function submitLead(
  _prevState: unknown,
  formData: FormData
): Promise<{ success?: boolean; error?: string }> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined,
    interest: formData.get("interest"),
    message: formData.get("message") || undefined,
    consent: formData.get("consent"),
    website: formData.get("website") ?? "",
  };

  const result = schema.safeParse(raw);
  if (!result.success) {
    const first = result.error.errors[0]?.message ?? "Please check your inputs.";
    return { error: first };
  }

  const { name, email, phone, interest, message, consent, website } = result.data;
  if (website) return { error: "Submission rejected." };
  if (consent !== "on") return { error: "Please agree to the consent statement." };

  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const ipHash = createHash("sha256").update(ip).digest("hex").slice(0, 16);

  const allowed = await checkRateLimit(ipHash);
  if (!allowed) return { error: "Too many submissions. Please try again later." };

  await db.insert(leads).values({
    name,
    email,
    phone: phone ?? null,
    interest,
    message: message ?? null,
    source: "landing",
    consent: true,
  });

  sendAdminNotification({ name, email, phone, interest, message, source: "landing" });

  return { success: true };
}
