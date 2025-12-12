"use client";

import { useEffect, useState } from 'react';

const ParticleBackground = () => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const numParticles = 50;
    const newParticles = Array.from({ length: numParticles }).map((_, i) => {
      const size = Math.random() * 3 + 1;
      const style = {
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 20 + 10}s`,
        animationDelay: `${Math.random() * 10}s`,
      };
      return <div key={i} className="absolute rounded-full bg-primary/30 animate-float" style={style} />;
    });
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;
      const particleContainer = document.getElementById('particle-container');
      if (particleContainer) {
        particleContainer.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      id="particle-container"
      className="fixed top-0 left-0 w-full h-full -z-20 transition-transform duration-500 ease-out"
    >
      {particles}
    </div>
  );
};

export default ParticleBackground;
