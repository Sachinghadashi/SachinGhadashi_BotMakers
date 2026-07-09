import React from 'react';
import roboRaceImg from '../assets/7pic.jpg';
import lineFollowerImg from '../assets/6pic.jpg';
import rcRacingImg from '../assets/5pic.jpg';
import fpvDroneImg from '../assets/4pic.jpg';
import roboHockeyImg from '../assets/3pic.jpg';
import roboWarImg from '../assets/1pic.png';
import circuitBgImg from '../assets/2pic.png';

interface Discipline {
  id: string;
  title: string;
  image: string;
}

export const DisciplinesSection: React.FC = () => {
  const disciplines: Discipline[] = [
    { id: 'robo-race', title: 'Robo Race', image: roboRaceImg },
    { id: 'line-follower', title: 'Line Follower', image: lineFollowerImg },
    { id: 'rc-racing', title: 'RC Racing', image: rcRacingImg },
    { id: 'fpv-drone', title: 'FPV Drone Racing & Aeromodelling', image: fpvDroneImg },
    { id: 'robo-hockey', title: 'Robo Hockey', image: roboHockeyImg },
    { id: 'robo-war', title: 'Robo War', image: roboWarImg },
  ];

  return (
    <section className="bg-brand-bg py-20 md:py-28 border-t border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-rajdhani text-brand-red text-xs md:text-sm font-bold tracking-[0.25em] uppercase block mb-3">
            SPORTS
          </span>
          <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider text-white uppercase leading-tight">
            COMPETITION DISCIPLINES
          </h2>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Robo Race */}
          <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:border-brand-red/40 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
            <div className="h-44 sm:h-48 overflow-hidden relative">
              <img 
                src={disciplines[0].image} 
                alt={disciplines[0].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="py-5 px-6 bg-brand-card text-center border-t border-brand-border/40 min-h-[80px] flex items-center justify-center">
              <h3 className="font-sans font-semibold text-base sm:text-lg text-white leading-snug">
                {disciplines[0].title}
              </h3>
            </div>
          </div>

          {/* Card 2: Line Follower */}
          <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:border-brand-red/40 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
            <div className="h-44 sm:h-48 overflow-hidden relative bg-white">
              <img 
                src={disciplines[1].image} 
                alt={disciplines[1].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="py-5 px-6 bg-brand-card text-center border-t border-brand-border/40 min-h-[80px] flex items-center justify-center">
              <h3 className="font-sans font-semibold text-base sm:text-lg text-white leading-snug">
                {disciplines[1].title}
              </h3>
            </div>
          </div>

          {/* Card 3: RC Racing */}
          <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:border-brand-red/40 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
            <div className="h-44 sm:h-48 overflow-hidden relative">
              <img 
                src={disciplines[2].image} 
                alt={disciplines[2].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="py-5 px-6 bg-brand-card text-center border-t border-brand-border/40 min-h-[80px] flex items-center justify-center">
              <h3 className="font-sans font-semibold text-base sm:text-lg text-white leading-snug">
                {disciplines[2].title}
              </h3>
            </div>
          </div>

          {/* Card 4: FPV Drone Racing */}
          <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:border-brand-red/40 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
            <div className="h-44 sm:h-48 overflow-hidden relative">
              <img 
                src={disciplines[3].image} 
                alt={disciplines[3].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="py-5 px-6 bg-brand-card text-center border-t border-brand-border/40 min-h-[80px] flex items-center justify-center">
              <h3 className="font-sans font-semibold text-sm sm:text-base text-white leading-snug">
                {disciplines[3].title}
              </h3>
            </div>
          </div>

          {/* Card 5: Robo Hockey */}
          <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:border-brand-red/40 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
            <div className="h-44 sm:h-48 overflow-hidden relative">
              <img 
                src={disciplines[4].image} 
                alt={disciplines[4].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="py-5 px-6 bg-brand-card text-center border-t border-brand-border/40 min-h-[80px] flex items-center justify-center">
              <h3 className="font-sans font-semibold text-base sm:text-lg text-white leading-snug">
                {disciplines[4].title}
              </h3>
            </div>
          </div>

          {/* Card 6: Robo War */}
          <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:border-brand-red/40 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
            <div className="h-44 sm:h-48 overflow-hidden relative">
              <img 
                src={disciplines[5].image} 
                alt={disciplines[5].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="py-5 px-6 bg-brand-card text-center border-t border-brand-border/40 min-h-[80px] flex items-center justify-center">
              <h3 className="font-sans font-semibold text-base sm:text-lg text-white leading-snug">
                {disciplines[5].title}
              </h3>
            </div>
          </div>

          {/* Slot 7 & 8: Technical Circuit Board Schematic Image (using 2pic.png) */}
          <div className="col-span-1 sm:col-span-2 min-h-[220px] h-full rounded-2xl overflow-hidden relative group border border-brand-border/30">
            <img 
              src={circuitBgImg} 
              alt="Circuit schematic pattern" 
              className="absolute inset-0 w-full h-full object-cover object-center select-none"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
