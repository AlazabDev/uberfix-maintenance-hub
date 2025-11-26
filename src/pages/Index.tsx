import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import About from "@/components/About";
import FounderLight from "@/components/FounderLight";
import GlobalMap from "@/components/GlobalMap";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Services />
      <About />
      <FounderLight />
      <GlobalMap />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
