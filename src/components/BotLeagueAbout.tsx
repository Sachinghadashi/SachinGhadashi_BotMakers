import React from 'react';
import botpicImg from '../assets/botpic.png';
import minimakersIcon from '../assets/minimakers_icon.png';
import juniorinnovatorsIcon from '../assets/juniorinnovators_icon.png';
import youngengineersIcon from '../assets/youngengineers_icon.png';
import robomindsIcon from '../assets/robominds_icon.png';

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
                <p className="font-roboto text-gray-400 text-sm font-normal leading-relaxed">
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
                <p className="font-roboto text-gray-400 text-sm font-normal leading-relaxed">
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
                <p className="font-roboto text-gray-400 text-sm font-normal leading-relaxed">
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
                <p className="font-roboto text-gray-400 text-sm font-normal leading-relaxed">
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
            
            {/* Card 1: MINI MAKERS */}
            <div className="bg-brand-card border border-brand-border rounded-xl p-8 flex flex-col justify-between hover:border-yellow-500/55 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(234,179,8,0.1)] shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer group">
              <div>
                <div className="mb-6">
                  {/* Custom Yellow Mini Makers Icon */}
                  <img src={minimakersIcon} alt="Mini Makers Icon" className="w-14 h-14 object-contain group-hover:scale-110 transition-transform select-none" />
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
                  {/* Custom Yellow Junior Innovators Icon */}
                  <img src={juniorinnovatorsIcon} alt="Junior Innovators Icon" className="w-14 h-14 object-contain group-hover:scale-110 transition-transform select-none" />
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
                  {/* Custom Yellow Young Engineers Icon */}
                  <img src={youngengineersIcon} alt="Young Engineers Icon" className="w-14 h-14 object-contain group-hover:scale-110 transition-transform select-none" />
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
                  {/* Custom Yellow Robo Minds Icon */}
                  <img src={robomindsIcon} alt="Robo Minds Icon" className="w-14 h-14 object-contain group-hover:scale-110 transition-transform select-none" />
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
