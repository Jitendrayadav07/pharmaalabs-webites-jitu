
import { ShieldCheck, FileCheck, QrCode, Database } from "lucide-react";

const features = [
  {
    name: "Blockchain-Based Supply Chain",
    description: "Track and verify every step of the medicine's journey from production to consumer using decentralized blockchain technology.",
    icon: Database,
  },
  {
    name: "Medicine Authentication",
    description: "Instantly verify medicine authenticity with a simple scan, giving consumers confidence in their medication.",
    icon: QrCode,
  },
  {
    name: "Smart Contracts for Compliance",
    description: "Automated quality control and regulatory compliance through smart contracts to maintain medicine integrity.",
    icon: FileCheck,
  },
  {
    name: "Global Protection System",
    description: "Focused on vulnerable regions to ensure global protection against counterfeit medicines where it's needed most.",
    icon: ShieldCheck,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-16 bg-pharma-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A Better Way to Ensure Medicine Authenticity
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our integrated solution addresses the critical challenges in pharmaceutical supply chains.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="h-full rounded-xl bg-white shadow-sm p-6 border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
                  <div>
                    <div className="flow-root">
                      <div className="-mt-6 mb-4">
                        <div className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
