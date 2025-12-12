
"use client";

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  originalX: number;
  originalY: number;
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
        const x = Math.random() * width;
        const y = Math.random() * height;
        const vx = (Math.random() - 0.5) * 0.3;
        const vy = (Math.random() - 0.5) * 0.3;
        particles.push({
            x: x,
            y: y,
            originalX: x,
            originalY: y,
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
      const pushFactor = 0.05; // Slow push effect
      const returnFactor = 0.02; // Slow return to original position

      particles.forEach(p => {
        const distToMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        
        if (distToMouse < mouseInteractionDist) {
          const angle = Math.atan2(p.y - mouse.y, p.x - mouse.x);
          const force = (mouseInteractionDist - distToMouse) / mouseInteractionDist;
          p.vx += Math.cos(angle) * force * pushFactor;
          p.vy += Math.sin(angle) * force * pushFactor;
        }

        // Gently move back to original position
        p.vx += (p.originalX - p.x) * returnFactor;
        p.vy += (p.originalY - p.y) * returnFactor;
        
        // Add back the original constant movement
        p.vx += p.originalVx * 0.1;
        p.vy += p.originalVy * 0.1;

        // Apply friction to dampen the movement over time
        p.vx *= 0.95;
        p.vy *= 0.95;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) {
            p.vx *= -1;
            p.originalX = Math.random() * width; // Re-randomize original position
        }
        if (p.y < 0 || p.y > height) {
            p.vy *= -1;
            p.originalY = Math.random() * height; // Re-randomize original position
        }

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
        // Re-initialize particles on resize to fit new screen
        particles.length = 0;
         for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            const vx = (Math.random() - 0.5) * 0.3;
            const vy = (Math.random() - 0.5) * 0.3;
            particles.push({
                x: x,
                y: y,
                originalX: x,
                originalY: y,
                vx: vx,
                vy: vy,
                originalVx: vx,
                originalVy: vy,
                radius: Math.random() * 1.5 + 1,
            });
        }
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
