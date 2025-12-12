"use client";
import React, { useRef } from 'react';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const projectImage = PlaceHolderImages.find((img) => img.id === project.imageId);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    const rotateY = (x - 0.5) * 20;
    const rotateX = (y - 0.5) * -20;
    cardRef.current?.style.setProperty('--rotate-x', `${rotateX}deg`);
    cardRef.current?.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    cardRef.current?.style.setProperty('--rotate-x', '0deg');
    cardRef.current?.style.setProperty('--rotate-y', '0deg');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group"
      style={{ perspective: '1000px' }}
    >
      <Card
        className="bg-card/50 backdrop-blur-sm border-border transition-all duration-300 ease-out"
        style={{ transform: 'rotateX(var(--rotate-x, 0)) rotateY(var(--rotate-y, 0)) scale(1)', transformStyle: 'preserve-3d' }}
      >
        <div className="relative h-48 w-full">
          {projectImage && (
            <Image
              src={projectImage.imageUrl}
              alt={project.title}
              fill
              className="object-cover rounded-t-lg"
              data-ai-hint={projectImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-primary group-hover:animate-glow transition-all duration-300">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="bg-accent/20 text-accent-foreground">{tag}</Badge>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <Button asChild variant="outline" size="sm">
              <Link href={project.githubLink} target="_blank"><Github className="mr-2 h-4 w-4" /> GitHub</Link>
            </Button>
            <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90">
              <Link href={project.liveLink} target="_blank"><ExternalLink className="mr-2 h-4 w-4" /> Live Demo</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12 md:mb-16">
        <span className="text-primary animate-glow">Featured</span> Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <div key={project.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s`}}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
