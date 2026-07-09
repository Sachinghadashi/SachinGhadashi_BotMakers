import React from 'react';
import heropicImg from '../assets/heropic.png';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-brand-bg min-h-[500px] lg:min-h-[600px] border-b border-brand-border flex items-center">
      {/* Background Image with dual gradient mask to blend into background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heropicImg}
          alt="Combat robots fighting in arena"
          className="w-full h-full object-cover object-center scale-105 select-none"
        />
        {/* Gradients to darken background for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/70 to-transparent md:w-[60%] w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-black/40" />
      </div>

      {/* Grid overlay for tech look */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

      {/* Live Badge Ticker - Positioned Top Right */}
      <div className="absolute top-8 right-4 sm:right-6 lg:right-12 z-20 flex items-center gap-2 bg-black/70 border border-brand-border px-4 py-2 rounded-lg backdrop-blur-md">
        <span className="flex h-2 w-2 relative shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
        </span>
        <span className="font-roboto text-xs md:text-sm tracking-wider font-bold flex items-center gap-1.5">
          <span className="text-brand-red">LIVE :</span>
          <span className="text-white">Episode 14 . Bengaluru Regionals</span>
        </span>
        <a 
          href="#live-stream" 
          className="font-roboto text-xs md:text-sm text-brand-red font-bold hover:underline ml-2"
        >
          WATCH LIVE
        </a>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-16 md:py-24">
        <div className="flex flex-col md:w-3/5 space-y-6">
          
          {/* Main Title Heading (Flat white, Orbitron, tracking-wider) */}
          <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-black tracking-wider text-white leading-none uppercase">
            INDIA'S ULTIMATE <br />
            ROBOTICS ARENA
          </h1>

          {/* Subtext Paragraph (Rajdhani, dot-separated, matching screenshot) */}
          <p className="font-rajdhani text-gray-300 text-lg md:text-xl font-medium tracking-wide leading-snug max-w-lg">
            Build.Compete.Rank.The National Ecosystem for Robotics Arena
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="px-8 py-3.5 bg-brand-red hover:bg-brand-red-hover text-white font-rajdhani font-bold text-base tracking-widest uppercase rounded-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,60,71,0.2)]">
              CREATE ACCOUNT
            </button>
            <button className="px-8 py-3.5 border border-gray-500 hover:border-white bg-black/20 hover:bg-white/10 text-white font-rajdhani font-bold text-base tracking-widest uppercase rounded-lg transition-all">
              EXPLORE EVENTS
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

