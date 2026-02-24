"use client";

import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    quote: "JM Attorneys handled my criminal case with absolute professionalism. They kept me informed at every step and secured the best possible outcome. I cannot recommend them highly enough.",
    name: "Thabo M.",
    matter: "Criminal Defence",
    location: "Johannesburg",
  },
  {
    quote: "The conveyancing team made our property transfer seamless. From the offer to registration, everything was handled efficiently and we moved in ahead of schedule.",
    name: "Sarah & James P.",
    matter: "Property Transfer",
    location: "Cape Town",
  },
  {
    quote: "After my accident, I didn't know where to turn. The RAF team at JM Attorneys fought for my claim and secured compensation that covered all my medical bills and lost income.",
    name: "Nomvula K.",
    matter: "Road Accident Fund",
    location: "Pretoria",
  },
  {
    quote: "Professional, responsive, and genuinely caring. They guided me through a difficult divorce with dignity and ensured my children's interests were protected throughout.",
    name: "Rene V.",
    matter: "Family Law",
    location: "Sandton",
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-cream-dark px-8 py-24 sm:px-12 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        {/* ── Header ── */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[6px] text-gold">
            Client Testimonials
          </p>
          <h2 className="text-[clamp(32px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-charcoal">
            What Our Clients{" "}
            <span className="text-gold">Say About Us</span>
          </h2>
        </div>

        {/* ── 2×2 quote grid ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`flex flex-col justify-between border border-border bg-white p-7 transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Quote mark */}
              <div>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="mb-4 text-gold/30">
                  <path
                    d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                    fill="currentColor"
                  />
                  <path
                    d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                    fill="currentColor"
                  />
                </svg>
                <p className="text-[14px] font-light leading-[1.85] text-text-mid">
                  {t.quote}
                </p>
              </div>

              {/* Attribution */}
              <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <div>
                  <p className="text-[14px] font-semibold text-charcoal">{t.name}</p>
                  <p className="mt-0.5 text-[11px] font-light text-text-light">{t.location}</p>
                </div>
                <span className="rounded-full bg-gold/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[2px] text-gold">
                  {t.matter}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[3px] text-navy transition-colors duration-300 hover:bg-gold-light"
          >
            Book Your Consultation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
