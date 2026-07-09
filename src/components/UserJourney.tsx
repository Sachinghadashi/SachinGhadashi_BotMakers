import React from 'react';

export const UserJourney: React.FC = () => {
  return (
    <section className="bg-brand-bg py-16 md:py-24 border-t border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-roboto text-brand-red text-xs md:text-sm font-bold tracking-[0.25em] uppercase block mb-3">
            USER JOURNEY
          </span>
          <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider text-white uppercase leading-tight">
            YOUR PATH TO THE LEAGUE
          </h2>
          <p className="font-roboto text-gray-400 text-xs sm:text-sm md:text-base mt-2 max-w-xl mx-auto font-normal">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop) - Mathematically aligned from center of first to center of last item */}
          <div className="hidden md:block absolute top-[45px] left-[12.5%] right-[12.5%] h-[2px] bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.8)] z-0" />

          {/* Connecting Line (Mobile) - Centered vertically on the circle nodes */}
          <div className="md:hidden absolute top-[45px] bottom-[45px] left-[45px] w-[2px] bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.8)] z-0" />

          {/* Steps Grid */}
          <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-4 relative z-10">
            
            {/* Step 1 */}
            <div className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center group flex-1">
              {/* Outer Circular Node */}
              <div className="relative flex items-center justify-center w-[90px] h-[90px] rounded-full bg-brand-bg border-[3px] border-brand-border group-hover:border-brand-red/60 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.8)] shrink-0">
                {/* Glow ring inside */}
                <div className="absolute inset-[3px] rounded-full border border-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.6)] bg-black/50" />
                
                {/* Icon Wrench/Screwdriver crossed */}
                <svg className="w-9 h-9 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.24 7.76l-8.48 8.48m11.31-11.31a2.25 2.25 0 013.18 3.18l-2.83 2.83-3.18-3.18 2.83-2.83zM6.36 17.64l-2.83 2.83a1 1 0 01-1.41-1.41l2.83-2.83 1.41 1.41z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.76 16.24l8.48-8.48M6.24 17.76l1.42-1.42m-4.24 4.24a2.25 2.25 0 013.18-3.18l1.42 1.42m-1.42 1.42l-1.42-1.42" />
                </svg>
              </div>

              {/* Vertical line and Text Container */}
              <div className="ml-6 md:ml-0 flex flex-col items-start md:items-center">
                {/* Vertical Pointer Line */}
                <div className="hidden md:block w-[1px] h-6 bg-gray-600/80 my-3" />
                
                <span className="font-roboto text-brand-red text-xs md:text-sm font-bold tracking-widest uppercase">
                  STEP 1
                </span>
                <h3 className="font-roboto text-sm md:text-base font-bold text-white tracking-wide uppercase mt-1 leading-snug max-w-[150px]">
                  BUILD YOUR<br />TEAM
                </h3>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center group flex-1">
              {/* Outer Circular Node */}
              <div className="relative flex items-center justify-center w-[90px] h-[90px] rounded-full bg-brand-bg border-[3px] border-brand-border group-hover:border-brand-red/60 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.8)] shrink-0">
                {/* Glow ring inside */}
                <div className="absolute inset-[3px] rounded-full border border-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.6)] bg-black/50" />
                
                {/* India / Taj Mahal Icon */}
                <svg className="w-10 h-10 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 20h18M5 20v-6h14v6M7 14v-4c0-1.5 1.5-2.5 5-2.5s5 1 5 2.5v4M12 7.5V5M10 20v-4c0-1.1.9-2 2-2s2 .9 2 2v4M4.5 20v-9M4 11h1M4.5 11v-1.5M19.5 20v-9M19 11h1M19.5 11v-1.5" />
                </svg>
              </div>

              {/* Vertical line and Text Container */}
              <div className="ml-6 md:ml-0 flex flex-col items-start md:items-center">
                {/* Vertical Pointer Line */}
                <div className="hidden md:block w-[1px] h-6 bg-gray-600/80 my-3" />
                
                <span className="font-roboto text-brand-red text-xs md:text-sm font-bold tracking-widest uppercase">
                  STEP 2
                </span>
                <h3 className="font-roboto text-sm md:text-base font-bold text-white tracking-wide uppercase mt-1 leading-snug max-w-[180px]">
                  COMPETE ACROSS<br />INDIA
                </h3>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center group flex-1">
              {/* Outer Circular Node */}
              <div className="relative flex items-center justify-center w-[90px] h-[90px] rounded-full bg-brand-bg border-[3px] border-brand-border group-hover:border-brand-red/60 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.8)] shrink-0">
                {/* Glow ring inside */}
                <div className="absolute inset-[3px] rounded-full border border-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.6)] bg-black/50" />
                
                {/* Podium with Star Icon */}
                <svg className="w-9 h-9 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 20v-5a1 1 0 011-1h4a1 1 0 011 1v5M9 20v-9a1 1 0 011-1h4a1 1 0 011 1v9M15 20v-4a1 1 0 011-1h4a1 1 0 011 1v5M12 3l1 2 2.2.3-1.6 1.6.4 2.1-2-1-2 1 .4-2.1-1.6-1.6 2.2-.3 1-2z" />
                </svg>
              </div>

              {/* Vertical line and Text Container */}
              <div className="ml-6 md:ml-0 flex flex-col items-start md:items-center">
                {/* Vertical Pointer Line */}
                <div className="hidden md:block w-[1px] h-6 bg-gray-600/80 my-3" />
                
                <span className="font-roboto text-brand-red text-xs md:text-sm font-bold tracking-widest uppercase">
                  STEP 3
                </span>
                <h3 className="font-roboto text-sm md:text-base font-bold text-white tracking-wide uppercase mt-1 leading-snug max-w-[200px]">
                  EARN NATIONAL<br />RANKING & VALUE
                </h3>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center group flex-1">
              {/* Outer Circular Node */}
              <div className="relative flex items-center justify-center w-[90px] h-[90px] rounded-full bg-brand-bg border-[3px] border-brand-border group-hover:border-brand-red/60 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.8)] shrink-0">
                {/* Glow ring inside */}
                <div className="absolute inset-[3px] rounded-full border border-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.6)] bg-black/50" />
                
                {/* Group/Team Icon */}
                <svg className="w-9 h-9 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>

              {/* Vertical line and Text Container */}
              <div className="ml-6 md:ml-0 flex flex-col items-start md:items-center">
                {/* Vertical Pointer Line */}
                <div className="hidden md:block w-[1px] h-6 bg-gray-600/80 my-3" />
                
                <span className="font-roboto text-brand-red text-xs md:text-sm font-bold tracking-widest uppercase">
                  STEP 4
                </span>
                <h3 className="font-roboto text-sm md:text-base font-bold text-white tracking-wide uppercase mt-1 leading-snug max-w-[150px]">
                  JOIN THE<br />LEAGUE
                </h3>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
