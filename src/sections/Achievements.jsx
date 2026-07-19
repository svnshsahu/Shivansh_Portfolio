import { forwardRef } from "react";
import {
  FaAward,
  FaTrophy,
  FaCertificate,
  FaCode,
  FaUsers,
  FaPalette,
  FaCalendarCheck,
  FaBrain,
} from "react-icons/fa";

const achievements = [
  {
    title: "NPTEL Elite Certificate",
    subtitle: "Data Structures & Algorithms using Java",
    description:
      "Completed a 12-week NPTEL course conducted by IIT Kharagpur with Elite certification.",
    icon: FaAward,
    color: "text-yellow-400",
  },
  {
    title: "Tech Olympiad Runner-Up",
    subtitle: "2nd Position",
    description:
      "Secured 2nd position in the Tech Olympiad organized on Engineer's Day at Dr. K.N. Modi Institute.",
    icon: FaTrophy,
    color: "text-orange-400",
  },
  {
    title: "NASSCOM Certification",
    subtitle: "AI • ML • DBMS • Cloud",
    description:
      "Completed professional training covering Artificial Intelligence, Machine Learning, DBMS, and Cloud Services.",
    icon: FaCertificate,
    color: "text-blue-400",
  },
  {
    title: "200+ LeetCode Problems",
    subtitle: "Problem Solving",
    description:
      "Solved over 200 algorithmic problems to strengthen DSA and logical thinking.",
    icon: FaCode,
    color: "text-green-400",
  },
  {
    title: "UI Designer",
    subtitle: "College Events",
    description:
      "Designed posters, banners, and promotional assets for multiple college events.",
    icon: FaPalette,
    color: "text-pink-400",
  },
  {
    title: "Technical Team Member",
    subtitle: "College Technical Committee",
    description:
      "Supported technical events, collaborated with peers, and contributed to development discussions.",
    icon: FaUsers,
    color: "text-cyan-400",
  },
  {
    title: "Event Coordinator",
    subtitle: "Hackathons & Workshops",
    description:
      "Co-organized college festivals, hackathons, and workshops while managing logistics.",
    icon: FaCalendarCheck,
    color: "text-violet-400",
  },
  {
    title: "250+ Day Consistency Streak",
    subtitle: "Logical Reasoning",
    description:
      "Maintained a 250+ day streak in zip, sudoku, queens, tango game in Linkedin .",
    icon: FaBrain,
    color: "text-red-400",
  },
];

const Achievements = forwardRef(function Achievements(props, ref) {
  return (
    <section
      ref={ref}
      id="achievements"
      className="min-h-screen py-20 px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-4 text-center text-5xl font-bold">
          My <span className="text-violet-400">Achievements</span>
        </h2>

        <p className="mx-auto mb-14 max-w-3xl text-center text-gray-400">
          Certifications, accomplishments, leadership experiences, and
          milestones that reflect my technical growth and commitment to
          continuous learning.
        </p>

        {/* Achievement Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/20"
              >
                <div
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800 text-3xl ${item.color}`}
                >
                  <Icon />
                </div>

                <h3 className="mb-1 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mb-3 text-sm text-violet-400">
                  {item.subtitle}
                </p>

                <p className="text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default Achievements;