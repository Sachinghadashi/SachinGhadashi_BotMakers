import React from 'react';
import boardImg from '../assets/board.png';

export const WhyRegister: React.FC = () => {
  return (
    <section className="bg-[#181818] py-20 md:py-28 border-t border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ========================================================================= */}
          {/* Left Column: Value Propositions */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Header */}
            <div>
              <span className="font-roboto text-brand-red text-xs md:text-sm font-bold tracking-[0.25em] uppercase block mb-3">
                WHY REGISTER ?
              </span>
              <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider text-white uppercase leading-tight">
                THE LEAGUE ADVANTAGE
              </h2>
            </div>

            {/* List of Propositions */}
            <div className="space-y-10">
              
              {/* Prop 1: National Recognition */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-center text-brand-red group-hover:border-brand-red/50 group-hover:scale-105 shadow-md transition-all duration-300">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M 2 0 L 8 6.5 L 14.5 13 L 8.5 13 Z" />
                    <path d="M 22 0 L 16 6.5 L 9.5 13 L 15.5 13 Z" />
                    <path d="M 12 8 C 8.7 8 6 10.7 6 14 C 6 17.3 8.7 20 12 20 C 15.3 20 18 17.3 18 14 C 18 10.7 15.3 8 12 8 Z M 12 11.5 L 12.6 13.2 H 14.4 L 13 14.3 L 13.5 16 L 12 15 L 10.5 16 L 11 14.3 L 9.6 13.2 H 11.4 Z" fillRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-roboto font-bold text-base sm:text-lg text-white tracking-wide uppercase mb-1">
                    NATIONAL RECOGNITION
                  </h3>
                  <p className="font-roboto text-gray-400 text-sm leading-relaxed font-normal">
                    "Benchmark your skills on India's official robotics leaderboard."
                  </p>
                </div>
              </div>

              {/* Prop 2: Fair Judging */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-center text-brand-red group-hover:border-brand-red/50 group-hover:scale-105 shadow-md transition-all duration-300">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="0.5" y="19" width="10" height="2.5" rx="0.5" />
                    <rect x="2" y="16.5" width="7" height="2.5" rx="0.4" />
                    <g transform="rotate(45 12 12)">
                      <rect x="10" y="11.2" width="12" height="1.6" rx="0.8" />
                      <rect x="17.5" y="10" width="1.2" height="4" rx="0.4" />
                      <circle cx="22" cy="12" r="1.2" />
                      <rect x="5" y="7" width="4" height="10" rx="0.8" />
                      <rect x="4.5" y="8" width="5" height="1.2" rx="0.3" />
                      <rect x="4.5" y="14.8" width="5" height="1.2" rx="0.3" />
                    </g>
                  </svg>
                </div>
                <div>
                  <h3 className="font-roboto font-bold text-base sm:text-lg text-white tracking-wide uppercase mb-1">
                    FAIR JUDGING
                  </h3>
                  <p className="font-roboto text-gray-400 text-sm leading-relaxed font-normal">
                    "Compete with confidence under standardized, expert-led evaluation."
                  </p>
                </div>
              </div>

              {/* Prop 3: Career Ops */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-center text-brand-red group-hover:border-brand-red/50 group-hover:scale-105 shadow-md transition-all duration-300">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M 7 6 V 3.5 C 7 2.7 7.7 2 8.5 2 H 15.5 C 16.3 2 17 2.7 17 3.5 V 6 H 19 V 3.5 C 19 1.6 17.4 0 15.5 0 H 8.5 C 6.6 0 5 1.6 5 3.5 V 6 Z" />
                    <path d="M 2 7.5 C 2 6.7 2.7 6 3.5 6 H 20.5 C 21.3 6 22 6.7 22 7.5 V 11 H 2 Z" />
                    <path d="M 2 13 H 22 V 19.5 C 22 20.3 21.3 21 20.5 21 H 3.5 C 2.7 21 2 20.3 2 19.5 Z" />
                    <rect x="6" y="9.5" width="2" height="4.5" rx="0.5" />
                    <rect x="16" y="9.5" width="2" height="4.5" rx="0.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-roboto font-bold text-base sm:text-lg text-white tracking-wide uppercase mb-1">
                    CAREER OPS
                  </h3>
                  <p className="font-roboto text-gray-400 text-sm leading-relaxed font-normal">
                    "Bridge the gap between arena victories and top-tier tech placements."
                  </p>
                </div>
              </div>

              {/* Prop 4: High-Energy Eco */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-center text-brand-red group-hover:border-brand-red/50 group-hover:scale-105 shadow-md transition-all duration-300">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.5 1.5 L5 13.5 H12 L10.5 22.5 L19 10.5 H12 Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-roboto font-bold text-base sm:text-lg text-white tracking-wide uppercase mb-1">
                    HIGH - ENERGY ECO
                  </h3>
                  <p className="font-roboto text-gray-400 text-sm leading-relaxed font-normal">
                    "Join a nationwide community of elite innovators and robotics athletes."
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* Right Column: Leaderboard Panel */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img 
              src={boardImg} 
              alt="Leaderboard" 
              className="w-full max-w-[380px] h-auto object-contain select-none"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
