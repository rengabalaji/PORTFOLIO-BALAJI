import { socialLinks } from '@/lib/data';
import Link from 'next/link';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="border-t border-border mt-24 md:mt-32 py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} MotionVerse. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <Button asChild key={link.name} variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300 transform hover:scale-110">
              <Link href={link.link} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
