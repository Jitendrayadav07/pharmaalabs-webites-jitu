
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { id: 1, name: "Lives at risk from fake medicine", value: "1 Million+", description: "Annual fatalities due to counterfeit drugs" },
  { id: 2, name: "Market value of fake drugs", value: "$200 Billion", description: "Estimated global counterfeit drug market" },
  { id: 3, name: "Potential lives saved", value: "10 Million", description: "Our target impact over the next decade" },
  { id: 4, name: "Target regions", value: "30+", description: "Countries with highest counterfeit prevalence" },
];

const Stats = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const statsRefs = useRef([]);
  const ctaRef = useRef(null);
  
  useEffect(() => {
    // Create a timeline for entrance animations
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });
    
    // Animate the title and subtitle
    timeline.from(titleRef.current, {
      y: 40,
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
    
    // Animate each stat card with staggered effect
    statsRefs.current.forEach((stat, index) => {
      gsap.from(stat, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stat,
          start: "top 85%",
        }
      });
    });
    
    // Animate the CTA section
    gsap.from(ctaRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 85%",
      }
    });
    
    // Counter animation for each stat value
    statsRefs.current.forEach((stat) => {
      const valueEl = stat.querySelector('.stat-value');
      const endValue = valueEl.textContent;
      
      // Only animate numbers, not text like "$200 Billion"
      if (/^\d+\+?$/.test(endValue)) {
        const cleanValue = parseInt(endValue.replace(/\+/g, ''));
        valueEl.textContent = '0';
        
        gsap.to(valueEl, {
          innerText: cleanValue,
          duration: 2,
          snap: { innerText: 1 }, // Ensures whole numbers
          ease: "power2.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          onComplete: () => {
            if (endValue.includes('+')) {
              valueEl.textContent = `${cleanValue}+`;
            }
          }
        });
      }
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="bg-gradient-to-r from-primary to-primary-dark py-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl font-bold text-white mb-4"
          >
            Why Our Mission Matters
          </h2>
          <p 
            ref={subtitleRef}
            className="mt-4 text-xl text-white/80 max-w-2xl mx-auto"
          >
            The global impact of counterfeit medicine is devastating. Together, we can change this.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              ref={el => statsRefs.current[index] = el}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-300 
                         hover:scale-105 hover:bg-white/15 border border-white/5 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <p className="text-sm font-medium text-white/80 truncate">{stat.name}</p>
              <p className="mt-4 text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300 stat-value">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/70">{stat.description}</p>
              
              {/* Interactive glow effect for hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
        
        <div 
          ref={ctaRef}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Ready to Join the Fight Against Counterfeit Medicine?</h3>
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-medium rounded-full 
                     shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1 group"
          >
            Partner With Us
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stats;
