"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SEARCH_SERVICES = [
  { name: "Instant Property Search", original: 575, current: 530, discount: 8, img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&q=80" },
  { name: "Property Valuation Report", original: 255, current: 225, discount: 11, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&q=80" },
  { name: "Title Deed Search", original: 600, current: 575, discount: 4, img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&q=80" },
  { name: "Marriage Contract", original: 610, current: 575, discount: 5, img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop&q=80" },
  { name: "Property Search", original: 260, current: 225, discount: 13, img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&q=80" },
  { name: "Person Search", original: 235, current: 225, discount: 4, img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&q=80" },
  { name: "CIPC Reinstatement Search", original: 240, current: 225, discount: 6, img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80" },
  { name: "Company Search", original: 590, current: 550, discount: 6, img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&q=80" },
  { name: "Transfer Information", original: 400, current: 350, discount: 12, img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop&q=80" },
  { name: "Get Company Documents", original: 1600, current: 1450, discount: 9, img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&q=80" },
  { name: "CIPC Director Changes", original: 550, current: 490, discount: 11, img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=300&fit=crop&q=80" },
];

function formatPrice(n: number) {
  return n.toLocaleString("en-ZA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const INITIAL_COUNT = 3;

export default function PropertySearchSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? SEARCH_SERVICES : SEARCH_SERVICES.slice(0, INITIAL_COUNT);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="search" className="bg-cream-dark px-8 py-24 sm:px-12 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        {/* ── Header ── */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[6px] text-gold">
            Search Services
          </p>
          <h2 className="text-[clamp(32px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-charcoal">
            Accurate, Fast,{" "}
            <span className="text-gold">Reliable</span>
          </h2>
          <p className="mt-6 max-w-lg text-[14px] font-light leading-[1.85] text-text-mid">
            Whether you&apos;re buying, selling, or verifying a property, we provide
            expert assistance with title deeds, company records, and legal
            searches across South Africa.
          </p>
        </div>

        {/* ── Service cards grid ── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service, i) => (
            <a
              key={service.name}
              href="/resources/search"
              className={`group relative overflow-hidden border border-border bg-white transition-all duration-500 hover:border-gold/30 hover:shadow-[0_2px_20px_rgba(184,150,46,0.06)] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${Math.min(i * 60, 500)}ms` }}
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Discount badge */}
                <div className="absolute top-3 left-3 z-10 rounded bg-gold px-2.5 py-1 text-[11px] font-bold text-navy">
                  {service.discount}% OFF
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-[15px] font-semibold text-charcoal transition-colors duration-300 group-hover:text-gold">
                  {service.name}
                </h3>

                {/* Pricing */}
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="text-[18px] font-semibold text-gold">
                    R{formatPrice(service.current)}
                  </span>
                  <span className="text-[13px] font-light text-text-light line-through">
                    R{formatPrice(service.original)}
                  </span>
                </div>

                {/* Order button */}
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[3px] text-gold transition-colors duration-300 group-hover:text-gold-light">
                    Order Now
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ── See More / See Less ── */}
        {SEARCH_SERVICES.length > INITIAL_COUNT && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[3px] text-navy transition-colors duration-300 hover:bg-gold-light"
            >
              {showAll ? "Show Less" : `See All ${SEARCH_SERVICES.length} Services`}
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

        {/* ── CTA Banner ── */}
        <div className="mt-12 flex flex-col gap-6 rounded border border-gold/20 bg-white p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-lg">
            <h3 className="text-[18px] font-semibold text-charcoal">
              Buying a Home or Transferring Ownership?
            </h3>
            <p className="mt-2 text-[13px] font-light leading-[1.8] text-text-mid">
              From deed searches to legal advice, we simplify the process so
              you can make confident property decisions. Let us handle the
              paperwork.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 self-start bg-gold px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[3px] text-navy transition-colors duration-300 hover:bg-gold-light"
          >
            Contact Us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
