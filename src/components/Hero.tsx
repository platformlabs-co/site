
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center pt-16 bg-gradient-to-b from-brand-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="inline-block px-3 py-1 text-sm font-medium text-brand-500 bg-brand-100 rounded-full mb-4">
                Platform, DevOps & FinOps Engineering
              </span>
              <h1 className="heading-xl mb-6">
                <span className="text-gradient">Platform Engineering as a Service for Startups</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                We provide platform engineering, DevOps, and FinOps services for startups. Developer enablement is our passion.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" className="bg-brand hover:bg-brand-600 text-white px-8 py-6 text-base">
                Our Services
              </Button>
              <Button variant="outline" className="border-brand text-brand hover:bg-brand-50 px-8 py-6 text-base">
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block animate-fade-in">
            <div className="absolute -right-10 -top-10 w-72 h-72 bg-brand-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative z-10 bg-white shadow-xl rounded-xl p-4 border border-gray-100">
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400">Platform Engineering Workflow</span>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-100 rounded-full w-2/3"></div>
                <div className="h-4 bg-gray-100 rounded-full w-full"></div>
                <div className="h-4 bg-gray-100 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
