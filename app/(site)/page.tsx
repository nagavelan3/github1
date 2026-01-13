import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ContactCTA from "@/components/ContactCTA";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import CompanyStats from "@/components/CompanyStats";
import VisionSection from "@/components/VisionSection";
import ConsultationCTA from "@/components/ConsultationCTA";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen relative space-y-4">
      <div className="space-y-0">
        <Hero />

        <About />
        <Services />
        {/* <Projects /> */}
        <ContactCTA />

        <Portfolio />
        <Testimonials />
        <Certifications />
        {/* <CompanyStats /> */}
        <WhyChooseUs />
        <VisionSection />
        <ConsultationCTA />
      </div>
    </main>
  );
}
