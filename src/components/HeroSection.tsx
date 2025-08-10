import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import profilePicture from "@/assets/profile-picture.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center w-full">
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <img
            src={profilePicture}
            alt="Kaio Garcia - QA Engineer"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mx-auto mb-4 sm:mb-6 shadow-elegant object-cover border-2 sm:border-4 border-white"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-3 sm:mb-4 font-sans leading-tight">
            Kaio Garcia
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 sm:mb-6 font-light px-2">
            Quality Assurance | Software Tester
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
            QA Engineer with 10+ years of experience and complete knowledge of the entire software development life cycle, with a passion for finding bugs and delivering an excellent quality product to the end user.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 lg:mb-12 px-4">
          <Button size="lg" className="bg-gradient-primary hover:shadow-elegant transition-all duration-300 w-full sm:w-auto text-sm sm:text-base" asChild>
            <a href="mailto:kaioqa@protonmail.com">
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Get In Touch
            </a>
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto text-sm sm:text-base" asChild>
            <a href="https://github.com/qakaio" target="_blank" rel="noopener noreferrer">
              View Portfolio
            </a>
          </Button>
        </div>

        <div className="flex justify-center space-x-4 sm:space-x-6 lg:space-x-8">
          <a href="mailto:kaioqa@protonmail.com" className="text-muted-foreground hover:text-secondary transition-colors duration-300 p-2 rounded-full hover:bg-secondary/10">
            <Mail className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
          </a>
          <a href="https://linkedin.com/in/kaioqa" className="text-muted-foreground hover:text-secondary transition-colors duration-300 p-2 rounded-full hover:bg-secondary/10" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
          </a>
          <a href="https://github.com/qakaio" className="text-muted-foreground hover:text-secondary transition-colors duration-300 p-2 rounded-full hover:bg-secondary/10" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;