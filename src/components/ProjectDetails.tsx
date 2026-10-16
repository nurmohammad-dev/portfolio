import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

const ProjectDetails = ({ project }: { project: Project }) => {
  return (
    <section className="bg-[#0b0f1a] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Link href="/projects" className="text-sm font-medium text-cyan-300 hover:text-cyan-200">
          ← Back to projects
        </Link>
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="relative aspect-video border-b border-white/10 bg-black/20">
            <Image src={project.image} alt={`${project.title} project screenshot`} fill priority className="object-cover object-top" />
          </div>
          <div className="p-6 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Project case study</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">{project.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">{project.description}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300">
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-semibold text-white">Challenges faced</h2>
                <p className="mt-3 leading-7 text-gray-400">{project.challenges}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Future improvements</h2>
                <p className="mt-3 leading-7 text-gray-400">{project.improvements}</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={project.live} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-cyan-400 px-5 py-3 font-medium text-slate-950 hover:bg-cyan-300">
                View live project
              </Link>
              <Link href={project.github} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/15 px-5 py-3 font-medium text-gray-200 hover:border-purple-400 hover:bg-purple-400/10">
                View client GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
