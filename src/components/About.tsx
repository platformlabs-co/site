
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section bg-brand-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="relative animate-fade-in">
              <div className="aspect-square max-w-md bg-white rounded-xl shadow-lg p-6 border border-gray-100 relative z-10">
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Company Image</span>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-brand-200 rounded-xl"></div>
              <div className="absolute -z-20 -bottom-12 -right-12 w-full h-full bg-brand-100 rounded-xl"></div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <span className="text-brand-600 font-medium mb-4 block">About Platform Labs</span>
            <h2 className="heading-lg mb-6">We're Building The Future Of Digital Platforms</h2>
            <p className="text-gray-700 mb-4 text-lg">
              Founded in 2020, Platform Labs is a technology company focused on creating innovative platform solutions that help businesses transform their operations and reach new markets.
            </p>
            <p className="text-gray-700 mb-8">
              Our team of experienced engineers, designers, and product strategists work closely with clients to understand their unique challenges and build custom solutions that drive measurable results. With a focus on scalability, performance, and user experience, we deliver platforms that grow with your business.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-brand-600">100+</div>
                <p className="text-gray-600">Clients served</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-600">250+</div>
                <p className="text-gray-600">Projects completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-600">98%</div>
                <p className="text-gray-600">Client satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-600">24/7</div>
                <p className="text-gray-600">Customer support</p>
              </div>
            </div>
            
            <Button variant="default" className="bg-brand hover:bg-brand-600 text-white mt-4">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
