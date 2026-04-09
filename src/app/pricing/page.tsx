"use client";

import Image from "next/image";
import { SectionLabel, ButtonPrimary, Divider } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PricingPage() {
  const { t } = useLanguage();
  const p = t.pricing;

  const packs = [
    {
      name: p.dropIn,
      price: 38,
      per: null,
      features: [p.singleClass, p.noCommitment, p.anyClassType],
    },
    {
      name: p.pack5,
      price: 170,
      per: p.perClass34,
      features: [p.fiveClasses, p.valid2months, p.anyClassType],
    },
    {
      name: p.pack10,
      price: 300,
      per: p.perClass30,
      features: [p.tenClasses, p.valid3months, p.anyClassType, p.bestValue],
    },
  ];

  const memberships = [
    {
      name: p.monthly4,
      price: 140,
      per: p.perClass35,
      features: [p.classes4month, p.autoRenewing, p.pauseAnytime],
      featured: false,
    },
    {
      name: p.monthly8,
      price: 250,
      per: p.perClass31,
      features: [p.classes8month, p.autoRenewing, p.pauseAnytime],
      featured: true,
    },
    {
      name: p.unlimited,
      price: 320,
      per: null,
      features: [p.unlimitedClasses, p.autoRenewing, p.priorityBooking, p.pauseAnytime],
      featured: false,
    },
  ];

  const faqs = [
    { q: p.faq1Q, a: p.faq1A },
    { q: p.faq2Q, a: p.faq2A },
    { q: p.faq3Q, a: p.faq3A },
    { q: p.faq4Q, a: p.faq4A },
    { q: p.faq5Q, a: p.faq5A },
    { q: p.faq6Q, a: p.faq6A },
    { q: p.faq7Q, a: p.faq7A },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] sm:h-[50vh] min-h-[340px] sm:min-h-[400px] overflow-hidden">
        <Image
          src="/images/pricing-hero.jpg"
          alt="Woman on pilates reformer in studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-video-overlay" />
        <div className="absolute top-16 sm:top-20 left-0 right-0 z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-4">
          <SectionLabel dark>{p.heroLabel}</SectionLabel>
        </div>
        <div className="relative z-10 flex flex-col justify-end h-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
          <h1 className="font-heading text-lg sm:text-2xl lg:text-3xl font-light text-cream mb-4 leading-relaxed max-w-2xl">
            {p.heroTitle}
          </h1>
          <p className="text-cream/60 text-lg leading-relaxed max-w-xl">{p.heroSubtitle}</p>
        </div>
      </section>

      {/* Founding member banner */}
      <div className="bg-green">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <p className="text-cream/80 text-sm flex-1">
            <span className="font-medium text-cream">{p.foundingBannerBold}</span>
            {p.foundingBannerText}
          </p>
          <a
            href="#founding"
            className="shrink-0 text-cream text-sm font-medium underline underline-offset-4 hover:text-cream/80 transition-colors"
          >
            {p.foundingBannerLink}
          </a>
        </div>
      </div>

      {/* Class packs */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionLabel>{p.packsLabel}</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-14">
              {p.packsTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packs.map((pack, i) => (
              <ScrollReveal key={pack.name} delay={i + 1}>
                <div className="bg-cream border border-charcoal/8 rounded-sm p-8 flex flex-col h-full card-hover">
                  <h3 className="font-heading text-xl font-light text-charcoal mb-1">{pack.name}</h3>
                  {pack.per && <p className="text-stone text-sm mb-4">{pack.per}</p>}
                  <p className="text-charcoal text-3xl font-medium mb-6 mt-auto pt-4">
                    &euro;{pack.price}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {pack.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-stone text-sm">
                        <span className="text-green mt-0.5 shrink-0">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <ButtonPrimary href="/classes" className="text-center mt-auto">
                    {p.bookNow}
                  </ButtonPrimary>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <Divider />
      </div>

      {/* Memberships */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionLabel>{p.membershipsLabel}</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-14">
              {p.membershipsTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {memberships.map((m, i) => (
              <ScrollReveal key={m.name} delay={i + 1}>
                <div
                  className={`rounded-sm p-8 flex flex-col h-full ${
                    m.featured
                      ? "bg-green text-cream ring-2 ring-green shadow-xl shadow-green/10"
                      : "bg-cream border border-charcoal/8 card-hover"
                  }`}
                >
                  {m.featured && (
                    <span className="text-xs uppercase tracking-[0.2em] font-medium text-cream/70 mb-2">
                      {p.mostPopular}
                    </span>
                  )}
                  <h3 className={`font-heading text-xl font-light mb-1 ${m.featured ? "text-cream" : "text-charcoal"}`}>
                    {m.name}
                  </h3>
                  {m.per && (
                    <p className={`text-sm mb-4 ${m.featured ? "text-cream/70" : "text-stone"}`}>
                      {m.per}
                    </p>
                  )}
                  <p className={`text-3xl font-medium mb-6 mt-auto pt-4 ${m.featured ? "text-cream" : "text-charcoal"}`}>
                    &euro;{m.price}
                    <span className={`text-sm font-normal ${m.featured ? "text-cream/60" : "text-stone"}`}>
                      {p.perMonth}
                    </span>
                  </p>
                  <ul className="space-y-2 mb-8">
                    {m.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2 text-sm ${m.featured ? "text-cream/80" : "text-stone"}`}>
                        <span className={`mt-0.5 shrink-0 ${m.featured ? "text-cream" : "text-green"}`}>
                          &#10003;
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  {m.featured ? (
                    <a
                      href="/classes"
                      className="inline-block text-center bg-cream text-green font-medium text-sm px-7 py-3.5 rounded-sm transition-all duration-300 hover:bg-cream/90 hover:shadow-lg mt-auto"
                    >
                      {p.getStarted}
                    </a>
                  ) : (
                    <ButtonPrimary href="/classes" className="text-center mt-auto">
                      {p.getStarted}
                    </ButtonPrimary>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Private sessions */}
      <section className="bg-cream py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionLabel>{p.privateLabel}</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-12">
              {p.privateTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            <ScrollReveal delay={1}>
              <div className="bg-sand border border-charcoal/8 rounded-sm p-8 card-hover">
                <h3 className="font-heading text-xl font-light text-charcoal mb-1">{p.privateSession}</h3>
                <p className="text-stone text-sm mb-4">{p.privateDetail}</p>
                <p className="text-charcoal text-3xl font-medium">&euro;75</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="bg-sand border border-charcoal/8 rounded-sm p-8 card-hover">
                <h3 className="font-heading text-xl font-light text-charcoal mb-1">{p.duetSession}</h3>
                <p className="text-stone text-sm mb-4">{p.duetDetail}</p>
                <p className="text-charcoal text-3xl font-medium">
                  &euro;95
                  <span className="text-sm font-normal text-stone"> {p.total}</span>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionLabel>{p.faqLabel}</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-14">
              {p.faqTitle}
            </h2>
          </ScrollReveal>

          <div className="space-y-0">
            {faqs.map((item, i) => (
              <ScrollReveal key={i} delay={0}>
                <details className="group border-t border-charcoal/10 py-6 cursor-pointer">
                  <summary className="flex items-center justify-between gap-4 list-none">
                    <span className="font-heading text-lg font-light text-charcoal group-open:text-green transition-colors">
                      {item.q}
                    </span>
                    <span className="shrink-0 text-green transition-transform duration-300 group-open:rotate-45 text-2xl leading-none">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-stone text-sm leading-relaxed max-w-2xl">{item.a}</p>
                </details>
              </ScrollReveal>
            ))}
            <div className="border-t border-charcoal/10" />
          </div>
        </div>
      </section>

      {/* Founding member */}
      <section id="founding" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <Image
          src="/images/studio/storefront.png"
          alt="Nimara studio exterior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-warm-black/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <SectionLabel dark>{p.foundingLabel}</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-cream mb-6 leading-tight">
                {p.foundingTitle}
              </h2>
              <p className="text-cream/50 text-lg mb-4">{p.foundingP1}</p>
              <p className="text-cream/30 text-sm mb-10">{p.foundingP2}</p>
              <ButtonPrimary href="/contact">{p.registerInterest}</ButtonPrimary>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
