import React from 'react';
import botpicImg from '../assets/botpic.png';

export const BotLeagueAbout: React.FC = () => {
  return (
    <section className="bg-brand-bg py-20 md:py-28 border-t border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* Section 1: WHAT IS BOTLEAGUE? */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
          
          {/* Left Side: Text Grid */}
          <div className="lg:col-span-7 space-y-12">
            <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider text-white uppercase leading-none">
              WHAT IS BOTLEAGUE?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              
              {/* Point 1 */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-1">
                  <span className="font-roboto text-brand-red text-xl sm:text-2xl font-black">1.</span>
                </div>
                <h3 className="font-roboto text-base sm:text-lg font-bold text-white tracking-wide uppercase">
                  STRUCTURED EVENTS
                </h3>
                <p className="font-roboto text-gray-400 text-sm italic font-normal leading-relaxed">
                  "From one-off events to a year-round competitive season."
                </p>
              </div>

              {/* Point 2 */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-1">
                  <span className="font-roboto text-brand-red text-xl sm:text-2xl font-black">2.</span>
                </div>
                <h3 className="font-roboto text-base sm:text-lg font-bold text-white tracking-wide uppercase">
                  DIGITAL IDENTITY
                </h3>
                <p className="font-roboto text-gray-400 text-sm italic font-normal leading-relaxed">
                  "Your professional robotics legacy, tracked and verified."
                </p>
              </div>

              {/* Point 3 */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-1">
                  <span className="font-roboto text-brand-red text-xl sm:text-2xl font-black">3.</span>
                </div>
                <h3 className="font-roboto text-base sm:text-lg font-bold text-white tracking-wide uppercase">
                  NATIONAL RANKING
                </h3>
                <p className="font-roboto text-gray-400 text-sm italic font-normal leading-relaxed">
                  "Benchmark your skills against the best engineers in India."
                </p>
              </div>

              {/* Point 4 */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-1">
                  <span className="font-roboto text-brand-red text-xl sm:text-2xl font-black">4.</span>
                </div>
                <h3 className="font-roboto text-base sm:text-lg font-bold text-white tracking-wide uppercase">
                  CAREER PATHWAY
                </h3>
                <p className="font-roboto text-gray-400 text-sm italic font-normal leading-relaxed">
                  "Turning arena victories into real-world industry opportunities."
                </p>
              </div>

            </div>
          </div>

          {/* Right Side: Technical Blueprint Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img 
              src={botpicImg} 
              alt="Bot League Technical Blueprint" 
              className="w-full max-w-[360px] object-contain select-none"
            />
          </div>

        </div>

        {/* ========================================================================= */}
        {/* Section 2: CATEGORIES */}
        {/* ========================================================================= */}
        <div>
          <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider text-white uppercase mb-12">
            CATEGORIES
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: MINI MAKERS (Highlighted with yellow/gold outline) */}
            <div className="bg-brand-card border-2 border-yellow-500 rounded-xl p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(234,179,8,0.2)] shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer group">
              <div>
                <div className="mb-6">
                  {/* Circle outline with "M" inside */}
                  <div className="w-14 h-14 rounded-full border-[3px] border-yellow-500 flex items-center justify-center text-yellow-500 font-extrabold text-2xl font-orbitron group-hover:scale-110 transition-transform select-none">
                    M
                  </div>
                </div>
                <h3 className="font-orbitron font-extrabold text-lg sm:text-xl tracking-wider text-white uppercase mb-2">
                  MINI MAKERS
                </h3>
                <p className="font-roboto text-gray-400 text-sm leading-relaxed font-normal">
                  Where Creativity Meets Logic.
                </p>
              </div>
              <a href="#mini-makers" className="font-roboto text-sm text-brand-red hover:text-brand-red-hover font-bold uppercase tracking-wider flex items-center gap-2 mt-8 transition-colors">
                LEARN MORE <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </a>
            </div>

            {/* Card 2: JUNIOR INNOVATORS */}
            <div className="bg-brand-card border border-brand-border rounded-xl p-8 flex flex-col justify-between hover:border-yellow-500/55 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(234,179,8,0.1)] shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer group">
              <div>
                <div className="mb-6">
                  {/* Lightbulb outline */}
                  <svg className="w-14 h-14 text-yellow-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 18v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                    <path d="M12 7a5 5 0 0 0-5 5c0 1.63.78 3.07 2 4h6c1.22-.93 2-2.37 2-5a5 5 0 0 0-5-5z" />
                    <path d="M9 20h6" strokeWidth={2} />
                  </svg>
                </div>
                <h3 className="font-orbitron font-extrabold text-lg sm:text-xl tracking-wider text-white uppercase mb-2">
                  JUNIOR INNOVATORS
                </h3>
                <p className="font-roboto text-gray-400 text-sm leading-relaxed font-normal">
                  Engineering & Strategy Fundamentals.
                </p>
              </div>
              <a href="#junior-innovators" className="font-roboto text-sm text-brand-red hover:text-brand-red-hover font-bold uppercase tracking-wider flex items-center gap-2 mt-8 transition-colors">
                LEARN MORE <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </a>
            </div>

            {/* Card 3: YOUNG ENGINEERS */}
            <div className="bg-brand-card border border-brand-border rounded-xl p-8 flex flex-col justify-between hover:border-yellow-500/55 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(234,179,8,0.1)] shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer group">
              <div>
                <div className="mb-6">
                  {/* Engineer helmet & gear profile */}
                  <svg className="w-14 h-14 text-yellow-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M12 14a4 4 0 0 1-4-4v-0.5a4 4 0 0 1 8 0V10a4 4 0 0 1-4 4z" />
                    <path d="M6.5 8.5C6.5 5 9 4.5 12 4.5s5.5.5 5.5 4H6.5z" fill="currentColor" fillOpacity="0.2" />
                    <path d="M5.5 8.5h13" strokeWidth={2} />
                    <path d="M12 4.5V3" strokeWidth={2} />
                    <path d="M4 19.5c0-2.5 2-4.5 5-4.5h6c3 0 5 2 5 4.5" />
                    <circle cx="18" cy="13" r="2.5" stroke="currentColor" strokeWidth={1.2} />
                    <circle cx="19.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth={1.2} />
                  </svg>
                </div>
                <h3 className="font-orbitron font-extrabold text-lg sm:text-xl tracking-wider text-white uppercase mb-2">
                  YOUNG ENGINEERS
                </h3>
                <p className="font-roboto text-gray-400 text-sm leading-relaxed font-normal">
                  Advanced Wireless & Autonomous Control.
                </p>
              </div>
              <a href="#young-engineers" className="font-roboto text-sm text-brand-red hover:text-brand-red-hover font-bold uppercase tracking-wider flex items-center gap-2 mt-8 transition-colors">
                LEARN MORE <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </a>
            </div>

            {/* Card 4: ROBO MINDS */}
            <div className="bg-brand-card border border-brand-border rounded-xl p-8 flex flex-col justify-between hover:border-yellow-500/55 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(234,179,8,0.1)] shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer group">
              <div>
                <div className="mb-6">
                  {/* Head profile side-view containing Bitcoin shape */}
                  <svg className="w-14 h-14 text-yellow-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11c1.5-1.5 2.5-3 2.5-5.5a6 6 0 0 0-11.5-2.5c-1 1-1.5 2.5-1.5 4.5c0 2.5 1 4 2.5 5.5l1.5 4.5a1.5 1.5 0 0 0 2.5 1.5z" />
                    {/* Bitcoin B outline inside head */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6h3.5a1.5 1.5 0 0 1 1.5 1.5v0A1.5 1.5 0 0 1 12.5 9H9M9 9h4a1.5 1.5 0 0 1 1.5 1.5v0A1.5 1.5 0 0 1 13 12H9" />
                    <path d="M10.5 5v8M11.5 5v8" />
                  </svg>
                </div>
                <h3 className="font-orbitron font-extrabold text-lg sm:text-xl tracking-wider text-white uppercase mb-2">
                  ROBO MINDS
                </h3>
                <p className="font-roboto text-gray-400 text-sm leading-relaxed font-normal">
                  Elite Professional Sports & Robotics.
                </p>
              </div>
              <a href="#robo-minds" className="font-roboto text-sm text-brand-red hover:text-brand-red-hover font-bold uppercase tracking-wider flex items-center gap-2 mt-8 transition-colors">
                LEARN MORE <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
