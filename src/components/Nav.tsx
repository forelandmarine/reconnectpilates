"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Lang } from "@/lib/i18n";

const langs: Lang[] = ["en", "es", "fr"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.classes, href: "/classes" },
    { label: t.nav.pricing, href: "/pricing" },
    { label: t.nav.instructors, href: "/instructors" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/90 backdrop-blur-xl border-b border-cream/8"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex flex-col leading-tight">
          <span className="font-heading text-2xl sm:text-[1.7rem] font-semibold tracking-[0.12em] text-cream uppercase">
            Nimara
          </span>
          <span className="text-[0.55rem] sm:text-[0.6rem] uppercase tracking-[0.28em] text-cream/50 font-medium">
            Reformer Studio
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-wide text-cream/60 transition-colors hover:text-cream"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/classes"
            className="bg-green text-cream font-medium text-sm px-5 py-2.5 rounded-sm transition-all duration-300 hover:bg-green-light hover:shadow-lg hover:shadow-green/20"
          >
            {t.nav.book}
          </Link>

          {/* Language switcher */}
          <div className="flex items-center gap-1 ml-2">
            {langs.map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && <span className="text-cream/20 text-xs mx-0.5">|</span>}
                <button
                  onClick={() => setLang(l)}
                  className={`text-xs font-medium uppercase tracking-wide transition-colors ${
                    lang === l ? "text-cream" : "text-cream/30 hover:text-cream/60"
                  }`}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-cream transition-transform duration-300 ${open ? "rotate-45 translate-y-[3.5px]" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-cream transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-cream transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          open ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-charcoal/95 backdrop-blur-xl border-t border-cream/8 px-6 pb-6 pt-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium uppercase tracking-wide text-cream/60 hover:text-cream transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/classes"
            onClick={() => setOpen(false)}
            className="inline-block mt-4 bg-green text-cream font-medium text-sm px-5 py-2.5 rounded-sm"
          >
            {t.nav.book}
          </Link>

          {/* Mobile language switcher */}
          <div className="flex items-center gap-2 mt-5 pt-4 border-t border-cream/8">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-xs font-medium uppercase tracking-widest px-2 py-1 rounded-sm transition-colors ${
                  lang === l
                    ? "bg-cream/10 text-cream"
                    : "text-cream/30 hover:text-cream/60"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
