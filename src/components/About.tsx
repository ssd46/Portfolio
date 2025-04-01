
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Server, Code, Database } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="h-1 w-20 bg-angular mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 mb-6">
              I'm a passionate Java Full Stack Developer with expertise in building enterprise-grade applications using Java and Angular. With 7+ years of experience, I specialize in creating scalable, maintainable, and high-performance applications.
            </p>
            <p className="text-gray-700 mb-6">
              My journey started with Java backend development, where I mastered Spring Boot, Hibernate, and RESTful services. Over time, I expanded to full-stack development, embracing Angular to create seamless user experiences with reactive frontends.
            </p>
            <p className="text-gray-700">
              I'm dedicated to writing clean, well-tested code and stay current with the latest technologies and best practices in both Java and Angular ecosystems.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="border-java hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Server className="h-12 w-12 text-java mb-4" />
                <h3 className="font-bold mb-2">Backend</h3>
                <p className="text-sm text-gray-600">Java, Spring Boot, Spring Security, JPA/Hibernate</p>
              </CardContent>
            </Card>
            
            <Card className="border-angular hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Code className="h-12 w-12 text-angular mb-4" />
                <h3 className="font-bold mb-2">Frontend</h3>
                <p className="text-sm text-gray-600">Angular, TypeScript, RxJS, HTML/CSS</p>
              </CardContent>
            </Card>
            
            <Card className="border-java hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Database className="h-12 w-12 text-java mb-4" />
                <h3 className="font-bold mb-2">Database</h3>
                <p className="text-sm text-gray-600">MySQL, PostgreSQL, MongoDB, Redis</p>
              </CardContent>
            </Card>
            
            <Card className="border-angular hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Layers className="h-12 w-12 text-angular mb-4" />
                <h3 className="font-bold mb-2">DevOps</h3>
                <p className="text-sm text-gray-600">Docker, Kubernetes, CI/CD, AWS</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
