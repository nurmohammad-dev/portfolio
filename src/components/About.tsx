import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="border-y border-white/10 bg-[#0b0f1a] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              A little about me
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
              Let me{" "}
              <span className="font-light italic text-gray-500">introduce</span>{" "}
              myself.
            </h2>
          </div>

          <div className="border-l-2 border-purple-400 pl-6 sm:pl-8">
            <p className="text-lg leading-8 text-gray-400">
              I&apos;m a passionate web developer focused on building modern,
              responsive, and user-friendly web applications. I mainly work with
              React and Next.js, and I&apos;m continuously improving my skills
              in TypeScript, backend development, and databases.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              I enjoy turning ideas into functional and clean web experiences
              while learning new technologies and improving my development
              skills through real-world projects.
            </p>

            <div className="mt-12 border-t border-white/10 pt-8">
              <h3 className="text-2xl font-semibold text-white">Find me on</h3>
              <p className="mt-2 text-sm text-gray-500">
                Feel free to connect with me.
              </p>

              <div className="mt-5 flex gap-3">
                <Link
                  href="https://github.com/nurmohammad-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gray-300 transition-colors hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                >
                  <FaGithub aria-hidden="true" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/nurmohammad-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gray-300 transition-colors hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                >
                  <FaLinkedinIn aria-hidden="true" />
                </Link>
                <Link
                  href="mailto:nurmohammad6465@gmail.com"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gray-300 transition-colors hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                >
                  <FaEnvelope aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
