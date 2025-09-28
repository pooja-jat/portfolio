import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isOnProject = window.location.pathname === "/projects";

  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "projects") {
      navigate("/projects");
      setIsOpen(false);
      return;
    }

    if (isOnProject) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      setIsOpen(false);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navigateBack = () => navigate(-1);

  // update isScrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:block md:fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "md:bg-background/50 backdrop-blur-md  shadow-soft "
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="md:flex flex-row items-center text-xl font-bold text-gradient ">
              <a href="/" className="underline underline-offset-2">
                <p>PORTFOLIO</p>
              </a>
              {isOnProject && (
                <>
                  <ChevronRight color="#00000050" />
                  <p className="font-normal ">PROJECTS</p>
                </>
              )}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                if (isOnProject && item.id !== "hero") {
                  return null;
                }
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-800 hover:text-hero-primary transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <header className="flex sm:hidden">
        {/* Hamburger */}

        <div className="fixed h-10  w-full  p-8 flex items-center justify-between z-[10000]">
          {isOnProject && (!isScrolled || isOpen) ? (
            <div onClick={navigateBack} className="pr-10">
              <ChevronLeft size={32} />
            </div>
          ) : (
            <div></div>
          )}

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex flex-col gap-1.5 cursor-pointer z-[9999]"
          >
            <span
              className={`bar1 bg-gray-700 h-[1.5px] w-[27px] rounded-full transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            ></span>
            <span
              className={`bar2 bg-gray-700 h-[1.5px] w-[27px] rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0 w-0" : ""
              }`}
            ></span>
            <span
              className={`bar3 bg-gray-700 h-[1.5px] w-[27px] rounded-full transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed h-full top-0 left-0 w-full  pt-[100px] px-12  flex flex-col gap-4  
            transform transition-all duration-500 origin-top 
            bg-background/50 backdrop-blur-md  shadow-soft 
            ${
              isOpen
                ? "scale-y-100 opacity-100 z-[9999]"
                : "scale-y-50 opacity-0 z-[-1]"
            }`}
        >
          {navItems.map((item) => (
            <span
              key={item.label}
              className={`relative text-grey-800 text-lg font-bold cursor-pointer group transition-all duration-500 
              ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span
                onClick={() => {
                  if (isOpen) {
                    scrollToSection(item.id);
                  }
                }}
              >
                {item.label}
              </span>
            </span>
          ))}
        </div>
      </header>
    </>
  );
};

export default Navigation;
