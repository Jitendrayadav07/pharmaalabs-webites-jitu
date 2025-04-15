
import React, { useEffect, useRef } from "react";
import { Database, Truck, Users, User, Check, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stakeholders = [
  {
    name: "Manufacturers",
    description: "Register authentic medicine batches on the blockchain with detailed production information and digital certificates.",
    icon: Database,
    color: "bg-blue-500",
    gradient: "from-blue-500 to-blue-600",
    benefits: [
      "Protect brand reputation",
      "Reduce counterfeit liability",
      "Build consumer trust",
      "Streamline compliance"
    ]
  },
  {
    name: "Distributors & Retailers",
    description: "Verify medicine authenticity before accepting shipments and maintain proper handling throughout the supply chain.",
    icon: Truck,
    color: "bg-indigo-500", 
    gradient: "from-indigo-500 to-indigo-600",
    benefits: [
      "Verify product authenticity",
      "Ensure proper handling",
      "Build consumer confidence", 
      "Reduce legal risks"
    ]
  },
  {
    name: "Regulatory Authorities",
    description: "Monitor the supply chain in real-time and quickly identify any issues or counterfeit products entering the market.",
    icon: Users,
    color: "bg-purple-500",
    gradient: "from-purple-500 to-purple-600",
    benefits: [
      "Real-time market monitoring",
      "Efficient recall management",
      "Data-driven policy making",
      "Targeted enforcement"
    ]
  },
  {
    name: "Consumers",
    description: "Verify medicine authenticity with a simple QR code scan before consumption to ensure safety and efficacy.",
    icon: User,
    color: "bg-primary",
    gradient: "from-primary to-primary-dark",
    benefits: [
      "Ensure medicine safety",
      "Access product information",
      "Build trust in healthcare",
      "Report suspicious products"
    ]
  }
];

const Stakeholders = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  
  useEffect(() => {
    // Create a timeline for entrance animations
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });
    
    // Title animations
    timeline.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
    
    timeline.from(subtitleRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.5");
    
    // Staggered animations for stakeholder cards
    cardsRef.current.forEach((card, index) => {
      // Card animation
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        }
      });
      
      // Benefits animation inside each card
      const benefits = card.querySelectorAll('.benefit-item');
      gsap.from(benefits, {
        x: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        }
      });
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      id="stakeholders" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-pharma-accent/5 rounded-tr-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-gradient-to-r from-primary to-pharma-accent px-4 py-2 mb-4">
            <span className="text-white font-medium">For All Stakeholders</span>
          </div>
          <h2 
            ref={titleRef}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Creating Value Across the 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-pharma-accent ml-2">
              Entire Ecosystem
            </span>
          </h2>
          <p 
            ref={subtitleRef}
            className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"
          >
            Our platform creates value for every participant in the pharmaceutical supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {stakeholders.map((stakeholder, index) => (
            <div 
              key={stakeholder.name} 
              ref={el => cardsRef.current[index] = el}
              className="group relative flex flex-col bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100"
            >
              {/* Colorful top border */}
              <div className="h-2 w-full bg-gradient-to-r transition-all duration-300 group-hover:h-3"
                style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                className={`${stakeholder.gradient}`}
              ></div>
              
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-5">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${stakeholder.gradient} mr-4 transition-all duration-300 hover:scale-110 shadow-md`}>
                    {React.createElement(stakeholder.icon, {
                      className: "h-6 w-6 text-white",
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{stakeholder.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{stakeholder.description}</p>
                
                <div className="mt-auto">
                  <h4 className="font-medium text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-3">
                    {stakeholder.benefits.map((benefit, i) => (
                      <li 
                        key={i}
                        className="benefit-item flex items-start transition-all duration-300 hover:translate-x-1 bg-gray-50 rounded-lg p-2"
                      >
                        <div className="flex-shrink-0">
                          <Check className={`h-5 w-5 text-${stakeholder.color.replace('bg-', '')}`} />
                        </div>
                        <p className="ml-3 text-gray-600">{benefit}</p>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Call to action link */}
                  <div className="mt-6 text-right">
                    <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-300">
                      Learn more
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-r from-primary/5 to-pharma-accent/5 rounded-tl-3xl -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Optional call-to-action button */}
        <div className="mt-16 text-center">
          <a 
            href="#"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-pharma-accent text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            View Full Stakeholder Benefits
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stakeholders;
