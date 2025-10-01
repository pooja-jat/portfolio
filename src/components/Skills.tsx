import { useEffect, useRef, useState } from "react";
import { Code, Server, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import mui from "../assets/images/material-ui.png";

import git from "../assets/images/git.png";
import html from "../assets/images/html.png";
import next from "../assets/images/next.png";
import react from "../assets/images/react.png";
import nodejs from "../assets/images/node.png";
import redux from "../assets/images/redux.png";
import github from "../assets/images/github.png";
import typescript from "../assets/images/ts.png";
import postman from "../assets/images/postman.png";
import mongodb from "../assets/images/mongodb.png";
import express from "../assets/images/express.png";
import tailwind from "../assets/images/tailwind.png";
import render from "../assets/images/render.png";
import androidStudio from "../assets/images/android-studio.png";
import vercel from "../assets/images/vercel.png";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "Next.js", level: 95, icon: next },
        { name: "React.js", level: 95, icon: react },
        { name: "React Native", level: 95, icon: react },
        { name: "Redux/RTK", level: 88, icon: redux },
        { name: "TypeScript/Javascript", level: 95, icon: typescript },
        { name: "HTML5/CSS3", level: 95, icon: html },
        { name: "Tailwind CSS", level: 88, icon: tailwind },
        { name: "Material UI", level: 88, icon: mui },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 90, icon: nodejs },
        { name: "Express.js", level: 88, icon: express },
        { name: "MongoDB", level: 90, icon: mongodb },
      ],
    },
    {
      title: "Tools & Others",
      icon: Settings,
      skills: [
        { name: "Git", level: 92, icon: git },
        { name: "GitHub", level: 80, icon: github },
        { name: "Vercel", level: 80, icon: vercel },
        { name: "Render", level: 80, icon: render },
        { name: "Postman", level: 85, icon: postman },
        { name: "Android Studio", level: 80, icon: androidStudio },
      ],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 hero-gradient mx-auto rounded-full mb-8"></div>
            <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Here are the technologies and tools I use to bring ideas to life.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className={`card-gradient border-0 shadow-soft hover-lift transition-all duration-300 ${
                  isVisible ? "animate-slide-up" : ""
                }`}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="hero-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`transition-all duration-500 ${
                        isVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-4"
                      }`}
                      style={{
                        animationDelay: `${
                          categoryIndex * 0.1 + skillIndex * 0.05
                        }s`,
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg ">
                            <img src={skill.icon} alt="React" className="w-6" />
                          </span>
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="hero-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${
                              categoryIndex * 0.1 + skillIndex * 0.05
                            }s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Tech Stack Icons */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
