import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "May 2024 — Present",
    role: "Full Stack Engineer",
    company: "SEO Scientist Pvt. Ltd.",
    description:
      "Leading development of core MERN-based products while managing and mentoring a small engineering team. Responsible for end-to-end project execution, including R&D, architecture decisions, feature development, and delivery of scalable SEO-focused solutions.",
    highlights: [
      "MERN Stack",
      "Team Leadership",
      "Product Architecture",
      "AI & Automation R&D",
    ],
  },
  {
    period: "May 2025 — Nov 2025",
    role: "Full Stack Engineer (Internship)",
    company: "GTMotion – Outbound Engine",
    description:
      "Worked on outbound automation systems focusing on performance, scalability, and clean API integrations. Contributed across frontend and backend while collaborating remotely with cross-functional teams.",
    highlights: [
      "React & Node.js",
      "REST APIs",
      "Remote Collaboration",
      "Scalable Systems",
    ],
  },
  {
    period: "Jan 2025 — Apr 2025",
    role: "Full Stack Engineer (Freelance)",
    company: "CoinStaX",
    description:
      "Built a crypto asset management platform featuring secure authentication, portfolio tracking, automated returns using cron jobs, and a full admin dashboard. Focused on performance, security, and responsive UI.",
    highlights: [
      "JWT & OTP Auth",
      "Node Cron",
      "Admin Dashboard",
      "MongoDB",
    ],
  },
  {
    period: "Dec 2024 — Mar 2025",
    role: "Frontend Developer (Freelance)",
    company: "The Audio Guys (TAG Institute)",
    description:
      "Maintained and enhanced the institute’s website using Next.js and Bootstrap. Implemented UI updates, new listings, and functional changes to improve usability and engagement.",
    highlights: [
      "Next.js",
      "Bootstrap 5",
      "Responsive UI",
    ],
  },
  {
    period: "Oct 2024 — Dec 2024",
    role: "Full Stack Engineer (Freelance)",
    company: "Ezee2Fly",
    description:
      "Developed a travel booking platform with admin dashboards, secure inquiry handling, and scalable backend APIs. Delivered a production-ready full-stack solution.",
    highlights: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Full-Stack Delivery",
    ],
  },
  {
    period: "Apr 2023 — Jun 2023",
    role: "Frontend Developer (Freelance)",
    company: "BBKV Productions",
    description:
      "Worked on frontend features using React and Tailwind CSS, focusing on clean UI, responsiveness, and reusable components.",
    highlights: [
      "React.js",
      "Tailwind CSS",
      "UI Components",
    ],
  },
  {
    period: "Dec 2023 — Feb 2024",
    role: "Relationship Manager",
    company: "SanKash",
    description:
      "Handled customer onboarding and loan processing for the ‘Travel Now, Pay Later’ fintech model. Coordinated with multiple loan providers while ensuring a smooth customer experience.",
    highlights: [
      "Client Communication",
      "Fintech Operations",
      "Customer Success",
    ],
  },
  {
    period: "Jun 2023 — Oct 2023",
    role: "Senior Analyst",
    company: "Offshoot InfoTech",
    description:
      "Conducted background verification (BGV) processes for enterprise clients. Ensured compliance, accuracy, and confidentiality while collaborating with internal teams.",
    highlights: [
      "BGV Operations",
      "Process Compliance",
      "Professional Communication",
    ],
  },
  {
    period: "Oct 2019 — May 2022",
    role: "Information Retrieval Officer",
    company: "Justdial",
    description:
      "Supported users by connecting them with verified local businesses. Managed high-volume customer interactions while maintaining accurate records and follow-ups.",
    highlights: [
      "Customer Support",
      "Data Accuracy",
      "Communication Skills",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" id="experience">
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 50%, hsl(260 80% 60% / 0.1) 0%, transparent 60%)",
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
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-16 mb-20 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2 glow" />

              <div
                className={`md:w-1/2 ${
                  index % 2 === 0
                    ? "md:text-right md:pr-16"
                    : "md:text-left md:pl-16"
                } pl-8 md:pl-0`}
              >
                <span className="text-primary font-mono text-sm">
                  {exp.period}
                </span>
              </div>

              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-16" : "md:pr-16"
                } pl-8 md:pl-0`}
              >
                <h3 className="text-2xl font-display font-bold mb-2">
                  {exp.role}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {exp.company}
                </p>
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
