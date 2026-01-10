import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sentences = [
    "I'm a junior Full-Stack Engineer based in Delhi, India.",
    "With over 1.5 years of hands-on experience building production-grade applications.",
    "I specialize in the MERN stack — crafting everything from intuitive frontends to robust backend architectures.",
    "My approach combines technical excellence with product thinking.",
    "I don't just write code — I engineer solutions that scale, perform, and deliver real business value.",
  ];

  return (
    <section className="section-padding relative overflow-hidden" id="about">
      {/* Ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(200 100% 60% / 0.15) 0%, transparent 70%)"
        }}
      />

      <div className="container-narrow relative z-10" ref={ref}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-8"
        >
          About
        </motion.span>

        <div className="space-y-8">
          {sentences.map((sentence, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display tracking-tight leading-tight ${
                index === sentences.length - 1 ? "text-gradient font-bold" : "text-foreground/90"
              }`}
            >
              {sentence}
            </motion.p>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { value: "1+", label: "Years Experience" },
            { value: "10+", label: "Projects Delivered" },
            { value: "8+", label: "Happy Clients" },
            { value: "100%", label: "Success Rate" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
