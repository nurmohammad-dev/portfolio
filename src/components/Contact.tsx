import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/nurmohammad-dev",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nurmohammad-dev/",
    icon: FaLinkedinIn,
  },
  {
    label: "Gmail",
    href: "mailto:nurmohammad6465@gmail.com",
    icon: FaEnvelope,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="border-b border-white/10 bg-[#0a0808] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-mono text-xl font-medium uppercase tracking-[0.3em] text-amber-400">
          Contact
        </p>

        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-bold tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
          Let&apos;s connect{" "}
          <span className="font-light italic text-gray-400">together.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
          I&apos;m always open to meaningful conversations, collaboration, and
          opportunities to build thoughtful web experiences.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm uppercase tracking-[0.12em] text-gray-300 transition-colors duration-200 hover:border-cyan-400/70 hover:bg-cyan-400/10 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Icon className="text-base" aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
