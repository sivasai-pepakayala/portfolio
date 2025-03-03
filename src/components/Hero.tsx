
import { ArrowDown, Download } from "lucide-react";
import Button from "./Button";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-16 flex items-center animated-bg">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-16 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-7/12 mb-10 md:mb-0 pr-0 md:pr-12 animate-fade-in">
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fade-in">
              Software Developer
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-down">
              Hello, I'm... <br />
              <span className="text-gradient">Sivasai Pepakayala</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 animate-slide-down" style={{ animationDelay: "100ms" }}>
              A professional Software Developer focused on designing, developing, and maintaining applications with specialization in Python development.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 animate-slide-down" style={{ animationDelay: "200ms" }}>
              <Button
                icon={<Download size={18} />}
                size="lg"
                onClick={() => window.open('https://drive.google.com/file/d/1GepKcdbjm8AXJXdFLyzeIfG-tQmZXqnz/view?usp=sharing', '_blank')}
              >
                Download Resume
              </Button>
              <a href="#contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </a>
            </div>
            
            <div className="animate-slide-down" style={{ animationDelay: "300ms" }}>
              <div className="text-sm font-medium text-muted-foreground mb-3">
                Find me on:
              </div>
              <SocialLinks />
            </div>
          </div>
          
          <div className="w-full md:w-5/12 animate-fade-in">
            <div className="relative w-3/4 mx-auto">
              <div className="rounded-2xl overflow-hidden w-full aspect-square animate-float">
                <img
                  src="https://res.cloudinary.com/dlkeqx3nc/image/upload/v1740978239/Port_photo_aut8v5.jpg"
                  alt="Sivasai Pepakayala"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-2xl bg-primary/20 blur-sm"></div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center animate-bounce"
        >
          <ArrowDown className="text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
