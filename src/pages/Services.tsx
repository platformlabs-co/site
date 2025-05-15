
import Header from "@/components/Header";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
