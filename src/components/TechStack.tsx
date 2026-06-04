import React, { useState } from 'react';
import { TECH_STACK } from '../data';
import { 
  Laptop, Server, GitBranch, Shield, Hexagon
} from 'lucide-react';

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'algorithms'>('all');

  const tabs = [
    { id: 'all', label: 'All Components', icon: <Hexagon size={13} /> },
    { id: 'frontend', label: 'Frontend', icon: <Laptop size={13} /> },
    { id: 'backend', label: 'Backend', icon: <Server size={13} /> },
    { id: 'algorithms', label: 'Core Algorithms', icon: <GitBranch size={13} /> }
  ] as const;

  const filteredStack = TECH_STACK.filter(item => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="tech" className="relative py-24 bg-navy-950/40 border-t border-white/5 overflow-hidden">
      
      {/* Background light shapes */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header content section */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-mono font-medium uppercase tracking-wider">
            <Shield size={12} />
            Unified Tech Grid
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Built with Modern Technologies
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans">
            Engineered using industry-standard high-performance frameworks and development tools. Toggle categories to inspect individual stack layers.
          </p>
        </div>

        {/* Tab switcher navigation bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 pb-2 border-b border-white/5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all duration-200 inline-flex items-center gap-2 border cursor-pointer ${
                activeTab === tab.id 
                  ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-400 shadow-lg shadow-cyan-950/45' 
                  : 'bg-transparent border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Technology cards display grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStack.map((tech) => (
            <div 
              key={tech.name}
              className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-slate-705 transition-all duration-300 text-left flex flex-col justify-between group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none ${
                tech.variant === 'cyan' ? 'bg-cyan-500/5' : 
                tech.variant === 'electric' ? 'bg-blue-500/5' : 'bg-slate-500/5'
              }`}></div>

              <div className="space-y-4">
                {/* Logo emblem */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-extrabold text-xs border shadow-md select-none ${
                  tech.variant === 'cyan' 
                    ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' 
                    : tech.variant === 'electric' 
                      ? 'bg-blue-600/10 border-blue-500/30 text-blue-400' 
                      : 'bg-slate-950 border-slate-800 text-slate-300'
                }`}>
                  {tech.logoText}
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {tech.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans min-h-[48px]">
                    {tech.description}
                  </p>
                </div>
              </div>

              {/* Bottom tier details */}
              <div className="pt-3 mt-4 border-t border-slate-950 flex items-center justify-between text-[9px] font-mono select-none">
                <span className="text-slate-500 uppercase tracking-wider">Module tier</span>
                <span className={`px-1.5 py-0.5 rounded-full border text-[8px] uppercase tracking-widest font-bold ${
                  tech.category === 'frontend' ? 'bg-pink-950/30 text-pink-400 border-pink-900/20' : 
                  tech.category === 'backend' ? 'bg-indigo-950/30 text-indigo-400 border-indigo-900/20' : 
                  'bg-amber-950/30 text-amber-400 border-amber-900/20'
                }`}>
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
