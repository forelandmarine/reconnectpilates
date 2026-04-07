"use client";

import Image from "next/image";
import { SectionLabel, ButtonPrimary } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";

const instructors = [
  {
    name: "Instructor name",
    role: "Lead Instructor",
    credentials: "Balanced Body certified, 8+ years experience",
    bio: "A brief biography about this instructor — their background, approach to teaching, and what they bring to the studio.",
    speciality: "Reformer Flow, Private Sessions",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=667&fit=crop&q=80",
  },
  {
    name: "Instructor name",
    role: "Instructor",
    credentials: "BASI Pilates certified, physiotherapy background",
    bio: "A brief biography about this instructor — their background, approach to teaching, and what they bring to the studio.",
    speciality: "Reformer Restore, Rehabilitation",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=667&fit=crop&q=80",
  },
  {
    name: "Instructor name",
    role: "Instructor",
    credentials: "Stott Pilates certified, 5+ years experience",
    bio: "A brief biography about this instructor — their background, approach to teaching, and what they bring to the studio.",
    speciality: "Reformer Sculpt, Fundamentals",
    image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=500&h=667&fit=crop&q=80",
  },
];

export default function InstructorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] sm:h-[50vh] min-h-[340px] sm:min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=1920&h=1080&fit=crop&q=80"
          alt="Pilates instructor leading a class"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-video-overlay" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
          <SectionLabel dark>Our team</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-cream mb-4 leading-tight max-w-2xl">
            The people behind your practice
          </h1>
          <p className="text-cream/60 text-lg leading-relaxed max-w-xl">
            Qualified, experienced, and genuinely invested in your progress.
          </p>
        </div>
      </section>

      {/* Instructors */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="space-y-20">
            {instructors.map((inst, i) => (
              <ScrollReveal key={i}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className="aspect-[3/4] rounded-sm overflow-hidden img-zoom">
                    <Image
                      src={inst.image}
                      alt={inst.name}
                      width={500}
                      height={667}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="lg:col-span-2">
                    <p className="text-xs uppercase tracking-[0.2em] font-medium text-green mb-2">
                      {inst.role}
                    </p>
                    <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-2">
                      {inst.name}
                    </h2>
                    <p className="text-stone text-sm mb-6">
                      {inst.credentials}
                    </p>
                    <p className="text-stone leading-relaxed mb-4">
                      {inst.bio}
                    </p>
                    <p className="text-sm">
                      <span className="text-charcoal font-medium">
                        Speciality:{" "}
                      </span>
                      <span className="text-stone">{inst.speciality}</span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-warm-black py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <SectionLabel dark>Our approach</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-cream mb-8">
                Teaching with precision and care
              </h2>
              <p className="text-cream/50 leading-relaxed mb-4">
                We believe good instruction is not about counting reps. It is
                about seeing how you move, understanding what your body needs,
                and guiding you with clarity and patience.
              </p>
              <p className="text-cream/50 leading-relaxed">
                Every client is different. Every session is an opportunity to
                learn something new — for you and for us.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1920&h=1080&fit=crop&q=80"
          alt="Pilates reformer class in session"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-warm-black/75" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <SectionLabel dark>Come and meet us</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-cream mb-8 leading-tight max-w-2xl mx-auto">
              Your first class is the best introduction.
            </h2>
            <ButtonPrimary href="/classes">Book a class</ButtonPrimary>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
