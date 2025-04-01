
const stats = [
  { id: 1, name: "Lives at risk from fake medicine", value: "1 Million+", description: "Annual fatalities due to counterfeit drugs" },
  { id: 2, name: "Market value of fake drugs", value: "$200 Billion", description: "Estimated global counterfeit drug market" },
  { id: 3, name: "Potential lives saved", value: "10 Million", description: "Our target impact over the next decade" },
  { id: 4, name: "Target regions", value: "30+", description: "Countries with highest counterfeit prevalence" },
];

const Stats = () => {
  return (
    <div className="bg-primary py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">Why Our Mission Matters</h2>
          <p className="mt-4 text-xl text-white/80">
            The global impact of counterfeit medicine is devastating. Together, we can change this.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-transform hover:scale-105">
              <p className="text-sm font-medium text-white/80 truncate">{stat.name}</p>
              <p className="mt-2 text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-white/70">{stat.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Join the Fight Against Counterfeit Medicine?</h3>
          <div className="inline-flex">
            <a
              href="#"
              className="rounded-md px-6 py-3 bg-white text-primary font-medium shadow-sm hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-primary transition duration-150"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
