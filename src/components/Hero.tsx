
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center pt-16 bg-gradient-to-b from-brand-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-8 animate-fade-in max-w-3xl mx-auto">
            <div>
              <span className="inline-block px-3 py-1 text-sm font-medium text-brand-500 bg-brand-100 rounded-full mb-4">
                Platform, DevOps & FinOps Engineering
              </span>
              <h1 className="heading-xl mb-6">
                <span className="text-gradient">Platform Engineering as a Service for Startups</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                We provide platform engineering, DevOps, and FinOps services for startups. Developer enablement is our passion.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" className="bg-brand hover:bg-brand-600 text-white px-8 py-6 text-base">
                Our Services
              </Button>
              <Button variant="outline" className="border-brand text-brand hover:bg-brand-50 px-8 py-6 text-base">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
