
import { GraduationCapIcon, Award } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Card from "./Card";

const Education = () => {
  const educationData = [
    {
      degree: "B.tech CSE-AID",
      institution: "Kakinada Institute of Engineering and Technology",
      period: "2021 - 2025",
      location: "Kakinada, India",
      icon: <GraduationCapIcon size={22} />,
    },
    {
      degree: "Intermediate MPC",
      institution: "Sri Prakash Junior College",
      period: "2019 - 2021",
      location: "Payakaraopeta, India",
      icon: <GraduationCapIcon size={22} />,
    },
  ];

  const certifications = [
    {
      title: "Merit Certification",
      issuer: "IIIT Hyderabad",
      description: "For Summer Internship",
      icon: <Award size={22} />,
    },
    {
      title: "Data Science Virtual Internship",
      issuer: "Altair",
      description: "Completion certification",
      icon: <Award size={22} />,
    },
    {
      title: "Salesforce Certification",
      issuer: "Salesforce",
      description: "Professional level certification",
      icon: <Award size={22} />,
    },
    {
      title: "Data Analytics Certificate",
      issuer: "Alteryx",
      description: "Analytics professional certification",
      icon: <Award size={22} />,
    },
  ];

  return (
    <section id="education" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Education & Certifications"
          title="Academic Background"
          subtitle="My educational journey and professional certifications that have shaped my technical expertise."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-slide-right">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <GraduationCapIcon className="mr-2 text-primary" size={22} />
              Education
            </h3>
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <Card key={index} className="border border-border">
                  <div className="flex items-start">
                    <div className="p-2 rounded-md bg-primary/10 text-primary mr-4 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{item.degree}</h4>
                      <p className="text-muted-foreground">{item.institution}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-muted-foreground">
                          {item.location}
                        </span>
                        <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {item.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="animate-slide-left">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Award className="mr-2 text-primary" size={22} />
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="border border-border">
                  <div className="flex items-start">
                    <div className="p-2 rounded-md bg-primary/10 text-primary mr-3 mt-1">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
