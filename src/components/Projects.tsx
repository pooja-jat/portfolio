import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import project1Image from '@/assets/project-1.jpg';
import project2Image from '@/assets/project-2.jpg';
import project3Image from '@/assets/project-3.jpg';

const Projects = () => {
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

  const projects = [
    {
      title: '3D Metal Building Estimator',
      description:
        'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.',
      image: project1Image,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
      category: 'Full-Stack',
      icon: Globe,
      features: [
        'Responsive design with mobile-first approach',
        'Secure payment processing with Stripe',
        'Real-time inventory management',
        'Advanced search and filtering',
        'Order tracking and notifications',
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Task Management Dashboard',
      description:
        'A comprehensive project management tool featuring Kanban boards, team collaboration, real-time updates, and analytics. Built with Angular, Node.js, and PostgreSQL.',
      image: project2Image,
      technologies: [
        'Angular',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'Socket.io',
        'Chart.js',
      ],
      category: 'Dashboard',
      icon: Code,
      features: [
        'Drag-and-drop Kanban boards',
        'Real-time collaboration features',
        'Advanced analytics and reporting',
        'Team management and permissions',
        'Integration with popular tools',
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Social Media Platform',
      description:
        'A modern social networking application with real-time messaging, post sharing, user profiles, and content discovery. Features responsive design and progressive web app capabilities.',
      image: project3Image,
      technologies: [
        'React',
        'Firebase',
        'Cloud Functions',
        'PWA',
        'Material-UI',
        'WebRTC',
      ],
      category: 'Social',
      icon: Smartphone,
      features: [
        'Real-time messaging and notifications',
        'Image and video sharing',
        'User profiles and connections',
        'Content discovery algorithm',
        'Progressive Web App features',
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
  ];

  return (
    <section id='projects' ref={sectionRef} className='py-20 bg-accent/30'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4'>
              Featured <span className='text-gradient'>Projects</span>
            </h2>
            <div className='w-24 h-1 hero-gradient mx-auto rounded-full mb-8'></div>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              Here are some of the projects I've worked on, showcasing my skills
              in full-stack development, UI/UX design, and modern web
              technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className='space-y-16'>
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`card-gradient border-0 shadow-medium overflow-hidden hover-lift transition-all duration-500 ${
                  isVisible ? 'animate-scale-in' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}>
                <div
                  className={`grid lg:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}>
                  {/* Project Image */}
                  <div
                    className={`relative overflow-hidden ${
                      index % 2 === 1 ? 'lg:col-start-2' : ''
                    }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className='w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-105'
                    />
                    <div className='absolute inset-0 hero-gradient opacity-0 hover:opacity-20 transition-opacity duration-300'></div>
                  </div>

                  {/* Project Content */}
                  <div className='p-8 lg:p-12 flex flex-col justify-center'>
                    <div className='flex items-center mb-4'>
                      <div className='hero-gradient w-10 h-10 rounded-full flex items-center justify-center mr-4'>
                        <project.icon className='w-5 h-5 text-white' />
                      </div>
                      <Badge
                        variant='secondary'
                        className='text-xs font-medium'>
                        {project.category}
                      </Badge>
                    </div>

                    <CardHeader className='px-0 pt-0'>
                      <CardTitle className='text-2xl lg:text-3xl mb-2'>
                        {project.title}
                      </CardTitle>
                      <CardDescription className='text-base leading-relaxed'>
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className='px-0 pb-0'>
                      {/* Technologies */}
                      <div className='mb-6'>
                        <h4 className='text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide'>
                          Technologies Used
                        </h4>
                        <div className='flex flex-wrap gap-2'>
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant='outline'
                              className='tech-gradient border-0 text-xs'>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className='mb-8'>
                        <h4 className='text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide'>
                          Key Features
                        </h4>
                        <ul className='space-y-2'>
                          {project.features
                            .slice(0, 3)
                            .map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className='flex items-start text-sm'>
                                <div className='w-1.5 h-1.5 hero-gradient rounded-full mt-2 mr-3 flex-shrink-0'></div>
                                {feature}
                              </li>
                            ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className='flex flex-col sm:flex-row gap-3'>
                        <Button
                          asChild
                          className='hero-gradient text-white hover-glow'>
                          <a
                            href={project.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center'>
                            <ExternalLink className='w-4 h-4 mr-2' />
                            Live Demo
                          </a>
                        </Button>
                        <Button
                          variant='outline'
                          asChild
                          className='border-hero-primary text-hero-primary hover:bg-hero-primary hover:text-white'>
                          <a
                            href={project.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center'>
                            <Github className='w-4 h-4 mr-2' />
                            Source Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className='text-center mt-16'>
            <p className='text-lg text-muted-foreground mb-6'>
              Interested in seeing more of my work or discussing a project?
            </p>
            <Button
              size='lg'
              className='hero-gradient text-white font-semibold px-8 py-3 rounded-full hover-glow'
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
