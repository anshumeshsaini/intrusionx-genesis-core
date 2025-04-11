
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: 'DAYS' },
    { value: timeLeft.hours, label: 'HOURS' },
    { value: timeLeft.minutes, label: 'MINUTES' },
    { value: timeLeft.seconds, label: 'SECONDS' }
  ];

  return (
    <div className="countdown-container relative flex items-center justify-center my-16">
      <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full animate-morph plasma-animation opacity-20"></div>
      
      <div className="relative z-10 glassmorphism py-8 px-4 md:py-10 md:px-12 rounded-3xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {timeUnits.map((unit, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold cyber-text">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="w-full h-1/2 overflow-hidden opacity-30 neo-glow">
                    <div className="w-full h-full bg-cyberblue/20"></div>
                  </div>
                </div>
              </div>
              <div className="text-xs md:text-sm text-cyberblue mt-2 tracking-widest">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Flowing particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyberblue rounded-full animate-particle-flow"
            style={{
              left: `${10 + (i * 20)}%`,
              animationDelay: `${i * 0.6}s`,
              opacity: 0.7
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
