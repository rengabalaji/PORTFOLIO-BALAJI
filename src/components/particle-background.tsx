
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
    const particleCount = 200;

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
      const pushFactor = 0.2; // Increased push factor for faster scattering
      const returnFactor = 0.02;

      particles.forEach(p => {
        const distToMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        
        // Scatter away from cursor
        if (distToMouse < mouseInteractionDist) {
          const angle = Math.atan2(p.y - mouse.y, p.x - mouse.x);
          const force = (mouseInteractionDist - distToMouse) / mouseInteractionDist;
          p.vx += Math.cos(angle) * force * pushFactor;
          p.vy += Math.sin(angle) * force * pushFactor;
        }

        // Gently move back towards original position + constant velocity
        p.vx += (p.originalVx - p.vx) * 0.05;
        p.vy += (p.originalVy - p.vy) * 0.05;
        
        p.x += p.vx;
        p.y += p.vy;

        // Apply friction to dampen the movement over time
        p.vx *= 0.98;
        p.vy *= 0.98;
        
        if (p.x < 0 || p.x > width) {
            p.vx *= -1;
            p.x = Math.max(0, Math.min(p.x, width)); // Keep within bounds
        }
        if (p.y < 0 || p.y > height) {
            p.vy *= -1;
            p.y = Math.max(0, Math.min(p.y, height)); // Keep within bounds
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'hsla(0, 84%, 54%, 0.8)';
        ctx.fill();
      });

      const maxLineDist = 150;
      for (let i = 0; i < particles.length; i++) {
        const distToMouseI = Math.hypot(particles[i].x - mouse.x, particles[i].y - mouse.y);
        
        for (let j = i + 1; j < particles.length; j++) {
            const distToMouseJ = Math.hypot(particles[j].x - mouse.x, particles[j].y - mouse.y);
          
            // If either particle is near the mouse, don't draw a line
            if (distToMouseI < mouseInteractionDist || distToMouseJ < mouseInteractionDist) {
                continue;
            }

            const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);

            if (dist < maxLineDist) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `hsla(0, 84%, 54%, ${1 - dist / maxLineDist})`;
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
