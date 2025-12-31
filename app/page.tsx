import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ContactCTA from "@/components/ContactCTA";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import CompanyStats from "@/components/CompanyStats";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative space-y-4">
      <div className="space-y-0">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />

        <Portfolio />
        <Testimonials />
        <Certifications />
        <CompanyStats />
        <ContactSection />
        <Footer />
      </div>


    </main>
  );
}
