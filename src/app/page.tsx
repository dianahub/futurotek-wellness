import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Futurotek Health — Longevity & Regenerative Wellness Education",
  description:
    "Educational information about peptide therapy, stem cell consultations, and wellness supplements. Free consultation requests available.",
  openGraph: {
    title: "Futurotek Health",
    description:
      "Education and consultations for longevity and regenerative wellness.",
  },
};

const PEPTIDES_URL =
  process.env.NEXT_PUBLIC_PEPTIDES_URL ?? "https://peptides.futurotekhealth.com";
const STEMCELLS_URL =
  process.env.NEXT_PUBLIC_STEMCELLS_URL ?? "https://stemcells.futurotekhealth.com";
const SUPPLEMENTS_URL =
  process.env.NEXT_PUBLIC_SUPPLEMENTS_URL ?? "#supplements";
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@futurotekhealth.com";

export default function HomePage() {
  return (
    <>
      {/* ── Header ──────────────────────────────────────────── */}
      <Header peptidesUrl={PEPTIDES_URL} stemcellsUrl={STEMCELLS_URL} />

      <main>
        {/* ── Hero ────────────────────────────────────────────── */}
        <section
          className="border-b border-[rgba(20,48,77,0.12)]"
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, #faf8f3 42%, #eef1f6 100%)",
          }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
            <p className="text-gold-dark text-xs font-medium uppercase tracking-[0.16em] mb-4">
              Longevity &amp; Regenerative Wellness
            </p>
            <h1 className="font-serif text-3xl sm:text-5xl text-ink leading-tight max-w-3xl mx-auto mb-6">
              Education and consultations for longevity and regenerative wellness
            </h1>
            <p className="text-navy-soft text-lg max-w-2xl mx-auto mb-10">
              Explore research-backed educational resources on peptide therapy and stem cell
              treatments, and connect with qualified specialists through a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PEPTIDES_URL}
                className="inline-block text-center font-medium text-white px-8 py-3 rounded border text-sm transition-all hover:brightness-110 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #9c6f16 0%, #7c540c 100%)",
                  boxShadow: "0 12px 24px -10px rgba(143,100,16,0.6)",
                  borderColor: "#6f4a0a",
                }}
              >
                Explore peptide education
              </a>
              <a
                href="#consultation"
                className="inline-block text-center font-medium text-navy px-8 py-3 rounded border border-[rgba(20,48,77,0.3)] text-sm hover:border-navy-soft hover:-translate-y-0.5 transition-all"
              >
                Request a free consultation
              </a>
            </div>
          </div>
        </section>

        {/* ── Service Cards ────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="font-serif text-2xl text-ink text-center mb-3">
            What we offer
          </h2>
          <p className="text-navy-soft text-center text-sm mb-10 max-w-xl mx-auto">
            Two distinct resources under the Futurotek Health umbrella — each with its own
            specialists and educational focus.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Peptides card */}
            <div className="bg-white border border-[rgba(20,48,77,0.16)] rounded-2xl shadow-sm overflow-hidden flex flex-col transition-all hover:border-[rgba(20,48,77,0.3)] hover:-translate-y-0.5 hover:shadow-md">
              <div className="h-40 bg-gradient-to-br from-sage to-sage-deep flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #10263c 0%, #24507a 100%)" }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.8 1.8c-.355.355-.833.554-1.332.55H7.17a1.875 1.875 0 01-1.332-.55L4.2 15m15.6 0H4.2" />
                  </svg>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-lg text-ink mb-2">
                  Peptide and Longevity Education
                </h3>
                <p className="text-navy-soft text-sm leading-relaxed mb-1">
                  Educational resources on peptide research including GLP-3, BPC-157, NAD+,
                  Kisspeptin, and more.
                </p>
                <p className="text-navy-soft text-sm leading-relaxed mb-6">
                  Browse topic pages with research area summaries and free consultation requests.
                </p>
                <a
                  href={PEPTIDES_URL}
                  className="mt-auto inline-block text-center font-medium text-white rounded px-6 py-2.5 text-sm transition-all hover:brightness-110 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #9c6f16 0%, #7c540c 100%)",
                    boxShadow: "0 8px 20px -8px rgba(143,100,16,0.5)",
                  }}
                >
                  Explore peptide education →
                </a>
              </div>
            </div>

            {/* Stem cells card */}
            <div className="bg-white border border-[rgba(20,48,77,0.16)] rounded-2xl shadow-sm overflow-hidden flex flex-col transition-all hover:border-[rgba(20,48,77,0.3)] hover:-translate-y-0.5 hover:shadow-md">
              <div className="h-40 bg-gradient-to-br from-sage to-sage-deep flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #10263c 0%, #24507a 100%)" }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-lg text-ink mb-2">
                  Stem Cell Consultations Miami
                </h3>
                <p className="text-navy-soft text-sm leading-relaxed mb-1">
                  Connect with stem cell specialists in Miami through a free consultation request.
                </p>
                <p className="text-navy-soft text-sm leading-relaxed mb-6">
                  Educational information on regenerative and cellular wellness research areas.
                </p>
                <a
                  href={STEMCELLS_URL}
                  className="mt-auto inline-block text-center text-white font-medium rounded px-6 py-2.5 hover:brightness-110 hover:-translate-y-0.5 transition-all text-sm"
                  style={{ background: "linear-gradient(135deg, #10263c 0%, #24507a 100%)" }}
                >
                  Stem cell consultations →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Supplements Block — hidden until ready ───────────── */}
        {false && <section id="supplements" className="border-y border-[rgba(20,48,77,0.1)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-gold-dark font-medium text-xs uppercase tracking-widest mb-2">
                Wellness products
              </p>
              <h2 className="font-serif text-2xl text-ink mb-3">
                Supplements &amp; Wellness Products
              </h2>
              <p className="text-navy-soft text-sm leading-relaxed max-w-md">
                Curated wellness supplements researched for quality and evidence support.
                Browse the product catalog to learn more.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href={SUPPLEMENTS_URL}
                className="inline-block font-medium text-white rounded px-8 py-3 text-sm transition-all hover:brightness-110"
                style={{ background: "linear-gradient(135deg, #9c6f16 0%, #7c540c 100%)" }}
              >
                Browse supplements
              </a>
            </div>
          </div>
        </section>}

        {/* ── Consultation Form ────────────────────────────────── */}
        <section
          id="consultation"
          className="max-w-5xl mx-auto px-4 sm:px-6 py-16 border-t border-[rgba(20,48,77,0.1)]"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl text-ink mb-2">
              Request a free consultation
            </h2>
            <p className="text-navy-soft text-sm mb-6">
              Tell us what you're interested in and a specialist will follow up with educational
              information and next steps.
            </p>
            <ConsultationForm />
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer style={{ background: "#d6e0ec", borderTop: "1px solid rgba(20,48,77,0.16)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-serif font-medium text-navy mb-2">Futurotek Health</p>
              <p className="text-xs leading-relaxed text-navy-soft">
                Educational information on longevity, peptide research, regenerative wellness,
                and supplements.
              </p>
            </div>
            <div>
              <p className="font-medium text-navy mb-2 text-sm">Resources</p>
              <ul className="space-y-1 text-xs">
                <li><a href={PEPTIDES_URL} className="text-navy-soft hover:text-navy transition-colors">Peptide Education</a></li>
                <li><a href={STEMCELLS_URL} className="text-navy-soft hover:text-navy transition-colors">Stem Cell Consultations</a></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-navy mb-2 text-sm">Contact &amp; Legal</p>
              <ul className="space-y-1 text-xs">
                <li>
                  <a href="tel:+12026400054" className="text-navy-soft hover:text-navy transition-colors">
                    +1 (202) 640-0054
                  </a>
                </li>
                <li><Link href="/privacy" className="text-navy-soft hover:text-navy transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[rgba(20,48,77,0.2)] pt-6 space-y-2 text-xs text-navy-soft">
            <p>
              <strong className="text-navy">Affiliate disclosure:</strong> I am an independent
              affiliate of The Longevity Consultants and may receive compensation if you request a
              consultation or purchase through links on this site.
            </p>
            <p>
              <strong className="text-navy">Not medical advice:</strong> This site is for
              educational purposes only. Nothing here constitutes medical advice, diagnosis, or
              treatment. Always consult a licensed healthcare provider before starting any
              supplement, peptide, or wellness treatment.
            </p>
            <p className="pt-2">© 2026 Futurotek Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
