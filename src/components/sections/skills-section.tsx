import { skills } from '@/lib/data';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '../ui/card';

const SkillsSection = () => {
  return (
    <section className="py-24 md:py-32">
      <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12 md:mb-16">
        My <span className="text-primary animate-glow">Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <Card key={skill.name} className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <skill.icon className="h-7 w-7 text-accent" />
                  <span className="font-semibold text-lg text-foreground">{skill.name}</span>
                </div>
                <span className="text-sm font-medium text-primary">{skill.proficiency}%</span>
              </div>
              <Progress value={skill.proficiency} className="h-2 [&>div]:bg-primary" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
