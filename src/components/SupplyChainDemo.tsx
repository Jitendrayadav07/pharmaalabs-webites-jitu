
import React, { useState, useEffect, useRef } from "react";
import { Truck, ShieldCheck, QrCode, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

const supplyChainSteps = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Pharmaceuticals are manufactured and assigned unique digital identifiers recorded on the blockchain.",
    icon: Database,
    color: "bg-blue-500",
  },
  {
    id: "distribution",
    title: "Distribution",
    description: "Smart contracts verify proper handling conditions during transport to distributors.",
    icon: Truck,
    color: "bg-indigo-500",
  },
  {
    id: "retailers",
    title: "Pharmacy/Retail",
    description: "Retailers verify product authenticity before accepting into inventory and selling to consumers.",
    icon: ShieldCheck,
    color: "bg-purple-500",
  },
  {
    id: "consumer",
    title: "Consumer Verification",
    description: "Consumers scan QR codes to verify medication authenticity and full supply chain history.",
    icon: QrCode,
    color: "bg-primary",
  },
];

const SupplyChainDemo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [animating, setAnimating] = useState(false);
  const scrollContainerRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  // Auto scroll through steps
  useEffect(() => {
    autoScrollIntervalRef.current = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % supplyChainSteps.length);
        setAnimating(false);
      }, 500);
    }, 5000); // Change step every 5 seconds

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, []);

  // Animate the active step
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.children[activeStep];
      if (activeElement) {
        gsap.to(scrollContainerRef.current, {
          scrollTo: { 
            y: activeElement.offsetTop - 20, 
            autoKill: true 
          },
          duration: 0.5,
          ease: "power2.out"
        });
      }
    }
  }, [activeStep]);

  const handleNextStep = () => {
    if (animating) return;
    
    setAnimating(true);
    setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % supplyChainSteps.length);
      setAnimating(false);
    }, 500);
  };

  const handleStepClick = (index) => {
    if (animating || index === activeStep) return;
    
    // Reset auto-scroll timer when manual click happens
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = setInterval(() => {
        setAnimating(true);
        setTimeout(() => {
          setActiveStep((prev) => (prev + 1) % supplyChainSteps.length);
          setAnimating(false);
        }, 500);
      }, 5000);
    }
    
    setAnimating(true);
    setTimeout(() => {
      setActiveStep(index);
      setAnimating(false);
    }, 300);
  };

  return (
    <div id="solution" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12 animate-fade-in">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            End-to-End Supply Chain Tracking
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our blockchain solution ensures transparency and accountability at every step.
          </p>
        </div>

        <div className="relative">
          {/* Supply Chain Auto-Scrolling Demo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 h-full animate-fade-in animate-hover-glow">
                <div className="relative h-64 md:h-80 mb-4 overflow-hidden rounded-lg bg-white">
                  <div 
                    className={`h-full w-full flex items-center justify-center transition-all duration-500 ${
                      animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                    }`}
                  >
                    <div className="text-center p-6 max-w-md">
                      <div className="mb-4 flex justify-center">
                        <div className={`p-4 rounded-full ${supplyChainSteps[activeStep].color} animate-bounce-light`}>
                          {React.createElement(supplyChainSteps[activeStep].icon, {
                            className: "h-8 w-8 text-white",
                          })}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {supplyChainSteps[activeStep].title}
                      </h3>
                      <p className="text-gray-600">
                        {supplyChainSteps[activeStep].description}
                      </p>
                      
                      {activeStep === 0 && (
                        <div className="mt-4 p-3 bg-pharma-light rounded-lg text-sm text-gray-700 animate-fade-in">
                          <strong>Blockchain event:</strong> Batch #A78942 of Amoxicillin registered with tamper-proof digital certificate
                        </div>
                      )}
                      
                      {activeStep === 1 && (
                        <div className="mt-4 p-3 bg-pharma-light rounded-lg text-sm text-gray-700 animate-fade-in">
                          <strong>Temperature log:</strong> 2.0-8.0°C maintained throughout transport ✓ <br />
                          <strong>Location:</strong> Verified through secure GPS tracking
                        </div>
                      )}
                      
                      {activeStep === 2 && (
                        <div className="mt-4 p-3 bg-pharma-light rounded-lg text-sm text-gray-700 animate-fade-in">
                          <strong>Authentication:</strong> Digital signature verified ✓<br />
                          <strong>Batch verification:</strong> Origin and handling conditions confirmed
                        </div>
                      )}
                      
                      {activeStep === 3 && (
                        <div className="mt-4 p-3 bg-pharma-light rounded-lg text-sm text-gray-700 animate-fade-in">
                          <strong>Scan result:</strong> Authentic medication confirmed ✓<br />
                          <strong>Manufactured:</strong> 05/12/2023 • <strong>Exp:</strong> 05/11/2025
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="overflow-hidden mb-4 rounded">
                  <div className="flex justify-between px-2 py-1 bg-gray-100">
                    <div className="text-sm text-gray-500">Auto-scrolling supply chain journey</div>
                    <div className="text-sm text-primary">{activeStep + 1}/{supplyChainSteps.length}</div>
                  </div>
                  <div className="w-full bg-gray-200 h-1.5">
                    <div 
                      className="bg-primary h-1.5 transition-all duration-300"
                      style={{ width: `${((activeStep + 1) / supplyChainSteps.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <Button
                  onClick={handleNextStep}
                  className="w-full bg-primary hover:bg-primary-dark transition-all duration-300 hover:shadow-lg"
                >
                  Skip to Next Step
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supply Chain Journey</h3>
              
              <div className="relative overflow-x-auto">
                <div className="absolute top-0 left-0 -z-10 w-full overflow-hidden whitespace-nowrap">
                  <div className="inline-block animate-marquee">
                    {[...supplyChainSteps, ...supplyChainSteps].map((step, idx) => (
                      <div 
                        key={`marquee-${step.id}-${idx}`}
                        className="inline-block px-2"
                      >
                        <div className={`p-2 rounded-md ${step.color} mx-2`}>
                          {React.createElement(step.icon, {
                            className: "h-4 w-4 text-white",
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div 
                ref={scrollContainerRef}
                className="space-y-4 stagger-animation overflow-auto max-h-[500px] scroll-smooth pr-2 hide-scrollbar"
              >
                {supplyChainSteps.map((step, index) => (
                  <div
                    key={step.id}
                    onClick={() => handleStepClick(index)}
                    className={`flex items-start p-4 rounded-lg cursor-pointer transition-all duration-300 transform ${
                      activeStep === index
                        ? "bg-primary text-white shadow-md scale-105"
                        : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100 hover:-translate-y-1 hover:shadow-md"
                    }`}
                  >
                    <div className={`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300 ${
                      activeStep === index ? "bg-white" : step.color
                    } mr-4 ${activeStep === index ? "" : "animate-pulse-slow"}`}>
                      {React.createElement(step.icon, {
                        className: `h-5 w-5 ${activeStep === index ? "text-primary" : "text-white"} transition-all duration-300`,
                      })}
                    </div>
                    <div>
                      <h4 className={`text-lg font-medium ${
                        activeStep === index ? "text-white" : "text-gray-900"
                      }`}>
                        {step.title}
                      </h4>
                      <p className={`mt-1 text-sm ${
                        activeStep === index ? "text-white/90" : "text-gray-500"
                      }`}>
                        {step.description}
                      </p>
                    </div>
                    {activeStep === index && (
                      <div className="absolute right-3 w-2 h-full">
                        <div className="h-full w-1 bg-white/30 rounded-full overflow-hidden">
                          <div className="h-2/5 w-full bg-white rounded-full animate-scan"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
          /* Auto-scrolling marquee effect */
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          .animate-marquee {
            white-space: nowrap;
            animation: marquee 15s linear infinite;
          }
          
          /* Hide scrollbar but keep functionality */
          .hide-scrollbar {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
          }
          
          .hide-scrollbar::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        `}
      </style>
    </div>
  );
};

export default SupplyChainDemo;
