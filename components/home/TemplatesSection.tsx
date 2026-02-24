"use client";

import { useEffect, useRef, useState } from "react";

const TEMPLATES = [
  { name: "Power of Attorney", category: "General", desc: "Authorise someone to act on your behalf in legal, financial, or personal matters. Includes general and special power of attorney formats." },
  { name: "Last Will & Testament", category: "Estates", desc: "A legally compliant template for distributing your assets, appointing executors, and naming guardians for minor children." },
  { name: "Lease Agreement", category: "Property", desc: "Standard residential lease agreement covering rent, deposit, maintenance responsibilities, and termination clauses." },
  { name: "Employment Contract", category: "Labour", desc: "Compliant employment agreement template covering remuneration, leave, notice periods, and restraint of trade." },
  { name: "Non-Disclosure Agreement", category: "Commercial", desc: "Protect confidential business information with a mutual or one-way NDA suitable for partnerships and negotiations." },
  { name: "Loan Agreement", category: "General", desc: "Formal loan agreement between private parties covering repayment terms, interest rates, and default provisions." },
  { name: "Affidavit Template", category: "General", desc: "Sworn statement template for use in court proceedings, insurance claims, or statutory declarations." },
  { name: "Divorce Settlement", category: "Family", desc: "Settlement agreement template covering asset division, maintenance, custody arrangements, and parenting plans." },
  { name: "Sale of Business", category: "Commercial", desc: "Agreement for the sale of a business as a going concern, including assets, liabilities, and restraint clauses." },
  { name: "Shareholder Agreement", category: "Corporate", desc: "Governs shareholder rights, voting, dividends, share transfers, and dispute resolution mechanisms." },
];

export default function TemplatesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section ref={ref} className="bg-cream-dark px-8 py-24 sm:px-12 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        {/* ── Header ── */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[6px] text-gold">
              Free Templates
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-charcoal">
              Legal Documents{" "}
              <em className="text-gold not-italic">Ready to Use</em>
            </h2>
            <p className="mt-6 text-[14px] font-light leading-[1.85] text-text-mid">
              Download professionally drafted templates — reviewed by our
              attorneys and ready for immediate use.
            </p>
          </div>
          <a
            href="/resources/templates"
            className="inline-flex items-center gap-2 self-start border border-charcoal/20 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[3px] text-charcoal transition-colors duration-300 hover:border-gold hover:text-gold lg:self-auto"
          >
            View All Templates
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

        {/* ── 2-column template list ── */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2">
          {TEMPLATES.map((template, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={template.name}
                className={`border-b border-border transition-all duration-500 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${Math.min(i * 80, 600)}ms` }}
              >
                {/* Row header — clickable */}
                <button
                  onClick={() => toggle(i)}
                  className="group flex w-full items-center justify-between py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    {/* Document icon */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`shrink-0 transition-colors duration-300 ${isOpen ? "text-gold" : "text-gold/60 group-hover:text-gold"}`}
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                    <span className={`text-[15px] font-light transition-colors duration-300 ${isOpen ? "text-gold" : "text-charcoal group-hover:text-gold"}`}>
                      {template.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="hidden text-[9px] font-semibold uppercase tracking-[3px] text-text-mid sm:inline">
                      {template.category}
                    </span>
                    {/* Chevron */}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`shrink-0 text-text-mid transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>

                {/* Expandable content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 opacity-100 pb-5" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-9">
                    <p className="text-[13px] font-light leading-[1.8] text-text-mid">
                      {template.desc}
                    </p>
                    <a
                      href="/resources/templates"
                      className="mt-4 inline-flex items-center gap-2 bg-gold px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[3px] text-navy transition-colors duration-300 hover:bg-gold-light"
                    >
                      Download Template
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
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
