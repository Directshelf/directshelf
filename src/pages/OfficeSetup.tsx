import Header from "@/components/layout/Header";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import OfficeHero from "@/components/office-setup/OfficeHero";
import AboutSection from "@/components/office-setup/AboutSection";
import ExpertiseSection from "@/components/office-setup/ExpertiseSection";
import WhyChooseUs from "@/components/office-setup/WhyChooseUs";
import ClientsSection from "@/components/office-setup/ClientsSection";
import OfficeCTA from "@/components/office-setup/OfficeCTA";

const OfficeSetup = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <OfficeHero />
        <AboutSection />
        <ExpertiseSection />
        <WhyChooseUs />
        <ClientsSection />
        <OfficeCTA />
      </main>
      <MobileBottomBar />
    </div>
  );
};

export default OfficeSetup;
