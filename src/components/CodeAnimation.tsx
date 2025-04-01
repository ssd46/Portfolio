
import React, { useEffect, useState } from 'react';

const CodeAnimation: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  
  const javaCode = [
    "@RestController",
    "@RequestMapping(\"/api/v1\")",
    "public class ProjectController {",
    "    @Autowired",
    "    private ProjectService projectService;",
    "",
    "    @GetMapping(\"/projects\")",
    "    public ResponseEntity<List<Project>> getAllProjects() {",
    "        return ResponseEntity.ok(projectService.findAll());",
    "    }",
    "",
    "    @PostMapping(\"/projects\")",
    "    public ResponseEntity<Project> createProject(@RequestBody Project project) {",
    "        return ResponseEntity.status(HttpStatus.CREATED)",
    "                .body(projectService.save(project));",
    "    }",
    "}"
  ];

  const angularCode = [
    "import { Component, OnInit } from '@angular/core';",
    "@Component({",
    "  selector: 'app-project-list',",
    "  templateUrl: './project-list.component.html'",
    "})",
    "export class ProjectListComponent implements OnInit {",
    "  projects: Project[] = [];",
    "",
    "  constructor(private projectService: ProjectService) { }",
    "",
    "  ngOnInit(): void {",
    "    this.projectService.getAll().subscribe(data => {",
    "      this.projects = data;",
    "    });",
    "  }",
    "}"
  ];

  useEffect(() => {
    const showLines = () => {
      const interval = setInterval(() => {
        setVisibleLines(prev => {
          if (prev.length < javaCode.length + angularCode.length) {
            return [...prev, prev.length];
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 150);
      
      return () => clearInterval(interval);
    };
    
    showLines();
  }, []);
  
  return (
    <div className="rounded-lg overflow-hidden bg-gray-900 shadow-2xl">
      <div className="bg-gray-800 py-2 px-4 text-xs text-gray-400 flex justify-between">
        <span>ProjectController.java</span>
        <span>Java 17</span>
      </div>
      <div className="p-4 font-code text-sm text-gray-300 relative code-container">
        {javaCode.map((line, index) => (
          <div
            key={`java-${index}`}
            className={`code-line ${visibleLines.includes(index) ? 'opacity-100' : 'opacity-0'}`}
            style={{ color: getLineColor(line) }}
          >
            {line}
          </div>
        ))}
      </div>
      <div className="bg-gray-800 py-2 px-4 text-xs text-gray-400 flex justify-between mt-4">
        <span>project-list.component.ts</span>
        <span>Angular 17</span>
      </div>
      <div className="p-4 font-code text-sm text-gray-300 code-container">
        {angularCode.map((line, index) => (
          <div
            key={`angular-${index}`}
            className={`code-line ${visibleLines.includes(index + javaCode.length) ? 'opacity-100' : 'opacity-0'}`}
            style={{ color: getAngularLineColor(line) }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

function getLineColor(line: string): string {
  if (line.startsWith("@")) return "#DD0031";
  if (line.includes("class") || line.includes("public") || line.includes("private")) return "#5382a1";
  if (line.includes("return")) return "#f89820";
  if (line.includes("\"")) return "#6db33f";
  return "#e0e0e0";
}

function getAngularLineColor(line: string): string {
  if (line.startsWith("import") || line.includes("constructor")) return "#5382a1";
  if (line.startsWith("@")) return "#DD0031";
  if (line.includes("class") || line.includes("export")) return "#3178c6";
  if (line.includes(":")) return "#6db33f";
  return "#e0e0e0";
}

export default CodeAnimation;
