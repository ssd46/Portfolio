
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import CodeAnimation from './CodeAnimation';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-hero-pattern flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h2 className="text-angular font-medium text-xl">Hello, my name is</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Sri Sai Dinesh Vallabhapuram
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-java-light">
              Java Full Stack Developer
            </h2>
            <p className="text-gray-300 max-w-md">
              Specialized in building robust Java backends and modern Angular frontends.
              Creating scalable enterprise solutions with cutting-edge technologies.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button className="bg-angular hover:bg-angular-dark">
                View Projects
              </Button>
              <Button variant="outline" className="border-java text-java hover:bg-java hover:text-white">
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <CodeAnimation />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown className="text-white h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
