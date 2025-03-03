
import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const resumeUrl = "https://drive.google.com/file/d/1GepKcdbjm8AXJXdFLyzeIfG-tQmZXqnz/view";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-md py-3"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#top" className="text-xl md:text-2xl font-bold text-gradient">
          Sivasai Pepakayala
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-primary/10 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="ml-2 flex items-center space-x-2">
            <ThemeToggle />
            <a 
              href={resumeUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-2"
            >
              <Button icon={<Download size={16} />}>
                Resume
              </Button>
            </a>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden space-x-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md hover:bg-primary/10"
          >
            <span className="block w-6 h-0.5 bg-foreground mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-foreground mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-foreground"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 glass py-4 px-4 flex flex-col animate-fade-in md:hidden">
            <div className="flex justify-between items-center mb-8">
              <a href="#top" className="text-xl font-bold text-gradient">
                Sivasai P.
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md hover:bg-primary/10"
              >
                <span className="block w-6 h-0.5 bg-foreground transform rotate-45 translate-y-0.5"></span>
                <span className="block w-6 h-0.5 bg-foreground transform -rotate-45 -translate-y-0"></span>
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-lg font-medium rounded-md hover:bg-primary/10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={resumeUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4"
              >
                <Button icon={<Download size={16} />} className="w-full justify-center">
                  Download Resume
                </Button>
              </a>
              <div className="flex space-x-4 mt-4 justify-center">
                <a
                  href="https://github.com/sivasai-pepakayala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sivasai-pepakayala-a9716a278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:pepakayalasivasai@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
