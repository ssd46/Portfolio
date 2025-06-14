
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const projects = [
    {
      id: 1,
      title: "Enterprise Banking Platform",
      description: "Full-stack banking solution with Java Spring Boot backend and Angular 17 frontend. Features include secure user authentication, transaction processing, and detailed reporting.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
      category: "enterprise"
    },
    {
      id: 2,
      title: "Microservices Order Management",
      description: "Distributed e-commerce system built with Spring Cloud microservices and an Angular admin dashboard. Includes order processing, inventory management, and customer profiles.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Java", "Spring Cloud", "Angular", "Kafka", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
      category: "microservices"
    },
    {
      id: 3,
      title: "Healthcare Patient Portal",
      description: "Secure patient management system with Java backend, Angular frontend, and role-based access control. Features appointment scheduling, medical records, and doctor-patient messaging.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["Java", "Spring Security", "Angular", "MySQL", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
      category: "enterprise"
    },
    {
      id: 4,
      title: "DevOps CI/CD Pipeline",
      description: "Automated build and deployment pipeline for Java and Angular applications using Jenkins, Docker, and Kubernetes. Includes test automation and monitoring.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["Jenkins", "Docker", "Kubernetes", "Java", "Angular"],
      githubUrl: "#",
      liveUrl: "#", 
      category: "devops"
    }
  ];

  const filteredProjects = filter 
    ? projects.filter(project => project.category === filter)
    : projects;

  const categories = [
    { id: null, name: "All" },
    { id: "enterprise", name: "Enterprise" },
    { id: "microservices", name: "Microservices" },
    { id: "devops", name: "DevOps" }
  ];
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-java mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Explore my portfolio of full-stack .Net, Java and Angular projects demonstrating my technical expertise and problem-solving abilities.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category.name}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={filter === category.id ? "bg-java hover:bg-java-dark" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <Card key={project.id} className="project-card overflow-hidden">
              <div className="relative h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-900/70 opacity-0 transition-opacity duration-300 flex items-center justify-center space-x-4 project-overlay">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors">
                      <Github className="h-6 w-6 text-gray-900" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors">
                      <ExternalLink className="h-6 w-6 text-gray-900" />
                    </a>
                  )}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <Code className="h-5 w-5 text-java" />
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="bg-gray-50 p-4 flex justify-between">
                <Button variant="outline" size="sm" onClick={() => window.open(project.githubUrl, '_blank')}>
                  <Github className="h-4 w-4 mr-2" />
                  Source Code
                </Button>
                <Button size="sm" className="bg-java hover:bg-java-dark" onClick={() => window.open(project.liveUrl, '_blank')}>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
