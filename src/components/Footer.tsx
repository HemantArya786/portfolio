import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 bg-black/90">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-muted-foreground"
          >
            © {currentYear} Hemant Arya. All rights reserved.
          </motion.p>

          {/* <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            Crafted with <Heart className="w-4 h-4 text-primary fill-primary" /> in Delhi, India
          </motion.p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
