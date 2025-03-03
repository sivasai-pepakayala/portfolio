
import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import Card from "./Card";
import { 
  Code, 
  Server, 
  Database, 
  GitBranch, 
  Terminal, 
  Globe, 
  Brackets, 
  FileType, 
  Layout, 
  Cpu, 
  Cloud,
  Package,
  MonitorSmartphone
} from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML/CSS", icon: <Globe size={20} /> },
        { name: "JavaScript", icon: <Code size={20} /> },
        { name: "React.js", icon: <Code size={20} /> },
        { name: "Bootstrap", icon: <Layout size={20} /> },
        { name: "Tailwind CSS", icon: <Brackets size={20} /> },
        { name: "Responsive Design", icon: <MonitorSmartphone size={20} /> },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Python", icon: <FileType size={20} /> },
        { name: "Flask", icon: <Server size={20} /> },
        { name: "Node.js", icon: <Server size={20} /> },
        { name: "RESTful APIs", icon: <Cloud size={20} /> },
        { name: "Express.js", icon: <Server size={20} /> },
        { name: "Authentication", icon: <Terminal size={20} /> },
      ],
    },
    {
      category: "Databases & Tools",
      skills: [
        { name: "SQL", icon: <Database size={20} /> },
        { name: "MongoDB", icon: <Database size={20} /> },
        { name: "Git", icon: <GitBranch size={20} /> },
        { name: "VS Code", icon: <Code size={20} /> },
        { name: "Salesforce", icon: <Cloud size={20} /> },
        { name: "Docker", icon: <Package size={20} /> },
      ],
    },
    {
      category: "Others & Fundamentals",
      skills: [
        { name: "C/C++", icon: <Cpu size={20} /> },
        { name: "Data Structures", icon: <Database size={20} /> },
        { name: "Algorithms", icon: <Terminal size={20} /> },
        { name: "CI/CD", icon: <GitBranch size={20} /> },
        { name: "Testing", icon: <Code size={20} /> },
        { name: "Problem Solving", icon: <Terminal size={20} /> },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-accent">
      <div className="container mx-auto px-4" id="skills-section">
        <SectionHeader
          badge="My Skills"
          title="Technical Expertise"
          subtitle="I've developed a diverse set of skills throughout my career, with a particular focus on software development and Python programming."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <Card
              key={idx}
              className={`${isVisible ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="flex items-center p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                  >
                    <div className="p-2 mr-3 rounded-md bg-primary/20 text-primary">
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
