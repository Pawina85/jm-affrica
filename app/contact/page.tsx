"use client";

import { useEffect, useRef, useState } from "react";
import { OFFICES, PRACTICE_AREAS } from "@/lib/constants";

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [formVisible, setFormVisible] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === formRef.current) setFormVisible(true);
          if (entry.target === mapRef.current) setMapVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    if (formRef.current) observer.observe(formRef.current);
    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── 1. Header Banner (navy) ── */}
      <section className="bg-navy px-8 pt-36 pb-20 sm:px-12 lg:pt-44 lg:pb-28">
        <div className="mx-auto max-w-[1200px] text-center">
          <p
            className={`mb-5 text-[13px] font-semibold uppercase tracking-[6px] text-gold transition-all duration-700 ${
              heroVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Contact Us
          </p>
          <h1
            className={`font-display text-[clamp(36px,5vw,64px)] font-medium leading-[1.1] tracking-tight text-white transition-all duration-700 delay-100 ${
              heroVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Let&rsquo;s Discuss <span className="text-gold">Your Case</span>
          </h1>
          <p
            className={`mx-auto mt-5 max-w-xl text-[14px] font-light leading-[1.85] text-text-light transition-all duration-700 delay-200 ${
              heroVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Get in touch with our team for a confidential consultation. We&rsquo;ll
            review your matter and advise you on the best path forward.
          </p>
        </div>
      </section>

      {/* ── 2. Form + Office Details (cream) ── */}
      <section ref={formRef} className="bg-cream px-8 py-24 sm:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 lg:grid-cols-5">
          {/* ── Left: Contact Form (3 cols) ── */}
          <div
            className={`lg:col-span-3 transition-all duration-600 ${
              formVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="mb-2 text-[13px] font-semibold uppercase tracking-[6px] text-gold">
              Send a Message
            </p>
            <h2 className="mb-8 font-display text-[clamp(28px,3.5vw,40px)] font-medium leading-[1.15] tracking-tight text-charcoal">
              How Can We Help?
            </h2>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[2px] text-text-mid">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Thabo Mokoena"
                  className="w-full border border-border bg-white px-4 py-3 text-[14px] text-charcoal placeholder:text-text-light/60 outline-none transition-colors focus:border-gold"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[2px] text-text-mid">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-border bg-white px-4 py-3 text-[14px] text-charcoal placeholder:text-text-light/60 outline-none transition-colors focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[2px] text-text-mid">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+27 XX XXX XXXX"
                    className="w-full border border-border bg-white px-4 py-3 text-[14px] text-charcoal placeholder:text-text-light/60 outline-none transition-colors focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="area" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[2px] text-text-mid">
                  Practice Area
                </label>
                <select
                  id="area"
                  defaultValue=""
                  className="w-full appearance-none border border-border bg-white px-4 py-3 text-[14px] text-charcoal outline-none transition-colors focus:border-gold"
                >
                  <option value="" disabled>
                    Select a practice area
                  </option>
                  {PRACTICE_AREAS.map((a) => (
                    <option key={a.slug} value={a.slug}>
                      {a.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[2px] text-text-mid">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Briefly describe your matter..."
                  className="w-full resize-none border border-border bg-white px-4 py-3 text-[14px] text-charcoal placeholder:text-text-light/60 outline-none transition-colors focus:border-gold"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[3px] text-navy transition-colors duration-300 hover:bg-gold-light"
              >
                Send Message
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

          {/* ── Right: Office Details (2 cols) ── */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-600 delay-200 ${
              formVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="mb-2 text-[13px] font-semibold uppercase tracking-[6px] text-gold">
              Our Offices
            </p>
            <h2 className="mb-8 font-display text-[clamp(28px,3.5vw,40px)] font-medium leading-[1.15] tracking-tight text-charcoal">
              Visit Us
            </h2>

            {OFFICES.map((office) => (
              <div
                key={office.city}
                className="border border-border bg-white p-6"
              >
                <h3 className="mb-3 text-[15px] font-semibold text-charcoal">
                  {office.city}
                </h3>

                {/* Address */}
                <div className="mb-3 flex gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 shrink-0 text-gold">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="text-[13px] font-light leading-[1.7] text-text-mid">
                    {office.address}
                  </p>
                </div>

                {/* Phone */}
                <div className="mb-3 flex gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 shrink-0 text-gold">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="text-[13px] font-light text-text-mid transition-colors hover:text-gold"
                  >
                    {office.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 shrink-0 text-gold">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a
                    href={`mailto:${office.email}`}
                    className="text-[13px] font-light text-text-mid transition-colors hover:text-gold"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            ))}

            {/* Office Hours */}
            <div className="border border-border bg-white p-6">
              <h3 className="mb-3 text-[15px] font-semibold text-charcoal">
                Office Hours
              </h3>
              <div className="space-y-1.5 text-[13px] font-light text-text-mid">
                <div className="flex justify-between">
                  <span>Monday &ndash; Friday</span>
                  <span className="font-medium text-charcoal">08:00 &ndash; 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-charcoal">09:00 &ndash; 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday &amp; Public Holidays</span>
                  <span className="font-medium text-text-light">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Map Placeholder (cream-dark) ── */}
      <section ref={mapRef} className="bg-cream-dark px-8 py-24 sm:px-12 lg:py-28">
        <div
          className={`mx-auto max-w-[1200px] transition-all duration-600 ${
            mapVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-10 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[6px] text-gold">
              Our Locations
            </p>
            <h2 className="font-display text-[clamp(28px,3.5vw,40px)] font-medium leading-[1.15] tracking-tight text-charcoal">
              Find Us
            </h2>
          </div>

          {/* Map placeholder */}
          <div className="flex min-h-[320px] items-center justify-center border border-border bg-white">
            <div className="text-center px-6">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mx-auto mb-4 text-gold/40">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-[13px] font-medium text-text-mid">
                Google Maps embed coming soon
              </p>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center sm:gap-6">
                {OFFICES.map((o) => (
                  <p key={o.city} className="text-[12px] font-light text-text-light">
                    <span className="font-medium text-charcoal">{o.city}:</span>{" "}
                    {o.address}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
