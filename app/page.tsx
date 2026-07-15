import PromoBanner from "../components/PromoBanner";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LogoCloud from "../components/LogoCloud";
import TrustPillStream from "../components/TrustPillStream";
import TreatmentExplorer from "../components/TreatmentExplorer";
import Pricing from "../components/Pricing";
import LeadCapture from "../components/LeadCapture";
import PatientJourney from "../components/PatientJourney";
import Testimonials from "../components/Testimonials";
import ImpactMetrics from "../components/ImpactMetrics";
import BlogSection from "../components/BlogSection";
import FAQ from "../components/FAQ";
import ServiceHighlight from "../components/ServiceHighlight";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <PromoBanner />
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-between">
        <Hero />
        <LogoCloud />
        <TrustPillStream />
        <TreatmentExplorer />
        <Pricing />
        <LeadCapture />
        <PatientJourney />
        <Testimonials />
        <ImpactMetrics />
        <BlogSection />
        <FAQ />
        <ServiceHighlight />
      </main>
      <Footer />
    </>
  );
}
