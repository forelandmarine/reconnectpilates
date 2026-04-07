"use client";

import Image from "next/image";
import { SectionLabel, ButtonPrimary, ButtonOutline, Divider } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollHint from "@/components/ScrollHint";

const classes = [
  {
    name: "Reformer Fundamentals",
    description:
      "A foundational class for those new to Reformer Pilates. Focus on alignment, breath, and the core principles of the method.",
    image:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&h=600&fit=crop&q=80",
  },
  {
    name: "Reformer Flow",
    description:
      "A dynamic, flowing class connecting movements with breath. Builds strength, flexibility, and body awareness.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop&q=80",
  },
  {
    name: "Reformer Sculpt",
    description:
      "An athletic, strength-focused class using the full range of the Reformer. Controlled intensity for real results.",
    image:
      "https://images.unsplash.com/photo-1540206395-68808572332f?w=800&h=600&fit=crop&q=80",
  },
  {
    name: "Reformer Restore",
    description:
      "A slower, deeper practice emphasising mobility, stretch, and release. Ideal for recovery days.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80",
  },
];

const values = [
  {
    title: "Small classes",
    description:
      "Maximum eight clients per session. Your instructor knows your name, your body, and your goals.",
    number: "08",
  },
  {
    title: "Expert guidance",
    description:
      "Qualified, experienced instructors who teach with precision, care, and personal attention.",
    number: "50",
  },
  {
    title: "Considered space",
    description:
      "Oak floors, natural stone, and warm light. A studio designed for focus and calm, not distraction.",
    number: "01",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Video Hero ───────────────────────────────────── */}
      <section className="relative h-screen min-h-[550px] max-h-[1000px] overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/studio/reformers.png"
        >
          <source
            src="https://assets.mixkit.co/videos/48556/48556-1080.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 hero-video-overlay" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-28">
          <div className="max-w-2xl">
            <SectionLabel dark>Santa Catalina, Palma de Mallorca</SectionLabel>
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.05] text-cream mb-4 sm:mb-6">
              Reconnect with yourself.
            </h1>
            <p className="text-base sm:text-xl text-cream/60 leading-relaxed mb-8 sm:mb-10 max-w-lg">
              Premium Reformer Pilates in an intimate, design-led studio. Eight
              Reformers. Expert guidance. Your practice.
            </p>
            {/* CTAs — desktop only */}
            <div className="hidden sm:flex flex-wrap gap-4">
              <ButtonPrimary href="/classes">Book a class</ButtonPrimary>
              <ButtonOutline href="/studio" light>
                Explore the studio
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
              <SectionLabel>The studio</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-4 sm:mb-6 leading-tight">
                A space designed for your practice
              </h2>
              <p className="text-stone leading-relaxed mb-3 sm:mb-4">
                Re:Connect is not a gym. It is a considered, calm space where
                every detail — from the oak flooring to the acoustic ceiling —
                has been chosen to help you focus.
              </p>
              <p className="text-stone leading-relaxed mb-6 sm:mb-8">
                Eight Balanced Body Allegro 2 Reformers. Black and white
                Mallorcan photography on the walls. Natural light, warm
                materials, and room to breathe.
              </p>
              <ButtonOutline href="/studio">Discover the space</ButtonOutline>
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
              Move. Breathe. Reconnect.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Classes preview ──────────────────────────────── */}
      <section className="bg-cream py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-16">
              <SectionLabel>Our classes</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal">
                Find your practice
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
                        50 min
                      </span>
                    </div>
                    <p className="text-stone text-sm leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-8 sm:mt-12">
              <ButtonPrimary href="/classes">View all classes</ButtonPrimary>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Mallorca strip ───────────────────────────────── */}
      <section className="bg-warm-black py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <ScrollReveal>
              <SectionLabel dark>The neighbourhood</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-cream mb-4 sm:mb-6 leading-tight">
                Santa Catalina, Palma
              </h2>
              <p className="text-cream/50 leading-relaxed mb-3 sm:mb-4">
                A quiet, residential neighbourhood of tree-lined streets,
                independent cafes, and the kind of calm that makes the rest of
                your morning better.
              </p>
              <p className="text-cream/50 leading-relaxed">
                C/ Joan Crespi, 47. Easy to find, easy to park, and far enough
                from the bustle to feel like a retreat.
              </p>
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
            <SectionLabel dark>Begin your practice</SectionLabel>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-light text-cream mb-4 sm:mb-6 leading-tight max-w-3xl mx-auto">
              Your first class is an introduction — to the method, the
              equipment, and us.
            </h2>
            <p className="text-cream/50 text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10">
              No experience required. We will guide you through every movement.
            </p>
            <ButtonPrimary href="/classes">Book your first class</ButtonPrimary>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
