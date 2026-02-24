import HeroSection from "@/components/home/HeroSection";
import TeamSection from "@/components/home/TeamSection";
import PracticeAreasSection from "@/components/home/PracticeAreasSection";
import TemplatesSection from "@/components/home/TemplatesSection";
import CalculatorsSection from "@/components/home/CalculatorsSection";
import PropertySearchSection from "@/components/home/PropertySearchSection";
import ArticlesSection from "@/components/home/ArticlesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-1 bg-cream">
      <div className="h-px w-24 bg-gold/30" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <TeamSection />
      <SectionDivider />
      <PracticeAreasSection />
      <SectionDivider />
      <TemplatesSection />
      <SectionDivider />
      <CalculatorsSection />
      <SectionDivider />
      <PropertySearchSection />
      <SectionDivider />
      <ArticlesSection />
      <SectionDivider />
      <TestimonialsSection />
    </>
  );
}
