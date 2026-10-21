import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Futurotek Wellness — Longevity & Regenerative Wellness Education",
  description:
    "Educational information about peptide therapy, stem cell consultations, and wellness supplements. Free consultation requests available.",
  openGraph: {
    title: "Futurotek Wellness",
    description:
      "Education and consultations for longevity and regenerative wellness.",
  },
};

const PEPTIDES_URL =
  process.env.NEXT_PUBLIC_PEPTIDES_URL ?? "https://peptides.futurotekwellness.com";
const STEMCELLS_URL =
  process.env.NEXT_PUBLIC_STEMCELLS_URL ?? "https://stemcells.futurotekwellness.com";
const SUPPLEMENTS_URL =
  process.env.NEXT_PUBLIC_SUPPLEMENTS_URL ?? "#supplements";
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@futurotekwellness.com";

export default function HomePage() {
  return (
    <>
      {/* ── Header ──────────────────────────────────────────── */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight text-stone-900">
            Futurotek Wellness
          </span>
          <nav className="flex items-center gap-6 text-sm font-medium text-stone-600">
            <a href={PEPTIDES_URL} className="hover:text-teal-700 transition-colors">
              Peptides
            </a>
            <a href={STEMCELLS_URL} className="hover:text-teal-700 transition-colors">
              Stem Cells
            </a>
            <a
              href="#consultation"
              className="bg-teal-600 text-white px-4 py-1.5 rounded-full text-xs hover:bg-teal-700 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* ── Disclaimer banner (visible without scrolling) ── */}
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2.5 flex flex-col sm:flex-row gap-1 sm:gap-4 text-xs text-stone-600">
            <span>
              <strong>Affiliate disclosure:</strong> I am an independent affiliate and may receive
              compensation if you request a consultation or purchase through my links.
            </span>
            <span className="sm:border-l sm:border-amber-300 sm:pl-4">
              This site is for <strong>educational purposes only</strong> and is not medical advice.
              Talk to a licensed healthcare provider before starting any supplement, peptide, or
              treatment.
            </span>
          </div>
        </div>

        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="bg-white border-b border-stone-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
            <p className="text-teal-600 font-medium text-sm uppercase tracking-widest mb-4">
              Longevity &amp; Regenerative Wellness
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold text-stone-900 leading-tight max-w-3xl mx-auto mb-6">
              Education and consultations for longevity and regenerative wellness
            </h1>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto mb-10">
              Explore research-backed educational resources on peptide therapy and stem cell
              treatments, and connect with qualified specialists through a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PEPTIDES_URL}
                className="bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Explore peptide education
              </a>
              <a
                href="#consultation"
                className="bg-white text-teal-700 font-semibold px-8 py-3 rounded-lg border border-teal-300 hover:bg-teal-50 transition-colors"
              >
                Request a free consultation
              </a>
            </div>
          </div>
        </section>

        {/* ── Service Cards ────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-stone-800 text-center mb-3">
            What we offer
          </h2>
          <p className="text-stone-500 text-center text-sm mb-10 max-w-xl mx-auto">
            Two distinct resources under the Futurotek Wellness umbrella — each with its own
            specialists and educational focus.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Peptides card */}
            <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
              <div className="h-40 bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-teal-600 mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.8 1.8c-.355.355-.833.554-1.332.55H7.17a1.875 1.875 0 01-1.332-.55L4.2 15m15.6 0H4.2" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  Peptide and Longevity Education
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-1">
                  Educational resources on peptide research including GLP-3, BPC-157, NAD+,
                  Kisspeptin, and more.
                </p>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">
                  Browse topic pages with research area summaries and free consultation requests.
                </p>
                <a
                  href={PEPTIDES_URL}
                  className="mt-auto inline-block text-center bg-teal-600 text-white font-semibold rounded-lg px-6 py-2.5 hover:bg-teal-700 transition-colors text-sm"
                >
                  Explore peptide education →
                </a>
              </div>
            </div>

            {/* Stem cells card */}
            <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
              <div className="h-40 bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-stone-700 mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  Stem Cell Consultations Miami
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-1">
                  Connect with stem cell specialists in Miami through a free consultation request.
                </p>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">
                  Educational information on regenerative and cellular wellness research areas.
                </p>
                <a
                  href={STEMCELLS_URL}
                  className="mt-auto inline-block text-center bg-stone-700 text-white font-semibold rounded-lg px-6 py-2.5 hover:bg-stone-800 transition-colors text-sm"
                >
                  Stem cell consultations →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Supplements Block ────────────────────────────────── */}
        <section id="supplements" className="bg-white border-y border-stone-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-teal-600 font-medium text-xs uppercase tracking-widest mb-2">
                Wellness products
              </p>
              <h2 className="text-2xl font-bold text-stone-800 mb-3">
                Supplements &amp; Wellness Products
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed max-w-md">
                Curated wellness supplements researched for quality and evidence support.
                Browse the product catalog to learn more.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href={SUPPLEMENTS_URL}
                className="inline-block bg-teal-600 text-white font-semibold rounded-lg px-8 py-3 hover:bg-teal-700 transition-colors"
              >
                Browse supplements
              </a>
            </div>
          </div>
        </section>

        {/* ── Consultation Form ────────────────────────────────── */}
        <section id="consultation" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-800 mb-2">
              Request a free consultation
            </h2>
            <p className="text-stone-500 text-sm mb-2">
              Tell us what you're interested in and a specialist will follow up with educational
              information and next steps.
            </p>
            <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-2 mb-8">
              I am an independent affiliate. If you request a consultation through this form, I
              may receive compensation. This is not a medical consultation.
            </p>
            <ConsultationForm />
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="bg-stone-800 text-stone-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-semibold text-white mb-2">Futurotek Wellness</p>
              <p className="text-xs leading-relaxed text-stone-400">
                Educational information on longevity, peptide research, regenerative wellness,
                and supplements.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2 text-sm">Resources</p>
              <ul className="space-y-1 text-xs">
                <li><a href={PEPTIDES_URL} className="hover:text-teal-400 transition-colors">Peptide Education</a></li>
                <li><a href={STEMCELLS_URL} className="hover:text-teal-400 transition-colors">Stem Cell Consultations</a></li>
                <li><a href={SUPPLEMENTS_URL} className="hover:text-teal-400 transition-colors">Supplements</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-2 text-sm">Legal</p>
              <ul className="space-y-1 text-xs">
                <li><Link href="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-teal-400 transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-700 pt-6 space-y-2 text-xs text-stone-500">
            <p>
              <strong className="text-stone-400">Affiliate disclosure:</strong> I am an independent
              affiliate of The Longevity Consultants and may receive compensation if you request a
              consultation or purchase through links on this site.
            </p>
            <p>
              <strong className="text-stone-400">Not medical advice:</strong> This site is for
              educational purposes only. Nothing here constitutes medical advice, diagnosis, or
              treatment. Always consult a licensed healthcare provider before starting any
              supplement, peptide, or wellness treatment.
            </p>
            <p className="pt-2">© 2026 Futurotek Wellness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
