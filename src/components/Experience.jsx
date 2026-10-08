function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <div className="text-center">
          <p className="text-violet-400">Experience</p>

          <h2 className="mt-2 text-4xl font-bold">
            My Journey
          </h2>
        </div>

        <div className="mt-12 border-l border-violet-500/30 pl-8">

          <div className="relative">
            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-violet-500" />

            <p className="text-sm text-violet-400">
              2026
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Web Developer
            </h3>

            <p className="mt-1 text-gray-400">
              99Technology — Islamabad
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-gray-400">
              Working on modern web applications with a focus on
              frontend development, responsive interfaces and
              JavaScript-based functionality.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-400"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;