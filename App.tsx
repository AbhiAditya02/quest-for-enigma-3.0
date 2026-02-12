
import React, { useState, useEffect } from 'react';
import { Icons, ROUNDS, PERKS, CONTACTS, REGISTRATION_LINK } from './constants';
import LOGO_URL from './LOGO.PNG'

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen -mt-32 relative selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Structural Background */}
      <div className="fixed inset-0 -z-10 bg-slate-950">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        {/* Subtle cyan glows instead of massive blobs */}
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-blue-900/10 rounded-full blur-[120px]"></div>
      </div>


      {/* Hero Section */}
      <section className="relative pt-48 pb-24 md:pt-64 md:pb-40 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-sm mb-8 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan-400">The Quiz Returns</span>
          </div>
          
          <h1 className="font-tech text-4xl md:text-8xl font-black mb-6 tracking-tight leading-tight glow-cyan uppercase">
            Quest For <br/>
            <span className="text-cyan-400">Enigma 3.0</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-lg mb-12 uppercase tracking-widest leading-relaxed font-semibold">
            Unleash the geek within you <br className="md:hidden"/> ...like never before
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="p-6 glass border-l-4 border-l-cyan-500 text-left">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Primary Target</p>
              <p className="font-bold text-lg">10th & 12th February</p>
            </div>
            <div className="p-6 glass border-l-4 border-l-orange-500 text-left">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Location Data</p>
              <p className="font-bold text-lg">Room 1301 (CSE-CS)</p>
            </div>
            <div className="p-6 glass border-l-4 border-l-white text-left">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Access Status</p>
              <p className="font-bold text-lg text-cyan-400">Registration Free</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Perks */}
      <section id="about" className="py-24 px-6 border-y border-white/5 bg-slate-950/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {PERKS.map((perk, i) => (
              <div key={i} className="group p-10 bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                <div className="text-cyan-500 mb-8 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  {perk.icon === 'award' && <Icons.Award />}
                  {perk.icon === 'target' && <Icons.Target />}
                  {perk.icon === 'gift' && <Icons.Gift />}
                  {perk.icon === 'layers' && <Icons.Layers />}
                </div>
                <h3 className="font-tech text-sm font-bold mb-4 tracking-wider uppercase text-cyan-400">{perk.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="rounds" className="py-32 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
            <div className="max-w-xl">
              <h2 className="font-tech text-3xl md:text-5xl font-black mb-4 uppercase leading-none">Phase Protocol</h2>
              <p className="text-slate-500 text-sm tracking-widest uppercase">Structured Hybrid Format Timeline</p>
            </div>
            <div className="px-4 py-2 border border-cyan-500/30 rounded-sm">
              <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Active Challenge</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ROUNDS.map((round, i) => (
              <div key={i} className="group relative p-8 md:p-12 glass overflow-hidden hover:border-cyan-500/50 transition-all">
                <div className="absolute top-0 right-0 p-8 text-8xl font-black opacity-[0.03] select-none">0{i+1}</div>
                <div className="relative z-10">
                  <div className={`inline-block px-3 py-1 mb-6 text-[10px] font-bold uppercase tracking-widest ${round.type === 'Online' ? 'bg-cyan-500 text-slate-950' : 'bg-orange-600 text-white'}`}>
                    {round.type} Phase
                  </div>
                  <h3 className="text-3xl font-black mb-2 uppercase italic">{round.title}</h3>
                  <div className="flex flex-wrap gap-6 mb-8 mt-4 border-y border-white/5 py-4">
                    <div className="flex items-center gap-2">
                      <Icons.Calendar />
                      <span className="text-sm font-bold text-slate-400 italic">{round.date}</span>
                    </div>
                    {round.location && (
                      <div className="flex items-center gap-2">
                        <Icons.Target />
                        <span className="text-sm font-bold text-cyan-500 italic">{round.location}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Icons.Clock />
                      <span className="text-sm font-bold text-slate-400 italic">To be notified</span>
                    </div>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm font-medium italic">
                    {round.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration / QR Visual */}
      <section className="py-32 px-6 relative bg-slate-950/80">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="font-tech text-4xl md:text-7xl font-black mb-8 leading-none">ENROLL <br/> <span className="text-cyan-500">FOR FREE</span></h2>
              <p className="text-slate-400 text-lg mb-12 uppercase tracking-widest font-bold max-w-lg">
                Submit your entry now to earn MAR points and compete for glory.
              </p>
              <a 
                href={REGISTRATION_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tech inline-block px-12 py-6 bg-cyan-500 text-slate-950 font-black text-xl uppercase tracking-tighter hover:bg-white transition-all shadow-[0_20px_40px_rgba(6,182,212,0.2)]"
              >
                Register Online
              </a>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative p-4 glass border-2 border-cyan-500/40 w-full max-w-sm aspect-square flex flex-col items-center justify-center group">
                <div className="scanline"></div>
                {/* QR Placeholder Visual */}
                <div className="w-full h-full bg-white/[0.03] border border-white/10 flex items-center justify-center p-8">
                  <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full h-full opacity-40">
                    {Array.from({length: 16}).map((_, i) => (
                      <div key={i} className={`bg-cyan-500/50 ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-20'}`}></div>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-tech text-xs tracking-widest mb-2">Scan Mode Active</p>
                  <a href={REGISTRATION_LINK} target="_blank" className="text-cyan-400 underline font-bold">Open Link Directly</a>
                </div>
                <div className="absolute -bottom-4 bg-cyan-500 text-slate-950 px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em]">Scan Here</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section id="contact" className="py-24 px-6 border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-16">
            <div className="md:max-w-md">
              <h2 className="font-tech text-2xl font-black mb-8 uppercase tracking-tighter italic">Support Core</h2>
              <div className="space-y-4">
                {CONTACTS.map((c, i) => (
                  <div key={i} className="flex justify-between items-center p-4 border border-white/5 bg-white/[0.01] hover:border-white/10 transition-colors">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{c.name}</span>
                    <a href={`tel:${c.phone}`} className="mono text-sm text-cyan-400 hover:text-white transition-colors">{c.phone}</a>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col justify-end items-center md:items-end">
                <div className="flex gap-4 mb-12">
                  <a href="https://www.instagram.com/iste.hit.sc" target="_blank" className="w-12 h-12 glass flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all text-white">
                    <Icons.Instagram />
                  </a>
                  <a href="https://in.linkedin.com/company/iste-hit-sc" target="_blank" className="w-12 h-12 glass flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all text-white">
                    <Icons.Linkedin />
                  </a>
                  <a href="https://www.youtube.com/@ISTEHITSC" target="_blank" className="w-12 h-12 glass flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all text-white">
                    <Icons.Youtube />
                  </a>
                </div>
                <div className="flex items-center gap-4 border-l border-white/10 pl-8">
                  <div className="text-right">
                    <p className="font-tech text-xs font-bold leading-tight uppercase tracking-tighter">Indian Society For <br/> Technical Education</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">HIT Students' Chapter</p>
                  </div>
                   <div className="w-10 h-10 rounded-full bg-white p-1 overflow-hidden">
                    <img src={LOGO_URL} alt="ISTE Logo" className="w-full h-full object-cover"/>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Footer */}
      <footer className="py-12 px-6 text-center border-t border-white/5 bg-black">
        <div className="container mx-auto">
          <p className="text-slate-500 text-[10px] mono uppercase tracking-[0.2em]">
            &copy; 2026 ISTE HIT-SC // PROTOCOL_V3.0 // ALL_DATA_SECURED
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
