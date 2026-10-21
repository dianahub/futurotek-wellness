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
      className="w-full sm:w-auto bg-teal-600 text-white font-semibold rounded-lg px-8 py-3 hover:bg-teal-700 transition-colors disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
    >
      {pending ? "Sending…" : "Send my request"}
    </button>
  );
}

export function ConsultationForm() {
  const [state, action] = useFormState(submitLead, initial);

  if (state?.success) {
    return (
      <div className="bg-teal-50 border border-teal-200 rounded-xl p-8 text-center">
        <p className="text-2xl mb-2">✓</p>
        <p className="text-lg font-semibold text-teal-800 mb-1">Thank you!</p>
        <p className="text-teal-700 text-sm">We received your request and will be in touch soon.</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {/* Honeypot */}
      <input type="text" name="website" autoComplete="off" className="hidden" tabIndex={-1} aria-hidden="true" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fw-name" className="block text-sm font-medium text-stone-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fw-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="fw-email" className="block text-sm font-medium text-stone-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="fw-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="fw-interest" className="block text-sm font-medium text-stone-700 mb-1">
          I'm interested in <span className="text-red-500">*</span>
        </label>
        <select
          id="fw-interest"
          name="interest"
          required
          defaultValue=""
          className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
          className="mt-0.5 h-4 w-4 rounded border-stone-300 text-teal-600 focus:ring-teal-500"
        />
        <label htmlFor="fw-consent" className="text-xs text-stone-600 leading-relaxed">
          I agree to be contacted about my inquiry. I understand this is an educational site and
          not a medical service. My data will be stored for up to 12 months and used only to
          respond to my request.
        </label>
      </div>

      {state?.error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
          {state.error}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
