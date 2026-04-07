"use client";

import Image from "next/image";
import { SectionLabel, ButtonPrimary, Divider } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";

const materials = [
  {
    name: "Oak flooring",
    description: "Warm, natural timber throughout the studio and reception.",
    image: "/images/studio/reception.png",
  },
  {
    name: "Sage green accents",
    description: "Soft sage tones throughout — a gentle nod to the Mallorcan landscape.",
    image: "https://images.unsplash.com/photo-1741308478095-dbb476ecba9d?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "Natural stone walls",
    description: "Textured, light stone creating a serene, grounded atmosphere.",
    image: "https://images.unsplash.com/photo-1753911371922-fea40946a1af?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "Acoustic ceiling",
    description: "Engineered for calm — reducing noise so you can focus on your breath.",
    image: "/images/studio/reformers.png",
  },
  {
    name: "Timber slat detailing",
    description: "Vertical timber elements adding warmth and rhythm to the space.",
    image: "/images/studio/storefront.png",
  },
  {
    name: "LED ambient lighting",
    description: "Soft, warm light that adjusts to the mood of each class.",
    image: "https://images.unsplash.com/photo-1755444918089-47647e5006e0?w=600&h=600&fit=crop&q=80",
  },
];

export default function StudioPage() {
  return (
    <>
      {/* Hero with image */}
      <section className="relative h-[55vh] sm:h-[70vh] min-h-[400px] sm:min-h-[500px] overflow-hidden">
        <Image
          src="/images/studio/reformers.png"
          alt="Re:Connect Reformer Pilates studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-video-overlay" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
          <SectionLabel dark>The studio</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-cream mb-4 leading-tight max-w-2xl">
            A space designed for focus and calm
          </h1>
          <p className="text-cream/60 text-lg leading-relaxed max-w-xl">
            Every detail of Re:Connect has been considered — from the materials
            on the walls to the equipment on the floor.
          </p>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="max-w-xl mb-16">
              <SectionLabel>Materials</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-4">
                Warm, natural, considered
              </h2>
              <p className="text-stone leading-relaxed">
                The studio is a dialogue between Mediterranean warmth and
                Scandinavian minimalism. Natural materials, soft light, and
                nothing unnecessary.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((m, i) => (
              <ScrollReveal key={m.name} delay={(i % 3) + 1}>
                <div className="img-zoom rounded-sm">
                  <div className="aspect-square rounded-sm overflow-hidden mb-4">
                    <Image
                      src={m.image}
                      alt={m.name}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-light text-charcoal mb-1">
                  {m.name}
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  {m.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <Divider />
      </div>

      {/* Equipment */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <SectionLabel>Equipment</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-6 leading-tight">
                Balanced Body Allegro 2
              </h2>
              <p className="text-stone leading-relaxed mb-4">
                We chose the Allegro 2 for its precision, versatility, and
                comfort. It is the industry standard for a reason — smooth
                carriage movement, reliable spring resistance, and a platform
                that adapts to every body.
              </p>
              <p className="text-stone leading-relaxed">
                Eight Reformers per class. Enough space to move freely. Small
                enough that your instructor sees everything.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="aspect-[4/3] rounded-sm overflow-hidden img-zoom">
                <Image
                  src="/images/studio/storefront.png"
                  alt="Re:Connect studio storefront on C/ Joan Crespi"
                  width={960}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Neighbourhood */}
      <section className="relative h-[40vh] sm:h-[50vh] min-h-[280px] sm:min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1575444298587-39ff96db2566?w=1920&h=800&fit=crop&q=80"
          alt="Palma de Mallorca Cathedral"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-warm-black/50" />
        <div className="relative z-10 flex items-center h-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionLabel dark>The neighbourhood</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-cream mb-4 leading-tight max-w-xl">
              Santa Catalina, Palma
            </h2>
            <p className="text-cream/60 leading-relaxed max-w-lg">
              A quiet, residential neighbourhood of tree-lined streets,
              independent cafes, and the kind of calm that makes the rest of
              your morning better.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-black py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <SectionLabel dark>Come and see</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-cream mb-8 leading-tight max-w-2xl mx-auto">
              The best way to understand the studio is to experience it.
            </h2>
            <ButtonPrimary href="/classes">Book your first class</ButtonPrimary>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
