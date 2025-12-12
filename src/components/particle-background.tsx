
"use client";

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  originalVx: number;
  originalVy: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
        const vx = (Math.random() - 0.5) * 0.3;
        const vy = (Math.random() - 0.5) * 0.3;
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: vx,
            vy: vy,
            originalVx: vx,
            originalVy: vy,
            radius: Math.random() * 1.5 + 1,
        });
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }
    
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      const mouseInteractionDist = 150;
      const pushFactor = 0.5;

      particles.forEach(p => {
        const distToMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        
        if (distToMouse < mouseInteractionDist) {
          const angle = Math.atan2(p.y - mouse.y, p.x - mouse.x);
          const force = (mouseInteractionDist - distToMouse) / mouseInteractionDist;
          p.vx += Math.cos(angle) * force * pushFactor;
          p.vy += Math.sin(angle) * force * pushFactor;
        }

        // Apply friction to slow down the push effect
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Ensure particles return to their original gentle movement
        if (Math.abs(p.vx) < Math.abs(p.originalVx)) p.vx = p.originalVx;
        if (Math.abs(p.vy) < Math.abs(p.originalVy)) p.vy = p.originalVy;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'hsla(0, 84%, 54%, 0.8)';
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(0, 84%, 54%, ${1 - dist / 150})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
    }
  }, []);
  
  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-20"
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

export default ParticleBackground;
