import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  User,
  Sparkles,
  Briefcase,
  Layers,
  Mail,
  FileText,
} from "lucide-react";

const navLinks = [
  { label: "About", href: "#about", icon: User },
  { label: "Expertise", href: "#expertise", icon: Sparkles },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: Layers },
  { label: "Resume", href: "#resume", icon: FileText },
  { label: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass-strong py-4" : "py-6"
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-display font-bold text-xl">
            <span className="text-gradient">HA</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="mailto:hemantarya7860@gmail.com"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium glass hover:bg-primary/10 transition-all"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <motion.div
        initial={false}
        animate={
          isMobileMenuOpen
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: "100%" }
        }
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-40 md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm glass-strong p-8 pt-24">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-2xl font-display font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Icon className="w-6 h-6 opacity-80" />
                  {link.label}
                </a>
              );
            })}

            <a
              href="mailto:hemantarya7860@gmail.com"
              className="mt-4 btn-premium text-center text-primary-foreground font-semibold"
            >
              <span className="relative z-10">Get in Touch</span>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
