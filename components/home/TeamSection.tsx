"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const LAWYERS = [
  {
    name: "Advocate J. Mokoena",
    role: "Founding Partner",
    specialisation: "Criminal Law · Litigation · Constitutional",
    bio: "Founding partner with 27+ years defending clients in high-profile criminal and constitutional matters across South Africa. Admitted advocate of the High Court.",
    img: "https://i.pravatar.cc/600?img=68",
  },
  {
    name: "Ms. A. Dlamini",
    role: "Senior Associate",
    specialisation: "Family Law · Labour Law",
    bio: "Senior associate specialising in complex divorce, custody disputes, and employment law. Represents individuals and corporates at the CCMA and Labour Court.",
    img: "https://i.pravatar.cc/600?img=47",
  },
  {
    name: "Mr. T. van Wyk",
    role: "Conveyancer",
    specialisation: "Conveyancing · Property",
    bio: "Registered conveyancer handling residential and commercial property transfers, bond registrations, and sectional title work across Gauteng and the Western Cape.",
    img: "https://i.pravatar.cc/600?img=53",
  },
  {
    name: "Ms. N. Khumalo",
    role: "Associate",
    specialisation: "Commercial · Corporate Law",
    bio: "Advising businesses on mergers, acquisitions, compliance, shareholder agreements, and corporate governance matters.",
    img: "https://i.pravatar.cc/600?img=45",
  },
  {
    name: "Mr. R. Pillay",
    role: "Associate",
    specialisation: "Wills · Estates · Trusts",
    bio: "Drafting wills, administering deceased estates, structuring family trusts, and advising on succession planning.",
    img: "https://i.pravatar.cc/600?img=51",
  },
  {
    name: "Adv. S. Botha",
    role: "Associate",
    specialisation: "Road Accident Fund",
    bio: "Securing maximum RAF compensation for accident victims across South Africa. Over 500 successful claims to date.",
    img: "https://i.pravatar.cc/600?img=60",
  },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleLawyers = showAll ? LAWYERS : LAWYERS.slice(0, 3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream-dark px-8 py-24 sm:px-12 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        {/* ── Header ── */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[6px] text-gold">
            Our Legal Team
          </p>
          <h2 className="text-[clamp(32px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-charcoal">
            Meet the Attorneys{" "}
            <span className="text-gold">Behind Your Case</span>
          </h2>
          <p className="mt-6 max-w-lg text-[14px] font-light leading-[1.85] text-text-mid">
            Six specialists across criminal, commercial, family, and property
            law — each bringing decades of focused expertise to every matter
            we handle.
          </p>
        </div>

        {/* ── Lawyer cards — all 6 ── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleLawyers.map((lawyer, i) => (
            <div
              key={lawyer.name}
              className={`group overflow-hidden border border-border bg-white transition-all duration-600 hover:border-gold/30 hover:shadow-[0_4px_24px_rgba(184,150,46,0.08)] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Photo */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={lawyer.img}
                  alt={lawyer.name}
                  fill
                  className="object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="text-[9px] font-semibold uppercase tracking-[3px] text-gold">
                  {lawyer.role}
                </p>
                <h3 className="mt-1.5 text-[18px] font-semibold text-charcoal">
                  {lawyer.name}
                </h3>
                <p className="mt-1 text-[11px] font-medium text-text-mid">
                  {lawyer.specialisation}
                </p>
                <p className="mt-3 text-[13px] font-light leading-[1.75] text-text-mid">
                  {lawyer.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── See More ── */}
        {!showAll && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[3px] text-navy transition-colors duration-300 hover:bg-gold-light"
            >
              See All {LAWYERS.length} Attorneys
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        )}

        {/* ── CTA — only visible when expanded ── */}
        {showAll && (
          <div className="mt-14 text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[3px] text-navy transition-colors duration-300 hover:bg-gold-light"
            >
              Book a Consultation
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
        )}
      </div>
    </section>
  );
}
