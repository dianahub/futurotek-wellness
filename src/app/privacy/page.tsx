import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Futurotek Wellness collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/" className="text-sm text-teal-700 hover:underline mb-6 inline-block">
        ← Back to home
      </Link>
      <h1 className="text-3xl font-bold text-stone-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-stone-400 mb-8">Last updated: October 2026</p>

      <div className="prose prose-stone max-w-none text-sm leading-relaxed space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-2">What we collect</h2>
          <p className="text-stone-600">
            When you submit a consultation request through this site, we collect your name, email
            address, and the topic of interest you select. We also store the date and time of
            your submission and whether you gave consent.
          </p>
          <p className="text-stone-600 mt-2">
            We do not collect payment information, health records, or any other sensitive personal
            data through this site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-2">How we use it</h2>
          <p className="text-stone-600">
            We use the information you submit solely to respond to your consultation request and
            to pass it to the specialist or affiliate company you are interested in connecting
            with. We do not sell, rent, or share your information with third parties for
            marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-2">Data retention</h2>
          <p className="text-stone-600">
            Consultation request data is retained for a maximum of 12 months from the date of
            submission. After that period, records are automatically purged from our database.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-2">Cookies</h2>
          <p className="text-stone-600">
            This site does not use tracking cookies or third-party analytics. A session cookie
            may be set for the admin area, which is only accessible to the site owner.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-2">Affiliate disclosure</h2>
          <p className="text-stone-600">
            This site is operated by an independent affiliate of The Longevity Consultants. If
            you submit a consultation request and are connected with a specialist, the site owner
            may receive compensation. This is disclosed on every page of the site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-2">Your rights</h2>
          <p className="text-stone-600">
            You may request deletion of your data at any time by emailing us. We will delete your
            record within 30 days of a verifiable request.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-800 mb-2">Contact</h2>
          <p className="text-stone-600">
            For privacy questions or data deletion requests, email:{" "}
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@futurotekwellness.com"}`}
              className="text-teal-700 hover:underline"
            >
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@futurotekwellness.com"}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
