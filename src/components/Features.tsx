
import { Check, Globe, Database, Code } from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      icon: <Globe className="h-10 w-10 text-brand-500" />,
      title: "Global Reach",
      description: "Scale your business worldwide with our distributed platform architecture designed for global operations.",
      benefits: ["Multi-region deployment", "Low latency worldwide", "Global compliance support"]
    },
    {
      icon: <Database className="h-10 w-10 text-brand-500" />,
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights with our advanced analytics and machine learning capabilities.",
      benefits: ["Real-time analytics", "Predictive modeling", "Custom dashboards"]
    },
    {
      icon: <Code className="h-10 w-10 text-brand-500" />,
      title: "Seamless Integration",
      description: "Connect with your existing tools and systems through our comprehensive API and integration framework.",
      benefits: ["REST and GraphQL APIs", "Webhook support", "No-code connectors"]
    }
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Powerful Platform Features</h2>
          <p className="text-xl text-gray-600">
            Our comprehensive suite of tools helps you build, deploy, and scale your digital initiatives with confidence.
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
