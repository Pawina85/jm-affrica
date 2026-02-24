"use client";

import { useEffect, useRef, useState, useMemo } from "react";

const CATEGORIES = ["All", "Company", "Family", "Law", "Legal", "General", "Tips"];

const ARTICLES = [
  {
    title: "Daniel Intemba v Festo Zikanga (Civil Appeal No. 67 of 1971) [1972] EACA 12 (5 July 1972)",
    category: "Law",
    date: "5 Jul 1972",
  },
  {
    title: "East African Law Society and Others v Attorney General of the Republic of Kenya and Others (Ref. No. 3 of 2007)",
    category: "Legal",
  },
  {
    title: "Kgosi v China Civil Engineering (IC. 500/2004) [2006] BWIC 6; [2006] 1 BLR 411 (1 February 2006)",
    category: "Company",
    date: "1 Feb 2006",
  },
  {
    title: "Cyril Herbert Mayers and Another v Akira Ranch Limited (Civil Appeal No. 40 of 1971) [1972] EACA 13 (11 August 1972)",
    category: "Law",
    date: "11 Aug 1972",
  },
  {
    title: "Molokwe v Phakalane Golf Estate Hotel Resort (IC. 222/04) [2006] BWIC 7; [2006] 1 BLR 402 (1 February 2006)",
    category: "Company",
    date: "1 Feb 2006",
  },
  {
    title: "Molosiwa v E.S.O. (IC. 475/2004) [2006] BWIC 8; [2006] 1 BLR 386 (1 February 2006)",
    category: "Legal",
    date: "1 Feb 2006",
  },
  {
    title: "Theodore Wynand Potgieter v Louis Herbert Stumberg and Another (Civil Appeal No. 20 of 1971) [1972] EACA 14 (30 August 1972)",
    category: "Law",
    date: "30 Aug 1972",
  },
  {
    title: "Jayantilal Somabhai Shah v Consolidated Printers Ltd and Others (Civil Appeal No. 44 of 1971) [1972] EACA 15 (22 December 1972)",
    category: "Company",
    date: "22 Dec 1972",
  },
  {
    title: "Understanding Your Rights During a SARS Audit",
    category: "Tips",
    date: "10 Jan 2026",
  },
  {
    title: "How to Structure a Family Trust in South Africa",
    category: "Family",
    date: "3 Feb 2026",
  },
  {
    title: "The Impact of POPIA on Corporate Compliance",
    category: "Company",
    date: "20 Jan 2026",
  },
  {
    title: "A Guide to Business Rescue Under the Companies Act",
    category: "General",
    date: "15 Feb 2026",
  },
];

const INITIAL_COUNT = 5;

export default function ArticlesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = useMemo(() => {
    return ARTICLES.filter((a) => {
      const matchCategory = activeCategory === "All" || a.category === activeCategory;
      const matchSearch = search === "" || a.title.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  return (
    <section ref={ref} id="articles" className="bg-cream px-8 py-24 sm:px-12 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        {/* ── Header ── */}
        <div className="mb-10">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[6px] text-gold">
            Articles & Insights
          </p>
          <h2 className="text-[clamp(32px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-charcoal">
            Daily News, Case Studies{" "}
            <span className="text-gold">& Legal Updates</span>
          </h2>
        </div>

        {/* ── Search + Categories row ── */}
        <div
          className={`mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {/* Search bar */}
          <div className="relative w-full max-w-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setShowAll(false); }}
              className="w-full border border-border bg-white py-3 pl-11 pr-4 text-[13px] font-light text-charcoal placeholder:text-text-light focus:border-gold/50 focus:outline-none transition-colors duration-300"
            />
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setShowAll(false); }}
                className={`rounded-full border px-4 py-1.5 text-[11px] font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "border-gold bg-gold text-navy"
                    : "border-border bg-white text-charcoal hover:border-gold/40 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Key Articles heading ── */}
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[4px] text-text-mid">
          Key Articles · {filtered.length} results
        </p>

        {/* ── Article list ── */}
        <div className="divide-y divide-border">
          {visible.map((article, i) => (
            <a
              key={i}
              href="/articles"
              className={`group flex items-start justify-between gap-4 py-5 transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: `${Math.min(i * 80, 400)}ms` }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-gold/10 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[2px] text-gold">
                    {article.category}
                  </span>
                  {article.date && (
                    <span className="text-[10px] font-medium text-text-light">
                      {article.date}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-[15px] font-medium leading-[1.5] text-charcoal transition-colors duration-300 group-hover:text-gold">
                  {article.title}
                </h3>
              </div>
              {/* Arrow */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-3 shrink-0 text-text-light transition-all duration-300 group-hover:text-gold group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-[14px] font-light text-text-mid">
              No articles found. Try a different search or category.
            </p>
          </div>
        )}

        {/* ── See More ── */}
        {hasMore && !showAll && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[3px] text-navy transition-colors duration-300 hover:bg-gold-light"
            >
              See More Articles
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        )}

        {/* ── Tags ── */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[4px] text-text-mid">
            Popular Tags
          </p>
          <div className="flex flex-wrap gap-2">
            {["Criminal Law", "RAF Claims", "Property", "Family Law", "Corporate", "Tax", "POPIA", "Business Rescue"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-white px-4 py-1.5 text-[11px] font-medium text-text-mid transition-colors duration-300 hover:border-gold/40 hover:text-gold cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
