import React, { useState } from 'react';
import nitdelhiImg from '../assets/nitdelhi.png';
import indianbitImg from '../assets/indianbit.png';
import nitsilcharImg from '../assets/nitsilchar.png';
import robocompanyImg from '../assets/robocompany.png';
import iitbImg from '../assets/iitb.png';
import roboImg from '../assets/robo.png';

export const FooterEcosystem: React.FC = () => {
  const [judgeForm, setJudgeForm] = useState({ name: '', location: '', enroll: '' });
  const [volunteerForm, setVolunteerForm] = useState({ name: '', location: '', enroll: '' });
  const [memberForm, setMemberForm] = useState({ name: '', location: '', enroll: '' });

  const handleJudgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Judge Application Submitted: ${JSON.stringify(judgeForm)}`);
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Volunteer Application Submitted: ${JSON.stringify(volunteerForm)}`);
  };

  const handleMemberSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Member Application Submitted: ${JSON.stringify(memberForm)}`);
  };

  return (
    <div className="bg-brand-bg border-t border-brand-border">
      
      {/* ========================================================================= */}
      {/* 1. JOIN THE ECOSYSTEM SECTION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        
        <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider text-white uppercase mb-12">
          JOIN THE ECOSYSTEM
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: BECOME A JUDGE */}
          <div className="bg-brand-card border border-brand-border rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-brand-red/35 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
            <h3 className="font-orbitron font-extrabold text-lg text-white tracking-wider uppercase mb-6 text-center">
              BECOME IN JUDGE
            </h3>
            <form onSubmit={handleJudgeSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={judgeForm.name}
                onChange={(e) => setJudgeForm({ ...judgeForm, name: e.target.value })}
                className="w-full bg-brand-bg/85 border border-brand-border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-red/60 transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Location"
                value={judgeForm.location}
                onChange={(e) => setJudgeForm({ ...judgeForm, location: e.target.value })}
                className="w-full bg-brand-bg/85 border border-brand-border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-red/60 transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Enroll"
                value={judgeForm.enroll}
                onChange={(e) => setJudgeForm({ ...judgeForm, enroll: e.target.value })}
                className="w-full bg-brand-bg/85 border border-brand-border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-red/60 transition-colors"
                required
              />
              <button type="submit" className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-roboto font-bold py-3 rounded-lg tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(255,60,71,0.2)] mt-2">
                SIGN UP
              </button>
            </form>
          </div>

          {/* Card 2: VOLUNTEER */}
          <div className="bg-brand-card border border-brand-border rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-brand-red/35 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
            <h3 className="font-orbitron font-extrabold text-lg text-white tracking-wider uppercase mb-6 text-center">
              VOLUNTEER
            </h3>
            <form onSubmit={handleVolunteerSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={volunteerForm.name}
                onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                className="w-full bg-brand-bg/85 border border-brand-border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-red/60 transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Location"
                value={volunteerForm.location}
                onChange={(e) => setVolunteerForm({ ...volunteerForm, location: e.target.value })}
                className="w-full bg-brand-bg/85 border border-brand-border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-red/60 transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Enroll"
                value={volunteerForm.enroll}
                onChange={(e) => setVolunteerForm({ ...volunteerForm, enroll: e.target.value })}
                className="w-full bg-brand-bg/85 border border-brand-border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-red/60 transition-colors"
                required
              />
              <button type="submit" className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-roboto font-bold py-3 rounded-lg tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(255,60,71,0.2)] mt-2">
                SIGN UP
              </button>
            </form>
          </div>

          {/* Card 3: COMMUNITY MEMBER */}
          <div className="bg-brand-card border border-brand-border rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-brand-red/35 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
            <h3 className="font-orbitron font-extrabold text-lg text-white tracking-wider uppercase mb-6 text-center">
              COMMUNITY MEMBER
            </h3>
            <form onSubmit={handleMemberSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={memberForm.name}
                onChange={(e) => setMemberForm({ ...memberForm, name: e.target.value })}
                className="w-full bg-brand-bg/85 border border-brand-border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-red/60 transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Location"
                value={memberForm.location}
                onChange={(e) => setMemberForm({ ...memberForm, location: e.target.value })}
                className="w-full bg-brand-bg/85 border border-brand-border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-red/60 transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Enroll"
                value={memberForm.enroll}
                onChange={(e) => setMemberForm({ ...memberForm, enroll: e.target.value })}
                className="w-full bg-brand-bg/85 border border-brand-border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-red/60 transition-colors"
                required
              />
              <button type="submit" className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-roboto font-bold py-3 rounded-lg tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(255,60,71,0.2)] mt-2">
                SIGN UP
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SPONSORS SECTION */}
      {/* ========================================================================= */}
      <section className="border-t border-brand-border/40 py-16 md:py-20 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="font-orbitron text-lg sm:text-xl font-bold tracking-wider text-white uppercase mb-10 select-none">
            SPONSORS
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8 items-center justify-items-center">
            
            {/* Sponsor 1: NIT Delhi */}
            <div className="flex items-center gap-3 grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src={nitdelhiImg} alt="NIT Delhi Logo" className="h-10 object-contain" />
              <span className="font-roboto font-bold text-sm tracking-wider text-gray-300 uppercase">NIT DELHI</span>
            </div>

            {/* Sponsor 2: Indian Bit */}
            <div className="flex items-center gap-3 grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src={indianbitImg} alt="Indian Bit Logo" className="h-10 object-contain" />
              <span className="font-roboto font-bold text-sm tracking-wider text-gray-300 uppercase">INDIAN BIT</span>
            </div>

            {/* Sponsor 3: NIT Silchar */}
            <div className="flex items-center gap-3 grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src={nitsilcharImg} alt="NIT Silchar Logo" className="h-10 object-contain" />
              <span className="font-roboto font-bold text-sm tracking-wider text-gray-300 uppercase">NIT SILCHAR</span>
            </div>

            {/* Sponsor 4: Delhivery / Robo Company */}
            <div className="flex items-center gap-3 grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src={robocompanyImg} alt="Delhivery Logo" className="h-6 object-contain" />
              <span className="font-roboto font-bold text-sm tracking-wider text-gray-300 uppercase">ROBO COMPANY</span>
            </div>

            {/* Sponsor 5: IIT Bombay */}
            <div className="flex items-center gap-3 grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src={iitbImg} alt="IIT Bombay Logo" className="h-10 object-contain" />
              <span className="font-roboto font-bold text-sm tracking-wider text-gray-300 uppercase">IIT BOMBAY</span>
            </div>

            {/* Sponsor 6: General Robotics / Robo Company */}
            <div className="flex items-center gap-3 grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src={roboImg} alt="General Robotics Logo" className="h-8 object-contain" />
              <span className="font-roboto font-bold text-sm tracking-wider text-gray-300 uppercase">ROBO COMPANY</span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. RICH FOOTER LINKS SECTION */}
      {/* ========================================================================= */}
      <footer className="border-t border-brand-border py-16 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Quick Links Column */}
            <div className="md:col-span-8">
              <h3 className="font-roboto font-bold text-sm tracking-wider text-white uppercase mb-6">
                QUICK LINKS
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                
                {/* Col 1 */}
                <div className="flex flex-col space-y-3">
                  <a href="#arena" className="font-roboto text-sm text-gray-400 hover:text-brand-red transition-colors w-fit">
                    The Arena
                  </a>
                  <a href="#episodes" className="font-roboto text-sm text-gray-400 hover:text-brand-red transition-colors w-fit">
                    Episodes
                  </a>
                  <a href="#rankings" className="font-roboto text-sm text-gray-400 hover:text-brand-red transition-colors w-fit">
                    National Rankings
                  </a>
                  <a href="#programs" className="font-roboto text-sm text-gray-400 hover:text-brand-red transition-colors w-fit">
                    Programs
                  </a>
                  <a href="#rulebooks" className="font-roboto text-sm text-gray-400 hover:text-brand-red transition-colors w-fit">
                    Rulebooks
                  </a>
                </div>

                {/* Col 2 */}
                <div className="flex flex-col space-y-3">
                  <a href="#join-team" className="font-roboto text-sm text-gray-400 hover:text-brand-red transition-colors w-fit">
                    Join the Team
                  </a>
                  <a href="#sponsorships" className="font-roboto text-sm text-gray-400 hover:text-brand-red transition-colors w-fit">
                    Sponsorships
                  </a>
                  <a href="#help-center" className="font-roboto text-sm text-gray-400 hover:text-brand-red transition-colors w-fit">
                    Help Center
                  </a>
                  <a href="#contact" className="font-roboto text-sm text-gray-400 hover:text-brand-red transition-colors w-fit">
                    Contact Us
                  </a>
                  <a href="#legal" className="font-roboto text-sm text-gray-400 hover:text-brand-red transition-colors w-fit">
                    Legal
                  </a>
                </div>

              </div>
            </div>

            {/* Social Media Column */}
            <div className="md:col-span-4 md:text-right">
              <h3 className="font-roboto font-bold text-sm tracking-wider text-white uppercase mb-6 md:text-right">
                SOCIAL MEDIA
              </h3>
              
              <div className="flex items-center gap-5 md:justify-end">
                {/* YouTube */}
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-gray-400 hover:text-brand-red hover:border-brand-red/50 hover:bg-brand-red/5 transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.002 3.002 0 0 0-2.11 2.107C0 8.053 0 12 0 12s0 3.947.502 5.837a3.003 3.003 0 0 0 2.11 2.107C4.495 20.455 12 20.455 12 20.455s7.505 0 9.388-.511a3.002 3.002 0 0 0 2.11-2.107C24 15.947 24 12 24 12s0-3.947-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                
                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-gray-400 hover:text-brand-red hover:border-brand-red/50 hover:bg-brand-red/5 transition-all">
                  <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
                  </svg>
                </a>

                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-gray-400 hover:text-brand-red hover:border-brand-red/50 hover:bg-brand-red/5 transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V1H13a5 5 0 0 0-5 5v2z" />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-gray-400 hover:text-brand-red hover:border-brand-red/50 hover:bg-brand-red/5 transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>

            </div>

          </div>          

        </div>
      </footer>

    </div>
  );
};
