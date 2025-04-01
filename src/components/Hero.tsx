
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden pt-20">
      <div className="absolute inset-0 hexagon-grid"></div>
      <div className="relative pt-10 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block">Eliminating Fake Medicine</span>
                <span className="block text-gradient-primary mt-1">
                  Saving 10 Million Lives
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Our blockchain-powered platform ensures the authenticity of medicines 
                through real-time tracking and verification across the entire supply chain. 
                From manufacturer to consumer, we provide an unbreakable chain of trust.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center lg:justify-start">
                  <Button className="bg-primary hover:bg-primary-dark text-white px-8">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:text-primary-dark">
                    Watch Demo
                  </Button>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  Join the global initiative to combat counterfeit medications.
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <div className="w-full h-full flex items-center justify-center bg-pharma-light p-8">
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
                          <div className="mt-5 mb-2">
                            <div className="w-full h-1 bg-gradient-to-r from-red-400 via-green-400 to-blue-400 rounded animate-scan"></div>
                          </div>
                          <div className="flex justify-between mt-4">
                            <div className="h-6 bg-primary rounded-md w-20"></div>
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
