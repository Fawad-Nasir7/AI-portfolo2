const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "REST API",
  "MongoDB",
  "Node.js",
  "Express.js",
  "Responsive Design",
];

function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="text-center">
          <p className="text-violet-400">My Skills</p>

          <h2 className="mt-2 text-4xl font-bold">
            Technologies I Use
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-center font-semibold text-gray-300 transition hover:-translate-y-1 hover:border-violet-500 hover:text-violet-400"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;