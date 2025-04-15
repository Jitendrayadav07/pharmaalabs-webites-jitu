
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Database, Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const medicineCardRef = useRef(null);
  const highlightsRef = useRef(null);
  
  useEffect(() => {
    // Hero section entrance animation
    const timeline = gsap.timeline();
    
    timeline.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
    
    timeline.from(descRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");
    
    timeline.from(buttonsRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.3");
    
    timeline.from(medicineCardRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.8)"
    }, "-=0.5");
    
    timeline.from(highlightsRef.current.children, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.7");
    
    // Parallax effect for medicine card
    gsap.to(medicineCardRef.current, {
      y: -30,
      scrollTrigger: {
        trigger: medicineCardRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
    
    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative bg-white overflow-hidden pt-24">
      <div className="absolute inset-0 hexagon-grid"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-pharma-accent/5 rounded-tr-full"></div>
      
      <div className="relative pt-20 pb-16 sm:pb-24 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 
                ref={headingRef}
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
              >
                <span className="block">Eliminating Fake Medicine</span>
                <span className="block text-gradient-primary mt-1 pb-3">
                  Saving 10 Million Lives
                </span>
              </h1>
              <p 
                ref={descRef}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
              >
                Our blockchain-powered platform ensures the authenticity of medicines 
                through real-time tracking and verification across the entire supply chain. 
                From manufacturer to consumer, we provide an unbreakable chain of trust.
              </p>
              
              <div 
                ref={highlightsRef}
                className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="flex items-start space-x-2 bg-white/60 backdrop-blur-sm p-3 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Verified by leading pharma companies</span>
                </div>
                <div className="flex items-start space-x-2 bg-white/60 backdrop-blur-sm p-3 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">100% secure blockchain technology</span>
                </div>
              </div>
              
              {/* <div 
                ref={buttonsRef}
                className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center lg:justify-start">
                  <Button className="bg-primary hover:bg-primary-dark text-white px-8 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:text-primary-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
                  >
                    Watch Demo
                  </Button>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  Join the global initiative to combat counterfeit medications.
                </p>
              </div> */}
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div 
                ref={medicineCardRef}
                className="relative mx-auto w-full rounded-xl overflow-hidden shadow-2xl lg:max-w-md"
              >
                <div className="relative block w-full bg-white rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
                  <div className="aspect-w-16 aspect-h-9">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-pharma-light to-white p-8">
                      <div className="relative w-full max-w-sm mx-auto">
                        <div className="p-4 bg-white rounded-xl shadow-md border border-gray-100 animate-float">
                          <div className="flex flex-col items-center">
                            <div className="w-32 h-32 bg-gradient-to-r from-primary-light to-pharma-accent rounded-lg flex items-center justify-center">
                              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
                                <div className="grid grid-cols-3 grid-rows-3 gap-1">
                                  {Array(9).fill(0).map((_, i) => (
                                    <div key={i} className={`w-2 h-2 rounded-sm ${i % 2 === 0 ? 'bg-primary' : 'bg-gray-200'} ${i === 4 ? 'animate-pulse-slow' : ''}`}></div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="mt-3 text-center">
                              <div className="h-2 bg-gray-200 rounded w-24 mb-2"></div>
                              <div className="h-2 bg-gray-200 rounded w-16"></div>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="h-2 bg-gray-200 rounded w-full mb-2"></div>
                            <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                          </div>
                          <div className="mt-5 mb-2 relative overflow-hidden">
                            <div className="w-full h-1.5 bg-gray-200 rounded"></div>
                            <div className="absolute top-0 left-0 h-1.5 bg-gradient-to-r from-primary to-pharma-accent w-2/3 rounded animate-scan"></div>
                          </div>
                          <div className="flex justify-between mt-4">
                            <div className="h-6 bg-primary rounded-md w-20 flex items-center justify-center">
                              <span className="text-white text-xs font-medium">Verified</span>
                            </div>
                            <div className="h-6 bg-gray-200 rounded-md w-10"></div>
                          </div>
                        </div>
                        <div className="absolute bottom-4 right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
                        <div className="absolute top-8 left-0 w-16 h-16 bg-pharma-accent/10 rounded-full -z-10"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
