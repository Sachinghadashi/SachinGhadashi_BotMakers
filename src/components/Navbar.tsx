import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/botleaguelogo.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Events');

  const links = ['Events', 'Programs', 'Community', 'Ranks'];

  return (
    <nav className="border-b border-brand-border bg-brand-bg/90 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex items-center gap-2 cursor-pointer group">
              <img 
                src={logoImg} 
                alt="Bot League Logo" 
                className="h-10 sm:h-12 object-contain group-hover:scale-105 transition-transform duration-300 select-none"
              />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {links.map((link) => {
                const isActive = link === activeLink;
                return (
                  <button
                    key={link}
                    onClick={() => setActiveLink(link)}
                    className={`relative font-orbitron font-semibold text-base tracking-wide px-3 py-2 transition-all duration-300 ${
                      isActive 
                        ? 'text-white font-bold' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-red rounded-full shadow-[0_0_8px_#ff3c47]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 border border-white text-white font-orbitron font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-white hover:text-black transition-all duration-300">
              LOGIN
            </button>
            <button className="px-6 py-2 bg-brand-red text-white font-orbitron font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-brand-red-hover hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(255,60,71,0.2)]">
              REGISTER NOW
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-brand-border focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-bg border-b border-brand-border animate-in slide-in-from-top duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => {
              const isActive = link === activeLink;
              return (
                <button
                  key={link}
                  onClick={() => {
                    setActiveLink(link);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-3 rounded-md font-orbitron font-semibold text-base tracking-wide transition-colors ${
                    isActive
                      ? 'bg-brand-border text-white border-l-4 border-brand-red'
                      : 'text-gray-300 hover:bg-brand-border/50 hover:text-white'
                  }`}
                >
                  {link}
                </button>
              );
            })}
            <div className="pt-4 pb-2 border-t border-brand-border px-3 space-y-3">
              <button className="w-full py-2.5 border border-white text-white font-orbitron font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-white hover:text-black transition-all">
                LOGIN
              </button>
              <button className="w-full py-2.5 bg-brand-red text-white font-orbitron font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-brand-red-hover transition-all">
                REGISTER NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
