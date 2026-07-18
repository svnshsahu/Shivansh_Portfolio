import { forwardRef } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Download } from "lucide-react";

const Hero = forwardRef(function Hero({ onViewProjects }, ref) {
  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden lg:pl-20 pt-20"
    >
      {/* Background Glow */}

      <div className="absolute -left-24 top-16 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]" />

      <div className="absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-cyan-500/15 blur-[120px]" />

      {/* Main Container */}

      <div className="mx-auto w-full max-w-7xl px-6 mt-20">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}

          <div className="max-w-xl">

            <p className="mb-4  text-lg font-medium tracking-wide text-violet-400">
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl">
              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-white bg-clip-text text-transparent">
                Shivansh Sahu
              </span>
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-gray-300">
              Web Developer
              <span className="mx-3 text-violet-400">•</span>
              Java Programmer
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              Final-year Computer Science Engineering student passionate about
              building responsive web applications, solving Data Structures &
              Algorithms problems in Java, and integrating AI into real-world
              software.
            </p>

            {/* Stats */}



            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">
                            <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/30"
              >
                <Download size={18} />
                Download Resume
              </a>

              <button
                onClick={onViewProjects}
                className="rounded-xl border border-violet-500/40 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-violet-400 hover:bg-violet-500/10"
              >
                View Projects
              </button>

            </div>

            {/* Social Links */}

            <div className="mt-12 flex items-center gap-5">

              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-400"
              >
                <FiGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-400"
              >
                <FiLinkedin size={22} />
              </a>

              <a
                href="shivanshshahganj@gmail.com"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-400"
              >
                <FiMail size={22} />
              </a>

            </div>

          </div>

          {/* Right Image */}

          <div className="flex justify-center ">

            <div className="relative">

              {/* Glow */}

              <div className="absolute inset-0 rounded-[32px] bg-violet-600/20 blur-3xl" />

              {/* Glass Card */}

              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">

                <img
                  src="https://res.cloudinary.com/dub1jfilx/image/upload/v1784390113/Pic-Picsart-AiImageEnhancer_dg90os.jpg" // Replace with your image
                  alt="Shivansh Sahu"
                  className="h-[500px] w-[390px] rounded-[24px] object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </div>



    </section>
  );
});

export default Hero;