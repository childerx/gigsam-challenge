import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const ParticleFlowBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Track mouse position and active state
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to match its container
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create a very dense field of tiny particles
    const particleCount = 1500;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        // Lower initial velocities for a tighter pack
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
      });
    }

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let animationFrameId: number;
    const animate = () => {
      // Completely clear the canvas (no trailing effect)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        // If the mouse is active, attract particles toward it
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influenceRadius = 100; // pixels

          if (dist < influenceRadius) {
            // Use a higher force multiplier for very close particles
            const forceMultiplier = dist < 30 ? 5.0 : 2.0;
            const force = ((influenceRadius - dist) / influenceRadius) * forceMultiplier;
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * force * 0.3;
            p.vy += Math.sin(angle) * force * 0.3;
          }
        }

        // Base flow: a slight push to the right
        p.vx += 0.002;
        // Apply friction for smooth motion
        p.vx *= 0.995;
        p.vy *= 0.995;

        // Update particle position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges to create an infinite effect
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;

        // Draw each particle as a very tiny circle (radius 0.5)
        ctx.beginPath();
        ctx.arc(p.x, p.y, 0.5, 0, Math.PI * 2);
        // Highlight particles that are very close to the mouse
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          ctx.fillStyle = dist < 30 ? 'rgba(255, 255, 150, 1)' : 'rgba(255, 255, 255, 0.6)';
        } else {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        }
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
    />
  );
};

export default ParticleFlowBackground;
