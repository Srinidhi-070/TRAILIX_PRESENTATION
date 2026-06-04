import React from 'react';
import { ARCHITECTURE } from '../data';
import { 
  AppWindow, QrCode, Sliders, Milestone, MessageSquareCode, Server, Database, Eye,
  ArrowRight, ShieldAlert, Cpu
} from 'lucide-react';

export default function Architecture() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <AppWindow className="text-blue-400" size={20} />;
      case 1: return <QrCode className="text-cyan-400" size={20} />;
      case 2: return <Sliders className="text-emerald-400" size={20} />;
      case 3: return <Milestone className="text-amber-400" size={20} />;
      case 4: return <MessageSquareCode className="text-purple-400" size={20} />;
      case 5: return <Server className="text-pink-400" size={20} />;
      case 6: return <Database className="text-indigo-400" size={20} />;
      default: return <Eye className="text-sky-400" size={20} />;
    }
  };

  const badges = [
    'MOBILE AR APP', 'LOCALIZATION', 'CONTROLLER', 'PATH PATHFINDING',
    'AI CHAT INTEGRATION', 'FASTAPI SERVER', 'CAMPUS GRAPH DATA', 'IMMERSE AR VIZ'
  ];

  return (
    <section id="architecture" className="relative py-24 bg-navy-950 bg-grid-pattern">
      
      {/* Visual lighting background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-400/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header container */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-mono font-medium uppercase tracking-wider">
            <Cpu size={12} className="animate-pulse" />
            SYSTEM ARCHITECTURE
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {ARCHITECTURE.title}
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans max-w-xl mx-auto">
            {ARCHITECTURE.description}
          </p>
        </div>

        {/* Dynamic Connected Node Map Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {ARCHITECTURE.components.map((component, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/75 border border-white/5 hover:border-cyan-500/30 hover:bg-slate-900 shadow-xl transition-all duration-300 text-left flex flex-col justify-between h-[180px] relative group"
            >
              {/* Small step digit corner marker */}
              <span className="absolute top-3 right-4 text-[10px] font-mono text-slate-600">COMPONENT 0{idx + 1}</span>

              <div className="space-y-4">
                {/* Icon wrapper */}
                <div className="w-10 h-10 ml-0 rounded-lg bg-slate-950 flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-105 transition duration-150">
                  {getIcon(idx)}
                </div>

                <div className="space-y-1">
                  <div className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest leading-none">{badges[idx]}</div>
                  <h4 className="text-base font-bold text-slate-100 group-hover:text-white leading-tight">
                    {component}
                  </h4>
                </div>
              </div>

              {/* Bottom tier details */}
              <div className="text-[10px] text-slate-500 leading-normal border-t border-slate-950 mt-2 pt-2 flex items-center justify-between">
                <span>Optimized segment</span>
                <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
              </div>
            </div>
          ))}
        </div>

        {/* System architecture footer info */}
        <div className="mt-12 p-5 rounded-2xl bg-slate-900/40 border border-white/5 text-center text-slate-400 text-xs italic font-sans max-w-2xl mx-auto">
          "{ARCHITECTURE.footer}"
        </div>

      </div>
    </section>
  );
}
