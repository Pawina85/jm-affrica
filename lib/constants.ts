// ── Shared constants: JM Attorneys Inc. ──

export const FIRM_NAME = "JM Attorneys Inc.";
export const FIRM_TAGLINE = "Leading the Way in Legal Excellence";

// ── Practice Areas ──

export const PRACTICE_AREAS = [
  { name: "Criminal Law", slug: "criminal-law" },
  { name: "Litigation", slug: "litigation" },
  { name: "Family & Labour Law", slug: "family-labour-law" },
  { name: "Conveyancing", slug: "conveyancing" },
  { name: "Wills, Estates, Trusts & Planning", slug: "wills-estates-trusts" },
  { name: "Notarial Law", slug: "notarial-law" },
  { name: "Contractual Law", slug: "contractual-law" },
  { name: "Commercial & Corporate Law", slug: "commercial-corporate-law" },
  { name: "Insolvency & Business Rescue", slug: "insolvency-business-rescue" },
  {
    name: "Road Accident Fund & Medical Negligence",
    slug: "road-accident-fund",
  },
  { name: "Private Investigation Services", slug: "private-investigation" },
  {
    name: "Forensic Investigation for Corporates",
    slug: "forensic-investigation",
  },
  { name: "Insurance Law & Advisory", slug: "insurance-law" },
  { name: "SARS & Tax Matters", slug: "sars-tax-matters" },
  { name: "Crypto & Digital Assets", slug: "crypto-digital-assets" },
] as const;

// ── Offices ──

export const OFFICES = [
  {
    city: "Johannesburg",
    address: "345 Rivonia Road, 2nd Floor, Suite No. 31, Rivonia, Sandton",
    phone: "+27 10 018 9850",
    email: "law@jminc.africa",
  },
  {
    city: "Cape Town",
    address:
      "Tiny Empire, 37 Buitenkant St, District Six, Cape Town, 7925",
    phone: "(082) 425 2345",
    email: "kerwin@jminc.africa",
  },
] as const;

// ── Nav Items ──

export type NavItem = {
  label: string;
  href?: string;
  dropdown?:
    | { type: "practice-areas" }
    | { type: "generic"; items: { label: string; href: string }[] };
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Practice Areas",
    dropdown: { type: "practice-areas" },
  },
  {
    label: "Resources",
    dropdown: {
      type: "generic",
      items: [
        { label: "Templates", href: "/resources/templates" },
        { label: "Calculators", href: "/resources/calculators" },
        { label: "Search Now", href: "/resources/search" },
      ],
    },
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "About",
    dropdown: {
      type: "generic",
      items: [
        { label: "Our Team", href: "/#our-team" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
  },
];

// ── Footer link groups ──

export const FOOTER_RESOURCES = [
  { label: "Templates", href: "/resources/templates" },
  { label: "Calculators", href: "/resources/calculators" },
  { label: "Search Now", href: "/resources/search" },
];

export const FOOTER_FIRM = [
  { label: "Our Team", href: "/#our-team" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];
