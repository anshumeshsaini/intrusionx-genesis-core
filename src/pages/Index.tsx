import React, { useEffect } from 'react';
import BackgroundStarfield from '@/components/BackgroundStarfield';
import GlitchHeader from '@/components/GlitchHeader';
import CountdownTimer from '@/components/CountdownTimer';
import EventTimeline from '@/components/EventTimeline';
import CircularProgressBar from '@/components/CircularProgressBar';

const Index = () => {
  const hackathonStart = new Date('2024-09-15T09:00:00');
  const hackathonEnd = new Date('2024-09-16T09:00:00');

  const countdownTarget = new Date();
  countdownTarget.setDate(countdownTarget.getDate() + 30);

  const events = [
    {
      id: '1',
      title: 'Registration & Opening Ceremony',
      time: '09:00',
      description: 'Check-in, welcome address, and hackathon rules explanation.',
      completed: true,
    },
    {
      id: '2',
      title: 'Team Formation',
      time: '10:30',
      description: 'Network with other participants and form your teams.',
      completed: true,
    },
    {
      id: '3',
      title: 'Hacking Begins',
      time: '12:00',
      description: 'Start working on your cybersecurity solutions.',
      completed: false,
    },
    {
      id: '4',
      title: 'Mentor Sessions',
      time: '15:00',
      description: 'Expert cybersecurity professionals provide guidance.',
      completed: false,
    },
    {
      id: '5',
      title: 'Midnight Challenge',
      time: '00:00',
      description: 'Special security challenge with bonus points.',
      completed: false,
    },
    {
      id: '6',
      title: 'Final Submissions',
      time: '08:00',
      description: 'Submit your projects for evaluation.',
      completed: false,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const elements = document.querySelectorAll('.neural-pulse');
      elements.forEach((el) => {
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
        {/* Background layers */}
        <BackgroundStarfield />
        <div className="fixed top-0 left-0 w-full h-full bg-cyber-grid bg-[size:50px_50px] opacity-10 pointer-events-none"></div>
        <div className="fixed top-0 left-0 w-full h-full circuit-fade pointer-events-none"></div>

        <div className="container px-4 py-8 mx-auto relative z-10">
          {/* Header */}
          <GlitchHeader />

          {/* Separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyberblue to-transparent my-4 animate-shimmer bg-gradient-shimmer bg-[length:200%_100%]"></div>

          {/* Countdown with Timeline Left/Right */}
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 my-12">
            {/* Left timeline (even index) */}
            <div className="flex-1">
              <EventTimeline events={events.filter((_, i) => i % 2 === 0)} />
            </div>

            {/* Center countdown */}
            <div className="flex-shrink-0">
              <CountdownTimer targetDate={countdownTarget} />
            </div>

            {/* Right timeline (odd index) */}
            <div className="flex-1">
              <EventTimeline events={events.filter((_, i) => i % 2 !== 0)} />
            </div>
          </div>

          {/* Decorative neural pulses */}
          <div className="flex justify-center my-8">
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    className="h-40 w-px bg-gradient-to-b from-transparent via-cyberblue to-transparent mx-4 neural-pulse"
                    style={{ animationDelay: `${i * 0.2}s`, opacity: 0.3 }}
                ></div>
            ))}
          </div>
        </div>



        {/* Interactive glow elements */}
        <div className="fixed bottom-10 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-cyberblue to-aliensoft opacity-30 animate-pulse-glow"></div>
        <div className="fixed top-20 left-10 w-8 h-8 rounded-full bg-gradient-to-br from-neongreen to-cyberblue opacity-20 animate-float"></div>
      </div>
  );
};

export default Index;
