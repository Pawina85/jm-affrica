import { OFFICES } from "@/lib/constants";

export default function OfficesBand() {
  return (
    <div className="border-b border-cream/10 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:gap-8">
        {OFFICES.map((office, i) => (
          <div
            key={office.city}
            className={`${
              i === 0 ? "md:border-r md:border-cream/10 md:pr-8" : "md:pl-8"
            }`}
          >
            <p className="eyebrow mb-3">{office.city}</p>
            <p className="text-[13px] font-light leading-relaxed text-cream/70">
              {office.address}
            </p>
            <div className="mt-3 flex flex-col gap-1">
              <a
                href={`tel:${office.phone.replace(/\s/g, "")}`}
                className="text-[13px] font-light text-cream/60 transition-colors hover:text-gold"
              >
                {office.phone}
              </a>
              <a
                href={`mailto:${office.email}`}
                className="text-[13px] font-light text-cream/60 transition-colors hover:text-gold"
              >
                {office.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
