
import React, { useRef, useEffect } from "react";
import { Truck, ShieldCheck, QrCode, Database } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const supplyChainSteps = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Pharmaceuticals are manufactured and assigned unique digital identifiers recorded on the blockchain.",
    icon: Database,
    color: "bg-blue-500",
    detail: "Batch #A78942 of Amoxicillin registered with tamper-proof digital certificate"
  },
  {
    id: "distribution",
    title: "Distribution",
    description: "Smart contracts verify proper handling conditions during transport to distributors.",
    icon: Truck,
    color: "bg-indigo-500",
    detail: "Temperature: 2.0-8.0°C maintained ✓ • Location: GPS tracking verified"
  },
  {
    id: "retailers",
    title: "Pharmacy/Retail",
    description: "Retailers verify product authenticity before accepting into inventory and selling to consumers.",
    icon: ShieldCheck,
    color: "bg-purple-500",
    detail: "Authentication: Digital signature verified ✓ • Batch verification: confirmed"
  },
  {
    id: "consumer",
    title: "Consumer Verification",
    description: "Consumers scan QR codes to verify medication authenticity and full supply chain history.",
    icon: QrCode,
    color: "bg-primary",
    detail: "Authentic medication confirmed ✓ • Manufactured: 05/12/2023 • Exp: 05/11/2025"
  },
];

const SupplyChainDemo = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Header animation
    gsap.from(sectionRef.current.querySelector('.section-header'), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Steps animations
    stepsRef.current.forEach((step, index) => {
      if (!step) return;

      // Create timeline for each step
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: step,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scrub: 1,
        }
      });

      // Add animations to timeline
      tl.from(step, {
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1
      });

      // Animate icon
      tl.from(step.querySelector('.step-icon'), {
        scale: 0,
        rotate: 180,
        duration: 0.5
      }, "-=0.5");

      // Animate content
      tl.from(step.querySelector('.step-content'), {
        y: 50,
        opacity: 0,
        duration: 0.5
      }, "-=0.3");
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="section-header text-center mb-20">
          <div className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-primary px-4 py-2 mb-4">
            <span className="text-white font-medium">Supply Chain Tracking</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
              How It Works
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our blockchain solution ensures transparency and accountability at every step of the pharmaceutical supply chain.
          </p>
        </div>

        {/* Steps Section */}
        <div className="space-y-32">
          {supplyChainSteps.map((step, index) => (
            <div
              key={step.id}
              ref={el => stepsRef.current[index] = el}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
            >
              {/* Icon Section */}
              <div className="w-full md:w-1/3 flex justify-center">
                <div className={`step-icon relative w-32 h-32 ${step.color} rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-110`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {React.createElement(step.icon, {
                      className: "w-16 h-16 text-white",
                      strokeWidth: 1.5
                    })}
                  </div>
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-lg font-bold text-primary">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="step-content w-full md:w-2/3 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-lg text-gray-600">{step.description}</p>
                <div className={`p-4 rounded-lg bg-white shadow-md border-l-4 ${step.color} space-y-2`}>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${step.color}`}></div>
                    <span className="font-medium text-gray-700">Verification Details</span>
                  </div>
                  <p className="text-gray-600">{step.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupplyChainDemo;
