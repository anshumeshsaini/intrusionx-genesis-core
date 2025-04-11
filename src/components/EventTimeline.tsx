
import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  time: string;
  description: string;
  completed: boolean;
}

interface EventTimelineProps {
  events: Event[];
}

const EventTimeline: React.FC<EventTimelineProps> = ({ events }) => {
  return (
    <div className="event-timeline my-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center cyber-text">
        EVENT TIMELINE
      </h2>
      
      <div className="relative">
        {/* Arc reactor center */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-24 h-24 rounded-full border-4 border-cyberblue/30 flex items-center justify-center animate-pulse-glow">
            <div className="w-16 h-16 rounded-full border-2 border-neongreen/40 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyberblue to-aliensoft neo-glow"></div>
            </div>
          </div>
        </div>
        
        {/* Timeline events */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 relative z-20">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className={`glassmorphism rounded-xl p-6 transition-all duration-300 hover:border-cyberblue hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] ${
                index % 2 === 0 ? 'md:mr-10' : 'md:ml-10 md:mt-20'
              } ${
                event.completed ? 'border-neongreen/50' : 'border-aliensoft/30'
              }`}
            >
              <div className="flex items-center mb-2">
                {event.completed ? (
                  <CheckCircle className="h-5 w-5 text-neongreen mr-2" />
                ) : (
                  <Circle className="h-5 w-5 text-aliensoft/70 mr-2" />
                )}
                <span className="text-sm text-cyberblue">{event.time}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-sm text-gray-300">{event.description}</p>
              
              {/* Connector lines (only on desktop) */}
              {index < events.length - 1 && (
                <div className="hidden md:block absolute h-20 w-px bg-gradient-to-b from-transparent via-cyberblue to-transparent" 
                  style={{
                    left: '50%',
                    top: index % 2 === 0 ? '100%' : 'auto',
                    bottom: index % 2 !== 0 ? '100%' : 'auto',
                    transform: 'translateX(-50%)'
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;
