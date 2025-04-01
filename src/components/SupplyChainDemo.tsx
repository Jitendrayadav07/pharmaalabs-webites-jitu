
import React, { useState, useEffect, useRef } from "react";
import { Truck, ShieldCheck, QrCode, Database, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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

      gsap.from(sectionRef.current.querySelectorAll('.step-card'), {
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
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Animate timeline progress based on active step
  useEffect(() => {
    if (timelineRef.current) {
      gsap.to(timelineRef.current, {
        width: `${((activeStep + 1) / supplyChainSteps.length) * 100}%`,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  }, [activeStep]);

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
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-4">How It Works</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            End-to-End Supply Chain Tracking
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our blockchain solution ensures transparency and accountability at every step.
          </p>
        </div>

        {/* Modern timeline visualization */}
        <div className="relative mb-12 overflow-hidden">
          <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap py-2">
            <div className="inline-block animate-marquee">
              {[...supplyChainSteps, ...supplyChainSteps].map((step, idx) => (
                <div 
                  key={`marquee-${step.id}-${idx}`}
                  className="inline-block px-2"
                >
                  <div className={`p-2 rounded-full ${step.color} mx-2 shadow-md`}>
                    {React.createElement(step.icon, {
                      className: "h-5 w-5 text-white",
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content with tabs */}
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue={supplyChainSteps[activeStep].id} value={supplyChainSteps[activeStep].id} onValueChange={(value) => {
            const newIndex = supplyChainSteps.findIndex(step => step.id === value);
            if (newIndex !== -1) handleStepClick(newIndex);
          }}>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Left side: Steps list with visual indicators */}
              <div className="w-full md:w-1/3">
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                  <TabsList className="flex flex-col w-full rounded-none bg-white p-0">
                    {supplyChainSteps.map((step, index) => (
                      <TabsTrigger
                        key={step.id}
                        value={step.id}
                        className={`flex items-start gap-3 px-4 py-5 border-b border-gray-100 justify-start w-full ${
                          activeStep === index
                            ? "bg-primary/5 data-[state=active]:bg-primary/5"
                            : "data-[state=active]:bg-white"
                        }`}
                      >
                        <div className={`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full ${step.color} shadow-sm`}>
                          {React.createElement(step.icon, {
                            className: "h-5 w-5 text-white",
                          })}
                          {activeStep === index && (
                            <div className="absolute -right-1 -top-1 h-4 w-4 bg-white rounded-full flex items-center justify-center">
                              <Check className="h-3 w-3 text-green-500" />
                            </div>
                          )}
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-gray-900">
                            {step.title}
                          </div>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                            {step.description}
                          </p>
                        </div>
                        {activeStep === index && (
                          <div className="absolute right-4">
                            <ArrowRight className="h-4 w-4 text-primary animate-bounce-light" />
                          </div>
                        )}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
              </div>

              {/* Right side: Detailed content for each step */}
              <div className="w-full md:w-2/3">
                <Card className="border-0 shadow-lg overflow-hidden bg-white">
                  <div className="relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
                      <div 
                        ref={timelineRef}
                        className="h-full bg-primary rounded-r-full"
                        style={{ width: `${((activeStep + 1) / supplyChainSteps.length) * 100}%` }}
                      ></div>
                    </div>
                    <div className="pt-6 px-1 text-xs text-gray-500 flex justify-between items-center">
                      <div className="px-5">Step {activeStep + 1} of {supplyChainSteps.length}</div>
                      <div className="px-5">Auto-advancing in 5s</div>
                    </div>
                  </div>

                  {supplyChainSteps.map((step, index) => (
                    <TabsContent 
                      key={step.id} 
                      value={step.id}
                      className={`mt-0 ${
                        animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                      } transition-all duration-300`}
                    >
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
                          <div className="lg:col-span-3 flex justify-center items-center">
                            <div className={`p-8 rounded-xl ${step.color}/10 w-full aspect-square flex items-center justify-center`}>
                              <div className={`relative rounded-full ${step.color} p-8 shadow-lg animate-bounce-light`}>
                                {React.createElement(step.icon, {
                                  className: "h-14 w-14 text-white",
                                })}
                                <div className="absolute -right-2 -bottom-2 h-8 w-8 bg-white rounded-full shadow-sm flex items-center justify-center">
                                  <div className={`h-6 w-6 ${step.color} rounded-full flex items-center justify-center animate-pulse`}>
                                    <Check className="h-4 w-4 text-white" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="lg:col-span-4 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-600 mb-6">{step.description}</p>
                            
                            <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 mb-6">
                              <div className="text-sm font-medium text-gray-700 mb-1">Blockchain Verification:</div>
                              <div className="text-gray-600">{step.detail}</div>
                            </div>
                            
                            <Button 
                              onClick={() => handleStepClick((index + 1) % supplyChainSteps.length)}
                              className="w-full sm:w-auto bg-primary hover:bg-primary-dark transition-all"
                            >
                              Next Step
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </TabsContent>
                  ))}
                </Card>
              </div>
            </div>
          </Tabs>
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
          
          @keyframes bounce-light {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          
          .animate-bounce-light {
            animation: bounce-light 2s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default SupplyChainDemo;
