
import React, { useState, useEffect } from 'react';

interface CircularProgressBarProps {
  startTime: Date;
  endTime: Date;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ startTime, endTime }) => {
  const [progress, setProgress] = useState(0);
  const [percentComplete, setPercentComplete] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);

  const calculateProgress = () => {
    const now = new Date();
    const total = endTime.getTime() - startTime.getTime();
    const elapsed = now.getTime() - startTime.getTime();
    
    if (elapsed < 0) return 0;
    if (elapsed >= total) return 100;
    
    const percent = (elapsed / total) * 100;
    
    // Calculate time left
    const timeLeftMs = endTime.getTime() - now.getTime();
    const hoursLeftCalc = Math.floor(timeLeftMs / (1000 * 60 * 60));
    const minutesLeftCalc = Math.floor((timeLeftMs % (1000 * 60 * 60)) / (1000 * 60));
    
    setHoursLeft(hoursLeftCalc);
    setMinutesLeft(minutesLeftCalc);
    setPercentComplete(Math.round(percent));
    
    return percent;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(calculateProgress());
    }, 1000);
    
    return () => clearInterval(interval);
  }, [startTime, endTime]);

  // Calculate the path for the SVG arc
  const radius = 120;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Generate node positions
  const nodes = [];
  const nodeCount = 24; // One node per hour
  for (let i = 0; i < nodeCount; i++) {
    const angle = (i / nodeCount) * 360;
    const radians = (angle - 90) * (Math.PI / 180);
    const x = 150 + radius * Math.cos(radians);
    const y = 150 + radius * Math.sin(radians);
    const isActive = (i / nodeCount) * 100 <= progress;
    
    nodes.push({ x, y, isActive });
  }

  return (
    <div className="circular-progress-container flex flex-col items-center mt-8 mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 cyber-text">HACKATHON PROGRESS</h2>
      
      <div className="relative flex items-center justify-center w-72 h-72 md:w-96 md:h-96">
        {/* SVG with circular progress */}
        <svg width="300" height="300" viewBox="0 0 300 300">
          {/* Background track */}
          <circle
            cx="150"
            cy="150"
            r={radius}
            fill="none"
            stroke="rgba(155, 135, 245, 0.1)"
            strokeWidth="4"
          />
          
          {/* Progress track */}
          <circle
            cx="150"
            cy="150"
            r={radius}
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 150 150)"
            className="neo-glow"
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#39FF14" />
              <stop offset="100%" stopColor="#9b87f5" />
            </linearGradient>
          </defs>
          
          {/* Nodes */}
          {nodes.map((node, index) => (
            <g key={index}>
              <circle
                cx={node.x}
                cy={node.y}
                r="4"
                fill={node.isActive ? "#39FF14" : "rgba(155, 135, 245, 0.3)"}
                className={node.isActive ? "neon-glow" : ""}
              />
              
              {/* Connecting lines between active nodes */}
              {index > 0 && nodes[index - 1].isActive && node.isActive && (
                <line
                  x1={nodes[index - 1].x}
                  y1={nodes[index - 1].y}
                  x2={node.x}
                  y2={node.y}
                  stroke="#39FF14"
                  strokeWidth="2"
                  strokeOpacity="0.5"
                  className="neon-glow"
                />
              )}
              
              {/* Particle trail */}
              {node.isActive && index % 3 === 0 && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="8"
                  fill="transparent"
                  stroke="#39FF14"
                  strokeWidth="1"
                  opacity="0.7"
                  className="animate-ping"
                />
              )}
            </g>
          ))}
          
          {/* Center text */}
          <text
            x="150"
            y="140"
            textAnchor="middle"
            fontSize="36"
            fontWeight="bold"
            fill="#06b6d4"
            className="neo-glow"
          >
            {percentComplete}%
          </text>
          <text
            x="150"
            y="170"
            textAnchor="middle"
            fontSize="16"
            fill="#e2e8f0"
          >
            COMPLETE
          </text>
        </svg>
        
        {/* Time left overlay */}
        <div className="absolute bottom-0 glassmorphism px-6 py-3 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-neongreen animate-pulse"></div>
            <span className="text-sm md:text-base">
              {hoursLeft}h {minutesLeft}m remaining
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
