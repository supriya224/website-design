// components/MouseFireEffect.tsx

import React, { useEffect, useState } from 'react';

const MouseEffect: React.FC = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticle = (x: number, y: number) => {
      const particle = document.createElement('particle');
      document.body.appendChild(particle);

      let size = Math.floor(Math.random() * 50) + 10;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;

      const destinationX = x + (Math.random() - 0.5) * 2 * 200;
      const destinationY = y + (Math.random() - 0.5) * 2 * 200;

      const animation = particle.animate(
        [
          {
            transform: `translate(${x}px, ${y}px)`,
            opacity: 1,
          },
          {
            transform: `translate(${destinationX}px, ${destinationY}px)`,
            opacity: 0,
          },
        ],
        {
          duration: Math.random() * 1000 + 500,
          easing: 'cubic-bezier(0, .9, .57, 1)',
          fill: 'both',
        }
      );

      animation.onfinish = () => {
        particle.remove();
        setParticles((prevParticles) => prevParticles.filter((p) => p !== particle));
      };
    };

    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      for (let i = 0; i < 3; i++) {
        createParticle(e.clientX, e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default MouseEffect;
