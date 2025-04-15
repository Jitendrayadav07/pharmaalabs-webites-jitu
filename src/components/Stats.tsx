
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { id: 1, name: "Lives at risk from fake medicine", value: "1 Million+", description: "Annual fatalities due to counterfeit drugs" },
  { id: 2, name: "Market value of fake drugs", value: "$200 Billion", description: "Estimated global counterfeit drug market" },
  { id: 3, name: "Potential lives saved", value: "10 Million", description: "Our target impact over the next decade" },
  { id: 4, name: "Target regions", value: "30+", description: "Countries with highest counterfeit prevalence" },
];

const Stats = () => {
  useEffect(() => {
    const stats = document.querySelectorAll('.stat-card');
    
    gsap.from(stats, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: stats[0],
        start: "top 80%",
      }
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Why Our Mission Matters</h2>
          <p className="mt-4 text-xl text-white/80">
            The global impact of counterfeit medicine is devastating. Together, we can change this.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="stat-card group bg-white/10 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-300 
                       hover:scale-105 hover:bg-white/15"
            >
              <p className="text-sm font-medium text-white/80 truncate">{stat.name}</p>
              <p className="mt-4 text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/70">{stat.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Ready to Join the Fight Against Counterfeit Medicine?</h3>
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-medium rounded-full 
                     shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stats;
