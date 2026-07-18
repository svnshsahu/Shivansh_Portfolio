import { forwardRef } from "react";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import {
  SiAppwrite,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "Python", icon: FaPython, color: "text-blue-400" },
      { name: "C", icon: FaCode, color: "text-blue-300" },
      { name: "SQL", icon: SiMysql, color: "text-blue-600" },
    ],
  },

  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "Responsive Design", icon: FaCode, color: "text-green-400" },
    ],
  },

  {
    title: "Backend & APIs",
    skills: [
      { name: "Appwrite", icon: SiAppwrite, color: "text-pink-500" },
      { name: "JDBC", icon: FaDatabase, color: "text-purple-400" },
      { name: "REST APIs", icon: FaDatabase, color: "text-indigo-400" },
    ],
  },

  {
    title: "Computer Science",
    skills: [
      {
        name: "Data Structures & Algorithms",
        icon: FaCode,
        color: "text-emerald-400",
      },
      {
        name: "Operating Systems",
        icon: FaDatabase,
        color: "text-orange-400",
      },
      {
        name: "DBMS",
        icon: FaDatabase,
        color: "text-cyan-400",
      },
      {
        name: "Cybersecurity",
        icon: FaCode,
        color: "text-red-400",
      },
      {
        name: "OOP",
        icon: FaCode,
        color: "text-yellow-300",
      },
    ],
  },

  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "GitHub", icon: FaGithub, color: "text-white" },
    ],
  },
];

const Skills = forwardRef(function Skills(props, ref) {
  return (
    <section
      ref={ref}
      id="skills"
      className="min-h-screen py-20 px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-4 text-center text-5xl font-bold">
          My <span className="text-violet-400">Skills</span>
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-gray-400">
          Technologies and tools I use to build responsive, scalable, and
          user-friendly applications.
        </p>

        {/* Categories */}
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-6 text-2xl font-semibold text-violet-400">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-700 bg-slate-800 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500/20"
                    >
                      <Icon className={`text-5xl ${skill.color}`} />

                      <h4 className="text-center font-medium text-gray-200">
                        {skill.name}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;