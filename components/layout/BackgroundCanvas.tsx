import React, { useEffect, useRef } from 'react';
import { useAppContext } from '../../context/AppContext';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useAppContext();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    let animationFrameId: number;
    let bubbles: Bubble[] = [];

    const setup = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    class Bubble {
      x: number = 0;
      y: number = 0;
      r: number = 0;
      speed: number = 0;
      hue: number = 0;
      alpha: number = 0;

      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * w;
        this.y = init ? Math.random() * h : h + 10;
        this.r = Math.random() * 2.5 + 0.5;
        this.speed = Math.random() * 0.5 + 0.1;
        this.hue = Math.random() * 140 + 180; // Cyans and Blues
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.y -= this.speed;
        this.x += Math.sin(this.y * 0.01) * 0.2;
        if (this.y < -10) this.reset();
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        
        if (isDark) {
          ctx.fillStyle = `hsla(${this.hue}, 100%, 70%, ${this.alpha})`;
        } else {
          ctx.fillStyle = `rgba(30, 64, 175, ${this.alpha * 0.8})`; // Dark Blue for light mode
        }
        ctx.fill();
      }
    }

    const init = () => {
      bubbles = [];
      const count = Math.min(100, Math.floor((w * h) / 10000));
      for (let i = 0; i < count; i++) {
        bubbles.push(new Bubble());
      }
    };

    const drawLines = () => {
      const maxDist = 120;
      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          const dx = bubbles[i].x - bubbles[j].x;
          const dy = bubbles[i].y - bubbles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            ctx.beginPath();
            const opacity = (1 - dist / maxDist) * 0.2;
            ctx.strokeStyle = isDark 
              ? `rgba(0, 255, 255, ${opacity})` 
              : `rgba(30, 64, 175, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(bubbles[i].x, bubbles[i].y);
            ctx.lineTo(bubbles[j].x, bubbles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      bubbles.forEach(b => {
        b.update();
        b.draw();
      });
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    setup();
    init();
    animate();

    const handleResize = () => {
      setup();
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
