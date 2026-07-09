import React from 'react';
import wrenchIcon from '../assets/wrench_icon.png';
import tajmahalIcon from '../assets/tajmahal_icon.png';
import peopleIcon from '../assets/people_icon.png';

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
          <p className="font-roboto text-gray-500 text-xs sm:text-sm md:text-base mt-2 max-w-xl mx-auto font-normal">
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
                
                {/* Custom Wrench Icon Image */}
                <img src={wrenchIcon} alt="Build Team Icon" className="w-9 h-9 object-contain relative z-10 select-none" />
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
                
                {/* Custom Taj Mahal Icon Image */}
                <img src={tajmahalIcon} alt="Compete Icon" className="w-10 h-10 object-contain relative z-10 select-none" />
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
                
                {/* Custom Group/Team Icon Image */}
                <img src={peopleIcon} alt="Join League Icon" className="w-9 h-9 object-contain relative z-10 select-none" />
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
