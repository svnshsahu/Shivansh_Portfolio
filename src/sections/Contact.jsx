import { forwardRef } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Mail, MapPin } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "shivanshshahganj@gmail.com",
    href: "mailto:shivanshshahganj@gmail.com",
  },
  {
    icon: MapPin,
    label: "Residence: Shahganj, Uttar Pradesh, India",
    href: null,
  },
  {
    icon: MapPin,
    label: "Current Location: Delhi, India",
    href: null,
  },
];

const Contact = forwardRef(function Contact(_props, ref) {
  return (
    <section ref={ref} className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="section-container text-center">
        {/* Heading */}
        <p className="eyebrow inline-flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-transparent" />
          CONTACT
        </p>

        <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
          Let&apos;s Build Something
          <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Amazing Together
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-muted">
          I&apos;m currently looking for internship and full-time opportunities.
          Whether you have a project idea, want to collaborate, or simply wish
          to connect, feel free to reach out. I&apos;ll be happy to hear from you.
        </p>

        {/* Contact Card */}
        <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="space-y-6">
            {CONTACT_INFO.map(({ icon: Icon, label, href }) => (
              <div
                key={label}
                className="flex items-center justify-center gap-5 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/5"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Icon size={20} />
                </div>

                {href ? (
                  <a
                    href={href}
                    className="text-base text-text-muted transition-colors hover:text-violet-400"
                  >
                    {label}
                  </a>
                ) : (
                  <span className="text-base text-text-muted">{label}</span>
                )}
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <a
              href="https://github.com/svnshsahu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-text-muted transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-400"
            >
              <FiGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/svnshsahu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-text-muted transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-400"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;