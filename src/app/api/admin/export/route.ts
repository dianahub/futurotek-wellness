export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/session";
import { db } from "@/db";
import { leads } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const rows = await db.select().from(leads).orderBy(desc(leads.createdAt));

  const header = "id,name,email,interest,source,consent,created_at\n";
  const csv = rows
    .map((r) =>
      [
        r.id,
        `"${r.name.replace(/"/g, '""')}"`,
        `"${r.email}"`,
        `"${r.interest}"`,
        r.source,
        r.consent,
        r.createdAt.toISOString(),
      ].join(",")
    )
    .join("\n");

  return new NextResponse(header + csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="leads-${Date.now()}.csv"`,
    },
  });
}
