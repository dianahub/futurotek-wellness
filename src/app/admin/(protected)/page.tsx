export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { db } from "@/db";
import { leads } from "@/db/schema";
import { desc } from "drizzle-orm";

export const metadata: Metadata = {
  title: "Admin — Leads",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const rows = await db.select().from(leads).orderBy(desc(leads.createdAt)).limit(500);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Leads</h1>
          <p className="text-sm text-stone-500 mt-1">{rows.length} total (newest first)</p>
        </div>
        <div className="flex gap-3">
          <a
            href="/api/admin/export"
            className="text-sm border border-stone-300 text-stone-700 rounded px-4 py-2 hover:bg-stone-50 transition-colors"
          >
            Export CSV
          </a>
          <form action="/api/admin/logout" method="POST">
            <button
              type="submit"
              className="text-sm border border-stone-300 text-stone-700 rounded px-4 py-2 hover:bg-stone-50 transition-colors"
            >
              Log out
            </button>
          </form>
        </div>
      </div>

      {rows.length === 0 ? (
        <p className="text-stone-500 text-sm">No leads yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-stone-200">
          <table className="w-full text-sm">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                {["#", "Name", "Email", "Interest", "Date"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-medium text-stone-600">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white">
              {rows.map((row) => (
                <tr key={row.id} className="hover:bg-stone-50">
                  <td className="px-4 py-3 text-stone-400">{row.id}</td>
                  <td className="px-4 py-3 font-medium text-stone-800">{row.name}</td>
                  <td className="px-4 py-3 text-stone-600">
                    <a href={`mailto:${row.email}`} className="hover:text-teal-700">{row.email}</a>
                  </td>
                  <td className="px-4 py-3">
                    <span className="bg-teal-50 text-teal-700 text-xs px-2 py-0.5 rounded-full">
                      {row.interest}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-stone-400 text-xs">
                    {row.createdAt.toLocaleDateString("en-US", {
                      year: "numeric", month: "short", day: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="mt-6 text-xs text-stone-400">
        <Link href="/" className="hover:text-teal-700">← Back to site</Link>
      </p>
    </div>
  );
}
