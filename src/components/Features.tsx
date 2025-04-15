
import React, { useEffect, useRef } from "react";
import { Shield, Database, QrCode, FileCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    name: "Blockchain-Based Supply Chain",
    description: "Track and verify every step of the medicine's journey from production to consumer using decentralized blockchain technology.",
    icon: Database,
    color: "from-blue-500 to-blue-600",
    delay: 0,
  },
  {
    name: "Medicine Authentication",
    description: "Instantly verify medicine authenticity with a simple scan, giving consumers confidence in their medication.",
    icon: QrCode,
    color: "from-purple-500 to-purple-600",
    delay: 0.2,
  },
  {
    name: "Smart Contracts for Compliance",
    description: "Automated quality control and regulatory compliance through smart contracts to maintain medicine integrity.",
    icon: FileCheck,
    color: "from-primary to-primary-dark",
    delay: 0.4,
  },
  {
    name: "Global Protection System",
    description: "Focused on vulnerable regions to ensure global protection against counterfeit medicines where it's needed most.",
    icon: Shield,
    color: "from-pharma-accent to-primary",
    delay: 0.6,
  },
];

const Features = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const featureRefs = useRef([]);
  
  useEffect(() => {
    // Initialize animations
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      }
    });
    
    // Animate the title and description
    timeline.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
    
    timeline.from(descRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.4");
    
    // Animate each feature card
    featureRefs.current.forEach((card, index) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        }
      });
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      id="features" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <div className="inline-block rounded-full bg-gradient-to-r from-primary to-pharma-accent px-4 py-2 mb-4">
            <span className="text-white font-medium">Features</span>
          </div>
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
          >
            A Better Way to Ensure
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-pharma-accent ml-2">
              Medicine Authenticity
            </span>
          </h2>
          <p 
            ref={descRef}
            className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
          >
            Our integrated solution addresses the critical challenges in pharmaceutical supply chains.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              ref={el => featureRefs.current[index] = el}
              className="group relative p-6 bg-white rounded-2xl shadow-sm border border-gray-100 
                       transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
            >
              <div className="relative z-10">
                <div 
                  className={`inline-flex items-center justify-center p-3 bg-gradient-to-r ${feature.color} 
                              rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-6 w-6 text-white transition-all duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="mt-8 text-xl font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-4 text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                  {feature.description}
                </p>
                <div className="mt-6 flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn more</span>
                  <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-gradient-to-r from-primary/5 to-pharma-accent/5 rounded-tl-3xl -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
