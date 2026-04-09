"use client";

import Image from "next/image";
import { SectionLabel, ButtonPrimary } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function InstructorsPage() {
  const { t } = useLanguage();
  const inst = t.instructors;

  const instructors = [
    {
      name: "Instructor name",
      role: inst.leadInstructor,
      credentials: inst.credentials1,
      bio: inst.bio,
      speciality: inst.speciality1,
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=667&fit=crop&q=80",
    },
    {
      name: "Instructor name",
      role: inst.instructor,
      credentials: inst.credentials2,
      bio: inst.bio,
      speciality: inst.speciality2,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=667&fit=crop&q=80",
    },
    {
      name: "Instructor name",
      role: inst.instructor,
      credentials: inst.credentials3,
      bio: inst.bio,
      speciality: inst.speciality3,
      image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=500&h=667&fit=crop&q=80",
    },
  ];

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
          <SectionLabel dark>{inst.heroLabel}</SectionLabel>
          <h1 className="font-heading text-lg sm:text-2xl lg:text-3xl font-light text-cream mb-4 leading-relaxed max-w-2xl">
            {inst.heroTitle}
          </h1>
          <p className="text-cream/60 text-lg leading-relaxed max-w-xl">{inst.heroSubtitle}</p>
        </div>
      </section>

      {/* Instructors */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="space-y-20">
            {instructors.map((instructor, i) => (
              <ScrollReveal key={i}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className="aspect-[3/4] rounded-sm overflow-hidden img-zoom">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      width={500}
                      height={667}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="lg:col-span-2">
                    <p className="text-xs uppercase tracking-[0.2em] font-medium text-green mb-2">
                      {instructor.role}
                    </p>
                    <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-2">
                      {instructor.name}
                    </h2>
                    <p className="text-stone text-sm mb-6">{instructor.credentials}</p>
                    <p className="text-stone leading-relaxed mb-4">{instructor.bio}</p>
                    <p className="text-sm">
                      <span className="text-charcoal font-medium">{inst.specialityLabel}: </span>
                      <span className="text-stone">{instructor.speciality}</span>
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
              <SectionLabel dark>{inst.philosophyLabel}</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-cream mb-8">
                {inst.philosophyTitle}
              </h2>
              <p className="text-cream/50 leading-relaxed mb-4">{inst.philosophyP1}</p>
              <p className="text-cream/50 leading-relaxed">{inst.philosophyP2}</p>
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
            <SectionLabel dark>{inst.ctaLabel}</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-cream mb-8 leading-tight max-w-2xl mx-auto">
              {inst.ctaTitle}
            </h2>
            <ButtonPrimary href="/classes">{inst.bookClass}</ButtonPrimary>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
