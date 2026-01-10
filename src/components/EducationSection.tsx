import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" id="education">
      <div className="container-narrow relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
            Education
          </span>
          <h2 className="heading-section">
            Continuous <span className="text-gradient">learning</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Formal Education */}
          <div className="p-8 rounded-3xl glass card-depth">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <GraduationCap className="w-7 h-7 text-primary" />
            </div>
            
            <h3 className="heading-card mb-2">Bachelor of Computer Applications</h3>
            <p className="text-primary font-medium mb-4">IGNOU — Ongoing</p>
            <p className="body-regular">
              Building a strong theoretical foundation in computer science fundamentals, algorithms, and software engineering principles.
            </p>
          </div>

          {/* Continuous Learning */}
          <div className="p-8 rounded-3xl glass card-depth">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            
            <h3 className="heading-card mb-2">Self-Directed Learning</h3>
            <p className="text-primary font-medium mb-4">Continuous Growth</p>
            <p className="body-regular">
              Constantly exploring new technologies, contributing to open source, and staying current with industry best practices and emerging trends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
