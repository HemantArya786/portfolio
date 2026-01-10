import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Enterprise SaaS Platform",
    category: "Full-Stack Application",
    description: "A comprehensive project management platform built for enterprise teams. Features real-time collaboration, advanced analytics, and seamless integrations.",
    problem: "Teams struggled with fragmented tools and poor visibility into project progress.",
    solution: "Built an all-in-one platform with real-time sync, custom dashboards, and automated workflows.",
    outcome: "Reduced project delivery time by 40% for 500+ enterprise users.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "E-commerce Marketplace",
    category: "Web Application",
    description: "A modern multi-vendor marketplace with advanced search, real-time inventory, and seamless checkout experience.",
    problem: "Existing platform couldn't handle traffic spikes and had poor mobile experience.",
    solution: "Rebuilt with modern stack, implemented CDN caching, and mobile-first responsive design.",
    outcome: "3x improvement in page speed, 150% increase in mobile conversions.",
    technologies: ["Next.js", "PostgreSQL", "Stripe", "Redis", "Vercel"],
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "Real-time Analytics Dashboard",
    category: "Data Visualization",
    description: "An interactive analytics platform providing real-time insights into business metrics with customizable visualizations.",
    problem: "Business decisions were delayed due to slow, outdated reporting tools.",
    solution: "Created real-time data pipeline with interactive charts and automated alerts.",
    outcome: "Enabled data-driven decisions with sub-second latency for 10M+ daily events.",
    technologies: ["React", "D3.js", "Node.js", "WebSocket", "ClickHouse"],
    gradient: "from-orange-500/20 to-rose-500/20",
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Project Visual */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${project.gradient} glass overflow-hidden card-depth`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-2xl flex items-center justify-center">
                        <span className="text-5xl font-display font-bold text-gradient opacity-50">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="text-primary font-medium text-sm uppercase tracking-widest">
                    {project.category}
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl font-display font-bold">
                    {project.title}
                  </h3>
                  
                  <p className="body-large">
                    {project.description}
                  </p>

                  {/* Problem / Solution / Outcome */}
                  <div className="space-y-4 pt-4">
                    <div className="flex gap-4">
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground w-20 shrink-0">Problem</span>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground w-20 shrink-0">Solution</span>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-xs font-medium uppercase tracking-wider text-primary w-20 shrink-0">Outcome</span>
                      <p className="text-sm text-foreground font-medium">{project.outcome}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group/link"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="relative">
                        View Live
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover/link:w-full transition-all duration-300" />
                      </span>
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
