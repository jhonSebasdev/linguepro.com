import BenefitsSection from "@/components/BenefitsSection";
import CampusSection from "@/components/CampusSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import IntroVideo from "@/components/IntroVideo";
import ProgramsSection from "@/components/ProgramsSection";
import RandomGallery from "@/components/RandomGallery";
import ScrollProgress from "@/components/ScrollProgress";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <IntroVideo />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <BenefitsSection />
        <ProgramsSection />
        <RandomGallery />
        <HowItWorks />
        <CampusSection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
