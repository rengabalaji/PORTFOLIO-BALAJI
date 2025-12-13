
import { skills } from '@/lib/data';
import { Card, CardContent } from '../ui/card';

const SkillsSection = () => {
  return (
    <section className="py-24 md:py-32">
      <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12 md:mb-16">
        My <span className="text-primary animate-glow">Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center gap-4">
                <skill.icon className="h-10 w-10 text-accent" />
                <div className='flex-grow'>
                    <h3 className="font-semibold text-lg text-foreground">{skill.category}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{skill.items}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
