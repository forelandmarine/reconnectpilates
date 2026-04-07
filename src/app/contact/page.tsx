"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionLabel, AccentLine } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phoneCode: "+34", phoneNumber: "", message: "" });
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
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        First name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className="w-full bg-cream border border-charcoal/15 rounded-sm px-4 py-3 text-charcoal text-sm placeholder:text-stone/50 focus:outline-none focus:border-green focus:ring-1 focus:ring-green/30 transition-all"
                        placeholder="First name"
                      />
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Family name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        className="w-full bg-cream border border-charcoal/15 rounded-sm px-4 py-3 text-charcoal text-sm placeholder:text-stone/50 focus:outline-none focus:border-green focus:ring-1 focus:ring-green/30 transition-all"
                        placeholder="Family name"
                      />
                    </div>
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
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Phone
                    </label>
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
                        <option value="+1-268">🇦🇬 Antigua and Barbuda +1-268</option>
                        <option value="+54">🇦🇷 Argentina +54</option>
                        <option value="+374">🇦🇲 Armenia +374</option>
                        <option value="+61">🇦🇺 Australia +61</option>
                        <option value="+43">🇦🇹 Austria +43</option>
                        <option value="+994">🇦🇿 Azerbaijan +994</option>
                        <option value="+1-242">🇧🇸 Bahamas +1-242</option>
                        <option value="+973">🇧🇭 Bahrain +973</option>
                        <option value="+880">🇧🇩 Bangladesh +880</option>
                        <option value="+1-246">🇧🇧 Barbados +1-246</option>
                        <option value="+375">🇧🇾 Belarus +375</option>
                        <option value="+32">🇧🇪 Belgium +32</option>
                        <option value="+501">🇧🇿 Belize +501</option>
                        <option value="+229">🇧🇯 Benin +229</option>
                        <option value="+975">🇧🇹 Bhutan +975</option>
                        <option value="+591">🇧🇴 Bolivia +591</option>
                        <option value="+387">🇧🇦 Bosnia +387</option>
                        <option value="+267">🇧🇼 Botswana +267</option>
                        <option value="+55">🇧🇷 Brazil +55</option>
                        <option value="+673">🇧🇳 Brunei +673</option>
                        <option value="+359">🇧🇬 Bulgaria +359</option>
                        <option value="+226">🇧🇫 Burkina Faso +226</option>
                        <option value="+257">🇧🇮 Burundi +257</option>
                        <option value="+855">🇰🇭 Cambodia +855</option>
                        <option value="+237">🇨🇲 Cameroon +237</option>
                        <option value="+1">🇨🇦 Canada +1</option>
                        <option value="+238">🇨🇻 Cape Verde +238</option>
                        <option value="+236">🇨🇫 Central African Rep. +236</option>
                        <option value="+235">🇹🇩 Chad +235</option>
                        <option value="+56">🇨🇱 Chile +56</option>
                        <option value="+86">🇨🇳 China +86</option>
                        <option value="+57">🇨🇴 Colombia +57</option>
                        <option value="+269">🇰🇲 Comoros +269</option>
                        <option value="+242">🇨🇬 Congo +242</option>
                        <option value="+243">🇨🇩 Congo (DR) +243</option>
                        <option value="+506">🇨🇷 Costa Rica +506</option>
                        <option value="+385">🇭🇷 Croatia +385</option>
                        <option value="+53">🇨🇺 Cuba +53</option>
                        <option value="+357">🇨🇾 Cyprus +357</option>
                        <option value="+420">🇨🇿 Czech Republic +420</option>
                        <option value="+45">🇩🇰 Denmark +45</option>
                        <option value="+253">🇩🇯 Djibouti +253</option>
                        <option value="+1-767">🇩🇲 Dominica +1-767</option>
                        <option value="+1-809">🇩🇴 Dominican Republic +1-809</option>
                        <option value="+593">🇪🇨 Ecuador +593</option>
                        <option value="+20">🇪🇬 Egypt +20</option>
                        <option value="+503">🇸🇻 El Salvador +503</option>
                        <option value="+240">🇬🇶 Equatorial Guinea +240</option>
                        <option value="+291">🇪🇷 Eritrea +291</option>
                        <option value="+372">🇪🇪 Estonia +372</option>
                        <option value="+268">🇸🇿 Eswatini +268</option>
                        <option value="+251">🇪🇹 Ethiopia +251</option>
                        <option value="+679">🇫🇯 Fiji +679</option>
                        <option value="+358">🇫🇮 Finland +358</option>
                        <option value="+33">🇫🇷 France +33</option>
                        <option value="+241">🇬🇦 Gabon +241</option>
                        <option value="+220">🇬🇲 Gambia +220</option>
                        <option value="+995">🇬🇪 Georgia +995</option>
                        <option value="+49">🇩🇪 Germany +49</option>
                        <option value="+233">🇬🇭 Ghana +233</option>
                        <option value="+30">🇬🇷 Greece +30</option>
                        <option value="+1-473">🇬🇩 Grenada +1-473</option>
                        <option value="+502">🇬🇹 Guatemala +502</option>
                        <option value="+224">🇬🇳 Guinea +224</option>
                        <option value="+245">🇬🇼 Guinea-Bissau +245</option>
                        <option value="+592">🇬🇾 Guyana +592</option>
                        <option value="+509">🇭🇹 Haiti +509</option>
                        <option value="+504">🇭🇳 Honduras +504</option>
                        <option value="+36">🇭🇺 Hungary +36</option>
                        <option value="+354">🇮🇸 Iceland +354</option>
                        <option value="+91">🇮🇳 India +91</option>
                        <option value="+62">🇮🇩 Indonesia +62</option>
                        <option value="+98">🇮🇷 Iran +98</option>
                        <option value="+964">🇮🇶 Iraq +964</option>
                        <option value="+353">🇮🇪 Ireland +353</option>
                        <option value="+972">🇮🇱 Israel +972</option>
                        <option value="+39">🇮🇹 Italy +39</option>
                        <option value="+225">🇨🇮 Ivory Coast +225</option>
                        <option value="+1-876">🇯🇲 Jamaica +1-876</option>
                        <option value="+81">🇯🇵 Japan +81</option>
                        <option value="+962">🇯🇴 Jordan +962</option>
                        <option value="+7">🇰🇿 Kazakhstan +7</option>
                        <option value="+254">🇰🇪 Kenya +254</option>
                        <option value="+686">🇰🇮 Kiribati +686</option>
                        <option value="+383">🇽🇰 Kosovo +383</option>
                        <option value="+965">🇰🇼 Kuwait +965</option>
                        <option value="+996">🇰🇬 Kyrgyzstan +996</option>
                        <option value="+856">🇱🇦 Laos +856</option>
                        <option value="+371">🇱🇻 Latvia +371</option>
                        <option value="+961">🇱🇧 Lebanon +961</option>
                        <option value="+266">🇱🇸 Lesotho +266</option>
                        <option value="+231">🇱🇷 Liberia +231</option>
                        <option value="+218">🇱🇾 Libya +218</option>
                        <option value="+423">🇱🇮 Liechtenstein +423</option>
                        <option value="+370">🇱🇹 Lithuania +370</option>
                        <option value="+352">🇱🇺 Luxembourg +352</option>
                        <option value="+261">🇲🇬 Madagascar +261</option>
                        <option value="+265">🇲🇼 Malawi +265</option>
                        <option value="+60">🇲🇾 Malaysia +60</option>
                        <option value="+960">🇲🇻 Maldives +960</option>
                        <option value="+223">🇲🇱 Mali +223</option>
                        <option value="+356">🇲🇹 Malta +356</option>
                        <option value="+692">🇲🇭 Marshall Islands +692</option>
                        <option value="+222">🇲🇷 Mauritania +222</option>
                        <option value="+230">🇲🇺 Mauritius +230</option>
                        <option value="+691">🇫🇲 Micronesia +691</option>
                        <option value="+52">🇲🇽 Mexico +52</option>
                        <option value="+373">🇲🇩 Moldova +373</option>
                        <option value="+377">🇲🇨 Monaco +377</option>
                        <option value="+976">🇲🇳 Mongolia +976</option>
                        <option value="+382">🇲🇪 Montenegro +382</option>
                        <option value="+212">🇲🇦 Morocco +212</option>
                        <option value="+258">🇲🇿 Mozambique +258</option>
                        <option value="+95">🇲🇲 Myanmar +95</option>
                        <option value="+264">🇳🇦 Namibia +264</option>
                        <option value="+674">🇳🇷 Nauru +674</option>
                        <option value="+977">🇳🇵 Nepal +977</option>
                        <option value="+31">🇳🇱 Netherlands +31</option>
                        <option value="+64">🇳🇿 New Zealand +64</option>
                        <option value="+505">🇳🇮 Nicaragua +505</option>
                        <option value="+227">🇳🇪 Niger +227</option>
                        <option value="+234">🇳🇬 Nigeria +234</option>
                        <option value="+850">🇰🇵 North Korea +850</option>
                        <option value="+389">🇲🇰 North Macedonia +389</option>
                        <option value="+47">🇳🇴 Norway +47</option>
                        <option value="+968">🇴🇲 Oman +968</option>
                        <option value="+92">🇵🇰 Pakistan +92</option>
                        <option value="+680">🇵🇼 Palau +680</option>
                        <option value="+970">🇵🇸 Palestine +970</option>
                        <option value="+507">🇵🇦 Panama +507</option>
                        <option value="+675">🇵🇬 Papua New Guinea +675</option>
                        <option value="+595">🇵🇾 Paraguay +595</option>
                        <option value="+51">🇵🇪 Peru +51</option>
                        <option value="+63">🇵🇭 Philippines +63</option>
                        <option value="+48">🇵🇱 Poland +48</option>
                        <option value="+351">🇵🇹 Portugal +351</option>
                        <option value="+974">🇶🇦 Qatar +974</option>
                        <option value="+40">🇷🇴 Romania +40</option>
                        <option value="+7">🇷🇺 Russia +7</option>
                        <option value="+250">🇷🇼 Rwanda +250</option>
                        <option value="+1-869">🇰🇳 Saint Kitts and Nevis +1-869</option>
                        <option value="+1-758">🇱🇨 Saint Lucia +1-758</option>
                        <option value="+1-784">🇻🇨 Saint Vincent +1-784</option>
                        <option value="+685">🇼🇸 Samoa +685</option>
                        <option value="+378">🇸🇲 San Marino +378</option>
                        <option value="+239">🇸🇹 São Tomé and Príncipe +239</option>
                        <option value="+966">🇸🇦 Saudi Arabia +966</option>
                        <option value="+221">🇸🇳 Senegal +221</option>
                        <option value="+381">🇷🇸 Serbia +381</option>
                        <option value="+248">🇸🇨 Seychelles +248</option>
                        <option value="+232">🇸🇱 Sierra Leone +232</option>
                        <option value="+65">🇸🇬 Singapore +65</option>
                        <option value="+421">🇸🇰 Slovakia +421</option>
                        <option value="+386">🇸🇮 Slovenia +386</option>
                        <option value="+677">🇸🇧 Solomon Islands +677</option>
                        <option value="+252">🇸🇴 Somalia +252</option>
                        <option value="+27">🇿🇦 South Africa +27</option>
                        <option value="+82">🇰🇷 South Korea +82</option>
                        <option value="+211">🇸🇸 South Sudan +211</option>
                        <option value="+34">🇪🇸 Spain +34</option>
                        <option value="+94">🇱🇰 Sri Lanka +94</option>
                        <option value="+249">🇸🇩 Sudan +249</option>
                        <option value="+597">🇸🇷 Suriname +597</option>
                        <option value="+46">🇸🇪 Sweden +46</option>
                        <option value="+41">🇨🇭 Switzerland +41</option>
                        <option value="+963">🇸🇾 Syria +963</option>
                        <option value="+886">🇹🇼 Taiwan +886</option>
                        <option value="+992">🇹🇯 Tajikistan +992</option>
                        <option value="+255">🇹🇿 Tanzania +255</option>
                        <option value="+66">🇹🇭 Thailand +66</option>
                        <option value="+670">🇹🇱 Timor-Leste +670</option>
                        <option value="+228">🇹🇬 Togo +228</option>
                        <option value="+676">🇹🇴 Tonga +676</option>
                        <option value="+1-868">🇹🇹 Trinidad and Tobago +1-868</option>
                        <option value="+216">🇹🇳 Tunisia +216</option>
                        <option value="+90">🇹🇷 Turkey +90</option>
                        <option value="+993">🇹🇲 Turkmenistan +993</option>
                        <option value="+688">🇹🇻 Tuvalu +688</option>
                        <option value="+256">🇺🇬 Uganda +256</option>
                        <option value="+380">🇺🇦 Ukraine +380</option>
                        <option value="+971">🇦🇪 United Arab Emirates +971</option>
                        <option value="+44">🇬🇧 United Kingdom +44</option>
                        <option value="+1">🇺🇸 United States +1</option>
                        <option value="+598">🇺🇾 Uruguay +598</option>
                        <option value="+998">🇺🇿 Uzbekistan +998</option>
                        <option value="+678">🇻🇺 Vanuatu +678</option>
                        <option value="+379">🇻🇦 Vatican City +379</option>
                        <option value="+58">🇻🇪 Venezuela +58</option>
                        <option value="+84">🇻🇳 Vietnam +84</option>
                        <option value="+967">🇾🇪 Yemen +967</option>
                        <option value="+260">🇿🇲 Zambia +260</option>
                        <option value="+263">🇿🇼 Zimbabwe +263</option>
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
