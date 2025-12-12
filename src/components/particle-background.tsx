"use client";

import { useEffect, useState, useRef } from 'react';

const ParticleBackground = () => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const numParticles = 80;
    const newParticles = Array.from({ length: numParticles }).map((_, i) => {
      const size = Math.random() * 2.5 + 0.5;
      const duration = Math.random() * 20 + 15;
      const delay = Math.random() * 10;
      const isNode = Math.random() > 0.8;
      const style = {
        width: isNode ? `${size * 1.5}px` : `${size}px`,
        height: isNode ? `${size * 1.5}px` : `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${duration}s, ${duration / 2}s`,
        animationDelay: `-${delay}s`,
        boxShadow: isNode ? '0 0 8px hsl(var(--accent))' : 'none',
        borderRadius: isNode ? '50%' : '1px',
      };
      return <div key={i} className="absolute bg-accent/60 animate-float-spin" style={style} />;
    });
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 2; // -1 to 1
        const y = (clientY / window.innerHeight - 0.5) * 2; // -1 to 1
        containerRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(-50px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-20 transition-transform duration-300 ease-out"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {particles}
    </div>
  );
};

export default ParticleBackground;
