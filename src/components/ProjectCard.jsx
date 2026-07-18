import { Link } from "react-router-dom";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { ArrowUpRight } from "lucide-react";

// ProjectCard renders a single project preview.
// The "Details" button routes to /project/:slug via React Router.
function ProjectCard({ project }) {
  const { title, description, image, technologies, slug, github, live ,Deploy , Demo} =
    project ?? {};

  return (
    <div className="glass-card group flex flex-col overflow-hidden hover:-translate-y-1 hover:border-purple-primary/40 hover:shadow-glow-sm">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${title} preview`}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-text-primary">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          {description}
        </p>

        {/* Technology badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies?.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-purple-glow"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text-primary"
          >
            <FiGithub size={16} /> Code
          </a>
{Demo && (
  Deploy ? (
    <a
      href={live}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary justify-center"
    >
      <FiExternalLink size={16} /> Live Demo
    </a>
  ) : (
    <Link
      to={`/project/${slug}/${live}`}
      className="btn-primary justify-center"
    >
      <FiExternalLink size={16} /> Live Demo
    </Link>
  )
)}
          {/* <Link
            to={`/project/${slug}/${live}`}
            className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text-primary"
          >
            <FiExternalLink size={16} /> Live Demo
          </Link> */}

          <Link
            to={`/project/${slug}`}
            className="ml-auto inline-flex items-center gap-1 rounded-full bg-purple-soft px-4 py-2 font-mono text-xs text-purple-glow transition-all duration-300 hover:bg-purple-primary hover:text-white"
          >
            Details <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
