import { codingProfiles } from '@/lib/data';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Card } from '../ui/card';

const ProfilesSection = () => {
  return (
    <section id="profiles" className="animate-scroll-in" style={{ animationDelay: '0.4s' }}>
      <h2 className="text-3xl md:text-4xl font-headline font-bold mb-8">
        Coding <span className="text-accent animate-glow">Profiles</span>
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {codingProfiles.map((profile) => (
          <Link href={profile.link} key={profile.name} target="_blank" rel="noopener noreferrer" className="group">
            <Card className="bg-card/50 backdrop-blur-sm border-border p-4 flex flex-col items-center justify-center gap-3 text-center h-full transition-all duration-300 hover:border-accent hover:-translate-y-2 hover:bg-accent/10">
              <profile.icon className="h-10 w-10 text-accent transition-colors" />
              <span className="font-semibold text-foreground">{profile.name}</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProfilesSection;
