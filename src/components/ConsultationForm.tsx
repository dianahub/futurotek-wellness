"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitLead } from "@/app/actions";

const INTERESTS = ["Peptides", "Stem Cells", "Supplements", "Not sure"] as const;

const initial = { success: undefined as boolean | undefined, error: undefined as string | undefined };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full sm:w-auto text-white font-medium rounded px-8 py-3 text-sm transition-all hover:brightness-110 hover:-translate-y-0.5 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      style={{ background: "linear-gradient(135deg, #9c6f16 0%, #7c540c 100%)" }}
    >
      {pending ? "Sending…" : "Send my request"}
    </button>
  );
}

export function ConsultationForm() {
  const [state, action] = useFormState(submitLead, initial);

  if (state?.success) {
    return (
      <div className="bg-sage border border-[rgba(20,48,77,0.2)] rounded-xl p-8 text-center">
        <p className="text-2xl mb-2">✓</p>
        <p className="text-lg font-serif text-navy mb-1">Thank you!</p>
        <p className="text-navy-soft text-sm">We received your request and will be in touch soon.</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {/* Honeypot */}
      <input type="text" name="website" autoComplete="off" className="hidden" tabIndex={-1} aria-hidden="true" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fw-name" className="block text-sm font-medium text-navy mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fw-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded border border-[rgba(20,48,77,0.2)] bg-paper px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-navy-soft focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="fw-email" className="block text-sm font-medium text-navy mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="fw-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded border border-[rgba(20,48,77,0.2)] bg-paper px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-navy-soft focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="fw-interest" className="block text-sm font-medium text-navy mb-1">
          I'm interested in <span className="text-red-500">*</span>
        </label>
        <select
          id="fw-interest"
          name="interest"
          required
          defaultValue=""
          className="w-full rounded border border-[rgba(20,48,77,0.2)] bg-paper px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-navy-soft focus:border-transparent"
        >
          <option value="" disabled>Select a topic…</option>
          {INTERESTS.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      </div>

      <div className="flex items-start gap-3">
        <input
          id="fw-consent"
          name="consent"
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 rounded border-[rgba(20,48,77,0.2)] text-navy focus:ring-navy-soft"
        />
        <label htmlFor="fw-consent" className="text-xs text-navy-soft leading-relaxed">
          I agree to be contacted about my inquiry. I understand this is an educational site and
          not a medical service. My data will be stored for up to 12 months and used only to
          respond to my request.
        </label>
      </div>

      {state?.error && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded px-4 py-2">
          {state.error}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
