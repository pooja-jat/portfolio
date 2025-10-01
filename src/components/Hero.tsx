import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className=" container mx-auto px-6 sm:px-6 lg:px-8 text-center">
        <div
          className={`  mx-auto flex flex-col items-center justify-around h-screen py-16 max-w-4xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Introduction */}
          <div className="flex flex-col items-center xl:gap-4">
            <p className="text-lg sm:text-xl xl:text-2xl text-black/70 font-medium  animate-fade-in">
              Hello, I'm
            </p>
            <h1 className="mb-2 text-4xl sm:text-6xl lg:text-7xl font-bold text-black/90 animate-slide-up">
              Pooja Jat
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gradient animate-slide-up">
              Full-Stack Developer
            </h2>
          </div>

          {/* Description */}
          <p className="sm:text-md md:text-lg lg:text-lg xl:text-xl flex items-center leading-[1.75rem] max-w-3xl py-2  animate-fade-in text-black/50 ">
            Aspiring Full Stack Developer with hands-on experience in MERN stack
            through completing a comprehensive full-stack development course.
            Developed 20+ projects, focusing on building responsive web
            applications with clean design and seamless user experience.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-bounce-in">
            <Button
              onClick={() => navigate("/projects")}
              size="lg"
              className="hero-gradient text-white font-semibold px-8 py-3 rounded-full hover-glow transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-primary text-grey bg-white/90 hover:bg-white hover:text-foreground hover-glow px-8 py-3 rounded-full transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-scale-in my-4">
            <a
              href="https://github.com/pooja-jat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 rounded-full p-2 hover:text-white hover:bg-gray-700 transition-all duration-600 tech-icon"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/pooja-jat-5ab529326/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 rounded-full p-2 hover:text-white hover:bg-gray-700 transition-all duration-600 tech-icon"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:patelpoojajat@gmail.com"
              className="text-gray-700 rounded-full p-2 hover:text-white hover:bg-gray-700 transition-all duration-600 tech-icon"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-hero-secondary transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 hero-gradient rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-project-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
