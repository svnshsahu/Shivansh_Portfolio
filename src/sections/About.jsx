import { forwardRef } from "react";
import {
  GraduationCap,
  School,
  BookOpen,
  MapPin,
  Code2,
  Brain,
  FolderGit2,
  Trophy,
} from "lucide-react";

const EDUCATION = [
  {
    id: 1,
    icon: GraduationCap,
    institution: "Dr. K.N. Modi Institute of Engineering and Technology",
    location: "Uttar Pradesh, India",
    degree: "B.Tech in Computer Science Engineering",
    score: "SGPA 8.1",
    year: "2023 - Present",
  },
  {
    id: 2,
    icon: School,
    institution: "Shivbrat Singh Children Academy",
    location: "Uttar Pradesh, India",
    degree: "Senior Secondary (CBSE)",
    score: "92%",
    year: "2023",
  },
  {
    id: 3,
    icon: BookOpen,
    institution: "St. Xavier's School",
    location: "Uttar Pradesh, India",
    degree: "Higher Secondary (CBSE)",
    score: "92%",
    year: "2021",
  },
];

const About = forwardRef(function About(_props, ref) {
  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-purple-deep/20 blur-[140px]" />

        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-purple-primary/15 blur-[120px]" />

      </div>

      <div className="section-container">

        {/* Heading */}

        <p className="eyebrow inline-flex items-center gap-2">

          <span className="h-px w-8 bg-gradient-to-r from-purple-primary to-transparent" />

          ABOUT ME

        </p>

        <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">

          Turning Ideas Into

          <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">

            Modern Web Applications

          </span>

        </h2>

        <div className="mt-16 grid gap-20 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div>

            <div className="space-y-6 text-lg leading-8 text-text-muted">

              <p>
                I&apos;m a final-year Computer Science Engineering student with a
                strong foundation in Java, Data Structures & Algorithms,
                JavaScript, React, and modern web technologies. I enjoy solving
                real-world problems through clean, scalable software.
              </p>

              <p>
                My interests include Full Stack Development, Artificial
                Intelligence, and creating responsive user experiences. I&apos;m
                always exploring new technologies while strengthening my
                problem-solving skills through consistent coding practice.
              </p>

            </div>

            {/* Quick Stats */}

            <div className="mt-12 grid grid-cols-2 gap-5">

              <div className="glass-card group rounded-2xl border border-white/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-glow-sm">

                <Code2
                  size={26}
                  className="text-violet-400"
                />

                <h3 className="mt-4 text-3xl font-bold text-white">
                  200+
                </h3>

                <p className="mt-1 text-sm text-text-muted">
                  LeetCode Problems
                </p>

              </div>

              <div className="glass-card group rounded-2xl border border-white/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-glow-sm">

                <FolderGit2
                  size={26}
                  className="text-violet-400"
                />

                <h3 className="mt-4 text-3xl font-bold text-white">
                  6+
                </h3>

                <p className="mt-1 text-sm text-text-muted">
                  Projects Built
                </p>

              </div>

              <div className="glass-card group rounded-2xl border border-white/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-glow-sm">

                <Brain
                  size={26}
                  className="text-violet-400"
                />

                <h3 className="mt-4 text-2xl font-bold text-white">
                  Java
                </h3>

                <p className="mt-1 text-sm text-text-muted">
                  DSA & Backend
                </p>

              </div>

              <div className="glass-card group rounded-2xl border border-white/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-glow-sm">

                <Trophy
                  size={26}
                  className="text-violet-400"
                />

                <h3 className="mt-4 text-2xl font-bold text-white">
                  React
                </h3>

                <p className="mt-1 text-sm text-text-muted">
                  Frontend Development
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative space-y-8 pl-8">

            <div className="absolute left-[10px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-violet-500 via-violet-500/30 to-transparent" />
                        {EDUCATION.map((edu) => {
              const Icon = edu.icon;

              return (
                <div
                  key={edu.id}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_0_35px_rgba(139,92,246,.18)]"
                >
                  {/* Top Accent */}

                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-violet-500 to-cyan-400" />

                  {/* Timeline Dot */}

                  <div className="absolute -left-[36px] top-8 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#0B1120] bg-violet-500 transition-transform duration-300 group-hover:scale-110">

                    <div className="h-2 w-2 rounded-full bg-white" />

                  </div>

                  {/* Header */}

                  <div className="flex items-start justify-between gap-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">

                        <Icon size={22} />

                      </div>

                      <div>

                        <h3 className="text-lg font-semibold text-white">

                          {edu.institution}

                        </h3>

                        <p className="mt-1 text-sm text-text-muted">

                          {edu.degree}

                        </p>

                      </div>

                    </div>

                    <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs font-semibold text-violet-300">

                      {edu.year}

                    </span>

                  </div>

                  {/* Score */}

                  <div className="mt-5 inline-flex rounded-lg bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300">

                    {edu.score}

                  </div>

                  {/* Location */}

                  <div className="mt-5 flex items-center gap-2 text-sm text-text-faint">

                    <MapPin size={15} />

                    {edu.location}

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
});

export default About;