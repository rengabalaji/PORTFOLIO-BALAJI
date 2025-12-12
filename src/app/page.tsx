
import AnimatedGradient from '@/components/animated-gradient';
import Footer from '@/components/footer';
import Header from '@/components/header';
import ParticleBackground from '@/components/particle-background';
import ArticlesSection from '@/components/sections/articles-section';
import ContactSection from '@/components/sections/contact-section';
import HeroSection from '@/components/sections/hero-section';
import ProfilesSection from '@/components/sections/profiles-section';
import ProjectsSection from '@/components/sections/projects-section';
import SkillsSection from '@/components/sections/skills-section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <ParticleBackground />
      <AnimatedGradient />
      <Tabs defaultValue="home" className="w-full">
        <Header />
        <main className="container mx-auto px-4 md:px-8">
          <TabsContent value="home" className="min-h-screen">
            <HeroSection />
          </TabsContent>
          <TabsContent value="projects" className="min-h-screen">
            <ProjectsSection />
          </TabsContent>
          <TabsContent value="skills" className="min-h-screen">
            <SkillsSection />
          </TabsContent>
          <TabsContent value="articles" className="min-h-screen">
             <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 my-24 md:my-32">
                <ArticlesSection />
                <ProfilesSection />
              </div>
          </TabsContent>
          <TabsContent value="contact" className="min-h-screen">
            <ContactSection />
          </TabsContent>
        </main>
      </Tabs>
      <Footer />
    </div>
  );
}
