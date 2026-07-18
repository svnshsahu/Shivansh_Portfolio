import { FiGithub, FiLinkedin } from "react-icons/fi";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section-container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="font-mono text-xs text-text-faint">
          © {currentYear} Shivansh Sahu. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/svnshsahu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted transition-colors hover:text-purple-glow"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/svnshsahu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted transition-colors hover:text-purple-glow"
          >
            <FiLinkedin size={18} />
          </a>
        </div>

        <p className="font-mono text-xs text-text-faint">
          Made with <span className="text-purple-glow">React</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
