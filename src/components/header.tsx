
"use client";

import { useState } from 'react';
import { navLinks } from '@/lib/data';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Header = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed top-0 right-0 h-full z-50 flex items-center">
        <div className="flex flex-col items-center justify-center p-4">
            <TooltipProvider>
              <TabsList className="hidden md:flex flex-col items-center gap-2 bg-card/50 backdrop-blur-sm border-border p-2 rounded-full">
                {navLinks.map((link) => (
                  <Tooltip key={link.name}>
                    <TooltipTrigger asChild>
                      <TabsTrigger value={link.href} className="text-foreground/80 hover:text-primary transition-colors data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:bg-primary/10 rounded-full h-12 w-12">
                        <link.icon className="h-6 w-6" />
                      </TabsTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="bg-background border-border text-foreground">
                      <p>{link.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TabsList>
            </TooltipProvider>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent md:hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-end items-center h-20">
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
                     <TabsTrigger key={link.name} value={link.href} className="text-xl text-foreground/80 hover:text-primary transition-colors data-[state=active]:text-primary data-[state=active]:shadow-none flex items-center gap-4" onClick={() => setSheetOpen(false)}>
                      <link.icon className="h-5 w-5" />
                      {link.name}
                    </TabsTrigger>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
