import React from 'react';
import { BracketView } from './BracketView';

export const EventsSection: React.FC = () => {
  return (
    <section className="bg-brand-bg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      
      {/* Main Section Heading */}
      <h2 className="font-orbitron text-2xl md:text-3xl font-extrabold tracking-widest text-white mb-12 select-none">
        COMPETITIONS & EVENTS
      </h2>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Column 1: LIVE NOW */}
        <div className="flex flex-col">
          <h3 className="font-orbitron font-bold text-xl tracking-wider text-brand-red mb-6 flex items-center gap-2">
            LIVE NOW
          </h3>
          
          <div className="bg-brand-card border border-brand-border rounded-lg p-6 flex flex-col flex-grow shadow-[0_4px_20px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:border-brand-red/30 transition-all duration-300">
            
            {/* Card Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-sans font-bold text-xl text-white">Bengaluru Regionals</h4>
                <p className="font-sans text-sm text-gray-400 mt-0.5">Lorem Ipsum</p>
              </div>
              <span className="px-3 py-1 bg-brand-red text-white text-[10px] font-sans font-bold rounded-full uppercase tracking-wider">
                Ongoing
              </span>
            </div>

            <hr className="border-brand-border mb-4" />

            {/* Bracket Bracket component */}
            <div className="flex-grow flex items-center justify-center">
              <BracketView />
            </div>
          </div>
        </div>

        {/* Column 2: UPCOMING */}
        <div className="flex flex-col">
          <h3 className="font-orbitron font-bold text-xl tracking-wider text-white mb-6">
            UPCOMING
          </h3>

          <div className="space-y-6 flex-grow flex flex-col justify-between">
            {/* Event 1: Mumbai */}
            <div className="bg-brand-card border border-brand-border rounded-lg p-6 flex flex-col justify-between hover:border-gray-700 transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
              <div>
                <h4 className="font-sans font-bold text-xl text-white group-hover:text-brand-red transition-colors">Event in Mumbai</h4>
                
                {/* Details list */}
                <div className="grid grid-cols-3 gap-4 my-6 border-t border-brand-border/40 pt-4">
                  <div>
                    <span className="block text-xs text-gray-400 font-bold font-sans">Date</span>
                    <span className="block text-sm font-medium text-gray-200 mt-1 font-sans">11/11/25</span>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 font-bold font-sans">Location</span>
                    <span className="block text-sm font-medium text-gray-200 mt-1 font-sans">BKC</span>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 font-bold font-sans">Category</span>
                    <span className="block text-sm font-medium text-gray-200 mt-1 font-sans">Lorem</span>
                  </div>
                </div>
              </div>

              <button className="w-full py-3 bg-brand-red hover:bg-brand-red-hover text-white font-orbitron font-bold text-sm tracking-wider uppercase rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(255,60,71,0.15)]">
                REGISTER
              </button>
            </div>

            {/* Event 2: Delhi */}
            <div className="bg-brand-card border border-brand-border rounded-lg p-6 flex flex-col justify-between hover:border-gray-700 transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
              <div>
                <h4 className="font-sans font-bold text-xl text-white group-hover:text-brand-red transition-colors">Event in Delhi</h4>
                
                {/* Details list */}
                <div className="grid grid-cols-3 gap-4 my-6 border-t border-brand-border/40 pt-4">
                  <div>
                    <span className="block text-xs text-gray-400 font-bold font-sans">Date</span>
                    <span className="block text-sm font-medium text-gray-200 mt-1 font-sans">11/11/25</span>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 font-bold font-sans">Location</span>
                    <span className="block text-sm font-medium text-gray-200 mt-1 font-sans">BKC</span>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 font-bold font-sans">Category</span>
                    <span className="block text-sm font-medium text-gray-200 mt-1 font-sans">Lorem</span>
                  </div>
                </div>
              </div>

              <button className="w-full py-3 bg-brand-red hover:bg-brand-red-hover text-white font-orbitron font-bold text-sm tracking-wider uppercase rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(255,60,71,0.15)]">
                REGISTER
              </button>
            </div>
          </div>
        </div>

        {/* Column 3: PAST RESULTS */}
        <div className="flex flex-col">
          <h3 className="font-orbitron font-bold text-xl tracking-wider text-white mb-6">
            PAST RESULTS
          </h3>

          <div className="bg-brand-card border border-brand-border rounded-lg p-6 flex-grow flex flex-col divide-y divide-brand-border shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            
            {/* Past Event 1 */}
            <div className="py-4 first:pt-0 last:pb-0 hover:pl-2 transition-all duration-300 group cursor-pointer">
              <h4 className="font-sans font-bold text-xl text-white group-hover:text-brand-red transition-colors">Bengaluru Regionals</h4>
              <p className="font-sans text-sm text-gray-400 mt-1">Lorem Ipsum</p>
            </div>

            {/* Past Event 2 */}
            <div className="py-4 first:pt-0 last:pb-0 hover:pl-2 transition-all duration-300 group cursor-pointer">
              <h4 className="font-sans font-bold text-xl text-white group-hover:text-brand-red transition-colors">Bengaluru Regionals</h4>
              <p className="font-sans text-sm text-gray-400 mt-1">Lorem Ipsum</p>
            </div>

            {/* Past Event 3 */}
            <div className="py-4 first:pt-0 last:pb-0 hover:pl-2 transition-all duration-300 group cursor-pointer">
              <h4 className="font-sans font-bold text-xl text-white group-hover:text-brand-red transition-colors">Bengaluru Regionals</h4>
              <p className="font-sans text-sm text-gray-400 mt-1">Lorem Ipsum</p>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};
