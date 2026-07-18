import { forwardRef } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import projects from "../data/projects.js";

const Projects = forwardRef(function Projects(_props, ref) {
  return (
    <section ref={ref} className="py-28">
      <div className="section-container">
        <p className="eyebrow">Projects</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
          Things I have built
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
