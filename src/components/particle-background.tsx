"use client";

import { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  style: React.CSSProperties;
  type: 'star' | 'node';
  x: number;
  y: number;
}

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [lines, setLines] = useState<JSX.Element[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const numStars = 150;
    const numNodes = 25;
    const newParticles: Particle[] = [];

    // Create stars
    for (let i = 0; i < numStars; i++) {
      const size = Math.random() * 2 + 1;
      const opacity = Math.random() * 0.5 + 0.2;
      newParticles.push({
        id: i,
        type: 'star',
        x: Math.random() * 100,
        y: Math.random() * 100,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: `rgba(255, 255, 255, ${opacity})`,
          borderRadius: '50%',
          animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
          animationDelay: `${Math.random() * 5}s`,
        },
      });
    }

    // Create constellation nodes
    for (let i = 0; i < numNodes; i++) {
      const size = Math.random() * 3 + 2;
      newParticles.push({
        id: numStars + i,
        type: 'node',
        x: Math.random() * 100,
        y: Math.random() * 100,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: 'hsl(30, 80%, 55%)', // Gold color for nodes
          borderRadius: '50%',
          boxShadow: '0 0 8px hsl(30, 80%, 55%)',
        },
      });
    }

    const nodes = newParticles.filter(p => p.type === 'node');
    const newLines: JSX.Element[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const p1 = nodes[i];
        const p2 = nodes[j];
        const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));

        if (distance < 20) { // Connect nodes that are close
          const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
          const length = Math.sqrt(Math.pow(p2.x - p1.x, 2) * Math.pow(window.innerWidth/100, 2) + Math.pow(p2.y - p1.y, 2) * Math.pow(window.innerHeight/100, 2));
           
          newLines.push(
            <div
              key={`${p1.id}-${p2.id}`}
              className="absolute"
              style={{
                top: `${p1.y}%`,
                left: `${p1.x}%`,
                width: `${distance}vw`,
                height: '1px',
                backgroundColor: 'hsla(30, 80%, 55%, 0.5)',
                transform: `rotate(${angle}deg)`,
                transformOrigin: '0 0',
              }}
            />
          );
        }
      }
    }
    
    // For simplicity, we'll draw lines based on initial positions
    // A more complex implementation would update lines on particle movement.
    setParticles(newParticles);

    // Keyframes for star twinkle
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes twinkle {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 0.8; }
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
      {particles.map(p => (
        <div key={p.id} className="absolute" style={{...p.style, top: `${p.y}%`, left: `${p.x}%`}} />
      ))}
      {/* Lines would be rendered here */}
    </div>
  );
};

export default ParticleBackground;
