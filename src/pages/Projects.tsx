import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation.tsx";
import Footer from "@/components/Footer.tsx";
import { projects } from "../constants.ts";
import { ProjectCategory } from "../type.ts";
import ProjectCard from "@/components/ui/ProjectCard.tsx";
import { useEffect } from "react";

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

  return (
    <div className="min-h-screen bg-background font-zalando">
      <Navigation />
      <main>
        <div className="container mx-auto  px-4 py-12">
          {/* Header */}
          <div className="mb-4 pt-6  text-center">
            <h1 className="mb-2 text-4xl font-bold tracking-tight">Projects</h1>
          </div>

          {/* Tabs Navigation */}
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid  max-w-4xl grid-cols-5 text-muted/70 bg-gray-800 h-12">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    className="text-sm  px-6 py-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                  >
                    {category.label} (
                    {getFilteredProjects(category.value).length})
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Tab Content */}
            {categories.map((category) => (
              <TabsContent
                key={category.value}
                value={category.value}
                className="mt-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getFilteredProjects(category.value).map((project) => (
                    <ProjectCard key={project.id} project={project} />
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
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
