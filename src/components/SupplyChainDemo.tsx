
import { useState } from "react";
import { Truck, ShieldCheck, QrCode, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const handleNextStep = () => {
    if (animating) return;
    
    setAnimating(true);
    setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % supplyChainSteps.length);
      setAnimating(false);
    }, 500);
  };

  const handleStepClick = (index: number) => {
    if (animating) return;
    setActiveStep(index);
  };

  return (
    <div id="solution" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            End-to-End Supply Chain Tracking
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our blockchain solution ensures transparency and accountability at every step.
          </p>
        </div>

        <div className="relative">
          {/* Supply Chain Demo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                <div className="relative h-64 md:h-80 mb-4 overflow-hidden rounded-lg bg-white">
                  <div className={`h-full w-full flex items-center justify-center transition-opacity duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="text-center p-6 max-w-md">
                      <div className="mb-4 flex justify-center">
                        <div className={`p-4 rounded-full ${supplyChainSteps[activeStep].color}`}>
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
                        <div className="mt-4 p-3 bg-pharma-light rounded-lg text-sm text-gray-700">
                          <strong>Blockchain event:</strong> Batch #A78942 of Amoxicillin registered with tamper-proof digital certificate
                        </div>
                      )}
                      
                      {activeStep === 1 && (
                        <div className="mt-4 p-3 bg-pharma-light rounded-lg text-sm text-gray-700">
                          <strong>Temperature log:</strong> 2.0-8.0°C maintained throughout transport ✓ <br />
                          <strong>Location:</strong> Verified through secure GPS tracking
                        </div>
                      )}
                      
                      {activeStep === 2 && (
                        <div className="mt-4 p-3 bg-pharma-light rounded-lg text-sm text-gray-700">
                          <strong>Authentication:</strong> Digital signature verified ✓<br />
                          <strong>Batch verification:</strong> Origin and handling conditions confirmed
                        </div>
                      )}
                      
                      {activeStep === 3 && (
                        <div className="mt-4 p-3 bg-pharma-light rounded-lg text-sm text-gray-700">
                          <strong>Scan result:</strong> Authentic medication confirmed ✓<br />
                          <strong>Manufactured:</strong> 05/12/2023 • <strong>Exp:</strong> 05/11/2025
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleNextStep}
                  className="w-full bg-primary hover:bg-primary-dark"
                >
                  Next Step
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supply Chain Journey</h3>
              <div className="space-y-4">
                {supplyChainSteps.map((step, index) => (
                  <div
                    key={step.id}
                    onClick={() => handleStepClick(index)}
                    className={`flex items-start p-4 rounded-lg cursor-pointer transition-all ${
                      activeStep === index
                        ? "bg-primary text-white shadow-md"
                        : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100"
                    }`}
                  >
                    <div className={`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full ${
                      activeStep === index ? "bg-white" : step.color
                    } mr-4`}>
                      {React.createElement(step.icon, {
                        className: `h-5 w-5 ${activeStep === index ? "text-primary" : "text-white"}`,
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainDemo;
