"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionLabel, AccentLine } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] sm:h-[50vh] min-h-[340px] sm:min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581271164789-7c97932822d3?w=1920&h=1080&fit=crop&q=80&sat=-100"
          alt="Palma de Mallorca harbour"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 hero-video-overlay" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
          <SectionLabel dark>Contact</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-cream mb-4 leading-tight max-w-2xl">
            We would love to hear from you
          </h1>
          <p className="text-cream/60 text-lg leading-relaxed max-w-xl">
            Questions about classes, private sessions, or founding member rates —
            get in touch.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <ScrollReveal>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-8">
                Send us a message
              </h2>

              {status === "sent" ? (
                <div className="bg-green/10 border border-green/20 rounded-sm p-8">
                  <p className="text-green font-medium mb-1">Message sent</p>
                  <p className="text-stone text-sm">
                    Thank you. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full bg-cream border border-charcoal/15 rounded-sm px-4 py-3 text-charcoal text-sm placeholder:text-stone/50 focus:outline-none focus:border-green focus:ring-1 focus:ring-green/30 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full bg-cream border border-charcoal/15 rounded-sm px-4 py-3 text-charcoal text-sm placeholder:text-stone/50 focus:outline-none focus:border-green focus:ring-1 focus:ring-green/30 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Phone <span className="text-stone font-normal">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full bg-cream border border-charcoal/15 rounded-sm px-4 py-3 text-charcoal text-sm placeholder:text-stone/50 focus:outline-none focus:border-green focus:ring-1 focus:ring-green/30 transition-all"
                      placeholder="+34 600 000 000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full bg-cream border border-charcoal/15 rounded-sm px-4 py-3 text-charcoal text-sm placeholder:text-stone/50 focus:outline-none focus:border-green focus:ring-1 focus:ring-green/30 transition-all resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-sm">
                      Something went wrong. Please try again or email us
                      directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-green text-cream font-medium text-sm px-7 py-3.5 rounded-sm transition-all duration-300 hover:bg-green-light hover:shadow-lg hover:shadow-green/20 disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                  </button>
                </form>
              )}
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal delay={1}>
              <div className="space-y-10">
                <div>
                  <AccentLine />
                  <h3 className="font-heading text-xl font-light text-charcoal mb-3">
                    Visit us
                  </h3>
                  <p className="text-stone leading-relaxed">
                    C/ Joan Crespi, 47
                    <br />
                    07014 Palma de Mallorca
                    <br />
                    Illes Balears, Spain
                  </p>
                  <p className="text-stone text-sm mt-3">
                    Santa Catalina neighbourhood — a quiet, residential street
                    in central Palma.
                  </p>
                </div>

                <div>
                  <AccentLine />
                  <h3 className="font-heading text-xl font-light text-charcoal mb-3">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@reconnectpilates.es"
                    className="text-green hover:text-green-light transition-colors"
                  >
                    hello@reconnectpilates.es
                  </a>
                </div>

                <div>
                  <AccentLine />
                  <h3 className="font-heading text-xl font-light text-charcoal mb-3">
                    Follow us
                  </h3>
                  <div className="flex gap-6">
                    <a
                      href="https://instagram.com/reconnect.pilates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone hover:text-charcoal transition-colors text-sm"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://tiktok.com/@reconnect.pilates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone hover:text-charcoal transition-colors text-sm"
                    >
                      TikTok
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="aspect-[4/3] rounded-sm overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.5!2d2.635!3d39.575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDM0JzMwLjAiTiAywrAzOCcwNi4wIkU!5e0!3m2!1sen!2ses!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Re:Connect studio location"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
