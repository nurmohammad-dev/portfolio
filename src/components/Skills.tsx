import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiDjango,
  SiDocker,
  SiExpress,
  SiFigma,
  SiMongodb,
  SiNextdotjs,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiCanvas,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillGroups = [
  {
    number: "01",
    title: "Languages & Frameworks",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
  },
  {
    number: "02",
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Django", icon: SiDjango },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    number: "03",
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "shadcn/ui", icon: SiShadcnui },
      { name: "Figma", icon: SiFigma },
      { name: "Canva", icon: SiCanvas },
      { name: "VS Code", icon: VscVscode },
      { name: "Docker", icon: SiDocker },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#080a0f] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
              What I work with
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
              My <span className="font-light italic text-gray-500">Skills</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-gray-400">
            Technologies I use while building modern web applications, organized
            by where they fit in the workflow.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors duration-200 hover:border-cyan-400/40 sm:p-5"
            >
              <div className="relative mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">
                  {group.title}
                </h3>
                <span className="absolute right-0 top-0 font-mono text-[10px] font-medium tracking-widest text-white/30">
                  {group.number}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/skill flex min-h-24 flex-col items-center justify-center rounded-lg border border-white/10 bg-black/20 p-3 text-center transition-colors duration-200 hover:border-cyan-400/60 hover:bg-cyan-400/5"
                  >
                    <skill.icon
                      aria-hidden="true"
                      className="h-9 w-9 text-cyan-300 transition-transform duration-200 group-hover/skill:scale-110"
                    />
                    <span className="mt-3 text-[11px] font-medium uppercase tracking-wide text-gray-500 group-hover/skill:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
