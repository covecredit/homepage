import React, { useEffect, useRef } from 'react';

const HexBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const hexagons = [];
    const rows = 8;
    const cols = 10;
    const hexWidth = 140;
    const hexHeight = 161.66;
    
    const totalWidth = cols * (hexWidth * 0.75);
    const totalHeight = rows * hexHeight;
    
    const offsetX = (container.clientWidth - totalWidth) / 2;
    const offsetY = -totalHeight / 4; // Start higher up
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const hex = document.createElement('div');
        hex.className = 'hex';
        
        const xPos = offsetX + col * (hexWidth * 0.75);
        const yPos = offsetY + row * (hexHeight * 0.85) + (col % 2) * (hexHeight / 2);
        
        hex.style.left = `${xPos}px`;
        hex.style.top = `${yPos}px`;
        hex.style.width = `${hexWidth}px`;
        hex.style.height = `${hexHeight}px`;
        
        // Add animation delay based on position
        const delay = (row + col) * 0.1;
        hex.style.animationDelay = `${delay}s`;
        
        const inner = document.createElement('div');
        inner.className = 'hex-inner';
        hex.appendChild(inner);
        
        const glow = document.createElement('div');
        glow.className = 'hex-glow';
        hex.appendChild(glow);
        
        hexagons.push(hex);
        container.appendChild(hex);
      }
    }

    const handleResize = () => {
      const newOffsetX = (container.clientWidth - totalWidth) / 2;
      const newOffsetY = -totalHeight / 4; // Maintain the higher starting position
      
      hexagons.forEach((hex, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const xPos = newOffsetX + col * (hexWidth * 0.75);
        const yPos = newOffsetY + row * (hexHeight * 0.85) + (col % 2) * (hexHeight / 2);
        
        hex.style.left = `${xPos}px`;
        hex.style.top = `${yPos}px`;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      hexagons.forEach(hex => hex.remove());
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="hex-grid absolute inset-0 overflow-hidden"
    />
  );
};

export default HexBackground;