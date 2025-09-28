import { Project } from "@/type";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
  isVisible: boolean;
  project: Project;
}

const ProjectCard = ({ project, isVisible }: ProjectCardProps) => {
  return (
    <Card
      className={`
    group 
    overflow-hidden 
    border 
    border-border 
    bg-card 
    hover:shadow-lg 
    transition-all 
    duration-500 
    hover:border-border/80
    ${isVisible ? "animate-fade-in" : ""}
    `}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden bg-muted/20">
        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <CardTitle className="text-lg font-semibold line-clamp-1">
              {project.title}
            </CardTitle>
            <Badge variant="secondary" className="text-xs font-medium w-fit">
              {project.category}
            </Badge>
          </div>
        </div>
        <CardDescription className="text-xs text-muted-foreground line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="tech-gradient text-xs px-2 py-0.5"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs px-2 py-0.5">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0 flex gap-2">
        <Button size="sm" variant="outline" className="flex-1 h-9" asChild>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
        </Button>

        {project.liveUrl && (
          <Button size="sm" className="flex-1 h-9" asChild>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
