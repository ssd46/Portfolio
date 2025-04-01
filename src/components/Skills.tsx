
import React from 'react';
import { Progress } from "@/components/ui/progress"

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Java", level: 95, color: "bg-tech-java" },
        { name: "Spring Boot", level: 90, color: "bg-tech-spring" },
        { name: "Hibernate/JPA", level: 85, color: "bg-tech-hibernate" },
        { name: "RESTful APIs", level: 92, color: "bg-tech-java" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "Angular", level: 88, color: "bg-tech-angular" },
        { name: "TypeScript", level: 85, color: "bg-tech-typescript" },
        { name: "RxJS", level: 80, color: "bg-tech-angular" },
        { name: "HTML/CSS", level: 85, color: "bg-tech-angular" }
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "SQL (MySQL/PostgreSQL)", level: 90, color: "bg-tech-sql" },
        { name: "NoSQL (MongoDB)", level: 75, color: "bg-tech-java" },
        { name: "AWS", level: 70, color: "bg-tech-hibernate" },
        { name: "Docker & Kubernetes", level: 75, color: "bg-tech-java" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-java mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            My expertise spans the full software development stack, with a focus on Java backend and Angular frontend technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-gray-900">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" indicatorClassName={skill.color} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-6 text-center text-gray-900">Technologies & Tools</h3>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
            {[
              { name: "Java", bgColor: "bg-tech-java", textColor: "text-white" },
              { name: "Spring", bgColor: "bg-tech-spring", textColor: "text-white" },
              { name: "Hibernate", bgColor: "bg-tech-hibernate", textColor: "text-gray-900" },
              { name: "Angular", bgColor: "bg-tech-angular", textColor: "text-white" },
              { name: "TypeScript", bgColor: "bg-tech-typescript", textColor: "text-white" },
              { name: "SQL", bgColor: "bg-tech-sql", textColor: "text-white" },
              { name: "Git", bgColor: "bg-gray-800", textColor: "text-white" },
              { name: "Docker", bgColor: "bg-blue-500", textColor: "text-white" },
              { name: "AWS", bgColor: "bg-yellow-500", textColor: "text-gray-900" },
              { name: "Maven", bgColor: "bg-red-800", textColor: "text-white" },
              { name: "JUnit", bgColor: "bg-green-700", textColor: "text-white" },
              { name: "REST", bgColor: "bg-purple-600", textColor: "text-white" },
            ].map((tech, idx) => (
              <div 
                key={idx} 
                className={`tech-icon ${tech.bgColor} ${tech.textColor} font-medium`}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
