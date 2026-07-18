import { useRef } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Skills from "../sections/Skills.jsx";
import Projects from "../sections/Projects.jsx";
import Contact from "../sections/Contact.jsx";
import Achievements from "../sections/Achievements.jsx";

function Home() {
  // Refs are created here and handed down — Navbar uses them to scroll,
  // each section attaches its ref via forwardRef.
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const achievementsRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
    achievements: achievementsRef,
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-void text-text-primary">
      <Navbar refs={sectionRefs} />

      <main>
        <Hero ref={homeRef} onViewProjects={scrollToProjects} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <Achievements ref={achievementsRef} />
        <Contact ref={contactRef} />
        
      </main>

      <Footer />
    </div>
  );
}

export default Home;
