export type ProjectCategory =
  | "html/css"
  | "javaScript"
  | "frontend"
  | "backend"
  | "fullstack"
  | "react"
  | "nextjs";

export type Technology =
  | "React"
  | "HTML"
  | "CSS"
  | "Javascript"
  | "RestAPI"
  | "TailwindCSS"
  | "Express"
  | "NodeJS"
  | "MongoDB";

export interface Project {
  id: number;
  priority: number;
  title: string;
  isFeatured?: boolean;
  description: string;
  category: ProjectCategory[];
  technologies: Technology[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  startedOn?: string;
}
