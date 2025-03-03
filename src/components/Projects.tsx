
import { ExternalLink, Github } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Card from "./Card";
import Button from "./Button";

const Projects = () => {
  const projects = [
    {
      title: "Vision Verse",
      description: "A computer vision project featuring face detection, face mesh, and hand recognition capabilities.",
      tags: ["Python", "Computer Vision", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1526378787940-576a539ba69d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      github: "https://github.com/Sivasai1712/vision-verse",
      live: "#",
    },
    {
      title: "Isha Travel Agency",
      description: "A full-featured travel website with booking capabilities and destination guides.",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      github: "https://github.com/Sivasai1712/isha-travel",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-accent">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Portfolio"
          title="Featured Projects"
          subtitle="Explore some of my recent work showcasing my technical skills and creativity in solving real-world problems."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
              hoverable={false}
            >
              <div className="h-48 overflow-hidden rounded-md mb-5 glowing-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3 mt-auto">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full"
                    icon={<Github size={16} />}
                  >
                    Code
                  </Button>
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button
                    className="w-full"
                    icon={<ExternalLink size={16} />}
                  >
                    Demo
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a href="https://github.com/sivasai-pepakayala?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" icon={<Github size={16} />}>
              View More on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
