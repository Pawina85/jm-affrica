import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <span className="block h-8 w-1 bg-gold transition-all duration-300 group-hover:h-9" />
      <span className="font-display text-[20px] font-semibold tracking-wide text-cream">
        JM Attorneys{" "}
        <span className="font-light text-cream/60">Inc.</span>
      </span>
    </Link>
  );
}
