
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section bg-brand-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-20 items-center">
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <span className="text-brand-600 font-medium mb-4 block">About us</span>
            <h2 className="heading-lg mb-6">Developer Enablement is Our Passion</h2>
            <p className="text-gray-700 mb-4 text-lg">
              We believe that developers should have the power to do what they do best, and that they should own their production services.
            </p>
            <p className="text-gray-700 mb-8">
              Our team specializes in providing platform engineering, cloud optimization, and architecture review services for startups. We help developers focus on building great products by handling the complexity of infrastructure, deployment, and scaling.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-brand-600">Expertise</div>
                <p className="text-gray-600">In platform engineering</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-600">Focus</div>
                <p className="text-gray-600">On developer enablement</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-600">Results</div>
                <p className="text-gray-600">In cost optimization</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-600">Support</div>
                <p className="text-gray-600">For startup growth</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
