import React from 'react';

export const WhyRegister: React.FC = () => {
  return (
    <section className="bg-brand-bg py-20 md:py-28 border-t border-brand-border overflow-hidden">
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
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <circle cx="12" cy="8" r="5" stroke="currentColor" />
                    <path d="M8.21 13.89L7 21l5-2.5 5 2.5-1.21-7.11" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="8" r="1.5" fill="currentColor" />
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
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M14 13L4 3M17 10l-4-4 3-3 4 4-3 3z M11 16l-3-3 4-4 3 3-4 4z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 21h10" strokeLinecap="round" strokeLinejoin="round" />
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
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <rect x="3" y="7" width="18" height="12" rx="2" />
                    <path d="M9 7V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V7" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="12" y1="12" x2="12" y2="15" />
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
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
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
            <div className="bg-[#0b0c13] border border-brand-border rounded-2xl p-6 w-full max-w-[340px] relative overflow-hidden shadow-[0_8px_35px_rgba(0,0,0,0.8)] group">
              
              {/* Leaderboard Circuit Board Graphic in Background */}
              <div className="absolute inset-0 opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity duration-500 z-0">
                <svg className="w-full h-full text-blue-500" viewBox="0 0 300 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 50h40l20 20v60l15 15h80" stroke="currentColor" strokeWidth="1" />
                  <path d="M280 120h-40l-20-20v-40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <path d="M50 320h80l20 20h60l15-15h40" stroke="currentColor" strokeWidth="1" />
                  <path d="M150 200v100" stroke="currentColor" strokeWidth="1" />
                  <circle cx="80" cy="70" r="2" fill="currentColor" />
                  <circle cx="215" cy="145" r="2.5" fill="#ff3c47" />
                  <circle cx="150" cy="250" r="2" fill="currentColor" />
                </svg>
              </div>

              {/* Glowing vertical neon points */}
              <div className="absolute top-1/4 left-6 w-1 h-1 bg-blue-400 rounded-full animate-ping" />
              <div className="absolute bottom-1/3 right-8 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />

              <div className="relative z-10">
                
                {/* Header */}
                <h3 className="font-orbitron font-extrabold text-lg text-white tracking-[0.2em] text-center uppercase mb-6 border-b border-brand-border pb-4">
                  LEADERBOARD
                </h3>

                {/* Winner (#01 Place) */}
                <div className="flex flex-col items-center justify-center mb-6">
                  {/* Yellow avatar box with floating shield */}
                  <div className="relative w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {/* Floating Shield */}
                    <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-slate-900 border border-yellow-500 flex items-center justify-center text-yellow-500 shadow-md">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                  </div>
                  <span className="font-roboto text-[11px] text-gray-400 font-bold uppercase tracking-wider mt-3">
                    #01 - Player Name
                  </span>
                  <span className="font-orbitron text-2xl font-black text-white tracking-wide mt-0.5">
                    508754
                  </span>
                </div>

                {/* Other rankings (02 to 08) */}
                <div className="space-y-2">
                  
                  {/* Rank 02 (Cyan Blue Theme) */}
                  <div className="flex items-center justify-between p-2 px-3 bg-[#0c0e16]/80 border border-brand-border/60 hover:border-cyan-500/30 rounded-xl transition-all duration-300 group/pill">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-bold font-orbitron flex items-center justify-center">
                        02
                      </span>
                      <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-gray-300 text-xs font-medium font-roboto">Player Name</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-xs font-bold font-roboto tracking-wider">22000</span>
                      <svg className="w-3.5 h-3.5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                      </svg>
                    </div>
                  </div>

                  {/* Rank 03 (Cyan Blue Theme) */}
                  <div className="flex items-center justify-between p-2 px-3 bg-[#0c0e16]/80 border border-brand-border/60 hover:border-cyan-500/30 rounded-xl transition-all duration-300 group/pill">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-bold font-orbitron flex items-center justify-center">
                        03
                      </span>
                      <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-gray-300 text-xs font-medium font-roboto">Player Name</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-xs font-bold font-roboto tracking-wider">20030</span>
                      <svg className="w-3.5 h-3.5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                      </svg>
                    </div>
                  </div>

                  {/* Rank 04 (Pink Theme) */}
                  <div className="flex items-center justify-between p-2 px-3 bg-[#0c0e16]/80 border border-brand-border/60 hover:border-pink-500/30 rounded-xl transition-all duration-300 group/pill">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[10px] font-bold font-orbitron flex items-center justify-center">
                        04
                      </span>
                      <svg className="w-4 h-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-gray-300 text-xs font-medium font-roboto">Player Name</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-xs font-bold font-roboto tracking-wider">19500</span>
                      <svg className="w-3.5 h-3.5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                      </svg>
                    </div>
                  </div>

                  {/* Rank 05 (Pink Theme) */}
                  <div className="flex items-center justify-between p-2 px-3 bg-[#0c0e16]/80 border border-brand-border/60 hover:border-pink-500/30 rounded-xl transition-all duration-300 group/pill">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[10px] font-bold font-orbitron flex items-center justify-center">
                        05
                      </span>
                      <svg className="w-4 h-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-gray-300 text-xs font-medium font-roboto">Player Name</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-xs font-bold font-roboto tracking-wider">15060</span>
                      <svg className="w-3.5 h-3.5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                      </svg>
                    </div>
                  </div>

                  {/* Rank 06 (Pink Theme) */}
                  <div className="flex items-center justify-between p-2 px-3 bg-[#0c0e16]/80 border border-brand-border/60 hover:border-pink-500/30 rounded-xl transition-all duration-300 group/pill">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[10px] font-bold font-orbitron flex items-center justify-center">
                        06
                      </span>
                      <svg className="w-4 h-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-gray-300 text-xs font-medium font-roboto">Player Name</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-xs font-bold font-roboto tracking-wider">13865</span>
                      <svg className="w-3.5 h-3.5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                      </svg>
                    </div>
                  </div>

                  {/* Rank 07 (Pink Theme) */}
                  <div className="flex items-center justify-between p-2 px-3 bg-[#0c0e16]/80 border border-brand-border/60 hover:border-pink-500/30 rounded-xl transition-all duration-300 group/pill">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[10px] font-bold font-orbitron flex items-center justify-center">
                        07
                      </span>
                      <svg className="w-4 h-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-gray-300 text-xs font-medium font-roboto">Player Name</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-xs font-bold font-roboto tracking-wider">10954</span>
                      <svg className="w-3.5 h-3.5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                      </svg>
                    </div>
                  </div>

                  {/* Rank 08 (Pink Theme) */}
                  <div className="flex items-center justify-between p-2 px-3 bg-[#0c0e16]/80 border border-brand-border/60 hover:border-pink-500/30 rounded-xl transition-all duration-300 group/pill">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[10px] font-bold font-orbitron flex items-center justify-center">
                        08
                      </span>
                      <svg className="w-4 h-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-gray-300 text-xs font-medium font-roboto">Player Name</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-xs font-bold font-roboto tracking-wider">9057</span>
                      <svg className="w-3.5 h-3.5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                      </svg>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
