import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "2022 — Present",
    role: "Senior Full-Stack Developer",
    company: "Leading Tech Startup",
    description: "Architecting and leading the development of a high-traffic SaaS platform serving 100K+ users. Reduced page load times by 60% and implemented real-time collaboration features.",
    highlights: ["System Architecture", "Team Leadership", "Performance Optimization"],
  },
  {
    period: "2021 — 2022",
    role: "Full-Stack Developer",
    company: "Digital Agency",
    description: "Built custom web applications for enterprise clients. Led frontend initiatives and mentored junior developers. Delivered 15+ projects with 100% client satisfaction.",
    highlights: ["Client Solutions", "Mentorship", "Agile Delivery"],
  },
  {
    period: "2020 — 2021",
    role: "Frontend Developer",
    company: "E-commerce Platform",
    description: "Developed responsive user interfaces for a growing e-commerce platform. Implemented A/B testing frameworks that increased conversion rates by 35%.",
    highlights: ["UI/UX Implementation", "A/B Testing", "Performance"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" id="experience">
      {/* Background gradient */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 100% 50%, hsl(260 80% 60% / 0.1) 0%, transparent 60%)"
        }}
      />

      <div className="container-narrow relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
            Experience
          </span>
          <h2 className="heading-section">
            A journey of <span className="text-gradient">growth</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-16 mb-20 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2 glow" />

              {/* Period */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"} pl-8 md:pl-0`}>
                <span className="text-primary font-mono text-sm">{exp.period}</span>
              </div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"} pl-8 md:pl-0`}>
                <h3 className="text-2xl font-display font-bold mb-2">{exp.role}</h3>
                <p className="text-primary font-medium mb-4">{exp.company}</p>
                <p className="body-regular mb-6">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <span
                      key={hIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-border text-muted-foreground"
                    >
                      {highlight}
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

export default ExperienceSection;
