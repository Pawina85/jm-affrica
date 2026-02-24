"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* First 3 lawyers get photo cards, last 3 get name-only rows */
const PHOTO_LAWYERS = [
  {
    name: "Advocate J. Mokoena",
    specialisation: "Criminal Law · Litigation · Constitutional",
    img: "https://i.pravatar.cc/600?img=68",
  },
  {
    name: "Ms. A. Dlamini",
    specialisation: "Family Law · Labour Law",
    img: "https://i.pravatar.cc/600?img=47",
  },
  {
    name: "Mr. T. van Wyk",
    specialisation: "Conveyancing · Property",
    img: "https://i.pravatar.cc/600?img=53",
  },
];

const NAME_LAWYERS = [
  { name: "Ms. N. Khumalo", specialisation: "Commercial · Corporate Law" },
  { name: "Mr. R. Pillay", specialisation: "Wills · Estates · Trusts" },
  { name: "Adv. S. Botha", specialisation: "Road Accident Fund" },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-navy px-8 py-24 sm:px-12 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        {/* ── Header ── */}
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Our Team</p>
          <h2 className="font-display text-[clamp(36px,4vw,56px)] font-light leading-[1.1] text-cream">
            The Counsel Behind{" "}
            <em className="font-display italic text-gold">Your Case</em>
          </h2>
          <p className="mt-6 max-w-lg text-[14px] font-light leading-[1.85] text-text-light">
            Six specialists across criminal, commercial, family, and property
            law — each bringing decades of focused expertise to your matter.
          </p>
        </div>

        {/* ── Photo cards — 3 across ── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTO_LAWYERS.map((lawyer, i) => (
            <div
              key={lawyer.name}
              className={`group relative aspect-[3/4] overflow-hidden bg-navy-mid transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Image
                src={lawyer.img}
                alt={lawyer.name}
                fill
                className="object-cover object-[center_15%] grayscale contrast-[1.1] transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-navy/30 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 transition-transform duration-400 group-hover:translate-y-[-4px]">
                <p className="font-display text-[20px] italic font-light text-cream">
                  {lawyer.name}
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[3px] text-gold">
                  {lawyer.specialisation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Name-only rows — slide in from left ── */}
        <div className="mt-8 divide-y divide-navy-light">
          {NAME_LAWYERS.map((lawyer, i) => (
            <div
              key={lawyer.name}
              className={`flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between transition-all duration-700 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-[70px] opacity-0"
              }`}
              style={{
                transitionDelay: `${450 + i * 200}ms`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <p className="font-display text-[22px] italic font-light text-cream">
                {lawyer.name}
              </p>
              <p className="text-[9px] font-semibold uppercase tracking-[3px] text-gold">
                {lawyer.specialisation}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="mt-12 text-center">
          <a
            href="/about#team"
            className="inline-flex items-center gap-2 border border-cream/30 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[3px] text-cream transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            View Full Team
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
        </div>
      </div>
    </section>
  );
}
