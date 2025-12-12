import Navigation from "@/components/Navigation";
import HeroUberFix from "@/components/HeroUberFix";
import Statistics from "@/components/Statistics";
import Features from "@/components/Features";
import AppPromo from "@/components/AppPromo";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import MaintenanceTimeline from "@/components/MaintenanceTimeline";
import FounderLight from "@/components/FounderLight";
import TechnicianCTA from "@/components/TechnicianCTA";
import GlobalMap from "@/components/GlobalMap";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroUberFix />
      <Statistics />
      <Features />

      <AppPromo />

     <HowItWorks />

      <Services />
      <About />
      <Testimonials />
      <MaintenanceTimeline />
      <FounderLight />
      <TechnicianCTA />
      <GlobalMap />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
