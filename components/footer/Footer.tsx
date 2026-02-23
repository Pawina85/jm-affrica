import OfficesBand from "./OfficesBand";
import FooterGrid from "./FooterGrid";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="bg-near-black">
      <OfficesBand />
      <FooterGrid />
      <FooterBottom />
    </footer>
  );
}
