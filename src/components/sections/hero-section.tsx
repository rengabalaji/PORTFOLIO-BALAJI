import { heroData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="#" className="min-h-screen flex items-center py-32 md:py-40">
      <div className="w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="font-headline text-5xl md:text-7xl font-bold">
            <span className="block text-foreground">{heroData.name}</span>
            <span className="block text-primary animate-glow">{heroData.profession}</span>
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
        <div className="relative">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl -z-10"></div>
           <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-headline font-semibold mb-4 text-foreground">Key Achievements</h3>
                <ul className="space-y-3">
                    {heroData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                    </li>
                    ))}
                </ul>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
