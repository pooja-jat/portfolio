import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/pooja-jat",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/pooja-jat-5ab529326/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:patelpoojajat@gmail.com",
      label: "Email",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity duration-300"
              >
                Pooja Jat
              </button>
              <p className="text-background/80 leading-relaxed text-sm md:text-lg">
                MERN Developer passionate about building responsive and
                innovative web applications, combining strong front-end and
                full-stack skills with problem-solving and a keen eye for clean,
                efficient code.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                {["About", "Projects", "Skills", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      if (item === "Projects") {
                        navigate("/projects");
                        return;
                      }
                      const element = document.getElementById(
                        item.toLowerCase()
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-sm md:text-lg block text-background/80 hover:text-background transition-colors duration-300 hover:underline underline-offset-4"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Get In Touch</h3>
              <div className="space-y-2 text-background/80">
                <p className="text-sm md:text-lg">Indore, India, CA</p>
                <p className="text-sm md:text-lg">patelpoojajat@gmail.com</p>
                <p className="text-sm md:text-lg">+91 (626) 0XX-XXXX</p>
              </div>
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-all duration-300 tech-icon"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-background/60">
                <span>© {currentYear} Pooja Jat. Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="text-background/60 hover:text-background transition-colors duration-300 text-sm"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
