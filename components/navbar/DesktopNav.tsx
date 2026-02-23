"use client";

import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import DropdownPracticeAreas from "./DropdownPracticeAreas";
import DropdownGeneric from "./DropdownGeneric";

type Props = {
  activeDropdown: string | null;
  onEnter: (label: string) => void;
  onLeave: () => void;
};

export default function DesktopNav({
  activeDropdown,
  onEnter,
  onLeave,
}: Props) {
  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {NAV_ITEMS.map((item) => {
        const isOpen = activeDropdown === item.label;

        // Direct link (no dropdown)
        if (!item.dropdown) {
          return (
            <Link
              key={item.label}
              href={item.href!}
              className="group relative px-4 py-2 text-[13px] font-medium tracking-wide text-cream/80 transition-colors duration-200 hover:text-cream"
            >
              {item.label}
              <span className="absolute bottom-0 left-4 right-4 h-[2px] w-0 bg-gold transition-all duration-300 ease-out group-hover:w-[calc(100%-2rem)]" />
            </Link>
          );
        }

        // Dropdown item
        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => onEnter(item.label)}
            onMouseLeave={onLeave}
          >
            <button
              className="group relative flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium tracking-wide text-cream/80 transition-colors duration-200 hover:text-cream"
            >
              {item.label}
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              <span className="absolute bottom-0 left-4 right-4 h-[2px] w-0 bg-gold transition-all duration-300 ease-out group-hover:w-[calc(100%-2rem)]" />
            </button>

            {isOpen && (
              <>
                {item.dropdown.type === "practice-areas" ? (
                  <DropdownPracticeAreas />
                ) : (
                  <DropdownGeneric items={item.dropdown.items} />
                )}
              </>
            )}
          </div>
        );
      })}

      <Link
        href="/contact"
        className="ml-4 rounded bg-navy-light px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[2px] text-gold transition-colors duration-200 hover:bg-navy-mid hover:text-gold-light"
      >
        Book Consultation
      </Link>
    </nav>
  );
}
