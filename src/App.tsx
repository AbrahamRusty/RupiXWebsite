import { RupixHeader } from "./components/RupixHeader";
import { RupixHero } from "./components/RupixHero";
import { RupixAbout } from "./components/RupixAbout";
import { RupixHowItWorks } from "./components/RupixHowItWorks";
import { RupixFeatures } from "./components/RupixFeatures";
import { RupixUseCases } from "./components/RupixUseCases";
import { RupixTestimonials } from "./components/RupixTestimonials";
import { RupixSecurity } from "./components/RupixSecurity";
import { RupixPricing } from "./components/RupixPricing";
import { RupixFAQ } from "./components/RupixFAQ";
import { RupixContact } from "./components/RupixContact";
import { RupixFooter } from "./components/RupixFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <RupixHeader />
      <main>
        <RupixHero />
        <RupixAbout />
        <RupixHowItWorks />
        <RupixFeatures />
        <RupixUseCases />
        <RupixTestimonials />
        <RupixSecurity />
        <RupixPricing />
        <RupixFAQ />
        <RupixContact />
      </main>
      <RupixFooter />
    </div>
  );
}
