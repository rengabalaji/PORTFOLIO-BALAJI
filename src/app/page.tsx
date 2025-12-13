
"use client";
import AnimatedGradient from '@/components/animated-gradient';
import Footer from '@/components/footer';
import Header from '@/components/header';
import ParticleBackground from '@/components/particle-background';
import ContactSection from '@/components/sections/contact-section';
import HeroSection from '@/components/sections/hero-section';
import ProfilesSection from '@/components/sections/profiles-section';
import ProjectsSection from '@/components/sections/projects-section';
import SkillsSection from '@/components/sections/skills-section';
import { Tabs, TabsContent, TabsProvider, useTabsContext } from "@/components/ui/tabs";
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  return (
    <div className="relative overflow-x-hidden">
      <ParticleBackground />
      <AnimatedGradient />
      <TabsProvider value={activeTab} onValueChange={setActiveTab}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <Header />
          <main className="container mx-auto px-4 md:px-8">
            <TabsContent value="home">
              <HeroSection />
            </TabsContent>
            <TabsContent value="projects">
              <ProjectsSection />
            </TabsContent>
            <TabsContent value="skills">
              <SkillsSection />
            </TabsContent>
            <TabsContent value="learnings">
              <div className="my-24 md:my-32">
                <ProfilesSection />
              </div>
            </TabsContent>
            <TabsContent value="contact">
              <ContactSection />
            </TabsContent>
          </main>
        </Tabs>
      </TabsProvider>
      <Footer />
    </div>
  );
}
