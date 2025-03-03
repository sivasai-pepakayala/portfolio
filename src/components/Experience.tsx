
import { BriefcaseIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Card from "./Card";
import Button from "./Button";

const Experience = () => {
  const experiences = [
    {
      title: "Salesforce Developer",
      company: "Summer Internship",
      period: "08/2023 - 10/2023",
      description:
        "Worked as a Salesforce Developer during a summer internship program, gaining hands-on experience with the Salesforce platform and developing customized solutions.",
      skills: ["Salesforce", "Apex", "Lightning Components"],
    },
    {
      title: "Frontend Developer",
      company: "Internship",
      period: "05/2023 - 07/2023",
      description:
        "Contributed to frontend development projects, implementing responsive designs and interactive user interfaces using modern web technologies.",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Experience"
          title="Professional Journey"
          subtitle="My work experience has provided me with valuable insights and skills in software development and team collaboration."
          align="center"
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-md shadow-primary/30 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <BriefcaseIcon size={18} />
                </div>

                <Card
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] animate-fade-in"
                  glowing={false}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                    <div className="px-2 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary mt-2 md:mt-0">
                      {exp.period}
                    </div>
                  </div>

                  <p className="mt-2 mb-4 text-muted-foreground">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button variant="outline" onClick={() => window.open('/resume.pdf', '_blank')} icon={<BriefcaseIcon size={16} />}>
              View Full Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
