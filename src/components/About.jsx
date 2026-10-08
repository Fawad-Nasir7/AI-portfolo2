function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">

        <p className="text-violet-400">About Me</p>

        <h2 className="mt-2 text-4xl font-bold">
          Building Digital Experiences
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          I'm a Web Developer focused on creating clean, responsive and
          user-friendly web applications. My main technologies include
          JavaScript, React.js and Tailwind CSS.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-3xl font-bold text-violet-400">3+</h3>
            <p className="mt-2 text-gray-400">Years Learning</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-3xl font-bold text-violet-400">10+</h3>
            <p className="mt-2 text-gray-400">Projects</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-3xl font-bold text-violet-400">7+</h3>
            <p className="mt-2 text-gray-400">Technologies</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;