"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  peptidesUrl: string;
  stemcellsUrl: string;
}

const NAV_LINKS = (peptidesUrl: string, stemcellsUrl: string) => [
  { href: peptidesUrl, label: "Peptides", external: true },
  { href: stemcellsUrl, label: "Stem Cells", external: true },
  { href: "#consultation", label: "Contact", external: false },
];

export function Header({ peptidesUrl, stemcellsUrl }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const links = NAV_LINKS(peptidesUrl, stemcellsUrl);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-40"
      style={{
        background: "linear-gradient(115deg, #10263c 0%, #1c3f63 55%, #2b5f8c 100%)",
        borderBottom: "1px solid rgba(207,159,63,0.5)",
        boxShadow: "0 10px 30px -14px rgba(16,38,60,0.65)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        <span className="font-serif font-medium text-xl tracking-tight text-white whitespace-nowrap">
          Futurotek Health
        </span>

        {/* Phone — desktop only */}
        <a
          href="tel:+12026400054"
          className="hidden lg:flex flex-col items-end text-white/80 hover:text-white transition-colors"
        >
          <span className="text-[11px] uppercase tracking-[0.12em] text-white/60">Referral line</span>
          <span className="text-sm tabular-nums">+1 (202) 640-0054</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium" aria-label="Main navigation">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={label === "Contact"
                ? "text-gold hover:text-amber-300 font-semibold transition-colors whitespace-nowrap"
                : "text-white/80 hover:text-white transition-colors whitespace-nowrap"}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden p-2 rounded text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-white/10 px-4 pb-6"
          style={{ background: "#10263c" }}
        >
          <a
            href="tel:+12026400054"
            className="flex items-center gap-2 py-4 border-b border-white/10 text-white/70 hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            <span className="text-[11px] uppercase tracking-wider text-white/50">Referral line</span>
            <span className="text-sm tabular-nums">+1 (202) 640-0054</span>
          </a>
          <ul className="flex flex-col gap-1 pt-3" role="list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-3 rounded text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    label === "Contact" ? "text-gold hover:text-amber-300" : "text-white/80 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
