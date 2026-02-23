export default function Home() {
  return (
    <>
      {/* ── Cream section ── */}
      <section className="bg-cream px-8 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-4">Established 1997</p>
          <h1 className="font-display text-[clamp(36px,4vw,56px)] font-light leading-[1.15] text-charcoal">
            Leading the Way in{" "}
            <em className="font-display italic text-gold">Legal Excellence</em>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] font-light leading-[1.85] text-text-mid">
            JM Attorneys Inc. is a premium South African law firm based in
            Johannesburg and Cape Town, offering expert legal services across 14
            practice areas.
          </p>
        </div>
      </section>

      {/* ── Navy section ── */}
      <section className="bg-navy px-8 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-4">Our Practice</p>
          <h2 className="font-display text-[clamp(36px,4vw,56px)] font-light leading-[1.15] text-cream">
            Trusted Counsel for{" "}
            <em className="font-display italic text-gold">Every Matter</em>
          </h2>
          <p className="mt-6 max-w-xl text-[15px] font-light leading-[1.85] text-text-light">
            From criminal law and litigation to commercial transactions and
            estate planning — we bring 27 years of experience to every case.
          </p>
        </div>
      </section>

      {/* ── Gold accent band ── */}
      <section className="bg-gold px-8 py-16">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-8 text-center">
          <div>
            <p className="font-display text-[42px] font-semibold leading-none text-navy">
              3K+
            </p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[3px] text-navy/70">
              Active Clients
            </p>
          </div>
          <div>
            <p className="font-display text-[42px] font-semibold leading-none text-navy">
              95%
            </p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[3px] text-navy/70">
              Success Rate
            </p>
          </div>
          <div>
            <p className="font-display text-[42px] font-semibold leading-none text-navy">
              27+
            </p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[3px] text-navy/70">
              Years
            </p>
          </div>
          <div>
            <p className="font-display text-[42px] font-semibold leading-none text-navy">
              3K+
            </p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[3px] text-navy/70">
              Jobs Done
            </p>
          </div>
        </div>
      </section>

      {/* ── Cream-dark section ── */}
      <section className="bg-cream-dark px-8 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-4">Design System</p>
          <h2 className="font-display text-[clamp(36px,4vw,56px)] font-light leading-[1.15] text-charcoal">
            Fonts &amp; Colors{" "}
            <em className="font-display italic text-gold">Verified</em>
          </h2>
          <p className="mt-6 max-w-xl text-[15px] font-light leading-[1.85] text-text-mid">
            This placeholder page confirms the design system is wired up:
            Cormorant Garamond for display, DM Sans for body, and the full
            navy / cream / gold palette.
          </p>
        </div>
      </section>
    </>
  );
}
