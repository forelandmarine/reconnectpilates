"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.classes, href: "/classes" },
    { label: t.nav.pricing, href: "/pricing" },
    { label: t.nav.instructors, href: "/instructors" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="bg-warm-black text-cream/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex flex-col leading-tight mb-4">
              <span className="font-heading text-2xl font-semibold tracking-[0.12em] text-cream uppercase">
                Nimara
              </span>
              <span className="text-[0.55rem] uppercase tracking-[0.28em] text-cream/50 font-medium mt-0.5">
                Reformer Studio
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">{t.footer.tagline}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-cream/70 mb-4">
              {t.footer.studioHeading}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-colors hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-cream/70 mb-4">
              {t.footer.contactHeading}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>C/ Joan Crespi, 47</li>
              <li>07014 Palma de Mallorca</li>
              <li>
                <a
                  href="mailto:hello@nimarastudio.es"
                  className="transition-colors hover:text-cream"
                >
                  hello@nimarastudio.es
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-cream/70 mb-4">
              {t.footer.followHeading}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://instagram.com/nimarastudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cream"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-cream/8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cream/30">
          <p>&copy; {new Date().getFullYear()} Nimara Reformer Pilates S.L.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cream/50">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="hover:text-cream/50">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
