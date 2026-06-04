import React from 'react';
import { FUTURE_SCOPE } from '../data';
import { 
  Lightbulb, Compass, Milestone, ArrowRight, ShieldCheck, HeartPulse, Plane, ShoppingBag, Landmark, Eye
} from 'lucide-react';

export default function FutureScope() {
  const getEnhancementIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Compass size={14} className="text-cyan-400" />;
      case 1: return <Milestone size={14} className="text-blue-400" />;
      case 2: return <HeartPulse size={14} className="text-emerald-400" />;
      case 3: return <Plane size={14} className="text-purple-400" />;
      default: return <Lightbulb size={14} className="text-pink-400" />;
    }
  };

  return (
    <section id="roadmap" className="relative py-24 bg-white dark:bg-navy-950/40 border-t border-slate-200 dark:border-white/5 overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header content section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-mono font-medium uppercase tracking-wider">
            <Lightbulb size={12} className="animate-pulse" />
            FUTURE SCOPE
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight">
            {FUTURE_SCOPE.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-sans max-w-xl mx-auto">
            {FUTURE_SCOPE.description}
          </p>
        </div>

        {/* 8 Plan Enhancements Grid */}
        <div className="space-y-3 mxl-auto max-w-4xl mb-16 text-left">
          <h3 className="text-[10px] font-mono font-bold text-slate-500 tracking-[0.25em] uppercase mb-4 pl-1">
            PLANNING ENHANCEMENTS TIMELINE
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {FUTURE_SCOPE.enhancements.map((enhancement, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 hover:border-cyan-500/20 hover:bg-white dark:bg-slate-900 transition-all duration-300 flex items-center gap-3 text-left group"
              >
                <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-300 dark:border-white/10 group-hover:scale-105 transition-transform">
                  {getEnhancementIcon(idx)}
                </div>
                <div>
                  <span className="text-[8px] font-mono text-slate-500 font-bold block leading-none mb-1">PHASE 0{idx + 1}</span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-black dark:text-white transition-colors block">
                    {enhancement}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Long term vision bento box callout */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 relative overflow-hidden text-left max-w-4xl mx-auto backdrop-blur-md">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono font-semibold text-cyan-400">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></span>
                LONG-TERM PROJECT ROADMAP VISION
              </div>
              
              <h4 className="text-xl md:text-2xl font-bold text-black dark:text-white tracking-tight leading-snug">
                Universal Indoor Navigation Framework
              </h4>
              
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {FUTURE_SCOPE.longTermVision}
              </p>
            </div>

            <div className="md:col-span-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 text-center flex flex-col justify-center items-center shadow-sm dark:shadow-none">
                <HeartPulse size={16} className="text-cyan-600 dark:text-cyan-400 mb-1" />
                <span className="text-[9px] font-mono text-slate-700 dark:text-slate-300">Hospitals</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 text-center flex flex-col justify-center items-center shadow-sm dark:shadow-none">
                <SpaceShipPlaceholder size={16} className="text-purple-600 dark:text-purple-400 mb-1" />
                <span className="text-[9px] font-mono text-slate-700 dark:text-slate-300">Airports</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 text-center flex flex-col justify-center items-center shadow-sm dark:shadow-none">
                <ShoppingBag size={16} className="text-emerald-600 dark:text-emerald-400 mb-1" />
                <span className="text-[9px] font-mono text-slate-700 dark:text-slate-300">Malls</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 text-center flex flex-col justify-center items-center shadow-sm dark:shadow-none">
                <Landmark size={16} className="text-indigo-600 dark:text-indigo-400 mb-1" />
                <span className="text-[9px] font-mono text-slate-700 dark:text-slate-300">Museums</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Low resource icons
function SpaceShipPlaceholder(props: any) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className} 
      style={{ width: props.size, height: props.size }}
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4.5 19.5 3c-1.5-1.5-3-1.5-4.5 0L11.5 6.5l-8.2-1.8c-1-.2-2 .3-2.3 1.3L1 6c-.3 1 .1 2 1.1 2.3l6.3 2.1-4.2 4.2c-.5.5-.5 1.3 0 1.8l2 2c.5.5 1.3.5 1.8 0l4.2-4.2 2.1 6.3c.3 1 1.3 1.4 2.3 1.1l.1-.1c1-.3 1.5-1.3 1.1-2.3z" />
    </svg>
  );
}
