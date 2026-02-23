# CLAUDE.md — JM Attorneys Inc. Website Project

## What This Project Is
A full website redesign for **JM Attorneys Inc.** (jminc.africa), a South African law firm based in Johannesburg (Sandton) and Cape Town. The client wants a high-end, magazine-style website that looks premium and credible — not a generic law firm template. The aesthetic direction is "luxury boutique SA firm" — think editorial, clean, authoritative.

---

## The Firm

**Name:** JM Attorneys Inc.
**Director:** Jaja Moodley
**Tagline:** Leading the Way in Legal Excellence
**Founded:** 1997 (27+ years)
**Stats:** 3K+ active clients · 95% case success rate · 3K+ jobs done

### Offices
| Office | Address | Phone | Email |
|---|---|---|---|
| Johannesburg | 345 Rivonia Road, 2nd Floor, Suite No. 31, Rivonia, Sandton | +27 10 018 9850 | law@jminc.africa |
| Cape Town | Tiny Empire, 37 Buitenkant St, District Six, Cape Town, 7925 | (082) 425 2345 | kerwin@jminc.africa |

---

## The 6 Lawyers

| # | Name | Role | Specialisation |
|---|---|---|---|
| 01 | Advocate J. Mokoena | Founding Partner | Criminal · Litigation · Constitutional |
| 02 | Ms. A. Dlamini | Senior Associate | Family · Labour |
| 03 | Mr. T. van Wyk | Conveyancer | Conveyancing · Property |
| 04 | Ms. N. Khumalo | Associate | Commercial & Corporate |
| 05 | Mr. R. Pillay | Associate | Wills & Estates |
| 06 | Adv. S. Botha | Associate | Road Accident Fund |

> **Note:** These are placeholder names. Replace with real lawyer details when provided by the client.

---

## 14 Practice Areas

1. Criminal Law
2. Litigation
3. Family & Labour Law
4. Conveyancing
5. Wills, Estates, Trusts & Planning
6. Notarial Law
7. Contractual Law
8. Commercial & Corporate Law
9. Insolvency & Business Rescue
10. Road Accident Fund & Medical Negligence
11. Private Investigation Services
12. Forensic Investigation for Corporates
13. Insurance Law & Advisory
14. SARS & Tax Matters
15. Crypto & Digital Assets

---

## Core Pages (6 total)

1. **Home** — Full preview of everything, team first after hero
2. **Practice Areas** — All 14 areas with descriptions and images
3. **Resources** — 3 sub-pages: Templates / Calculators / Search Now
4. **Articles** — Knowledge hub, legal news and guides
5. **About** — Firm story + team (Our Team sub-section)
6. **Contact** — Form + both office details

---

## Design System

### Color Palette
```
--cream:       #FAF8F5   /* main light background */
--cream-dark:  #F2EEE8   /* alternating light sections */
--navy:        #141824   /* main dark background */
--navy-mid:    #1E2535   /* cards on dark sections */
--navy-light:  #2A3347   /* hover states on dark */
--gold:        #B8962E   /* primary accent */
--gold-light:  #D4AE4A   /* buttons, hover states */
--gold-pale:   #F5EDD0   /* very light gold tint */
--charcoal:    #1C1C1E   /* body text on light */
--text-mid:    #4A4A52   /* secondary text on light */
--text-light:  #8A8A96   /* captions, meta */
--border:      #E4DDD4   /* dividers on light bg */
--near-black:  #0A0D14   /* footer only */
```

### Typography
- **Display / Headlines:** Cormorant Garamond (serif) — weights 300, 400, 600 · italic for emphasis
- **Body / UI:** DM Sans — weights 300, 400, 500, 600
- **Headline sizes:** clamp(36px, 4vw, 56px) for sections · clamp(52px, 5.5vw, 82px) for hero
- **Eyebrow labels:** 9–11px · letter-spacing 4px · uppercase · gold color
- **Body text:** 13–15px · line-height 1.8–1.9 · weight 300

### Section Rhythm (Always Alternate)
```
Dark navy  → Light cream → Dark navy → Light cream
```
Never two dark or two light sections back to back.

### Animations
- **Page load:** Staggered fade-up (opacity 0→1 + translateY 20–30px → 0) with 0.2s delays
- **Scroll reveal:** IntersectionObserver at threshold 0.1–0.3
- **Name rows:** Slide in from left (translateX -70px → 0) · 0.7s cubic-bezier(0.16, 1, 0.3, 1)
- **Hover cards:** Background transition 0.4s · overlay opacity + translateY 0.4s
- **Hero rotation:** Crossfade 1.4s ease · interval 5000ms
- **Counter:** Numbers count up from 0 on scroll · 60 frames
- **Nav underline:** Width 0 → 100% · 0.3s ease
- **Photo zoom:** Scale 1.04 · 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
- **Dropdown:** Opacity 0→1 + translateY -8px→0 · 0.25s ease

---

## Homepage Section Order
1. Hero (navy left / cream-right with lawyer rotation)
2. Team (navy — magazine layout, 3 photos + 3 name rows)
3. Stats Band (gold — 4 counters)
4. Practice Areas (cream — 3×2 card grid)
5. Free Templates (navy — 2 column list)
6. Calculators (cream-dark — 2 column cards)
7. Property Search (navy — chip layout)
8. Articles (cream — magazine grid)
9. Testimonials (navy — 2×2 quote grid)
10. Footer (near-black — offices + links)

---

## Navbar Structure
4 items + CTA (collapsed from original 9):
- **Practice Areas** → wide dropdown, 2-col grid of all 14 areas
- **Resources** → dropdown: Templates · Calculators · Search Now
- **Articles** → direct link
- **About** → dropdown: About Us · Our Team · Contact Us
- **Book Consultation** → navy button with gold text (always visible)

---

## Footer Structure (Same on Every Page)
1. **Offices band** — 2 columns, Johannesburg | Cape Town with real addresses + contacts
2. **Main grid** — Brand col (logo + tagline + socials) · Practice Areas links · Resources links · The Firm links
3. **Bottom bar** — Copyright · Privacy Policy · Terms of Use · POPIA Compliance

---

## Files Built So Far
- `lawfirm.html` — Full homepage with all 10 sections
- `team-section.html` — Standalone team section demo

---

## Key Decisions Made

- **Team section goes second** on homepage (right after hero) — client wants lawyers visible immediately
- **3 photo cards + 3 name-only rows** for team — magazine approach, not a grid
- **Name-only rows slide in from left** on scroll
- **Hero right panel = lawyer crossfade rotation** — all 6 cycle every 5s with slow 1.4s crossfade
- **Gold is the prestige signal** — used for all accents, never overused
- **No bright green** — the original site used bright green which read as generic template
- **Grayscale + duotone on lawyer photos** — makes any headshot look cinematic and cohesive
- **WhatsApp/Telegram floating buttons removed** — replaced with sticky "Book Consultation" bar
- **POPIA compliance** included in footer — legally required for SA websites

---

## What Still Needs to Be Built
- [ ] Practice Areas page
- [ ] Resources page (Templates / Calculators / Search sub-pages)
- [ ] Articles page
- [ ] About Us page
- [ ] Contact page
- [ ] Real lawyer photos and names
- [ ] Real article content
- [ ] Mobile responsive polish
- [ ] Individual lawyer profile pages (optional)
