import React from 'react';
import { PROBLEM_STATEMENT, LATENCY_STATS } from '../data';
import { 
  MapPinOff, Clock, Layers, AlertTriangle, ShieldAlert, NavigationOff, Orbit, Building2
} from 'lucide-react';

export default function ProblemStatement() {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPinOff': return <MapPinOff className="text-rose-500" size={24} />;
      case 'Clock': return <Clock className="text-amber-500" size={24} />;
      case 'Layers': return <Layers className="text-sky-500" size={24} />;
      default: return <AlertTriangle className="text-rose-500" size={24} />;
    }
  };

  return (
    <section id="problem" className="relative py-24 bg-white dark:bg-navy-950/40 border-t border-slate-200 dark:border-white/5 overflow-hidden">
      
      {/* Decorative vertical pathway line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-rose-500/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        
        {/* Header container */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-full text-xs font-mono font-medium uppercase tracking-wider">
            <ShieldAlert size={12} />
            The Spatial Challenge
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight">
            {PROBLEM_STATEMENT.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            {PROBLEM_STATEMENT.subtitle}
          </p>
        </div>

        {/* Core breakdown row: Text points + Visual Satellite block illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Failure metrics text breakdown */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="text-xl font-mono text-cyan-400 tracking-[0.2em] uppercase font-bold text-xs">
              Common Challenges
            </h3>
            
            <div className="space-y-4 font-sans text-sm text-slate-600 dark:text-slate-400">
              {PROBLEM_STATEMENT.challenges.map((challenge, idx) => (
                <div key={challenge.id} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-400 flex items-center justify-center font-bold text-[10px] border border-rose-900/30 flex-shrink-0 mt-0.5 font-mono">
                    {idx + 1}
                  </div>
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">{challenge.title}</strong>
                    <span className="text-xs text-slate-600 dark:text-slate-400 leading-normal">{challenge.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Failure block illustration diagram */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/5 relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-2 right-2 text-[9px] font-mono text-rose-500 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded border border-rose-900/20">
                LINE-OF-SIGHT BLOCKED
              </div>
              
              <h4 className="text-xs font-mono font-bold text-slate-505 text-slate-600 dark:text-slate-400 text-left mb-6 uppercase tracking-wider">
                Legacies GPS Signal Loss Mechanism
              </h4>

              {/* Vector diagram showing Satellites bouncing off concrete block */}
              <div className="h-[200px] relative border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 pointer-events-none bg-dots opacity-30"></div>
                
                {/* SVG Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="sat-line" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  
                  {/* Satellites */}
                  <line x1="20%" y1="5%" x2="50%" y2="45%" stroke="url(#sat-line)" strokeWidth="1.5" strokeDasharray="3,3" />
                  <line x1="80%" y1="5%" x2="50%" y2="45%" stroke="url(#sat-line)" strokeWidth="1.5" strokeDasharray="3,3" />
                  
                  {/* Scattered waves */}
                  <path d="M 50,45 L 35,55 L 20,70" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" />
                  <path d="M 50,45 L 65,55 L 80,72" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" />
                </svg>

                {/* Satellite Nodes */}
                <div className="absolute top-3 left-[15%] flex flex-col items-center">
                  <Orbit className="text-rose-500 animate-[spin_10s_linear__infinite]" size={20} />
                  <span className="text-[7px] font-mono text-slate-500 mt-1">SATELLITE_A</span>
                </div>
                <div className="absolute top-3 right-[15%] flex flex-col items-center">
                  <Orbit className="text-rose-500" size={20} />
                  <span className="text-[7px] font-mono text-slate-500 mt-1">SATELLITE_B</span>
                </div>

                {/* Heavy concrete block */}
                <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-44 p-2 bg-white dark:bg-slate-900 border border-slate-700/60 rounded-lg text-center shadow-lg">
                  <Building2 size={16} className="text-slate-600 dark:text-slate-400 mx-auto mb-1 animate-pulse" />
                  <div className="text-[9px] font-mono font-medium text-slate-800 dark:text-slate-200">MSRIT Apex Block Roof</div>
                  <div className="text-[7px] font-mono text-rose-400 uppercase mt-0.5 tracking-wider">Attenuation: -45dB</div>
                </div>

                {/* Scattered phone position at bottom */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center">
                  <NavigationOff size={16} className="text-rose-500 mx-auto mb-1" />
                  <div className="text-[8px] font-mono text-rose-400 font-bold">Uncertainty Loop: ±18.4m</div>
                </div>

              </div>
              
              <p className="text-[10px] text-slate-500 mt-4 text-left leading-relaxed font-sans">
                Conventional GPS works perfectly outdoors, but loses line-of-sight inside. Standard signals scatter of heavy roofing grids, producing severe radial drifts.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom indicator text */}
        <div className="text-center py-4 text-slate-600 dark:text-slate-400 text-sm italic font-sans mb-8 border-t border-b border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/10">
          "{PROBLEM_STATEMENT.footer}"
        </div>

        {/* Stats card grid displaying values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LATENCY_STATS.map((stat) => (
            <div 
              key={stat.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 hover:border-cyan-500/30 transition duration-300 flex flex-col justify-between text-left relative overflow-hidden group"
            >
              {/* Corner radial glow highlights */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"></div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="p-2 ml-0 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-white/10">
                    {getIcon(stat.icon)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-none">LEGACY INEFFICIENCY</span>
                </div>
                
                <div className="space-y-1">
                  <div className="text-3xl font-display font-bold text-black dark:text-white tracking-tight group-hover:text-rose-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 font-display">
                    {stat.label}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-950 text-[11px] text-slate-500 italic leading-relaxed">
                {stat.change}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
