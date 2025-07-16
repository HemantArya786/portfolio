import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-700" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <FaCode className="text-teal-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-700" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
];

const bgUrl =
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80";

const Skills = () => (
  <section
    id="skills"
    className="py-16 px-6 relative"
    style={{
      backgroundImage: `url(${bgUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-60 pointer-events-none"></div>

    {/* Content */}
    <div className="max-w-6xl mx-auto text-center relative z-10">
      <h2 className="text-3xl font-extrabold mb-10 text-white">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center bg-white/10 rounded-lg p-6 hover:scale-105 shadow hover:shadow-xl transition text-white"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <div className="text-md font-semibold">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
