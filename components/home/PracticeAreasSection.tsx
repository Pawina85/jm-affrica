"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const PRACTICE_AREAS = [
  {
    name: "Criminal Law",
    slug: "criminal-law",
    desc: "Defence in fraud, assault, theft, drug offences, bail applications, and high-profile criminal trials.",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "Litigation",
    slug: "litigation",
    desc: "Civil and commercial dispute resolution — from High Court trials to arbitration and mediation.",
    img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "Family & Labour Law",
    slug: "family-labour-law",
    desc: "Divorce, custody, maintenance, CCMA disputes, unfair dismissals, and employment contracts.",
    img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "Conveyancing",
    slug: "conveyancing",
    desc: "Property transfers, bond registrations, sectional title, and commercial real estate transactions.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "Wills, Estates & Trusts",
    slug: "wills-estates-trusts",
    desc: "Drafting wills, estate administration, trust formation, and succession planning.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "Notarial Law",
    slug: "notarial-law",
    desc: "Notarial bonds, ante-nuptial contracts, authentication of documents, and sworn translations.",
    img: "https://images.unsplash.com/photo-1618044619888-009e412ff12a?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "Contractual Law",
    slug: "contractual-law",
    desc: "Drafting, reviewing, and enforcing commercial and personal contracts across all sectors.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "Commercial & Corporate",
    slug: "commercial-corporate-law",
    desc: "Company formations, M&A advisory, shareholder agreements, and corporate governance.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "Insolvency & Business Rescue",
    slug: "insolvency-business-rescue",
    desc: "Sequestration, liquidation, business rescue plans, and creditor negotiations.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "Road Accident Fund",
    slug: "road-accident-fund",
    desc: "RAF claims for personal injury, loss of income, and medical negligence compensation.",
    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "Private Investigation",
    slug: "private-investigation",
    desc: "Surveillance, background checks, asset tracing, and evidence gathering for legal proceedings.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "Forensic Investigation",
    slug: "forensic-investigation",
    desc: "Corporate fraud detection, forensic audits, digital forensics, and whistleblower investigations.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "Insurance Law",
    slug: "insurance-law",
    desc: "Policy disputes, rejected claims, insurance litigation, and regulatory advisory.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "SARS & Tax Matters",
    slug: "sars-tax-matters",
    desc: "Tax disputes, SARS audits, voluntary disclosure, and tax structuring advice.",
    img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "Crypto & Digital Assets",
    slug: "crypto-digital-assets",
    desc: "Regulatory compliance, token disputes, exchange agreements, and digital asset recovery.",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&q=80",
  },
];

const INITIAL_COUNT = 6;

export default function PracticeAreasSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleAreas = showAll ? PRACTICE_AREAS : PRACTICE_AREAS.slice(0, INITIAL_COUNT);

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
        <div className="mb-16">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[6px] text-gold">Practice Areas</p>
          <h2 className="text-[clamp(40px,5.5vw,64px)] font-medium leading-[1.1] tracking-tight text-charcoal">
            Comprehensive Legal Counsel{" "}
            <em className="text-gold">You Can Trust</em>
          </h2>
          <p className="mt-6 max-w-xl text-[14px] font-light leading-[1.85] text-text-mid">
            From criminal defence to crypto regulation — 15 areas of focused
            expertise, each backed by decades of real courtroom experience.
          </p>
        </div>

        {/* ── Card grid ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleAreas.map((area, i) => (
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
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-[16px] font-semibold text-gold">
                  {area.name}
                </h3>
                <p className="mt-2 text-[13px] font-light leading-[1.85] text-cream/80">
                  {area.desc}
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[3px] text-gold transition-colors duration-300 group-hover:text-gold-light">
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

        {/* ── See More / See Less ── */}
        {PRACTICE_AREAS.length > INITIAL_COUNT && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[3px] text-navy transition-colors duration-300 hover:bg-gold-light"
            >
              {showAll ? "Show Less" : `See All ${PRACTICE_AREAS.length} Practice Areas`}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
