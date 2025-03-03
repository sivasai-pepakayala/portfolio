
import { ArrowUp, ChevronRight } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-card text-card-foreground pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4 text-gradient">Sivasai Pepakayala</h3>
            <p className="text-muted-foreground mb-4">
              A professional Software Developer with expertise in Python programming and web development.
            </p>
            <SocialLinks className="mt-4" />
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    <ChevronRight size={14} className="mr-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <p className="text-muted-foreground mb-2">Andhra Pradesh, India</p>
            <p className="text-muted-foreground mb-2">pepakayalasivasai@gmail.com</p>
            <p className="text-muted-foreground">+91 9666829152</p>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Sivasai Pepakayala. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Floating scroll-up button */}
      <a 
        href="#top" 
        className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-all hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;
