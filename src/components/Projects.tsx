import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Coinstax",
    desc: "Crypto investment dashboard with dynamic UI and transaction data.",
    tech: ["React.js", "Node.js", "Tailwind CSS"],
    link: "https://dev.coinstax.co",
  },
  {
    title: "Ezee2Fly",
    desc: "Fullstack travel booking platform with MongoDB and admin dashboard.",
    tech: ["React", "Express", "MongoDB"],
    link: "https://ezee2fly.com",
  },
  {
    title: "The Audio Guys Mumbai",
    desc: "Professional website for audio training institute.",
    tech: ["React", "Node.js"],
    link: "https://tagmumbai.com",
  },
  {
    title: "Visual(ai)ze",
    desc: "Showcase for AI-powered design tools with smooth landing animations.",
    tech: ["React", "Vite", "Tailwind CSS"],
    link: "https://visualaize.fun",
  },
];

const Projects = () => (
  <section id="projects" className="py-16 px-6 bg-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-extrabold text-primary mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-gradient-to-br from-secondary to-primary text-white rounded-xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 opacity-15 text-8xl pointer-events-none font-extrabold">
              #{p.title[0]}
            </div>
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="mb-4">{p.desc}</p>
            <div className="flex gap-2 mb-4 flex-wrap">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="bg-white/20 text-xs px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm hover:underline"
            >
              Visit Project <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
