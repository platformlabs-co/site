
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section bg-brand-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">
            Have questions about our services? Ready to optimize your platform? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 animate-fade-in">
            <h3 className="heading-md mb-6">Send Us a Message</h3>
            <div className="text-center">
              <p className="text-gray-700 mb-6">
                Ready to get started? Send us an email and we'll get back to you as soon as possible.
              </p>
              <Button 
                asChild
                className="w-full bg-brand hover:bg-brand-600 text-white"
              >
                <a href="mailto:info@platformlabs.co">
                  <Mail className="mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:mt-16 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="heading-md mb-8">Get In Touch</h3>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 bg-brand-100 rounded-full flex items-center justify-center mr-4">
                  <Mail size={24} className="text-brand-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                  <a href="mailto:info@platformlabs.co" className="text-gray-600 hover:text-brand-500">
                    info@platformlabs.co
                  </a>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 bg-brand-100 rounded-full flex items-center justify-center mr-4">
                  <MapPin size={24} className="text-brand-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Our Location</h4>
                  <address className="text-gray-600 not-italic">
                    Remote-first company<br />
                    Serving clients globally
                  </address>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-lg font-semibold mb-4">Our Approach</h4>
              <p className="text-gray-600">
                We believe in building partnerships with our clients. Our team will work closely with you to understand your unique challenges and build solutions that drive real results for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
