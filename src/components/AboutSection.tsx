import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award, Users } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "Strategic Planning", "Digital Transformation", "Business Development", 
    "Project Management", "Data Analytics", "Leadership", "Innovation Strategy"
  ];

  const achievements = [
    { icon: Briefcase, label: "15+ Years Experience", description: "Leading strategic initiatives" },
    { icon: Users, label: "200+ Projects", description: "Successfully delivered" },
    { icon: Award, label: "Industry Recognition", description: "Multiple awards and certifications" },
    { icon: GraduationCap, label: "MBA", description: "Advanced business education" }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about driving innovation and creating value through strategic thinking and execution
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Professional Background</h3>
            <p className="text-foreground leading-relaxed mb-6">
              With over 15 years of experience in strategic consulting and business development, I've had the privilege 
              of working with organizations across various industries, from startups to Fortune 500 companies. My expertise 
              lies in identifying growth opportunities, optimizing operations, and implementing innovative solutions that 
              drive sustainable results.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              I specialize in digital transformation initiatives, helping businesses navigate the complex landscape of 
              modern technology while maintaining focus on their core objectives. My approach combines analytical rigor 
              with creative problem-solving to deliver outcomes that exceed expectations.
            </p>
            <p className="text-foreground leading-relaxed">
              When I'm not consulting, I enjoy mentoring emerging professionals, contributing to industry publications, 
              and staying current with the latest trends in business strategy and technology innovation.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Core Competencies</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-4 shadow-card hover:shadow-elegant transition-shadow duration-300">
                  <achievement.icon className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-semibold text-primary mb-1">{achievement.label}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;