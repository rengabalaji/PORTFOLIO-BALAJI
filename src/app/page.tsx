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

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <ParticleBackground />
      <AnimatedGradient />
      <Header />
      <main className="container mx-auto px-4 md:px-8">
        <HeroSection />
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 my-24 md:my-32" id="articles">
          <ArticlesSection />
          <ProfilesSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
