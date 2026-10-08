import { ArrowRight, Download, Github, Linkedin } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 pt-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

        <div>
          <p className="mb-4 text-violet-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl">
            Fawad Nasir
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-gray-300 sm:text-3xl">
            Frontend & React Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            I build modern, responsive and interactive web applications
            using JavaScript, React.js and Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-700"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/Fawad-Nasir-CV.pdf"
              download
              className="flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 p-3 hover:bg-white/10"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 p-3 hover:bg-white/10"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="glow flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-blue-600 sm:h-96 sm:w-96">
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-[#080b1d] sm:h-[21rem] sm:w-[21rem]">
              <span className="text-7xl font-bold text-violet-500">
                FN
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;