
import React, { useEffect, useRef } from 'react';

const GlitchHeader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = 120;
    
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];
    
    // Create quantum particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 3,
        speedY: (Math.random() - 0.5) * 3,
        color: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#39FF14' : '#9b87f5'
      });
    }
    
    const drawText = () => {
      ctx.font = 'bold 48px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Main text
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, '#9b87f5');
      gradient.addColorStop(0.5, '#06b6d4');
      gradient.addColorStop(1, '#39FF14');
      
      ctx.fillStyle = gradient;
      ctx.fillText('INTRUSIONX 2024', width / 2, height / 2);
      
      // Add glitch effect randomly
      if (Math.random() > 0.9) {
        ctx.fillStyle = '#39FF14';
        ctx.fillText('INTRUSIONX 2024', width / 2 + (Math.random() - 0.5) * 10, height / 2);
      }
      
      // Subtitle
      ctx.font = 'bold 16px monospace';
      ctx.fillStyle = '#e2e8f0';
      ctx.fillText('THE ULTIMATE CYBERSECURITY HACKATHON', width / 2, height / 2 + 40);
    };
    
    const drawParticles = () => {
      particles.forEach(p => {
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.random() * 0.7 + 0.3;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Wrap around screen edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        
        // Random direction changes
        if (Math.random() > 0.98) {
          p.speedX = (Math.random() - 0.5) * 3;
          p.speedY = (Math.random() - 0.5) * 3;
        }
      });
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      drawParticles();
      drawText();
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="glitch-header relative w-full overflow-hidden my-6">
      <canvas 
        ref={canvasRef} 
        className="w-full h-32"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-deepspace/0 via-deepspace/0 to-deepspace/100 pointer-events-none"></div>
      
      {/* Animated lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-cyberblue/30 animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-cyberblue/30 animate-pulse-glow"></div>
    </div>
  );
};

export default GlitchHeader;
