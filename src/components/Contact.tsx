
import { Mail, Phone, MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";
import SocialLinks from "./SocialLinks";
import Card from "./Card";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={22} />,
      title: "Email",
      contact: "pepakayalasivasai@gmail.com",
      link: "mailto:pepakayalasivasai@gmail.com"
    },
    {
      icon: <Phone size={22} />,
      title: "Phone",
      contact: "+91 9666829152",
      link: "tel:+919666829152"
    },
    {
      icon: <MapPin size={22} />,
      title: "Location",
      contact: "Andhra Pradesh, India",
      link: "https://maps.google.com/?q=Andhra+Pradesh,India"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-accent">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Contact Me"
          title="Get In Touch"
          subtitle="Feel free to reach out for collaborations, job opportunities, or just to say hello!"
          align="center"
        />

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 rounded-lg bg-card border border-border card-hover text-center"
              >
                <div className="p-3 rounded-md bg-primary/10 text-primary mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-medium mb-1">{info.title}</h3>
                <p className="text-muted-foreground">{info.contact}</p>
              </a>
            ))}
          </div>
          
          <Card className="mt-10 text-center p-8 animate-fade-in">
            <h3 className="text-xl font-bold mb-6">Connect with me</h3>
            <SocialLinks iconSize={24} showLabels={true} className="flex-row justify-center space-y-0 space-x-6" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
