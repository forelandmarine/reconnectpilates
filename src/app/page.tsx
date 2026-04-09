"use client";

import Image from "next/image";
import { SectionLabel, ButtonPrimary, ButtonOutline, Divider } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollHint from "@/components/ScrollHint";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;

  const classes = [
    {
      name: h.class1Name,
      description: h.class1Desc,
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&h=600&fit=crop&q=80",
    },
    {
      name: h.class2Name,
      description: h.class2Desc,
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop&q=80",
    },
    {
      name: h.class3Name,
      description: h.class3Desc,
      image: "https://images.unsplash.com/photo-1540206395-68808572332f?w=800&h=600&fit=crop&q=80",
    },
    {
      name: h.class4Name,
      description: h.class4Desc,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80",
    },
  ];

  const values = [
    { title: h.v1Title, description: h.v1Desc, number: "08" },
    { title: h.v2Title, description: h.v2Desc, number: "50" },
    { title: h.v3Title, description: h.v3Desc, number: "01" },
  ];

  const testimonials = [
    { quote: h.t1Quote, name: h.t1Name, detail: h.t1Detail },
    { quote: h.t2Quote, name: h.t2Name, detail: h.t2Detail },
    { quote: h.t3Quote, name: h.t3Name, detail: h.t3Detail },
  ];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[550px] max-h-[1000px] overflow-hidden">
        <Image
          src="/images/studio/reformers.png"
          alt="Nimara Reformer Pilates studio"
          fill
          className="object-cover"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 hero-video-overlay" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-28">
          <div className="max-w-2xl">
            <SectionLabel dark>{h.location}</SectionLabel>
            <p className="font-heading text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[0.1em] text-cream leading-tight mb-1">
              Nimara
            </p>
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-cream/50 font-medium mb-5 sm:mb-7">
              Reformer Studio
            </p>
            <h1 className="font-heading text-base sm:text-xl font-light text-cream/70 mb-3 sm:mb-4 max-w-md leading-relaxed">
              {h.heroTitle}
            </h1>
            <p className="text-sm text-cream/45 leading-relaxed mb-8 sm:mb-10 max-w-sm">
              {h.heroSubtitle}
            </p>
            {/* CTAs — desktop only */}
            <div className="hidden sm:flex flex-wrap gap-4">
              <ButtonPrimary href="/classes">{h.bookClass}</ButtonPrimary>
              <ButtonOutline href="/studio" light>
                {h.exploreStudio}
              </ButtonOutline>
            </div>
          </div>
        </div>

        {/* Scroll hint — mobile only */}
        <ScrollHint />

        {/* Scroll indicator — desktop only */}
        <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2">
          <div className="w-px h-8 bg-cream/30 animate-pulse" />
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section className="bg-charcoal py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i + 1}>
                <span className="block font-heading text-5xl sm:text-6xl font-light text-green/60 mb-3 sm:mb-4">
                  {v.number}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-light text-cream mb-2 sm:mb-3">
                  {v.title}
                </h3>
                <p className="text-cream/65 leading-relaxed text-sm sm:text-base">
                  {v.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About split ──────────────────────────────────── */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="aspect-[4/3] rounded-sm overflow-hidden img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=960&h=720&fit=crop&q=80"
                  alt="Pilates reformer studio interior"
                  width={960}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <SectionLabel>{h.aboutLabel}</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-4 sm:mb-6 leading-tight">
                {h.aboutTitle}
              </h2>
              <p className="text-stone leading-relaxed mb-3 sm:mb-4">{h.aboutP1}</p>
              <p className="text-stone leading-relaxed mb-6 sm:mb-8">{h.aboutP2}</p>
              <ButtonOutline href="/studio">{h.discoverSpace}</ButtonOutline>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Full-bleed image break ───────────────────────── */}
      <section className="relative h-[40vh] sm:h-[50vh] min-h-[280px] sm:min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1747239202356-764770773c9a?w=1920&h=800&fit=crop&q=80"
          alt="Pilates practice in motion"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-warm-black/40" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <ScrollReveal className="text-center">
            <p className="font-heading text-2xl sm:text-4xl lg:text-5xl font-light text-cream leading-tight max-w-2xl px-6">
              {h.bannerQuote}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Classes preview ──────────────────────────────── */}
      <section className="bg-cream py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-16">
              <SectionLabel>{h.classesLabel}</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal">
                {h.classesTitle}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {classes.map((c, i) => (
              <ScrollReveal key={c.name} delay={(i % 2) + 1}>
                <div className="group bg-sand border border-charcoal/8 rounded-sm overflow-hidden card-hover">
                  <div className="aspect-[16/9] overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.name}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 sm:p-8">
                    <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
                      <h3 className="font-heading text-lg sm:text-xl font-light text-charcoal">
                        {c.name}
                      </h3>
                      <span className="shrink-0 text-xs text-stone bg-sand/80 rounded-full px-3 py-1">
                        {h.classDuration}
                      </span>
                    </div>
                    <p className="text-stone text-sm leading-relaxed">{c.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-8 sm:mt-12">
              <ButtonPrimary href="/classes">{h.viewAllClasses}</ButtonPrimary>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <SectionLabel>{h.testimonialsLabel}</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal">
                {h.testimonialsTitle}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, i) => (
              <ScrollReveal key={testimonial.name} delay={i + 1}>
                <div className="bg-cream rounded-sm p-8 h-full flex flex-col border border-charcoal/8">
                  <p className="font-heading text-4xl text-green/30 leading-none mb-4">&ldquo;</p>
                  <p className="text-stone leading-relaxed text-sm mb-6 flex-1">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="text-charcoal font-medium text-sm">{testimonial.name}</p>
                    <p className="text-stone text-xs">{testimonial.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mallorca strip ───────────────────────────────── */}
      <section className="bg-warm-black py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <ScrollReveal>
              <SectionLabel dark>{h.neighbourhoodLabel}</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-cream mb-4 sm:mb-6 leading-tight">
                {h.neighbourhoodTitle}
              </h2>
              <p className="text-cream/50 leading-relaxed mb-3 sm:mb-4">{h.neighbourhoodP1}</p>
              <p className="text-cream/50 leading-relaxed">{h.neighbourhoodP2}</p>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1566993850067-bb8df9c9807e?w=960&h=720&fit=crop&q=80&sat=-100"
                  alt="Palma Cathedral, Mallorca"
                  width={960}
                  height={720}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&h=1080&fit=crop&q=80"
          alt="Meditation and calm"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-warm-black/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <SectionLabel dark>{h.ctaLabel}</SectionLabel>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-light text-cream mb-4 sm:mb-6 leading-tight max-w-3xl mx-auto">
              {h.ctaTitle}
            </h2>
            <p className="text-cream/50 text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10">
              {h.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ButtonPrimary href="/pricing">{h.viewPricing}</ButtonPrimary>
              <a
                href="/pricing#founding"
                className="text-cream/60 hover:text-cream text-sm underline underline-offset-4 transition-colors"
              >
                {h.foundingRates}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
