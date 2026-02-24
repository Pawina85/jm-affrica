"use client";

import { useEffect, useRef, useState, useMemo } from "react";

/* ── Calculator configs ── */

function BondCalculator() {
  const [loan, setLoan] = useState(500000);
  const [rate, setRate] = useState(7);
  const [term, setTerm] = useState(20);

  const result = useMemo(() => {
    const monthlyRate = rate / 100 / 12;
    const months = term * 12;
    const monthly =
      monthlyRate > 0
        ? (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1)
        : loan / months;
    const totalPayment = monthly * months;
    const totalInterest = totalPayment - loan;
    return { monthly, totalInterest, totalPayment };
  }, [loan, rate, term]);

  return (
    <div className="space-y-6">
      <SliderInput label="Loan Amount" value={loan} min={100000} max={10000000} step={50000} onChange={setLoan} prefix="R" format={formatCurrency} />
      <SliderInput label="Interest Rate" value={rate} min={1} max={15} step={0.25} onChange={setRate} suffix="%" />
      <SliderInput label="Bond Term" value={term} min={5} max={30} step={1} onChange={setTerm} suffix=" years" />
      <ResultsGrid
        items={[
          { label: "Monthly Repayment", value: `R${formatCurrency(result.monthly)}` },
          { label: "Total Interest Paid", value: `R${formatCurrency(result.totalInterest)}` },
          { label: "Total Payment", value: `R${formatCurrency(result.totalPayment)}` },
        ]}
      />
      <CtaBanner text="Secure Your Dream Home" sub="Calculate the ideal bond for you and take the next steps with us." />
    </div>
  );
}

function RAFCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(25000);
  const [monthsOff, setMonthsOff] = useState(6);
  const [medicalCosts, setMedicalCosts] = useState(50000);

  const result = useMemo(() => {
    const lossOfIncome = monthlyIncome * monthsOff;
    const generalDamages = Math.min(monthsOff * 15000, 350000);
    const total = lossOfIncome + medicalCosts + generalDamages;
    return { lossOfIncome, generalDamages, total };
  }, [monthlyIncome, monthsOff, medicalCosts]);

  return (
    <div className="space-y-6">
      <SliderInput label="Monthly Income" value={monthlyIncome} min={5000} max={150000} step={5000} onChange={setMonthlyIncome} prefix="R" format={formatCurrency} />
      <SliderInput label="Months Off Work" value={monthsOff} min={1} max={36} step={1} onChange={setMonthsOff} suffix=" months" />
      <SliderInput label="Medical Costs" value={medicalCosts} min={0} max={1000000} step={10000} onChange={setMedicalCosts} prefix="R" format={formatCurrency} />
      <ResultsGrid
        items={[
          { label: "Loss of Income", value: `R${formatCurrency(result.lossOfIncome)}` },
          { label: "General Damages (est.)", value: `R${formatCurrency(result.generalDamages)}` },
          { label: "Estimated Claim Value", value: `R${formatCurrency(result.total)}`, highlight: true },
        ]}
      />
      <CtaBanner text="Injured in an Accident?" sub="Get a professional assessment of your RAF claim — no upfront costs." />
    </div>
  );
}

function MaintenanceCalculator() {
  const [payerIncome, setPayerIncome] = useState(40000);
  const [recipientIncome, setRecipientIncome] = useState(15000);
  const [children, setChildren] = useState(2);

  const result = useMemo(() => {
    const combinedIncome = payerIncome + recipientIncome;
    const childCost = combinedIncome * 0.15 * children;
    const payerShare = combinedIncome > 0 ? payerIncome / combinedIncome : 0.5;
    const monthly = Math.round(childCost * payerShare);
    return { childCost, payerShare: Math.round(payerShare * 100), monthly };
  }, [payerIncome, recipientIncome, children]);

  return (
    <div className="space-y-6">
      <SliderInput label="Your Monthly Income" value={payerIncome} min={5000} max={200000} step={5000} onChange={setPayerIncome} prefix="R" format={formatCurrency} />
      <SliderInput label="Recipient's Income" value={recipientIncome} min={0} max={200000} step={5000} onChange={setRecipientIncome} prefix="R" format={formatCurrency} />
      <SliderInput label="Number of Children" value={children} min={1} max={6} step={1} onChange={setChildren} suffix={children === 1 ? " child" : " children"} />
      <ResultsGrid
        items={[
          { label: "Estimated Child Costs", value: `R${formatCurrency(result.childCost)}` },
          { label: "Your Share", value: `${result.payerShare}%` },
          { label: "Monthly Maintenance", value: `R${formatCurrency(result.monthly)}`, highlight: true },
        ]}
      />
      <CtaBanner text="Need Maintenance Advice?" sub="Speak to our family law team for proper calculation and court-ready guidance." />
    </div>
  );
}

function TransferDutyCalculator() {
  const [price, setPrice] = useState(2000000);

  const result = useMemo(() => {
    let duty = 0;
    if (price <= 1100000) duty = 0;
    else if (price <= 1512500) duty = (price - 1100000) * 0.03;
    else if (price <= 2117500) duty = 12375 + (price - 1512500) * 0.06;
    else if (price <= 2722500) duty = 48675 + (price - 2117500) * 0.08;
    else if (price <= 12100000) duty = 97075 + (price - 2722500) * 0.11;
    else duty = 1128600 + (price - 12100000) * 0.13;
    const effectiveRate = price > 0 ? (duty / price) * 100 : 0;
    return { duty, effectiveRate };
  }, [price]);

  return (
    <div className="space-y-6">
      <SliderInput label="Purchase Price" value={price} min={500000} max={20000000} step={100000} onChange={setPrice} prefix="R" format={formatCurrency} />
      <ResultsGrid
        items={[
          { label: "Transfer Duty", value: `R${formatCurrency(result.duty)}`, highlight: true },
          { label: "Effective Rate", value: `${result.effectiveRate.toFixed(2)}%` },
        ]}
      />
      <CtaBanner text="Buying Property?" sub="Our conveyancing team handles the full transfer process — from offer to registration." />
    </div>
  );
}

/* ── Shared components ── */

function formatCurrency(n: number) {
  return Math.round(n).toLocaleString("en-ZA");
}

function SliderInput({
  label, value, min, max, step, onChange, prefix, suffix, format,
}: {
  label: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; prefix?: string; suffix?: string;
  format?: (v: number) => string;
}) {
  const display = format ? `${prefix || ""}${format(value)}${suffix || ""}` : `${prefix || ""}${value}${suffix || ""}`;
  const percent = ((value - min) / (max - min)) * 100;
  return (
    <div className="border-b border-border/60 pb-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[13px] font-semibold text-charcoal">{label}</span>
        <span className="text-[16px] font-bold text-gold">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ background: `linear-gradient(to right, #B8962E ${percent}%, #E4DDD4 ${percent}%)` }}
        className="w-full h-1.5 cursor-pointer appearance-none rounded-full [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:shadow-md"
      />
      <div className="flex justify-between mt-1">
        <span className="text-[11px] text-text-mid">{prefix || ""}{format ? format(min) : min}{suffix || ""}</span>
        <span className="text-[11px] text-text-mid">{prefix || ""}{format ? format(max) : max}{suffix || ""}</span>
      </div>
    </div>
  );
}

function ResultsGrid({ items }: { items: { label: string; value: string; highlight?: boolean }[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className={`rounded border p-5 text-center ${item.highlight ? "border-gold/40 bg-gold/10" : "border-gold/20 bg-gold/5"}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-charcoal">{item.label}</p>
          <p className={`mt-2 text-[24px] font-bold ${item.highlight ? "text-gold" : "text-charcoal"}`}>{item.value}</p>
        </div>
      ))}
    </div>
  );
}

function CtaBanner({ text, sub }: { text: string; sub: string }) {
  return (
    <div className="flex flex-col gap-4 rounded border border-gold/20 bg-gold/5 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-[15px] font-semibold text-charcoal">{text}</p>
        <p className="mt-1 text-[12px] font-light text-text-mid">{sub}</p>
      </div>
      <a
        href="/contact"
        className="inline-flex shrink-0 items-center gap-2 bg-gold px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[3px] text-navy transition-colors duration-300 hover:bg-gold-light"
      >
        Get in Touch
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}

/* ── Calculators list ── */

const CALCULATORS = [
  { name: "Bond Calculator", desc: "Estimate monthly bond repayments, total interest, and total cost.", component: BondCalculator },
  { name: "RAF Compensation Calculator", desc: "Estimate your Road Accident Fund claim value.", component: RAFCalculator },
  { name: "Maintenance Calculator", desc: "Calculate spousal or child maintenance obligations.", component: MaintenanceCalculator },
  { name: "Transfer Duty Calculator", desc: "Calculate SARS transfer duty on property purchases.", component: TransferDutyCalculator },
];

/* ── Main section ── */

export default function CalculatorsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section ref={ref} className="bg-cream px-8 py-24 sm:px-12 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        {/* ── Header ── */}
        <div className="mb-14 max-w-xl">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[6px] text-gold">
            Free Calculators
          </p>
          <h2 className="text-[clamp(32px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-charcoal">
            Know Where You Stand{" "}
            <span className="text-gold">Before You Call</span>
          </h2>
          <p className="mt-6 text-[14px] font-light leading-[1.85] text-text-mid">
            Free tools to help you estimate claims, obligations, and costs —
            so you walk into your first consultation informed.
          </p>
        </div>

        {/* ── Calculator accordion ── */}
        <div className="space-y-4">
          {CALCULATORS.map((calc, i) => {
            const isOpen = openIndex === i;
            const Comp = calc.component;
            return (
              <div
                key={calc.name}
                className={`overflow-hidden border border-border bg-white transition-all duration-500 ${
                  isOpen ? "border-gold/30 shadow-[0_2px_20px_rgba(184,150,46,0.06)]" : ""
                } ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Header — clickable */}
                <button
                  onClick={() => toggle(i)}
                  className="group flex w-full items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    {/* Calculator icon */}
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${isOpen ? "border-gold/40 bg-gold/10 text-gold" : "border-gold/20 text-gold/60 group-hover:text-gold"}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="2" width="16" height="20" rx="2" />
                        <line x1="8" y1="6" x2="16" y2="6" />
                        <line x1="8" y1="10" x2="10" y2="10" />
                        <line x1="14" y1="10" x2="16" y2="10" />
                        <line x1="8" y1="14" x2="10" y2="14" />
                        <line x1="14" y1="14" x2="16" y2="14" />
                        <line x1="8" y1="18" x2="10" y2="18" />
                        <line x1="14" y1="18" x2="16" y2="18" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={`text-[16px] font-semibold transition-colors duration-300 ${isOpen ? "text-gold" : "text-charcoal group-hover:text-gold"}`}>
                        {calc.name}
                      </h3>
                      <p className="mt-0.5 text-[12px] font-light text-text-mid">{calc.desc}</p>
                    </div>
                  </div>
                  {/* Chevron */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`shrink-0 text-text-mid transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {/* Expandable calculator widget */}
                <div className={`transition-all duration-400 ease-in-out ${isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                  <div className="border-t border-border px-6 pb-6 pt-5">
                    <Comp />
                  </div>
                  <div className="px-6 pb-4">
                    <p className="text-[10px] font-light text-text-light text-center">
                      Free Calculator Widget — Estimates only. Consult an attorney for accurate advice.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
