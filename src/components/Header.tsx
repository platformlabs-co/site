
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-xl font-bold text-brand">Platform Labs</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-brand-500 transition-colors">Features</a>
          <a href="#about" className="text-sm font-medium text-gray-700 hover:text-brand-500 transition-colors">About</a>
          <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-brand-500 transition-colors">Clients</a>
          <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-brand-500 transition-colors">Contact</a>
          <Button variant="default" className="bg-brand hover:bg-brand-600 text-white">Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 animate-fade-in-down">
          <nav className="flex flex-col space-y-4">
            <a href="#features" className="text-gray-700 hover:text-brand-500 py-2 transition-colors" onClick={toggleMenu}>Features</a>
            <a href="#about" className="text-gray-700 hover:text-brand-500 py-2 transition-colors" onClick={toggleMenu}>About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-brand-500 py-2 transition-colors" onClick={toggleMenu}>Clients</a>
            <a href="#contact" className="text-gray-700 hover:text-brand-500 py-2 transition-colors" onClick={toggleMenu}>Contact</a>
            <Button variant="default" className="bg-brand hover:bg-brand-600 text-white w-full">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
