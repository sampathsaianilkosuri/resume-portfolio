import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { resumeData } from "@/data/resume-data";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  const { projects } = resumeData;

  const filterButtons = [
    { id: "all", label: "All Projects" },
    { id: "autonomous", label: "Autonomous Systems" },
    { id: "drone", label: "Drone Projects" },
    { id: "vision", label: "Computer Vision" }
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === "all") return true;
    return project.categories.includes(filter);
  });

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Projects</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-muted-foreground text-center max-w-2xl">
            Explore my portfolio of robotics and AI projects, showcasing autonomous systems and intelligent applications.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterButtons.map((button) => (
            <Button
              key={button.id}
              variant={filter === button.id ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(button.id)}
              className="rounded-full"
            >
              {button.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                category={project.category}
                tags={project.tags}
                icon={project.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
