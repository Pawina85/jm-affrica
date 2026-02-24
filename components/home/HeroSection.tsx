"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const LAWYERS = [
  { name: "Advocate J. Mokoena", role: "Founding Partner", number: "01", img: "https://i.pravatar.cc/600?img=68" },
  { name: "Ms. A. Dlamini", role: "Senior Associate", number: "02", img: "https://i.pravatar.cc/600?img=47" },
  { name: "Mr. T. van Wyk", role: "Conveyancer", number: "03", img: "https://i.pravatar.cc/600?img=53" },
  { name: "Ms. N. Khumalo", role: "Associate", number: "04", img: "https://i.pravatar.cc/600?img=45" },
  { name: "Mr. R. Pillay", role: "Associate", number: "05", img: "https://i.pravatar.cc/600?img=51" },
  { name: "Adv. S. Botha", role: "Associate", number: "06", img: "https://i.pravatar.cc/600?img=60" },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const nextLawyer = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % LAWYERS.length);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextLawyer, 5000);
    return () => clearInterval(interval);
  }, [nextLawyer]);

  const current = LAWYERS[activeIndex];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* ── Split background ── */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-navy" />
        <div className="w-1/2 bg-cream-dark" />
      </div>

      {/* ── Content grid ── */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1400px] grid-cols-1 lg:grid-cols-2">
        {/* ── Left: Text ── */}
        <div className="flex flex-col justify-center px-8 py-24 sm:px-12 lg:px-16 xl:px-24">
          <p
            className={`eyebrow mb-6 transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            Established 1997 · Johannesburg & Cape Town
          </p>

          <h1
            className={`font-display text-[clamp(42px,5.5vw,82px)] font-light leading-[1.05] text-cream transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            Leading the
            <br />
            Way in{" "}
            <em className="font-display italic text-gold">
              Legal
              <br />
              Excellence
            </em>
          </h1>

          <p
            className={`mt-8 max-w-md text-[15px] font-light leading-[1.85] text-text-light transition-all duration-700 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            With over 27 years of trusted counsel, JM Attorneys Inc. delivers
            premium legal services across criminal, commercial, family, and
            property law — from Sandton to Cape Town.
          </p>

          <div
            className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[3px] text-navy transition-colors duration-300 hover:bg-gold-light"
            >
              Book Consultation
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#practice-areas"
              className="inline-flex items-center gap-2 border border-cream/20 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[3px] text-cream/80 transition-colors duration-300 hover:border-cream/40 hover:text-cream"
            >
              Our Practice
            </a>
          </div>
        </div>

        {/* ── Right: Lawyer rotation ── */}
        <div className="relative hidden lg:flex lg:items-center lg:justify-center">
          {/* Placeholder photo area with crossfade */}
          <div className="relative h-[70vh] w-[85%] max-w-[480px] overflow-hidden">
            {LAWYERS.map((lawyer, i) => (
              <div
                key={lawyer.number}
                className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
                  i === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Lawyer photo — grayscale + duotone */}
                <Image
                  src={lawyer.img}
                  alt={lawyer.name}
                  fill
                  className="object-cover object-top grayscale"
                  sizes="480px"
                  priority={i === 0}
                />
                {/* Dark overlay gradient for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                {/* Subtle navy duotone tint */}
                <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
              </div>
            ))}

            {/* Lawyer name overlay */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-8">
              <div className="border-l-2 border-gold pl-4">
                <p className="text-[10px] font-medium uppercase tracking-[4px] text-gold">
                  {current.number} / 06
                </p>
                <p className="mt-1 font-display text-[24px] font-light text-cream">
                  {current.name}
                </p>
                <p className="text-[12px] font-light tracking-wide text-cream/60">
                  {current.role}
                </p>
              </div>
            </div>

            {/* Progress dots */}
            <div className="absolute bottom-8 right-8 z-10 flex gap-2">
              {LAWYERS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeIndex
                      ? "w-6 bg-gold"
                      : "w-1.5 bg-cream/30 hover:bg-cream/50"
                  }`}
                  aria-label={`View lawyer ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile: Lawyer photo + info ── */}
      <div className="relative z-10 bg-cream-dark lg:hidden">
        {/* Mobile photo */}
        <div className="relative h-[50vh] w-full overflow-hidden">
          {LAWYERS.map((lawyer, i) => (
            <div
              key={lawyer.number}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
                i === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={lawyer.img}
                alt={lawyer.name}
                fill
                className="object-cover object-top grayscale"
                sizes="100vw"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cream-dark via-transparent to-transparent" />
              <div className="absolute inset-0 bg-navy/10 mix-blend-multiply" />
            </div>
          ))}
        </div>
        {/* Mobile info */}
        <div className="px-8 pb-12 pt-4">
          <div className="mx-auto max-w-md">
            <div className="border-l-2 border-gold pl-4">
              <p className="text-[10px] font-medium uppercase tracking-[4px] text-gold">
                {current.number} / 06
              </p>
              <p className="mt-1 font-display text-[24px] font-light text-charcoal">
                {current.name}
              </p>
              <p className="text-[12px] font-light tracking-wide text-text-mid">
                {current.role}
              </p>
            </div>
            {/* Progress dots mobile */}
            <div className="mt-6 flex gap-2">
              {LAWYERS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeIndex
                      ? "w-6 bg-gold"
                      : "w-1.5 bg-navy/20 hover:bg-navy/40"
                  }`}
                  aria-label={`View lawyer ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
