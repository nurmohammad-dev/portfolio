const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-y border-white/10 bg-[#0b0f1a] py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex flex-col justify-between gap-8 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              My journey
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
              Education that shaped my{" "}
              <span className="font-light italic text-gray-500">curiosity.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-gray-400">
            From learning the fundamentals to studying computer science, every
            step has helped me become a more thoughtful developer.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute bottom-8 left-[15px] top-8 w-px bg-gradient-to-b from-amber-300 via-cyan-400 to-purple-400 sm:left-[23px]" />

          <div className="relative grid gap-8">
            <article className="group relative pl-12 sm:pl-16">
              <span className="absolute left-0 top-7 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#0b0f1a] bg-amber-300 shadow-lg shadow-amber-300/20 sm:h-12 sm:w-12">
                <span className="h-2 w-2 rounded-full bg-slate-950 sm:h-3 sm:w-3" />
              </span>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-amber-300/50 group-hover:bg-white/[0.05] sm:p-8">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <p className="font-mono text-sm font-medium text-amber-300">
                    2019 — 2021
                  </p>
                  <span className="w-fit rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-200">
                    Completed
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                  Higher Secondary Certificate
                </h3>
                <p className="mt-2 text-lg text-gray-300">Saidpur Government College</p>
                <p className="mt-4 text-sm leading-6 text-gray-500">
                  Completed in 2021 · Session 2019–20
                </p>
              </div>
            </article>

            <article className="group relative pl-12 sm:pl-16">
              <span className="absolute left-0 top-7 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#0b0f1a] bg-cyan-300 shadow-lg shadow-cyan-300/20 sm:h-12 sm:w-12">
                <span className="h-2 w-2 rounded-full bg-slate-950 sm:h-3 sm:w-3" />
              </span>
              <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/[0.05] p-6 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-cyan-300/70 group-hover:bg-cyan-400/[0.08] sm:p-8">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <p className="font-mono text-sm font-medium text-cyan-300">
                    2023 — 2027
                  </p>
                  <span className="w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">
                    In progress
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                  B.Sc. in Computer Science and Engineering
                </h3>
                <p className="mt-2 text-lg text-gray-300">University of South Asia</p>
                <p className="mt-4 text-sm leading-6 text-gray-500">
                  Currently studying · Expected completion in 2027
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
