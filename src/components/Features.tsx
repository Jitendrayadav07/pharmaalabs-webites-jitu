
import { ShieldCheck, FileCheck, QrCode, Database } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

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
  const featuresRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerElements = headerRef.current?.children;
    const featureCards = featuresRef.current?.children;

    if (headerElements) {
      gsap.from(headerElements, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
      });
    }

    if (featureCards) {
      gsap.from(featureCards, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 70%",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="features" className="py-24 bg-gradient-to-b from-pharma-light to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="lg:text-center mb-20 space-y-4">
          <div className="inline-block rounded-full bg-gradient-to-r from-primary to-pharma-accent px-4 py-2 mb-4">
            <span className="text-white font-medium">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            A Better Way to Ensure
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-pharma-accent ml-2">
              Medicine Authenticity
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our integrated solution addresses the critical challenges in pharmaceutical supply chains.
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="group relative p-6 bg-white rounded-2xl shadow-sm border border-gray-100 
                       transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative">
                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-primary to-pharma-accent 
                              rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white transition-all duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="mt-8 text-xl font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-4 text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                  {feature.description}
                </p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-pharma-accent/5 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
