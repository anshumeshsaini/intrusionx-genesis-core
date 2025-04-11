
import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';

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
  // Format the time to ensure it's in 24-hour format (if not already)
  const format24HourTime = (timeString: string) => {
    if (timeString.includes('AM') || timeString.includes('PM')) {
      const [time, period] = timeString.split(' ');
      const [hours, minutes] = time.split(':').map(Number);
      
      let formattedHours = hours;
      if (period === 'PM' && hours < 12) formattedHours += 12;
      if (period === 'AM' && hours === 12) formattedHours = 0;
      
      return `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }
    return timeString; // Already in 24-hour format
  };
  
  return (
    <div className="event-timeline my-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center cyber-text">
        EVENT TIMELINE
      </h2>
      
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyberblue to-transparent"></div>
        
        {/* Arc reactor center */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-20 h-20 rounded-full border-4 border-cyberblue/30 flex items-center justify-center animate-pulse-glow">
            <div className="w-12 h-12 rounded-full border-2 border-neongreen/40 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyberblue to-aliensoft neo-glow"></div>
            </div>
          </div>
        </div>
        
        {/* 24-hour clock inside reactor */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
          <Clock className="w-4 h-4 text-neongreen opacity-70" />
        </div>
        
        {/* Timeline events */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6 relative z-20">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className={`glassmorphism rounded-lg p-4 transition-all duration-300 hover:border-cyberblue hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] max-w-[90%] ${
                index % 2 === 0 ? 'md:mr-auto md:ml-2' : 'md:ml-auto md:mr-2'
              } ${
                event.completed ? 'border-neongreen/50' : 'border-aliensoft/30'
              }`}
            >
              <div className="flex items-center mb-2">
                {event.completed ? (
                  <CheckCircle className="h-4 w-4 text-neongreen mr-2" />
                ) : (
                  <Circle className="h-4 w-4 text-aliensoft/70 mr-2" />
                )}
                <span className="text-xs text-cyberblue">{format24HourTime(event.time)}</span>
              </div>
              <h3 className="text-base font-bold mb-1">{event.title}</h3>
              <p className="text-xs text-gray-300">{event.description}</p>
              
              {/* Connector lines to the central timeline (only on desktop) */}
              {index < events.length && (
                <div 
                  className="hidden md:block absolute h-px w-8 bg-gradient-to-r from-transparent to-cyberblue" 
                  style={{
                    top: '50%',
                    left: index % 2 === 0 ? 'auto' : '0',
                    right: index % 2 === 0 ? '0' : 'auto',
                    transform: 'translateY(-50%)',
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Time markers */}
        <div className="hidden md:block">
          {[0, 6, 12, 18, 23].map((hour) => (
            <div 
              key={hour} 
              className="absolute left-1/2 transform -translate-x-1/2 text-xs text-cyberblue"
              style={{
                top: `${(hour / 24) * 100}%`,
              }}
            >
              <div className="w-4 h-1 bg-cyberblue/50 rounded-full mb-1 mx-auto"></div>
              {`${hour.toString().padStart(2, '0')}:00`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;
