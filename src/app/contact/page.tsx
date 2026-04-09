"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionLabel, AccentLine } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contact;

  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phoneCode: "+34", phoneNumber: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

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
        setForm({ firstName: "", lastName: "", email: "", phoneCode: "+34", phoneNumber: "", message: "" });
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
          src="/images/contact-hero.avif"
          alt="Woman in pilates pose, reconnecting with body and breath"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 hero-video-overlay" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
          <SectionLabel dark>{c.heroLabel}</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-cream mb-4 leading-tight max-w-2xl">
            {c.heroTitle}
          </h1>
          <p className="text-cream/60 text-lg leading-relaxed max-w-xl">{c.heroSubtitle}</p>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <ScrollReveal>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-8">{c.formTitle}</h2>

              {status === "sent" ? (
                <div className="bg-green/10 border border-green/20 rounded-sm p-8">
                  <p className="text-green font-medium mb-1">{c.sentTitle}</p>
                  <p className="text-stone text-sm">{c.sentText}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-2">
                        {c.firstName}
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className="w-full bg-cream border border-charcoal/15 rounded-sm px-4 py-3 text-charcoal text-sm placeholder:text-stone/50 focus:outline-none focus:border-green focus:ring-1 focus:ring-green/30 transition-all"
                        placeholder={c.firstName}
                      />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-2">
                        {c.lastName}
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        className="w-full bg-cream border border-charcoal/15 rounded-sm px-4 py-3 text-charcoal text-sm placeholder:text-stone/50 focus:outline-none focus:border-green focus:ring-1 focus:ring-green/30 transition-all"
                        placeholder={c.lastName}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      {c.email}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-cream border border-charcoal/15 rounded-sm px-4 py-3 text-charcoal text-sm placeholder:text-stone/50 focus:outline-none focus:border-green focus:ring-1 focus:ring-green/30 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">{c.phone}</label>
                    <div className="flex gap-2">
                      <input
                        list="phone-codes"
                        value={form.phoneCode}
                        onChange={(e) => setForm({ ...form, phoneCode: e.target.value })}
                        className="bg-cream border border-charcoal/15 rounded-sm px-3 py-3 text-charcoal text-sm placeholder:text-stone/50 focus:outline-none focus:border-green focus:ring-1 focus:ring-green/30 transition-all w-52"
                        placeholder="+34"
                      />
                      <datalist id="phone-codes">
                        <option value="+93">🇦🇫 Afghanistan +93</option>
                        <option value="+355">🇦🇱 Albania +355</option>
                        <option value="+213">🇩🇿 Algeria +213</option>
                        <option value="+376">🇦🇩 Andorra +376</option>
                        <option value="+244">🇦🇴 Angola +244</option>
                        <option value="+54">🇦🇷 Argentina +54</option>
                        <option value="+61">🇦🇺 Australia +61</option>
                        <option value="+43">🇦🇹 Austria +43</option>
                        <option value="+32">🇧🇪 Belgium +32</option>
                        <option value="+55">🇧🇷 Brazil +55</option>
                        <option value="+1">🇨🇦 Canada +1</option>
                        <option value="+56">🇨🇱 Chile +56</option>
                        <option value="+86">🇨🇳 China +86</option>
                        <option value="+57">🇨🇴 Colombia +57</option>
                        <option value="+385">🇭🇷 Croatia +385</option>
                        <option value="+420">🇨🇿 Czech Republic +420</option>
                        <option value="+45">🇩🇰 Denmark +45</option>
                        <option value="+20">🇪🇬 Egypt +20</option>
                        <option value="+372">🇪🇪 Estonia +372</option>
                        <option value="+358">🇫🇮 Finland +358</option>
                        <option value="+33">🇫🇷 France +33</option>
                        <option value="+49">🇩🇪 Germany +49</option>
                        <option value="+30">🇬🇷 Greece +30</option>
                        <option value="+36">🇭🇺 Hungary +36</option>
                        <option value="+354">🇮🇸 Iceland +354</option>
                        <option value="+91">🇮🇳 India +91</option>
                        <option value="+62">🇮🇩 Indonesia +62</option>
                        <option value="+353">🇮🇪 Ireland +353</option>
                        <option value="+972">🇮🇱 Israel +972</option>
                        <option value="+39">🇮🇹 Italy +39</option>
                        <option value="+81">🇯🇵 Japan +81</option>
                        <option value="+60">🇲🇾 Malaysia +60</option>
                        <option value="+52">🇲🇽 Mexico +52</option>
                        <option value="+31">🇳🇱 Netherlands +31</option>
                        <option value="+64">🇳🇿 New Zealand +64</option>
                        <option value="+47">🇳🇴 Norway +47</option>
                        <option value="+92">🇵🇰 Pakistan +92</option>
                        <option value="+507">🇵🇦 Panama +507</option>
                        <option value="+51">🇵🇪 Peru +51</option>
                        <option value="+63">🇵🇭 Philippines +63</option>
                        <option value="+48">🇵🇱 Poland +48</option>
                        <option value="+351">🇵🇹 Portugal +351</option>
                        <option value="+40">🇷🇴 Romania +40</option>
                        <option value="+7">🇷🇺 Russia +7</option>
                        <option value="+966">🇸🇦 Saudi Arabia +966</option>
                        <option value="+65">🇸🇬 Singapore +65</option>
                        <option value="+27">🇿🇦 South Africa +27</option>
                        <option value="+82">🇰🇷 South Korea +82</option>
                        <option value="+34">🇪🇸 Spain +34</option>
                        <option value="+94">🇱🇰 Sri Lanka +94</option>
                        <option value="+46">🇸🇪 Sweden +46</option>
                        <option value="+41">🇨🇭 Switzerland +41</option>
                        <option value="+886">🇹🇼 Taiwan +886</option>
                        <option value="+66">🇹🇭 Thailand +66</option>
                        <option value="+90">🇹🇷 Turkey +90</option>
                        <option value="+380">🇺🇦 Ukraine +380</option>
                        <option value="+971">🇦🇪 United Arab Emirates +971</option>
                        <option value="+44">🇬🇧 United Kingdom +44</option>
                        <option value="+1">🇺🇸 United States +1</option>
                        <option value="+598">🇺🇾 Uruguay +598</option>
                        <option value="+58">🇻🇪 Venezuela +58</option>
                        <option value="+84">🇻🇳 Vietnam +84</option>
                      </datalist>
                      <input
                        id="phoneNumber"
                        type="tel"
                        value={form.phoneNumber}
                        onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                        className="flex-1 bg-cream border border-charcoal/15 rounded-sm px-4 py-3 text-charcoal text-sm placeholder:text-stone/50 focus:outline-none focus:border-green focus:ring-1 focus:ring-green/30 transition-all"
                        placeholder="600 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      {c.message}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-cream border border-charcoal/15 rounded-sm px-4 py-3 text-charcoal text-sm placeholder:text-stone/50 focus:outline-none focus:border-green focus:ring-1 focus:ring-green/30 transition-all resize-none"
                      placeholder={c.messagePlaceholder}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-sm">{c.error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-green text-cream font-medium text-sm px-7 py-3.5 rounded-sm transition-all duration-300 hover:bg-green-light hover:shadow-lg hover:shadow-green/20 disabled:opacity-60"
                  >
                    {status === "sending" ? c.sending : c.send}
                  </button>
                </form>
              )}
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal delay={1}>
              <div className="space-y-10">
                <div>
                  <AccentLine />
                  <h3 className="font-heading text-xl font-light text-charcoal mb-3">{c.visitUs}</h3>
                  <p className="text-stone leading-relaxed">
                    C/ Joan Crespi, 47
                    <br />
                    07014 Palma de Mallorca
                    <br />
                    Illes Balears, Spain
                  </p>
                  <p className="text-stone text-sm mt-3">{c.neighbourhood}</p>
                </div>

                <div>
                  <AccentLine />
                  <h3 className="font-heading text-xl font-light text-charcoal mb-3">{c.emailHeading}</h3>
                  <a
                    href="mailto:hello@nimarastudio.es"
                    className="text-green hover:text-green-light transition-colors"
                  >
                    hello@nimarastudio.es
                  </a>
                </div>

                <div>
                  <AccentLine />
                  <h3 className="font-heading text-xl font-light text-charcoal mb-3">{c.followUs}</h3>
                  <div className="flex gap-6">
                    <a
                      href="https://instagram.com/nimarastudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone hover:text-charcoal transition-colors text-sm"
                    >
                      Instagram
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
                    title="Nimara studio location"
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
