import { useEffect, useRef, useState } from "react";
import { Code, Coffee, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
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
        "Built 20+ full-stack projects using MERN and MEAN stacks, focusing on responsive and user-friendly design.",
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

  return (
    <section id="about" ref={sectionRef} className="px-2 py-16 bg-accent/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
          space-y-4 md:space-y-8
          `}
        >
          {/* Section Header */}
          <div className="text-center space-y-4 md:space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold ">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 hero-gradient mx-auto rounded-full mb-8"></div>
            <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate full-stack developer who loves turning ideas into
              reality through clean, efficient code and beautiful user
              interfaces.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                I’m an aspiring <b>Full Stack Developer</b> skilled in{" "}
                <b>MERN stack</b>, with hands-on experience building 20+
                projects. I have developed responsive and user-friendly apps
                like a Crypto App, Weather App, and Daily Dabba App, focusing on
                clean UI, RESTful APIs, and smooth user experiences.
              </p>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                Passionate about learning new technologies and solving
                real-world problems, I aim to apply my skills in professional
                projects and grow as a developer.
              </p>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                <i>
                  When I’m not coding, I enjoy exploring new tools, building
                  personal projects, and engaging with the developer community.
                </i>
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className={`card-gradient border-0 shadow-soft hover-lift transition-all duration-300 ${
                    isVisible ? "animate-scale-in" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="hero-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
