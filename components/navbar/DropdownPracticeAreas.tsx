import Link from "next/link";
import { PRACTICE_AREAS } from "@/lib/constants";

export default function DropdownPracticeAreas() {
  return (
    <div className="animate-dropdown absolute left-1/2 top-full mt-2 w-[640px] -translate-x-1/2 rounded-md bg-navy-mid p-6 shadow-2xl">
      <p className="eyebrow mb-4">All Practice Areas</p>
      <div className="grid grid-cols-2 gap-x-8 gap-y-1">
        {PRACTICE_AREAS.map((area) => (
          <Link
            key={area.slug}
            href={`/practice-areas/${area.slug}`}
            className="block rounded px-3 py-2 text-[13px] font-light text-cream/80 transition-colors duration-200 hover:bg-navy-light hover:text-gold-light"
          >
            {area.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
