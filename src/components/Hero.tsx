import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import pooja from "../assets/images/pooja.png";

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
  //

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
      <div className=" container mx-autom max-w-6xl   px-6 sm:px-6 lg:px-8 text-center flex flex-row items-center justify-center">
        <div className="w-[50%] flex-col items-center justify-center hidden md:flex gap-4">
          <img
            src={pooja}
            alt="Pooja Jat"
            className="w-100 h-100 rounded-full object-cover mt-4 mb-2 shadow-lg animate-fade-in"
          />
          <div className="flex justify-center space-x-6 animate-scale-in">
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
        </div>
        <div
          className={`p-8  flex flex-col items-center justify-between md:justify-center gap-4 md:gap-8 h-screen py-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Introduction */}
          <div className="flex flex-col items-center xl:gap-2 2xl:gap-4">
            <p className="sm:text-xl xl:text-md text-black/70 font-medium  animate-fade-in">
              Hello, I'm
            </p>
            <h1
              className={`text-4xl lg:text-5xl 2xl:-7xl  font-bold text-black/90 mb-2 animate-slide-up`}
            >
              Pooja Jat
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gradient animate-slide-up">
              Full-Stack Developer
            </h2>
          </div>

          {/* Mobile Image */}
          <div className="w-[50%] flex flex-col items-center justify-center md:hidden">
            <img
              src={pooja}
              alt="Pooja Jat"
              className="w-100 h-100 rounded-full object-cover md:mt-4 mb-2 shadow-lg animate-fade-in"
            />
            <div className="hidden md:flex justify-center space-x-6 animate-scale-in">
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
          </div>

          {/* Description */}
          <p className="text-sm md:text-sm lg:text-md xl:text-lg flex items-center leading-[1.25rem]  md:leading-[1.75rem] max-w-3xl  animate-fade-in text-black/50 ">
            Aspiring Full Stack Developer with hands-on experience in MERN stack
            through completing a comprehensive full-stack development course.
            Developed 15+ projects, focusing on building responsive web
            applications with clean design and seamless user experience.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-row 2xl:flex-col  gap-4 justify-center items-center animate-bounce-in">
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
          <div className="flex md:hidden justify-center space-x-6 animate-scale-in md:my-4">
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
