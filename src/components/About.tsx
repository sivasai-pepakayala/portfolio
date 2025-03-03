
import SectionHeader from "./SectionHeader";
import Card from "./Card";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

const About = () => {
  const personalDetails = [
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: "Andhra Pradesh, India",
    },
    {
      icon: <Phone size={18} />,
      label: "Phone",
      value: "+91 9666829152",
    },
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "pepakayalasivasai@gmail.com",
    },
    {
      icon: <Calendar size={18} />,
      label: "Gender",
      value: "Male",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="About Me"
          title="Professional Software Developer"
          subtitle="I'm a professional Software Developer who designs, develops, tests, and maintains software applications and specializing as a Python Developer, the focus is on using the Python programming language to build software solutions."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card className="animate-slide-right">
            <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
            <div className="space-y-4">
              {personalDetails.map((detail, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-2 rounded-md bg-primary/10 text-primary mr-4">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      {detail.label}
                    </h4>
                    <p className="text-foreground">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="animate-slide-left">
            <h3 className="text-xl font-semibold mb-4">My Approach</h3>
            <p className="text-muted-foreground mb-4">
              As a software developer, I approach every project with a focus on:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                <span>Clean, maintainable code architecture</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                <span>User-centered design principles</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                <span>Efficient problem-solving techniques</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                <span>Continuous learning and improvement</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                <span>Collaborative team environments</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
