import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "DecorMate",
    category: "Full-Stack MERN Platform",
    description:
      "A modern interior design platform connecting homeowners, designers, and vendors with smart project management tools.",
    problem:
      "Interior design workflows were fragmented across inspiration, vendor discovery, and project tracking.",
    solution:
      "Built a unified MERN-based platform with design discovery, vendor portfolios, and scalable APIs.",
    outcome:
      "Enabled a seamless end-to-end interior design experience with scalable architecture.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
      "AWS EC2",
    ],
    liveUrl: "https://www.godecormate.com",
    githubUrl: "",
    imageUrl:
      "https://www.godecormate.com",
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "CoinStaX",
    category: "Crypto Asset Management Platform",
    description:
      "A secure web platform to manage crypto assets, transactions, and automated returns with admin control.",
    problem:
      "Users lacked a simple way to track assets, returns, and transactions securely.",
    solution:
      "Developed a MERN stack platform with JWT & OTP auth, cron-based returns, and admin dashboards.",
    outcome:
      "Delivered a secure, scalable crypto dashboard with automated financial workflows.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Node Cron",
      "Tailwind CSS",
    ],
    liveUrl: "https://dev.coinstax.co",
    githubUrl: "",
    imageUrl:
      "https://dev.coinstax.co",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Ezee2Fly",
    category: "Travel Booking Platform",
    description:
      "A travel portfolio and booking application with admin dashboard and secure inquiries.",
    problem:
      "Manual inquiry handling and poor admin visibility slowed travel operations.",
    solution:
      "Built a full-stack solution with dynamic packages, admin authentication, and inquiry management.",
    outcome:
      "Improved operational efficiency and user engagement with a modern UI.",
    technologies: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    liveUrl: "https://ezee2fly.com",
    githubUrl: "",
    imageUrl:
      "https://ezee2fly.com",
    gradient: "from-orange-500/20 to-rose-500/20",
  },
  {
    title: "TAG Institute Website",
    category: "Frontend Web Platform",
    description:
      "Maintained and enhanced the digital presence of a music production institute.",
    problem:
      "Frequent content updates and UI changes were difficult to manage.",
    solution:
      "Implemented scalable UI updates using Next.js, Bootstrap 5, and clean CSS.",
    outcome:
      "Delivered a fast, responsive, and easily maintainable institute website.",
    technologies: ["Next.js", "Bootstrap", "CSS"],
    liveUrl: "https://tagmumbai.com",
    githubUrl: "",
    imageUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    gradient: "from-fuchsia-500/20 to-pink-500/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" id="projects">
      <div className="container-wide relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
            Projects
          </span>
          <h2 className="heading-section">
            Featured <span className="text-gradient">work</span>
          </h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* IMAGE */}
                  <div
                    className={`relative ${
                      isImageLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div
                      className={`aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br ${project.gradient} card-depth`}
                    >
                      <img
  src={`https://api.microlink.io/?url=${project.liveUrl}&screenshot=true&meta=false`}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div
                    className={`space-y-6 ${
                      isImageLeft ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <span className="text-primary font-medium text-sm uppercase tracking-widest">
                      {project.category}
                    </span>

                    <h3 className="text-3xl md:text-4xl font-display font-bold">
                      {project.title}
                    </h3>

                    <p className="body-large">{project.description}</p>

                    <div className="space-y-3 pt-4">
                      <p className="text-sm text-muted-foreground">
                        <strong>Problem:</strong> {project.problem}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Solution:</strong> {project.solution}
                      </p>
                      <p className="text-sm font-medium">
                        <strong>Outcome:</strong> {project.outcome}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-medium hover:text-primary"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </a>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                        >
                          <Github className="w-4 h-4" />
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
