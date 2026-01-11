import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const ResumeSection = () => {
  return (
    <section className="section-padding relative overflow-hidden" id="resume">
      <div className="container-narrow text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
            Resume
          </span>
          <h2 className="heading-section">
            Download my <span className="text-gradient">resume</span>
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 max-w-xl mx-auto"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <FileText className="w-8 h-8 text-primary" />
            </div>

            <p className="body-regular text-muted-foreground">
              A concise overview of my experience, projects, and technical
              expertise as a Full-Stack MERN Engineer.
            </p>

          <motion.a
  href="/resume/Hemant_Arya_Resume.pdf"
  download
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
  className="btn-premium inline-flex items-center gap-2 text-primary-foreground font-semibold relative overflow-hidden"
>
  {/* Animated background glow */}
  <span className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary/30 opacity-0 hover:opacity-100 transition-opacity duration-500" />

  {/* Button content */}
  <span className="relative z-10 flex items-center gap-2">
    <Download className="w-4 h-4" />
    Download Resume
  </span>
</motion.a>

            {/* Secondary note */}
            <span className="text-xs text-muted-foreground">
              PDF • Updated recently
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
