
import { Check, Code, CloudCog, BarChart3 } from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      icon: <CloudCog className="h-10 w-10 text-brand-500" />,
      title: "Platform Engineering",
      description: "Setup & support for startups who believe developers should own their production services without becoming infrastructure experts.",
      benefits: ["Developer-focused tooling", "Self-service infrastructure", "Production ownership"]
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-brand-500" />,
      title: "Infrastructure & Cloud Costs",
      description: "Comprehensive review of your cloud infrastructure with detailed optimization recommendations to get the best value for your money.",
      benefits: ["Cost optimization", "Infrastructure review", "Ongoing monitoring"]
    },
    {
      icon: <Code className="h-10 w-10 text-brand-500" />,
      title: "Backend Systems Architecture",
      description: "Review your backend systems to identify performance bottlenecks and implement solutions that ensure reliable service for your customers.",
      benefits: ["Architecture review", "Performance optimization", "Reliability improvements"]
    }
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            We help startups build, optimize, and maintain their technical infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index}
              className="border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 bg-white animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="heading-sm mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-8">{feature.description}</p>
              <ul className="space-y-3">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={18} className="text-brand-500 mt-1 mr-2 shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
