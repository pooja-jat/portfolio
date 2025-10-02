import { useEffect, useRef, useState } from "react";
import { Code, Coffee, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/constants";
import ProjectCard from "./ui/ProjectCard";

const FeaturedProjects = () => {
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

  const highlights = [
    {
      icon: Code,
      title: "Hands-On Projects",
      description: "Professional development in modern web technologies",
    },
    {
      icon: Users,
      title: "Team Player",
      description:
        "Built 15+ full-stack projects using MERN and MEAN stacks, focusing on responsive and user-friendly design.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description:
        "Collaborated with peers during course projects, learning agile workflows and clear communication.",
    },
    {
      icon: Coffee,
      title: "Continuous Learner",
      description:
        "Always exploring new technologies, frameworks, and best practices to grow as a developer.",
    },
  ];

  const featuredProjects = projects.filter((p) => p.isFeatured);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="pb-8 md:pb-16 md:py-16 bg-accent/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 flex flex-col ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center md:mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 hero-gradient mx-auto rounded-full mb-8"></div>
            {/* <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate full-stack developer who loves turning ideas into
              reality through clean, efficient code and beautiful user
              interfaces.
            </p> */}
          </div>

          <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isVisible={isVisible}
              />
            ))}
          </div>

          <a
            className="underline underline-offset-2 text-center mt-8"
            href="/projects"
          >
            View all projects ({projects.length})
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
