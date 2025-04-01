
import { Database, Truck, Users, User } from "lucide-react";

const stakeholders = [
  {
    name: "Manufacturers",
    description: "Register authentic medicine batches on the blockchain with detailed production information and digital certificates.",
    icon: Database,
    color: "bg-blue-500",
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
    benefits: [
      "Ensure medicine safety",
      "Access product information",
      "Build trust in healthcare",
      "Report suspicious products"
    ]
  }
];

const Stakeholders = () => {
  return (
    <div id="stakeholders" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Benefits</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            For All Stakeholders
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform creates value across the entire pharmaceutical ecosystem.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {stakeholders.map((stakeholder) => (
              <div key={stakeholder.name} className="relative flex flex-col bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
                <div className="absolute top-0 inset-x-0 h-2" style={{ backgroundColor: stakeholder.color.replace('bg-', '') }}></div>
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-md ${stakeholder.color} mr-4`}>
                      {React.createElement(stakeholder.icon, {
                        className: "h-6 w-6 text-white",
                      })}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{stakeholder.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{stakeholder.description}</p>
                  <div className="mt-auto">
                    <h4 className="font-medium text-gray-900 mb-2">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {stakeholder.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-primary">
                            <Check className="h-5 w-5" />
                          </div>
                          <p className="ml-2 text-gray-600">{benefit}</p>
                        </li>
                      ))}
                    </ul>
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

// Define the Check component used in the stakeholder benefits
const Check = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default Stakeholders;
