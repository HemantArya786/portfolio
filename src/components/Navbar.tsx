import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-20 bg-white/90 shadow backdrop-blur-md">
    <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
      <div className="text-xl font-bold text-primary">Hemant Arya</div>
      <div className="space-x-6 hidden md:flex">
        <a href="#about" className="hover:text-primary font-medium">
          About
        </a>
        <a href="#skills" className="hover:text-primary font-medium">
          Skills
        </a>
        <a href="#projects" className="hover:text-primary font-medium">
          Projects
        </a>
        <a href="#contact" className="hover:text-primary font-medium">
          Contact
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={22} className="text-blue-700 hover:text-primary" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub size={22} className="text-gray-800 hover:text-primary" />
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
