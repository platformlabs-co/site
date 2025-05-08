
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Platform Labs transformed our business operations with their innovative platform solution. We've seen a 40% increase in efficiency since implementation.",
      author: "Sarah Johnson",
      title: "CTO, TechCorp",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      quote: "The team at Platform Labs understands our business needs and delivered a solution that has helped us scale our operations globally.",
      author: "Michael Chen",
      title: "CEO, GrowthFirm",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      quote: "Working with Platform Labs has been a game-changer for our company. Their platform solution has streamlined our processes and improved customer satisfaction.",
      author: "David Wilson",
      title: "COO, InnovateCo",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            We've helped businesses of all sizes transform their operations and achieve remarkable results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <div className="hidden md:flex border-t border-gray-200 flex-grow"></div>
              <div className="mx-4">
                <svg className="h-10 w-10 text-brand-300" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <div className="hidden md:flex border-t border-gray-200 flex-grow"></div>
            </div>

            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`transition-opacity duration-500 ${
                  index === activeIndex ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                <blockquote className="text-xl md:text-2xl text-center text-gray-800 font-medium mb-8">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex flex-col items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover mb-4"
                  />
                  <div className="text-center">
                    <div className="font-semibold text-lg">{testimonial.author}</div>
                    <div className="text-gray-500">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="flex justify-center mt-8 space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft size={18} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-center text-xl font-medium mb-10">Trusted by innovative companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 w-32 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400 font-medium">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
