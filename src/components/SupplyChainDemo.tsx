
import React, { useState, useEffect, useRef } from "react";
import { Truck, ShieldCheck, QrCode, Database, ArrowRight, Check, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
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
  const [activeStep, setActiveStep] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(25);
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

  // Update progress based on activeStep
  useEffect(() => {
    setProgress(((activeStep + 1) / supplyChainSteps.length) * 100);
  }, [activeStep]);

  // GSAP animations when section comes into view
  useEffect(() => {
    if (sectionRef.current) {
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

      gsap.from(sectionRef.current.querySelectorAll('.step-card'), {
        scale: 0.95,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleStepClick = (index) => {
    if (animating || index === activeStep) return;
    
    // Reset auto-scroll timer
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
    <div ref={sectionRef} id="solution" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center section-header">
          <div className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-primary px-4 py-2 mb-4 text-white font-medium">
            <span className="animate-pulse">Live Supply Chain Tracking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">How It Works</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our blockchain solution ensures transparency and accountability at every step of the pharmaceutical supply chain.
          </p>
        </div>

        {/* Supply Chain Flow Animation */}
        <div className="mb-16">
          {/* Progress indicator */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-500">Progress</span>
              <span className="text-sm font-medium text-primary">{activeStep + 1}/{supplyChainSteps.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Supply Chain Flow Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
            {/* Left Side: Steps List */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-xl shadow-md p-1">
                {supplyChainSteps.map((step, index) => (
                  <div
                    key={step.id}
                    onClick={() => handleStepClick(index)}
                    className={`
                      step-card relative flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300
                      ${index === activeStep ? 'bg-gradient-to-r from-gray-50 to-blue-50 shadow-sm' : 'hover:bg-gray-50'}
                      ${index !== supplyChainSteps.length - 1 ? 'border-b border-gray-100' : ''}
                    `}
                  >
                    {/* Step Number */}
                    <div className={`
                      w-8 h-8 flex items-center justify-center rounded-full mr-3
                      ${index === activeStep ? step.color : index < activeStep ? 'bg-green-500' : 'bg-gray-200'}
                      transition-colors duration-300
                    `}>
                      <span className="text-white font-medium">{index + 1}</span>
                    </div>
                    
                    {/* Step Title */}
                    <div className="flex-grow">
                      <h4 className={`font-medium ${index === activeStep ? 'text-primary' : 'text-gray-700'}`}>
                        {step.title}
                      </h4>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="ml-2">
                      {index < activeStep ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : index === activeStep ? (
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-gray-300" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Side: Active Step Details */}
            <div className="lg:col-span-8">
              <div className={`
                h-full rounded-xl overflow-hidden shadow-lg transition-all duration-300
                ${animating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}
              `}>
                <div className="h-full bg-white rounded-xl overflow-hidden">
                  <div className={`h-2 ${supplyChainSteps[activeStep].color}`}></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 h-full">
                    {/* Icon Column */}
                    <div className="md:col-span-5 flex items-center justify-center p-8 relative bg-gradient-to-br from-gray-50 to-white">
                      <div className={`
                        w-24 h-24 rounded-xl ${supplyChainSteps[activeStep].color} 
                        flex items-center justify-center shadow-lg
                      `}>
                        {React.createElement(supplyChainSteps[activeStep].icon, {
                          className: "h-12 w-12 text-white",
                          strokeWidth: 1.5
                        })}
                      </div>
                      
                      {/* Connecting arrow for desktop */}
                      <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                        <div className="bg-white rounded-full p-1 shadow-md">
                          <ArrowRight className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="md:col-span-7 p-8 flex flex-col">
                      {/* Auto-updating Indicator */}
                      <div className="inline-flex items-center gap-2 text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full mb-4 w-fit">
                        <Clock className="h-3 w-3" />
                        <span>Auto-advancing in 5s</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3">{supplyChainSteps[activeStep].title}</h3>
                      <p className="text-gray-600 mb-6">{supplyChainSteps[activeStep].description}</p>
                      
                      {/* Blockchain Verification Details */}
                      <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                          <h4 className="text-sm font-semibold text-blue-800">Blockchain Verification</h4>
                        </div>
                        <p className="text-sm text-gray-700">{supplyChainSteps[activeStep].detail}</p>
                      </div>
                      
                      {/* Navigation Buttons */}
                      <div className="mt-auto flex flex-wrap gap-3">
                        <Button 
                          onClick={() => handleStepClick((activeStep + supplyChainSteps.length - 1) % supplyChainSteps.length)}
                          variant="outline"
                          size="sm"
                          className="gap-1"
                        >
                          Previous Step
                        </Button>
                        <Button 
                          onClick={() => handleStepClick((activeStep + 1) % supplyChainSteps.length)}
                          className="gap-1"
                          size="sm"
                        >
                          Next Step
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Steps Indicator */}
        <div className="lg:hidden flex justify-center mt-8">
          <div className="flex space-x-2">
            {supplyChainSteps.map((_, index) => (
              <button 
                key={index}
                onClick={() => handleStepClick(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeStep 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainDemo;
