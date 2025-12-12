
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { navLinks } from '@/lib/data';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger, useTabsContext } from "@/components/ui/tabs";
import { useControllableState } from '@radix-ui/react-use-controllable-state';


const Header = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === 'home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setSheetOpen(false);
  };


  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="w-24"></div> {/* Placeholder for spacing */}
          
          <TabsList className="hidden md:flex items-center gap-6 bg-transparent">
            {navLinks.map((link) => (
              <TabsTrigger key={link.name} value={link.href} className="text-foreground/80 hover:text-primary transition-colors data-[state=active]:text-primary data-[state=active]:shadow-none">
                {link.name}
              </TabsTrigger>
            ))}
             <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    Resume
                </a>
            </Button>
          </TabsList>

          <div className="md:hidden">
             <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l-border">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-headline font-bold text-primary animate-glow">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                     <TabsTrigger key={link.name} value={link.href} className="text-xl text-foreground/80 hover:text-primary transition-colors data-[state=active]:text-primary data-[state=active]:shadow-none" onClick={() => setSheetOpen(false)}>
                      {link.name}
                    </TabsTrigger>
                  ))}
                  <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        Resume
                    </a>
                </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
