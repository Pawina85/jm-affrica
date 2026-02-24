"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const LAWYERS = [
  { name: "Advocate J. Mokoena", specialisation: "Criminal Law · Litigation", img: "https://i.pravatar.cc/600?img=68" },
  { name: "Ms. A. Dlamini", specialisation: "Family Law · Labour Law", img: "https://i.pravatar.cc/600?img=47" },
  { name: "Mr. T. van Wyk", specialisation: "Conveyancing · Property", img: "https://i.pravatar.cc/600?img=53" },
  { name: "Ms. N. Khumalo", specialisation: "Commercial · Corporate Law", img: "https://i.pravatar.cc/600?img=45" },
  { name: "Mr. R. Pillay", specialisation: "Wills · Estates · Trusts", img: "https://i.pravatar.cc/600?img=51" },
  { name: "Adv. S. Botha", specialisation: "Road Accident Fund", img: "https://i.pravatar.cc/600?img=60" },
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
    <section className="relative w-full overflow-hidden lg:min-h-screen">
      {/* ── Split background (desktop only) ── */}
      <div className="absolute inset-0 hidden lg:flex">
        <div className="w-1/2 bg-navy" />
        <div className="w-1/2 bg-cream-dark" />
      </div>

      {/* ── Content grid ── */}
      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 lg:min-h-screen lg:grid-cols-2">
        {/* ── Left: Text ── */}
        <div className="flex flex-col justify-center bg-navy px-8 pt-28 pb-16 sm:px-12 lg:bg-transparent lg:py-24 lg:px-16 xl:px-24">
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
            className={`text-[clamp(42px,5.5vw,72px)] font-medium leading-[1.1] tracking-tight text-cream transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            Leading the
            <br />
            Way in{" "}
            <em className="text-gold">
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
              className="inline-flex items-center gap-2 border border-cream/40 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[3px] text-cream transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Our Practice
            </a>
          </div>
        </div>

        {/* ── Right: Lawyer rotation ── */}
        <div className="relative hidden pt-24 pb-12 lg:flex lg:flex-col lg:items-center lg:justify-center">
          {/* Eyebrow above photo card */}
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-[6px] text-gold">
            Meet Our Attorneys
          </p>

          {/* Photo card */}
          <div className="relative h-[58vh] w-[82%] max-w-[470px] overflow-hidden border border-gold/15 bg-navy">
            {LAWYERS.map((lawyer, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
                  i === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={lawyer.img}
                  alt={lawyer.name}
                  fill
                  className="object-cover object-[center_15%] contrast-[1.1] grayscale"
                  sizes="470px"
                  priority={i === 0}
                />
                {/* Strong navy duotone overlay — dark & authoritative */}
                <div className="absolute inset-0 bg-navy/35 mix-blend-multiply" />
                {/* Top vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-transparent" />
                {/* Bottom gradient — heavy, for caption legibility */}
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy via-navy/70 to-transparent" />
              </div>
            ))}

            {/* Caption inside photo card — bottom */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-6">
              <p className="text-[18px] font-medium text-cream">
                {current.name}
              </p>
              <p className="mt-1 text-[9px] font-medium uppercase tracking-[4px] text-gold">
                {current.specialisation}
              </p>
            </div>

            {/* Progress dots */}
            <div className="absolute bottom-6 right-6 z-10 flex gap-2">
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

          {/* ── Credentials strip ── */}
          <div className="mt-8 w-[82%] max-w-[470px]">
            {/* Lead statement */}
            <p className="text-center text-[16px] font-medium leading-relaxed text-charcoal">
              Over{" "}
              <span className="font-bold text-gold">95% success rate</span>{" "}
              across criminal and civil matters.
            </p>

            {/* Stat row — big & proud */}
            <div className="mt-6 flex items-center justify-center gap-8">
              <div className="text-center">
                <p className="text-[28px] font-bold text-gold">27+</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[3px] text-text-mid">
                  Years
                </p>
              </div>

              <div className="h-12 w-px bg-gold/20" />

              <div className="text-center">
                <p className="text-[28px] font-bold text-gold">3,000+</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[3px] text-text-mid">
                  Clients
                </p>
              </div>

              <div className="h-12 w-px bg-gold/20" />

              <div className="text-center">
                <p className="text-[28px] font-bold text-gold">3,000+</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[3px] text-text-mid">
                  Cases Won
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile: Lawyer photo + info ── */}
      <div className="relative z-10 bg-cream-dark lg:hidden">
        {/* Eyebrow mobile */}
        <div className="px-8 pt-10 pb-3">
          <p className="text-[13px] font-semibold uppercase tracking-[6px] text-gold">
            Meet Our Attorneys
          </p>
        </div>
        {/* Mobile photo */}
        <div className="relative mx-8 h-[55vh] overflow-hidden border border-gold/15 bg-navy">
          {LAWYERS.map((lawyer, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
                i === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={lawyer.img}
                alt={lawyer.name}
                fill
                className="object-cover object-[center_15%] contrast-[1.1] grayscale"
                sizes="100vw"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-navy/35 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy via-navy/70 to-transparent" />
            </div>
          ))}

          {/* Caption inside photo — mobile */}
          <div className="absolute inset-x-0 bottom-0 z-10 p-5">
            <p className="text-[17px] font-medium text-cream drop-shadow-md">
              {current.name}
            </p>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[4px] text-gold">
              {current.specialisation}
            </p>
          </div>
        </div>
        {/* Progress dots mobile */}
        <div className="flex gap-2 px-8 pt-5 pb-6">
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

        {/* ── Credentials strip mobile ── */}
        <div className="px-8 pb-10">
          <p className="text-center text-[16px] font-medium leading-relaxed text-charcoal">
            Over{" "}
            <span className="font-bold text-gold">95% success rate</span>{" "}
            across criminal and civil matters.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6">
            <div className="text-center">
              <p className="text-[26px] font-bold text-gold">27+</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[3px] text-text-mid">
                Years
              </p>
            </div>

            <div className="h-12 w-px bg-gold/20" />

            <div className="text-center">
              <p className="text-[26px] font-bold text-gold">3,000+</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[3px] text-text-mid">
                Clients
              </p>
            </div>

            <div className="h-12 w-px bg-gold/20" />

            <div className="text-center">
              <p className="text-[26px] font-bold text-gold">3,000+</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[3px] text-text-mid">
                Cases Won
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
