"use client";

import { heroData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { useTabsContext } from "@/components/ui/tabs";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const tabs = useTabsContext();

  const handleHireMeClick = () => {
    if (tabs) {
      tabs.onValueChange("contact");
    }
  };

  return (
    <section id="#" className="min-h-screen flex items-center py-32 md:py-40">
      <div className="w-full grid md:grid-cols-1 gap-12 items-center">
        <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          <h1 className="font-headline text-5xl md:text-7xl font-bold">
            <span className="block text-foreground">{heroData.name}</span>
            <span className="block text-primary/80">{heroData.profession}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            {heroData.intro}
          </p>
          <div className="flex flex-wrap gap-4">
             <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground animate-button-glow" onClick={handleHireMeClick}>
                Hire Me <ArrowRight className="ml-2 h-5 w-5" />
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
