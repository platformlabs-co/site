
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project and needs"
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-brand hover:bg-brand-600 text-white">
                Send Message
              </Button>
            </form>
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
