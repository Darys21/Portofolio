import React, { useEffect, useRef } from 'react';

const AntigravityParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const mouse = { x: null, y: null, radius: 150 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.radius = radius;
        this.color = color;
        this.density = (Math.random() * 30) + 1;
        this.angle = Math.random() * 360;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        // Mouse Interaction Physics
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
          this.x -= directionX * 3; // Repel force
          this.y -= directionY * 3;
        } else {
          // Return to original position (Antigravity float)
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 20;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 20;
          }
        }
        
        // Gentle Floating Animation
        this.angle += 0.05;
        this.y += Math.sin(this.angle) * 0.5;

        this.draw();
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 9000;
      
      // Create random scattered particles
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let size = Math.random() * 2 + 1;
        // Antigravity Blue color
        let color = `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.2})`; 
        particles.push(new Particle(x, y, size, color));
      }
      
      // Create a "Ring" shape to mimic the reference image
      const ringRadius = Math.min(canvas.width, canvas.height) * 0.25;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      for (let i = 0; i < 60; i++) {
         let angle = (Math.PI * 2 * i) / 60;
         let x = centerX + Math.cos(angle) * ringRadius + (Math.random() * 20 - 10);
         let y = centerY + Math.sin(angle) * ringRadius + (Math.random() * 20 - 10);
         let size = Math.random() * 3 + 1;
         particles.push(new Particle(x, y, size, 'rgba(37, 99, 235, 0.8)'));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => particle.update());
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

export default AntigravityParticles;
