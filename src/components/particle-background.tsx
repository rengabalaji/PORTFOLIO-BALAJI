"use client";

import { useEffect, useState, useRef } from 'react';

const ParticleBackground = () => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const numParticles = 100; // Increased particle count
    const newParticles = Array.from({ length: numParticles }).map((_, i) => {
      const size = Math.random() * 2 + 1; // Slightly larger particles
      const duration = Math.random() * 30 + 20; // Slower, more varied speed
      const delay = Math.random() * -20;
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;

      // New animation style: lines moving vertically
      const style = {
        width: '1.5px',
        height: `${Math.random() * 50 + 20}px`,
        left: `${startX}%`,
        top: `${startY}%`,
        animationName: 'fall',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
        backgroundColor: `hsl(var(--primary), ${Math.random() * 0.4 + 0.3})`
      };
      return <div key={i} className="absolute" style={style as any} />;
    });
    setParticles(newParticles);

    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes fall {
        from {
          transform: translateY(-100vh);
        }
        to {
          transform: translateY(100vh);
        }
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
        document.head.removeChild(styleSheet);
    }

  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 2; // -1 to 1
        const y = (clientY / window.innerHeight - 0.5) * 2; // -1 to 1
        containerRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateZ(-50px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-20 transition-transform duration-300 ease-out overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {particles}
    </div>
  );
};

export default ParticleBackground;
