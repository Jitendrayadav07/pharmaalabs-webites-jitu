
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SupplyChainDemo from "@/components/SupplyChainDemo";
import MedicineVerifier from "@/components/MedicineVerifier";
import Stakeholders from "@/components/Stakeholders";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          gsap.to(window, {
            duration: 1,
            scrollTo: {
              y: targetElement,
              offsetY: 100
            },
            ease: 'power3.inOut'
          });
        }
      });
    });
    
    // Initialize section animations (common animations for all sections)
    const sections = document.querySelectorAll("section");
    
    sections.forEach((section) => {
      // Only apply these animations to sections that don't have their own animations
      if (!section.classList.contains('custom-animation')) {
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
      }
    });

    return () => {
      // Clean up all ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Remove event listeners
      anchorLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="relative z-10 custom-animation">
          <Hero />
        </section>
        <section className="relative z-20 custom-animation">
          <Features />
        </section>
        <section className="relative z-30 custom-animation">
          <SupplyChainDemo />
        </section>
        <section className="relative z-40 custom-animation">
          <MedicineVerifier />
        </section>
        <section className="relative z-50 custom-animation">
          <Stakeholders />
        </section>
        <section className="relative z-60 custom-animation">
          <Stats />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
