"use client";

import Image from "next/image";
import { SectionLabel, ButtonPrimary, Divider } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";

const packs = [
  {
    name: "Drop-in",
    price: 38,
    per: null,
    features: ["Single class", "No commitment", "Any class type"],
  },
  {
    name: "5-class pack",
    price: 170,
    per: "€34 per class",
    features: ["5 group classes", "Valid 2 months", "Any class type"],
  },
  {
    name: "10-class pack",
    price: 300,
    per: "€30 per class",
    features: ["10 group classes", "Valid 3 months", "Any class type", "Best value pack"],
  },
];

const memberships = [
  {
    name: "4x Monthly",
    price: 140,
    per: "€35 per class",
    features: ["4 classes per month", "Auto-renewing", "Pause anytime"],
    featured: false,
  },
  {
    name: "8x Monthly",
    price: 250,
    per: "€31.25 per class",
    features: ["8 classes per month", "Auto-renewing", "Pause anytime"],
    featured: true,
  },
  {
    name: "Unlimited",
    price: 320,
    per: null,
    features: [
      "Unlimited group classes",
      "Auto-renewing",
      "Priority booking",
      "Pause anytime",
    ],
    featured: false,
  },
];

export default function PricingPage() {
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
        <div className="relative z-10 flex flex-col justify-end h-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
          <SectionLabel dark>Pricing</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-cream mb-4 leading-tight max-w-2xl">
            Simple, transparent pricing
          </h1>
          <p className="text-cream/60 text-lg leading-relaxed max-w-xl">
            Choose between class packs for flexibility or memberships for
            consistency.
          </p>
        </div>
      </section>

      {/* Class packs */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionLabel>Class packs</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-14">
              Pay as you go
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packs.map((p, i) => (
              <ScrollReveal key={p.name} delay={i + 1}>
                <div className="bg-cream border border-charcoal/8 rounded-sm p-8 flex flex-col h-full card-hover">
                  <h3 className="font-heading text-xl font-light text-charcoal mb-1">
                    {p.name}
                  </h3>
                  {p.per && (
                    <p className="text-stone text-sm mb-4">{p.per}</p>
                  )}
                  <p className="text-charcoal text-3xl font-medium mb-6 mt-auto pt-4">
                    &euro;{p.price}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-stone text-sm"
                      >
                        <span className="text-green mt-0.5 shrink-0">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <ButtonPrimary href="/classes" className="text-center mt-auto">
                    Book now
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
            <SectionLabel>Memberships</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-14">
              Commit to your practice
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
                      Most popular
                    </span>
                  )}
                  <h3
                    className={`font-heading text-xl font-light mb-1 ${m.featured ? "text-cream" : "text-charcoal"}`}
                  >
                    {m.name}
                  </h3>
                  {m.per && (
                    <p
                      className={`text-sm mb-4 ${m.featured ? "text-cream/70" : "text-stone"}`}
                    >
                      {m.per}
                    </p>
                  )}
                  <p
                    className={`text-3xl font-medium mb-6 mt-auto pt-4 ${m.featured ? "text-cream" : "text-charcoal"}`}
                  >
                    &euro;{m.price}
                    <span
                      className={`text-sm font-normal ${m.featured ? "text-cream/60" : "text-stone"}`}
                    >
                      /month
                    </span>
                  </p>
                  <ul className="space-y-2 mb-8">
                    {m.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2 text-sm ${m.featured ? "text-cream/80" : "text-stone"}`}
                      >
                        <span
                          className={`mt-0.5 shrink-0 ${m.featured ? "text-cream" : "text-green"}`}
                        >
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
                      Get started
                    </a>
                  ) : (
                    <ButtonPrimary href="/classes" className="text-center mt-auto">
                      Get started
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
            <SectionLabel>Private instruction</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-12">
              One-to-one and duet sessions
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            <ScrollReveal delay={1}>
              <div className="bg-sand border border-charcoal/8 rounded-sm p-8 card-hover">
                <h3 className="font-heading text-xl font-light text-charcoal mb-1">
                  Private session
                </h3>
                <p className="text-stone text-sm mb-4">55 min, one-to-one</p>
                <p className="text-charcoal text-3xl font-medium">&euro;75</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="bg-sand border border-charcoal/8 rounded-sm p-8 card-hover">
                <h3 className="font-heading text-xl font-light text-charcoal mb-1">
                  Duet session
                </h3>
                <p className="text-stone text-sm mb-4">55 min, for two</p>
                <p className="text-charcoal text-3xl font-medium">
                  &euro;95
                  <span className="text-sm font-normal text-stone"> total</span>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Founding member */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <Image
          src="/images/studio/storefront.png"
          alt="Re:Connect studio exterior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-warm-black/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <SectionLabel dark>Limited availability</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-cream mb-6 leading-tight">
                Founding member rates
              </h2>
              <p className="text-cream/50 text-lg mb-4">
                Be one of the first. Lock in unlimited classes at &euro;260/month
                for 12 months — or pay annually at &euro;2,600 and save two
                months.
              </p>
              <p className="text-cream/30 text-sm mb-10">
                Available during pre-launch and the first month of opening only.
              </p>
              <ButtonPrimary href="/contact">Register interest</ButtonPrimary>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
