"use client";

import Image from "next/image";
import { SectionLabel, ButtonPrimary, BadgeDuration, Divider } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ClassesPage() {
  const { t } = useLanguage();
  const c = t.classes;

  const groupClasses = [
    {
      name: c.class1Name,
      slug: "fundamentals",
      duration: 50,
      level: c.allLevels,
      description: c.class1Desc,
      image: "https://images.unsplash.com/photo-1717500252709-05a73fc4f1da?w=800&h=500&fit=crop&q=80",
    },
    {
      name: c.class2Name,
      slug: "flow",
      duration: 50,
      level: c.allLevels,
      description: c.class2Desc,
      image: "https://images.unsplash.com/photo-1747240549807-fc3962949818?w=800&h=500&fit=crop&q=80",
    },
    {
      name: c.class3Name,
      slug: "sculpt",
      duration: 50,
      level: c.intermediate,
      description: c.class3Desc,
      image: "https://images.unsplash.com/photo-1754257320382-95b43e9f797c?w=800&h=500&fit=crop&q=80",
    },
    {
      name: c.class4Name,
      slug: "restore",
      duration: 50,
      level: c.allLevels,
      description: c.class4Desc,
      image: "https://images.unsplash.com/photo-1754257319747-df51c384c0fa?w=800&h=500&fit=crop&q=80",
    },
  ];

  const privateClasses = [
    {
      name: c.privateSession,
      duration: 55,
      price: 75,
      description: c.privateDesc,
    },
    {
      name: c.duetSession,
      duration: 55,
      price: 95,
      description: c.duetDesc,
    },
  ];

  const steps = [
    { step: "01", title: c.step1Title, text: c.step1Text },
    { step: "02", title: c.step2Title, text: c.step2Text },
    { step: "03", title: c.step3Title, text: c.step3Text },
    { step: "04", title: c.step4Title, text: c.step4Text },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[60vh] min-h-[380px] sm:min-h-[450px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1754257320374-cd5fb647cfea?w=1920&h=1080&fit=crop&q=80"
          alt="Reformer Pilates in practice"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-video-overlay" />
        <div className="absolute top-16 sm:top-20 left-0 right-0 z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-4">
          <SectionLabel dark>{c.heroLabel}</SectionLabel>
        </div>
        <div className="relative z-10 flex flex-col justify-end h-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
          <h1 className="font-heading text-lg sm:text-2xl lg:text-3xl font-light text-cream mb-4 leading-relaxed max-w-2xl">
            {c.heroTitle}
          </h1>
          <p className="text-cream/60 text-lg leading-relaxed max-w-xl">{c.heroSubtitle}</p>
        </div>
      </section>

      {/* Group classes */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionLabel>{c.groupLabel}</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-8">
              {c.groupTitle}
            </h2>
          </ScrollReveal>

          {/* New here callout */}
          <ScrollReveal>
            <div className="bg-green/10 border border-green/20 rounded-sm px-6 py-5 mb-12 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-green font-medium text-sm mb-1">{c.newHereTitle}</p>
                <p className="text-stone text-sm leading-relaxed">
                  {c.newHereText}
                </p>
              </div>
              <a
                href="/pricing"
                className="shrink-0 text-sm font-medium text-green border border-green/30 px-5 py-2.5 rounded-sm hover:bg-green hover:text-cream transition-all duration-300"
              >
                {c.seePricing}
              </a>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {groupClasses.map((cls) => (
              <ScrollReveal key={cls.slug}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-cream border border-charcoal/8 rounded-sm overflow-hidden card-hover">
                  <div className="aspect-[16/9] lg:aspect-auto overflow-hidden">
                    <Image
                      src={cls.image}
                      alt={cls.name}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2 p-8 sm:p-10 flex flex-col justify-center">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <h3 className="font-heading text-2xl font-light text-charcoal">{cls.name}</h3>
                      <div className="flex gap-2">
                        <BadgeDuration minutes={cls.duration} />
                        <span className="inline-block bg-sand text-stone text-xs rounded-full px-3 py-1">
                          {cls.level}
                        </span>
                      </div>
                    </div>
                    <p className="text-stone leading-relaxed max-w-2xl">{cls.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <Divider />
      </div>

      {/* Private sessions */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionLabel>{c.privateLabel}</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-12">
              {c.privateTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {privateClasses.map((cls, i) => (
              <ScrollReveal key={cls.name} delay={i + 1}>
                <div className="bg-cream border border-charcoal/8 rounded-sm p-8 sm:p-10 card-hover h-full">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-heading text-2xl font-light text-charcoal">{cls.name}</h3>
                    <BadgeDuration minutes={cls.duration} />
                  </div>
                  <p className="text-green font-medium text-lg mb-4">&euro;{cls.price}</p>
                  <p className="text-stone text-sm leading-relaxed">{cls.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-cream py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <SectionLabel>{c.firstVisitLabel}</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal">
                {c.firstVisitTitle}
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto space-y-8">
            {steps.map((s, i) => (
              <ScrollReveal key={s.step} delay={i + 1}>
                <div className="flex gap-6">
                  <span className="text-green font-heading text-2xl font-light mt-0.5 shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-light text-charcoal mb-1">{s.title}</h3>
                    <p className="text-stone text-sm leading-relaxed">{s.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-black py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <SectionLabel dark>{c.ctaLabel}</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-cream mb-6 leading-tight max-w-2xl mx-auto">
              {c.ctaTitle}
            </h2>
            <p className="text-cream/50 text-lg max-w-lg mx-auto mb-10">{c.ctaSubtitle}</p>
            <ButtonPrimary href="/pricing">{c.viewPricing}</ButtonPrimary>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
