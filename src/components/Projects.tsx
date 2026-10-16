import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@heroui/react";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0b0f1a] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Projects
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Some of my recent work
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            Here are some of the projects I have built while learning and
            improving my development skills.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] shadow-sm transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-950/30"
            >
              <div className="relative border-b border-white/10 bg-black/20 p-2">
                <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-gray-900">
                  <div className="absolute inset-x-0 top-0 z-10 flex h-7 items-center gap-1.5 border-b border-white/10 bg-slate-950/90 px-3">
                    <span className="h-2 w-2 rounded-full bg-red-300" />
                    <span className="h-2 w-2 rounded-full bg-amber-300" />
                    <span className="h-2 w-2 rounded-full bg-green-300" />
                  </div>
                  <Image
                    src={project.image}
                    alt={`${project.title} project`}
                    fill
                    className="object-cover object-top pt-7 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              <CardContent className="flex h-full flex-col p-6">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div
                  className="mt-5 flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="rounded-lg border border-cyan-400/60 px-4 py-2.5 text-sm font-medium text-cyan-300 transition-colors duration-200 hover:bg-cyan-400 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    View details
                  </Link>
                  {project.live !== "#" && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-medium text-slate-950 transition-colors duration-200 hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    >
                      Live Demo
                    </Link>
                  )}

                  {project.github !== "#" && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-gray-200 transition-colors duration-200 hover:border-purple-400 hover:bg-purple-400/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
