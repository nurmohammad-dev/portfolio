const Education = () => {
  return (
    <section id="education" className="border-y border-white/10 bg-[#0b0f1a] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
          Education
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
            Learning with purpose, building with curiosity.
          </h2>
          <p className="max-w-md text-base leading-7 text-gray-400">
            My academic background gives me a strong foundation in computer
            science while personal projects help me turn that knowledge into
            practical products.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="font-mono text-sm text-amber-400">2019–2021</p>
            <h3 className="mt-5 text-2xl font-semibold text-white">Higher Secondary Certificate (HSC)</h3>
            <p className="mt-3 text-lg text-gray-300">Saidpur Government College</p>
            <p className="mt-2 text-sm leading-6 text-gray-500">Completed in 2021 · Session 2019–20</p>
          </article>
          <article className="rounded-2xl border border-cyan-400/30 bg-cyan-400/[0.04] p-6 sm:p-8">
            <p className="font-mono text-sm text-cyan-300">2023–2027</p>
            <h3 className="mt-5 text-2xl font-semibold text-white">B.Sc. in Computer Science and Engineering</h3>
            <p className="mt-3 text-lg text-gray-300">University of South Asia</p>
            <p className="mt-2 text-sm leading-6 text-gray-500">Currently studying · Expected completion in 2027</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Education;
