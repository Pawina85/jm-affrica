import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="border-t border-cream/10 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-[11px] font-light text-cream/30">
          &copy; 2026 JM Attorneys Inc. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="text-[11px] font-light text-cream/30 transition-colors hover:text-cream/60"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-[11px] font-light text-cream/30 transition-colors hover:text-cream/60"
          >
            Terms of Use
          </Link>
          <Link
            href="/popia"
            className="text-[11px] font-light text-cream/30 transition-colors hover:text-cream/60"
          >
            POPIA Compliance
          </Link>
        </div>
      </div>
    </div>
  );
}
