import {
  Span,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Navigation from "@/components/Navigation.tsx";
import Footer from "@/components/Footer.tsx";
import { projects } from "../constants.ts";
import { ProjectCategory } from "../type.ts";
import ProjectCard from "@/components/ui/ProjectCard.tsx";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const categories: { value: ProjectCategory | "all"; label: string }[] = [
    { value: "all", label: "All" },
    { value: "html/css", label: "HTML/CSS UI" },
    { value: "nonReact", label: "JavaScript" },
    { value: "react", label: "React" },
    // { value: "nextjs", label: "Next.js" },
    { value: "backend", label: "Backend" },
    // { value: "fullstack", label: "Full Stack" },
  ];

  const getFilteredProjects = (category: ProjectCategory | "all") => {
    let unsortedProjects = [];
    if (category === "all") {
      unsortedProjects = [...projects];
    } else {
      unsortedProjects = projects.filter((project) => {
        if (category === "fullstack") {
          return (
            (project.category.includes("react") ||
              project.category.includes("nonReact")) &&
            project.category.includes("backend")
          );
        }
        return project.category.includes(category);
      });
    }
    return unsortedProjects.sort((a, b) => a.priority - b.priority);
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background font-zalando overflow-scroll">
      <Navigation />
      <section id="projects" ref={sectionRef}>
        <div className="container mx-auto  px-4 py-12">
          <div
            className={`max-w-7xl mx-auto transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Header */}
            <div className="mb-4 pt-6 sm:pb-0 md:pb-2 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                My <span className="text-gradient">Projects</span>
              </h2>
            </div>

            {/* Tabs Navigation */}
            <Tabs defaultValue="all" className="w-full">
              {/* Desktop */}
              <div className="hidden md:flex justify-center mb-8">
                <TabsList className="grid  max-w-4xl grid-cols-5 text-muted/70 bg-gray-800 h-12">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.value}
                      value={category.value}
                      className="text-sm  px-6 py-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                    >
                      <span>{category.label}</span>
                      <span className="hidden data-[state=active]:inline-block md:inline-block ">
                        ({getFilteredProjects(category.value).length})
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Mobile */}
              <div className="md:hidden flex justify-center ">
                <TabsList className="bg-inherit">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.value}
                      value={category.value}
                      className="data-[state=active]:text-gradient data-[state=active]:shadow-none data-[state=active]:underline underline-offset-4 "
                    >
                      <span className="data-[state=active]:text-gradient">
                        {category.label}
                      </span>
                      <Span
                        value={category.value}
                        className="hidden data-[state=active]:inline-block"
                      >
                        ({getFilteredProjects(category.value).length})
                      </Span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Tab Content */}
              {categories.map((category) => (
                <TabsContent key={category.value} value={category.value}>
                  <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getFilteredProjects(category.value).map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        isVisible={isVisible}
                      />
                    ))}
                  </div>

                  {getFilteredProjects(category.value).length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">
                        No projects found in this category yet.
                      </p>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
