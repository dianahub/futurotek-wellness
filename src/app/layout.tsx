import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://futurotekwellness.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Futurotek Wellness — Longevity & Regenerative Wellness Education",
    template: "%s | Futurotek Wellness",
  },
  description:
    "Educational information about peptide therapy, stem cell consultations, and evidence-informed wellness supplements. Independent affiliate of The Longevity Consultants.",
  openGraph: {
    type: "website",
    siteName: "Futurotek Wellness",
    title: "Futurotek Wellness — Longevity & Regenerative Wellness",
    description:
      "Educational information about peptide therapy, stem cell consultations, and wellness supplements.",
    url: BASE_URL,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-900 antialiased">
        {children}
      </body>
    </html>
  );
}
