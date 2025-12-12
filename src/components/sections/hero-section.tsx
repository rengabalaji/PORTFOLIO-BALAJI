import { heroData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
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
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground animate-button-glow">
                <Link href="#contact">
                    Hire Me <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
