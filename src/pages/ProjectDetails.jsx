import { useParams, Link } from "react-router-dom";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { ArrowLeft, CheckCircle2, AlertTriangle } from "lucide-react";
import projects from "../data/projects.js";

function ProjectDetails() {
  const { slug } = useParams();
  const project = projects?.find((p) => p.slug === slug);

  // Custom "not found" message scoped to this page (distinct from the global 404 route)
  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-void px-6 text-center text-text-primary">
        <p className="eyebrow">Error</p>
        <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Project not found
        </h1>
        <p className="mt-3 max-w-md text-text-muted">
          The project you are looking for does not exist or may have been
          moved.
        </p>
        <Link to="/" className="btn-primary mt-8">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  const { title, description, image, technologies, features, challenges, github, live , Deploy , Demo} =
    project;

  return (
    <div className="min-h-screen bg-void text-text-primary">
      <div className="section-container py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors hover:text-purple-glow"
        >
          <ArrowLeft size={15} /> Back
        </Link>

        {/* Large image */}
        <div className="glass-card mt-8 overflow-hidden">
          <img src={image} alt={`${title} preview`} className="w-full object-cover" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Main content */}
          <div>
            <h1 className="font-display text-3xl font-bold sm:text-4xl">{title}</h1>
            <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
              {description}
            </p>

            {/* Features */}
            <div className="mt-10">
              <h2 className="font-display text-lg font-semibold text-purple-glow">
                Key Features
              </h2>
              <ul className="mt-4 space-y-3">
                {features?.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-text-muted">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-purple-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="mt-10">
              <h2 className="font-display text-lg font-semibold text-purple-glow">
                Challenges
              </h2>
              <ul className="mt-4 space-y-3">
                {challenges?.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-2.5 text-sm text-text-muted">
                    <AlertTriangle size={16} className="mt-0.5 shrink-0 text-purple-primary" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="glass-card h-fit space-y-6 p-6">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-text-faint">
                Technologies
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-purple-glow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <a href={github} target="_blank" rel="noopener noreferrer" className="btn-secondary justify-center">
                <FiGithub size={16} /> View Code
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
              className="btn-primary justify-center">
                <FiExternalLink size={16} /> Live Demo
              </Link> */}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
