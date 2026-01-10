import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Rocket, Users } from "lucide-react";

const expertiseData = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description: "Building pixel-perfect, performant user interfaces with React, Next.js, and modern CSS. Focus on accessibility, animations, and seamless user experiences.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: Server,
    title: "Backend Systems",
    description: "Designing and implementing scalable server architectures with Node.js and Express. RESTful APIs, GraphQL, and database optimization.",
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Redis"],
  },
  {
    icon: Rocket,
    title: "Deployment & CI/CD",
    description: "Streamlining development workflows with modern DevOps practices. Container orchestration, automated testing, and zero-downtime deployments.",
    technologies: ["Docker", "AWS", "Vercel", "GitHub Actions", "Nginx"],
  },
  {
    icon: Users,
    title: "Leadership & Mentorship",
    description: "Guiding teams to deliver exceptional products. Code reviews, architecture decisions, and fostering a culture of continuous learning.",
    technologies: ["Agile", "Code Reviews", "Technical Writing", "Team Building"],
  },
];

const ExpertiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" id="expertise">
      <div className="container-wide relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
            Expertise
          </span>
          <h2 className="heading-section">
            Crafted with <span className="text-gradient">precision</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl glass card-depth"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 0%, hsl(200 100% 60% / 0.1) 0%, transparent 60%)"
                }}
              />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="heading-card mb-4 group-hover:text-gradient transition-all duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="body-regular mb-6">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
