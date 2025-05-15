
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/a4e2799d-0fc1-4cfd-b930-651309c76cfa.png" 
            alt="Platform Labs Logo" 
            className="h-10" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/services" className="text-sm font-medium text-gray-700 hover:text-brand-500 transition-colors">Services</Link>
          <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-brand-500 transition-colors">About</Link>
          <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-brand-500 transition-colors">Contact</Link>
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
            <Link to="/services" className="text-gray-700 hover:text-brand-500 py-2 transition-colors" onClick={closeMenu}>Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-500 py-2 transition-colors" onClick={closeMenu}>About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-500 py-2 transition-colors" onClick={closeMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
