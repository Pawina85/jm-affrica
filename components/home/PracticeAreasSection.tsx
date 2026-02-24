"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const PRACTICE_AREAS = [
  {
    name: "Criminal Law",
    slug: "criminal-law",
    desc: "Defence in fraud, assault, theft, drug offences, bail applications, and high-profile criminal trials.",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
  },
  {
    name: "Litigation",
    slug: "litigation",
    desc: "Civil and commercial dispute resolution — from High Court trials to arbitration and mediation.",
    img: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=600&q=80",
  },
  {
    name: "Family & Labour Law",
    slug: "family-labour-law",
    desc: "Divorce, custody, maintenance, CCMA disputes, unfair dismissals, and employment contracts.",
    img: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=80",
  },
  {
    name: "Conveyancing",
    slug: "conveyancing",
    desc: "Property transfers, bond registrations, sectional title, and commercial real estate transactions.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
  },
  {
    name: "Wills, Estates & Trusts",
    slug: "wills-estates-trusts",
    desc: "Drafting wills, estate administration, trust formation, and succession planning.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    name: "Notarial Law",
    slug: "notarial-law",
    desc: "Notarial bonds, ante-nuptial contracts, authentication of documents, and sworn translations.",
    img: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&q=80",
  },
  {
    name: "Contractual Law",
    slug: "contractual-law",
    desc: "Drafting, reviewing, and enforcing commercial and personal contracts across all sectors.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
  {
    name: "Commercial & Corporate",
    slug: "commercial-corporate-law",
    desc: "Company formations, M&A advisory, shareholder agreements, and corporate governance.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    name: "Insolvency & Business Rescue",
    slug: "insolvency-business-rescue",
    desc: "Sequestration, liquidation, business rescue plans, and creditor negotiations.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    name: "Road Accident Fund",
    slug: "road-accident-fund",
    desc: "RAF claims for personal injury, loss of income, and medical negligence compensation.",
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&q=80",
  },
  {
    name: "Private Investigation",
    slug: "private-investigation",
    desc: "Surveillance, background checks, asset tracing, and evidence gathering for legal proceedings.",
    img: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=600&q=80",
  },
  {
    name: "Forensic Investigation",
    slug: "forensic-investigation",
    desc: "Corporate fraud detection, forensic audits, digital forensics, and whistleblower investigations.",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&q=80",
  },
  {
    name: "Insurance Law",
    slug: "insurance-law",
    desc: "Policy disputes, rejected claims, insurance litigation, and regulatory advisory.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  },
  {
    name: "SARS & Tax Matters",
    slug: "sars-tax-matters",
    desc: "Tax disputes, SARS audits, voluntary disclosure, and tax structuring advice.",
    img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=600&q=80",
  },
  {
    name: "Crypto & Digital Assets",
    slug: "crypto-digital-assets",
    desc: "Regulatory compliance, token disputes, exchange agreements, and digital asset recovery.",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80",
  },
];

export default function PracticeAreasSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="practice-areas" className="bg-cream px-8 py-24 sm:px-12 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        {/* ── Header ── */}
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Practice Areas</p>
          <h2 className="font-display text-[clamp(36px,4vw,56px)] font-light leading-[1.1] text-charcoal">
            Comprehensive Legal Counsel{" "}
            <em className="font-display italic text-gold">You Can Trust</em>
          </h2>
        </div>

        {/* ── Card grid ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICE_AREAS.map((area, i) => (
            <a
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              className={`group relative overflow-hidden bg-navy transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${Math.min(i * 60, 600)}ms` }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={area.img}
                  alt={area.name}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-navy/40 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-[19px] font-normal text-cream transition-colors duration-300 group-hover:text-gold">
                  {area.name}
                </h3>
                <p className="mt-2 text-[12px] font-light leading-[1.75] text-text-light">
                  {area.desc}
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[3px] text-gold opacity-0 transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                  Learn More
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
