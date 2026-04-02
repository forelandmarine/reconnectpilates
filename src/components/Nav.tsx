"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { label: "Studio", href: "/studio" },
  { label: "Classes", href: "/classes" },
  { label: "Pricing", href: "/pricing" },
  { label: "Instructors", href: "/instructors" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/90 backdrop-blur-xl border-b border-cream/8"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span className="font-heading text-2xl sm:text-[1.7rem] font-light tracking-[0.12em] text-cream">
            RE:CONNECT
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
            Book a class
          </Link>
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
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
            Book a class
          </Link>
        </nav>
      </div>
    </header>
  );
}
