export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { db } from "@/db";
import { leads } from "@/db/schema";
import { lt } from "drizzle-orm";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const cutoff = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
  const result = await db.delete(leads).where(lt(leads.createdAt, cutoff));

  return NextResponse.json({ purged: true, cutoff: cutoff.toISOString() });
}
