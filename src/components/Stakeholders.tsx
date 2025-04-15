import React from "react";
import {
  Database,
  Truck,
  Users,
  User,
  Check,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const stakeholders = [
  {
    name: "Manufacturers",
    description:
      "Register authentic medicine batches on the blockchain with detailed production information and digital certificates.",
    icon: Database,
    gradient: "from-blue-500 to-blue-600",
    benefits: [
      "Protect brand reputation",
      "Reduce counterfeit liability",
      "Build consumer trust",
      "Streamline compliance",
    ],
  },
  {
    name: "Distributors & Retailers",
    description:
      "Verify medicine authenticity before accepting shipments and maintain proper handling throughout the supply chain.",
    icon: Truck,
    gradient: "from-indigo-500 to-indigo-600",
    benefits: [
      "Verify product authenticity",
      "Ensure proper handling",
      "Build consumer confidence",
      "Reduce legal risks",
    ],
  },
  {
    name: "Regulatory Authorities",
    description:
      "Monitor the supply chain in real-time and quickly identify any issues or counterfeit products entering the market.",
    icon: Users,
    gradient: "from-purple-500 to-purple-600",
    benefits: [
      "Real-time market monitoring",
      "Efficient recall management",
      "Data-driven policy making",
      "Targeted enforcement",
    ],
  },
  {
    name: "Consumers",
    description:
      "Verify medicine authenticity with a simple QR code scan before consumption to ensure safety and efficacy.",
    icon: User,
    gradient: "from-primary to-primary-dark",
    benefits: [
      "Ensure medicine safety",
      "Access product information",
      "Build trust in healthcare",
      "Report suspicious products",
    ],
  },
];

const Stakeholders = () => {
  return (
    <section
      id="stakeholders"
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-pharma-accent/5 rounded-tr-full"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-gradient-to-r from-primary to-pharma-accent px-4 py-2 mb-4">
            <span className="text-white font-medium">For All Stakeholders</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            Creating Value Across the
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-pharma-accent ml-2">
              Entire Ecosystem
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our platform creates value for every participant in the
            pharmaceutical supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {stakeholders.map((stakeholder, index) => (
            <div key={index} className="relative group">
              {/* Gradient bar on top */}
              <div
                className={`h-2 w-full rounded-t-2xl bg-gradient-to-r ${stakeholder.gradient}`}
              />

              {/* Card Content */}
              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-b-2xl shadow-xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r ${stakeholder.gradient} shadow-md transform transition-transform group-hover:scale-110`}
                  >
                    {React.createElement(stakeholder.icon, {
                      className: "h-6 w-6 text-white",
                    })}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {stakeholder.name}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {stakeholder.description}
                </p>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    {stakeholder.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition"
                      >
                        <Check className="h-5 w-5 text-primary" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-pharma-accent/10 rounded-tl-3xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stakeholders;
