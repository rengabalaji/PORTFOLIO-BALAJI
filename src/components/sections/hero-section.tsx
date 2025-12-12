"use client";

import { heroData, socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { useTabsContext } from "@/components/ui/tabs";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  const tabs = useTabsContext();

  const handleHireMeClick = () => {
    if (tabs) {
      tabs.onValueChange("contact");
    }
  };

  return (
    <section id="#" className="flex items-center">
      <div className="w-full grid md:grid-cols-1 gap-12 items-center">
        <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          <h1 className="font-headline text-5xl md:text-7xl font-bold">
            <span className="block text-foreground">{heroData.name}</span>
            <span className="block text-primary/80 opacity-80">{heroData.profession}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            {heroData.intro}
          </p>
          <div className="flex flex-wrap items-center gap-4">
             <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground animate-button-glow" onClick={handleHireMeClick}>
                Hire Me <ArrowRight className="ml-2 h-5 w-5" />
             </Button>
            <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                    <Button asChild key={link.name} variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300 transform hover:scale-125">
                    <Link href={link.link} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                        <link.icon className="h-7 w-7" />
                    </Link>
                    </Button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
