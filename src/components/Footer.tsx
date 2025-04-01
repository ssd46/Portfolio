
import React from 'react';
import { Github, Linkedin, Twitter, AtSign, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="flex items-center space-x-2 text-2xl font-bold">
              <Code className="text-java" />
              <span>
                <span className="text-java">Java</span>
                <span className="text-angular">Dev</span>
              </span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Full-stack Java developer specializing in enterprise applications with Spring Boot and Angular.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-java transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-java transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-java transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-java transition-colors">
              <AtSign className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
