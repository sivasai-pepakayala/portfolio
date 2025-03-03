
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
}

const SocialLinks = ({ 
  className = "", 
  iconSize = 20,
  showLabels = false 
}: SocialLinksProps) => {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/sivasai-pepakayala",
      icon: <Github size={iconSize} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sivasai-pepakayala-a9716a278",
      icon: <Linkedin size={iconSize} />,
    },
    {
      name: "Email",
      url: "mailto:pepakayalasivasai@gmail.com",
      icon: <Mail size={iconSize} />,
    },
  ];

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all hover:scale-110"
          aria-label={link.name}
        >
          {link.icon}
          {showLabels && <span className="ml-2">{link.name}</span>}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
