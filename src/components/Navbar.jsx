import { useState } from "react";
import { Menu, X } from "lucide-react";

// Navbar receives a `refs` object (created in Home.jsx) so it can smooth-scroll
// to each section without owning the refs itself.
const NAV_ITEMS = [
  { label: "Home", key: "home" },
  { label: "About", key: "about" },
  { label: "Skills", key: "skills" },
  { label: "Projects", key: "projects" },
    { label: "Achievements", key: "achievements" },
  { label: "Contact", key: "contact" },

];

function Navbar({ refs }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (key) => {
    refs?.[key]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false); // auto-close mobile menu after navigation
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="glass mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl px-6 py-3.5 sm:mx-6 lg:mx-auto">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="font-display text-lg font-semibold tracking-tight text-text-primary"
          >
            svnshsahu<span className="text-purple-glow"></span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => handleNavClick(item.key)}
                  className="font-mono text-xs uppercase tracking-wider text-text-muted transition-colors duration-200 hover:text-purple-glow"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleNavClick("contact")}
            className="hidden font-mono text-xs uppercase tracking-wider text-purple-glow border border-purple-primary/40 rounded-full px-4 py-2 transition-all duration-200 hover:bg-purple-primary hover:text-white md:inline-flex"
          >
            Let&apos;s Talk
          </button>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="text-text-primary md:hidden"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-void/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar panel */}
        <aside
          className={`glass absolute right-0 top-0 h-full w-72 max-w-[80%] rounded-l-2xl p-6 transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-base font-semibold text-text-primary">
              Menu
            </span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="text-text-muted transition-colors hover:text-text-primary"
            >
              <X size={22} />
            </button>
          </div>

          <ul className="mt-10 flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => handleNavClick(item.key)}
                  className="font-mono text-sm uppercase tracking-wider text-text-muted transition-colors hover:text-purple-glow"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}

export default Navbar;
