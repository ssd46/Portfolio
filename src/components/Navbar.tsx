
import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 text-2xl font-bold">
          <Code className="text-java" />
          <span className="hidden md:inline">
            <span className="text-java">Java/.Net </span>
            <span className="text-angular">Dev</span>
          </span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium hover:text-angular transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <Button 
          variant="ghost" 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </Button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background shadow-md p-4 flex flex-col space-y-4 md:hidden animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium hover:text-angular transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
