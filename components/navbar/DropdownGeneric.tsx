import Link from "next/link";

type Props = {
  items: { label: string; href: string }[];
};

export default function DropdownGeneric({ items }: Props) {
  return (
    <div className="animate-dropdown absolute left-1/2 top-full mt-2 w-[220px] -translate-x-1/2 rounded-md bg-navy-mid p-3 shadow-2xl">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block rounded px-4 py-2.5 text-[13px] font-light text-cream/80 transition-colors duration-200 hover:bg-navy-light hover:text-gold-light"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
