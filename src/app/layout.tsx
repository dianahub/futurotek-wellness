import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-fraunces",
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://futurotekhealth.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Futurotek Health — Longevity & Regenerative Wellness Education",
    template: "%s | Futurotek Health",
  },
  description:
    "Educational information about peptide therapy, stem cell consultations, and evidence-informed wellness supplements. Independent affiliate of The Longevity Consultants.",
  openGraph: {
    type: "website",
    siteName: "Futurotek Health",
    title: "Futurotek Health — Longevity & Regenerative Wellness",
    description:
      "Educational information about peptide therapy, stem cell consultations, and wellness supplements.",
    url: BASE_URL,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
