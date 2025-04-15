
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SupplyChainDemo from "@/components/SupplyChainDemo";
import MedicineVerifier from "@/components/MedicineVerifier";
import Stakeholders from "@/components/Stakeholders";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Initialize smooth scroll animations
    const sections = document.querySelectorAll("section");
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow space-y-0">
        <section className="relative z-10">
          <Hero />
        </section>
        <section className="relative z-20">
          <Features />
        </section>
        <section className="relative z-30">
          <SupplyChainDemo />
        </section>
        <section className="relative z-40">
          <MedicineVerifier />
        </section>
        <section className="relative z-50">
          <Stakeholders />
        </section>
        <section className="relative z-60">
          <Stats />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
