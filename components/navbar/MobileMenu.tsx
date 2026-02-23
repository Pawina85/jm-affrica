"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS, PRACTICE_AREAS } from "@/lib/constants";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: Props) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (label: string) => {
    setOpenSection(openSection === label ? null : label);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-navy lg:hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5">
        <span className="font-display text-[20px] font-semibold text-cream">
          JM Attorneys <span className="font-light text-cream/60">Inc.</span>
        </span>
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center text-cream/70 transition-colors hover:text-cream"
          aria-label="Close menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Nav items */}
      <nav className="mt-4 overflow-y-auto px-6" style={{ maxHeight: "calc(100vh - 160px)" }}>
        {NAV_ITEMS.map((item) => {
          // Direct link
          if (!item.dropdown) {
            return (
              <Link
                key={item.label}
                href={item.href!}
                onClick={onClose}
                className="block border-b border-cream/10 py-4 text-[15px] font-medium text-cream/90 transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            );
          }

          // Accordion section
          const isSectionOpen = openSection === item.label;
          const items =
            item.dropdown.type === "practice-areas"
              ? PRACTICE_AREAS.map((a) => ({
                  label: a.name,
                  href: `/practice-areas/${a.slug}`,
                }))
              : item.dropdown.items;

          return (
            <div key={item.label} className="border-b border-cream/10">
              <button
                onClick={() => toggleSection(item.label)}
                className="flex w-full items-center justify-between py-4 text-[15px] font-medium text-cream/90 transition-colors hover:text-gold"
              >
                {item.label}
                <svg
                  className={`h-4 w-4 text-cream/50 transition-transform duration-200 ${isSectionOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isSectionOpen && (
                <div className="animate-accordion-open pb-3 pl-4">
                  {items.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={onClose}
                      className="block py-2 text-[13px] font-light text-cream/60 transition-colors hover:text-gold-light"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* CTA */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-cream/10 bg-navy p-6">
        <Link
          href="/contact"
          onClick={onClose}
          className="block rounded bg-gold py-3.5 text-center text-[12px] font-semibold uppercase tracking-[2px] text-navy transition-colors hover:bg-gold-light"
        >
          Book Consultation
        </Link>
      </div>
    </div>
  );
}
