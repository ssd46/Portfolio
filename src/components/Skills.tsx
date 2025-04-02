import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Database, FileCode, Code2, Brackets, Globe, 
  Server, Cloud, Dock, Terminal, 
  LayoutGrid, TestTube, Network,
  Ship
} from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: "🔧",
      skills: [
        { name: "Java", level: 95, color: "bg-tech-java" },
        { name: "Spring Boot", level: 90, color: "bg-tech-spring" },
        { name: "Hibernate/JPA", level: 85, color: "bg-tech-hibernate" },
        { name: "RESTful APIs", level: 92, color: "bg-tech-java" }
      ]
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "Angular", level: 88, color: "bg-tech-angular" },
        { name: "TypeScript", level: 85, color: "bg-tech-typescript" },
        { name: "RxJS", level: 80, color: "bg-tech-angular" },
        { name: "HTML/CSS", level: 85, color: "bg-tech-angular" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: "☁️",
      skills: [
        { name: "SQL (MySQL/PostgreSQL)", level: 90, color: "bg-tech-sql" },
        { name: "NoSQL (MongoDB)", level: 75, color: "bg-tech-java" },
        { name: "AWS", level: 70, color: "bg-tech-hibernate" },
        { name: "Docker & Kubernetes", level: 75, color: "bg-tech-java" }
      ]
    }
  ];

  // Technology tools with their icons
  const technologies = [
    { name: "Java", icon: <Server className="h-5 w-5 mr-2" />, bgColor: "bg-tech-java", textColor: "text-white" },
    { name: "Spring", icon: <Terminal className="h-5 w-5 mr-2" />, bgColor: "bg-tech-spring", textColor: "text-white" },
    { name: "Hibernate", icon: <Database className="h-5 w-5 mr-2" />, bgColor: "bg-tech-hibernate", textColor: "text-gray-900" },
    { name: "Angular", icon: <Code2 className="h-5 w-5 mr-2" />, bgColor: "bg-tech-angular", textColor: "text-white" },
    { name: "TypeScript", icon: <FileCode className="h-5 w-5 mr-2" />, bgColor: "bg-tech-typescript", textColor: "text-white" },
    { name: "SQL", icon: <Database className="h-5 w-5 mr-2" />, bgColor: "bg-tech-sql", textColor: "text-white" },
    { name: "Git", icon: <Brackets className="h-5 w-5 mr-2" />, bgColor: "bg-gray-800", textColor: "text-white" },
    { name: "Docker", icon: <Ship className="h-5 w-5 mr-2" />, bgColor: "bg-blue-500", textColor: "text-white" },
    { name: "AWS", icon: <Cloud className="h-5 w-5 mr-2" />, bgColor: "bg-yellow-500", textColor: "text-gray-900" },
    { name: "Maven", icon: <Terminal className="h-5 w-5 mr-2" />, bgColor: "bg-red-800", textColor: "text-white" },
    { name: "JUnit", icon: <TestTube className="h-5 w-5 mr-2" />, bgColor: "bg-green-700", textColor: "text-white" },
    { name: "REST", icon: <Network className="h-5 w-5 mr-2" />, bgColor: "bg-purple-600", textColor: "text-white" },
    { name: "Microservices", icon: <LayoutGrid className="h-5 w-5 mr-2" />, bgColor: "bg-indigo-600", textColor: "text-white" },
    { name: "CI/CD", icon: <Server className="h-5 w-5 mr-2" />, bgColor: "bg-teal-600", textColor: "text-white" },
    { name: "Agile", icon: <Globe className="h-5 w-5 mr-2" />, bgColor: "bg-emerald-600", textColor: "text-white" },
    { name: "Jenkins", icon: <Server className="h-5 w-5 mr-2" />, bgColor: "bg-orange-600", textColor: "text-white" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-java mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            My expertise spans the full software development stack, with a focus on Java backend and Angular frontend technologies.
          </p>
        </div>
        
        {/* Skill hexagons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 w-full max-w-md"
              variants={itemVariants}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                <span className="text-4xl">{category.icon}</span>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-lg group-hover:text-primary transition-colors">{skill.name}</span>
                      <Badge variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress value={skill.level} className={`h-2 ${skill.color}`} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Technology bubbles with icons */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-10 text-center text-gray-900">Technologies & Tools</h3>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {technologies.map((tech, idx) => (
              <motion.div 
                key={idx}
                className={`tech-bubble ${tech.bgColor} ${tech.textColor} font-medium px-6 py-3 rounded-full text-sm md:text-base cursor-pointer hover:scale-110 transition-transform flex items-center space-x-2`}
                variants={itemVariants}
              >
                {tech.icon}
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;