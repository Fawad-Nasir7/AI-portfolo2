import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Product Manager",
    description:
      "JavaScript-based application for managing, searching, filtering and organizing products.",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Currency Converter",
    description:
      "Responsive currency conversion application using Fetch API and live exchange-rate data.",
    tech: ["JavaScript", "Fetch API", "CSS"],
  },
  {
    title: "ShopEase",
    description:
      "Modern e-commerce frontend with product cards, categories and responsive UI.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Personal Portfolio",
    description:
      "Responsive developer portfolio showcasing skills, projects and professional information.",
    tech: ["HTML", "CSS"],
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="text-center">
          <p className="text-violet-400">Portfolio</p>

          <h2 className="mt-2 text-4xl font-bold">
            Featured Projects
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-2 hover:border-violet-500/50"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <ExternalLink
                  size={20}
                  className="text-gray-500 group-hover:text-violet-400"
                />
              </div>

              <p className="mt-4 leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-violet-400">
                <Github size={17} />
                View Project
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;