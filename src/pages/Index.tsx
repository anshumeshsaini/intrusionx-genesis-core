import React, { useEffect } from 'react';
import BackgroundStarfield from '@/components/BackgroundStarfield';
import GlitchHeader from '@/components/GlitchHeader';
import CountdownTimer from '@/components/CountdownTimer';
import EventTimeline from '@/components/EventTimeline';
import CircularProgressBar from '@/components/CircularProgressBar';

const Index = () => {
  // Set event dates
  const hackathonStart = new Date('2024-09-15T09:00:00');
  const hackathonEnd = new Date('2024-09-16T09:00:00');
  // For demonstration purposes, we'll set the countdown to a date 30 days from now
  const countdownTarget = new Date();
  countdownTarget.setDate(countdownTarget.getDate() + 30);

  // Events distribute across a 24-hour period
  const events = [
    {
      id: '1',
      title: 'Registration & Opening Ceremony',
      time: '09:00',  // 24-hour format
      description: 'Check-in, welcome address, and hackathon rules explanation.',
      completed: true
    },
    {
      id: '2',
      title: 'Team Formation',
      time: '10:30',
      description: 'Network with other participants and form your teams.',
      completed: true
    },
    {
      id: '3',
      title: 'Hacking Begins',
      time: '12:00',
      description: 'Start working on your cybersecurity solutions.',
      completed: false
    },
    {
      id: '4',
      title: 'Mentor Sessions',
      time: '15:00',
      description: 'Expert cybersecurity professionals provide guidance.',
      completed: false
    },
    {
      id: '5',
      title: 'Midnight Challenge',
      time: '00:00',
      description: 'Special security challenge with bonus points.',
      completed: false
    },
    {
      id: '6',
      title: 'Final Submissions',
      time: '08:00',
      description: 'Submit your projects for evaluation.',
      completed: false
    }
  ];

  // Effect for interactive elements
  useEffect(() => {
    // Simulate audio reactivity with random pulses
    const interval = setInterval(() => {
      const elements = document.querySelectorAll('.neural-pulse');
      elements.forEach(el => {
        if (Math.random() > 0.7) {
          el.classList.add('opacity-70');
          setTimeout(() => {
            el.classList.remove('opacity-70');
          }, 300);
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative text-white">
      {/* Dynamic background elements */}
      <BackgroundStarfield />
      <div className="fixed top-0 left-0 w-full h-full bg-cyber-grid bg-[size:50px_50px] opacity-10 pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-full h-full circuit-fade pointer-events-none"></div>
      
      {/* Main content */}
      <div className="container px-4 py-8 mx-auto relative z-10">
        {/* Header section */}
        <GlitchHeader />
        
        {/* Animated separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyberblue to-transparent my-4 animate-shimmer bg-gradient-shimmer bg-[length:200%_100%]"></div>
        
        {/* Countdown timer */}
        <CountdownTimer targetDate={countdownTarget} />
        
        {/* Neural connections - decorative */}
        <div className="flex justify-center my-8">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-40 w-px bg-gradient-to-b from-transparent via-cyberblue to-transparent mx-4 neural-pulse"
              style={{ animationDelay: `${i * 0.2}s`, opacity: 0.3 }}
            ></div>
          ))}
        </div>
        
        {/* Event timeline */}
        <EventTimeline events={events} />
        
        {/* Circular progress bar */}
        <CircularProgressBar startTime={hackathonStart} endTime={hackathonEnd} />
        
        {/* Footer */}
        <footer className="mt-16 mb-8 text-center">
          <div className="text-sm text-gray-400">DESIGNED BY ALIEN AI CIVILIZATION</div>
          <div className="flex justify-center mt-4 space-x-4">
            {['RULES', 'PRIZES', 'SPONSORS', 'CONTACT'].map((item) => (
              <button 
                key={item}
                className="text-xs tracking-wider border border-cyberblue/30 px-4 py-2 rounded-full hover:border-cyberblue transition-all duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </footer>
      </div>
      
      {/* Interactive glow orbs */}
      <div className="fixed bottom-10 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-cyberblue to-aliensoft opacity-30 animate-pulse-glow"></div>
      <div className="fixed top-20 left-10 w-8 h-8 rounded-full bg-gradient-to-br from-neongreen to-cyberblue opacity-20 animate-float"></div>
    </div>
  );
};

export default Index;
