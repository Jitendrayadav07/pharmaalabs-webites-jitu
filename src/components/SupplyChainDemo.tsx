
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
  const timelineRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);
  const [progress, setProgress] = useState(25);

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
      // Animate section elements when scrolled into view
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

      gsap.from(sectionRef.current.querySelectorAll('.flow-step'), {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(sectionRef.current.querySelector('.flow-detail-card'), {
        scale: 0.95,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
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
        <div className="mb-10 text-center section-header">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-4">How It Works</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            End-to-End Supply Chain Tracking
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            Our blockchain solution ensures transparency and accountability at every step.
          </p>
        </div>

        {/* Flow Timeline with Connecting Lines */}
        <div className="relative max-w-6xl mx-auto mb-12">
          {/* Progress Bar */}
          <div className="mb-2 px-4">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Start</span>
              <span>Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          {/* Flow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gray-200 z-0"></div>
            
            {supplyChainSteps.map((step, index) => {
              const isActive = index === activeStep;
              const isPast = index < activeStep;
              const isFuture = index > activeStep;
              
              return (
                <div 
                  key={step.id}
                  className={`flow-step relative z-10 flex flex-col items-center ${
                    isActive ? "scale-105 transition-all duration-300" : ""
                  }`}
                  onClick={() => handleStepClick(index)}
                >
                  {/* Step Number & Icon */}
                  <div className={`
                    w-20 h-20 rounded-full flex items-center justify-center
                    shadow-md transition-all duration-300 cursor-pointer
                    ${isActive ? step.color : isPast ? "bg-green-100" : "bg-gray-100"}
                    ${isActive ? "ring-4 ring-opacity-50 " + step.color.replace("bg-", "ring-") : ""}
                  `}>
                    {isPast ? (
                      <Check className="h-10 w-10 text-green-500" />
                    ) : (
                      React.createElement(step.icon, {
                        className: `h-10 w-10 ${isActive ? "text-white" : "text-gray-500"}`,
                      })
                    )}
                    
                    {/* Step number indicator */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Step Title */}
                  <h3 className={`mt-4 font-medium text-center ${isActive ? "text-primary" : "text-gray-700"}`}>
                    {step.title}
                  </h3>
                  
                  {/* Connector Arrow */}
                  {index < supplyChainSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-10 left-[calc(100%-16px)] z-20">
                      <ChevronRight className={`h-8 w-8 ${index < activeStep ? "text-green-500" : "text-gray-300"}`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Active Step Details */}
        <div className={`
          flow-detail-card max-w-4xl mx-auto 
          ${animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} 
          transition-all duration-300
        `}>
          <Card className="shadow-lg border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-7 gap-0">
                {/* Left Panel - Icon */}
                <div className="lg:col-span-3 flex justify-center items-center p-8">
                  <div className={`p-8 rounded-xl ${supplyChainSteps[activeStep].color}/10 aspect-square flex items-center justify-center`}>
                    <div className={`relative rounded-full ${supplyChainSteps[activeStep].color} p-8 shadow-lg`}>
                      {React.createElement(supplyChainSteps[activeStep].icon, {
                        className: "h-16 w-16 text-white",
                      })}
                      <div className="absolute -right-2 -bottom-2 h-8 w-8 bg-white rounded-full shadow-sm flex items-center justify-center">
                        <div className={`h-6 w-6 ${supplyChainSteps[activeStep].color} rounded-full flex items-center justify-center`}>
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Details */}
                <div className="lg:col-span-4 flex flex-col justify-center p-8 bg-gray-50 h-full">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Clock className="h-4 w-4" />
                    <span>Auto-advancing in 5s</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{supplyChainSteps[activeStep].title}</h3>
                  <p className="text-gray-600 mb-6">{supplyChainSteps[activeStep].description}</p>
                  
                  <div className="bg-white border border-gray-100 rounded-lg p-4 mb-6">
                    <div className="text-sm font-medium text-gray-700 mb-1">Blockchain Verification:</div>
                    <div className="text-gray-600">{supplyChainSteps[activeStep].detail}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      onClick={() => handleStepClick((activeStep + supplyChainSteps.length - 1) % supplyChainSteps.length)}
                      variant="outline"
                      size="sm"
                      className="gap-1"
                    >
                      Previous
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
            </CardContent>
          </Card>
        </div>
                
        {/* Mobile Version Indicators */}
        <div className="md:hidden flex justify-center mt-8">
          <div className="flex space-x-2">
            {supplyChainSteps.map((_, index) => (
              <div 
                key={index}
                onClick={() => handleStepClick(index)}
                className={`h-2 rounded-full cursor-pointer transition-all ${
                  index === activeStep 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainDemo;
