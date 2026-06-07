import React from 'react';
import { KEY_ACHIEVEMENTS } from '../data';
import { 
  Award, Compass, QrCode, Sparkles, Zap, ShieldCheck
} from 'lucide-react';

export default function FeaturesShowcase() {
  
  const getIcon = (idx: number, colorClass: string) => {
    switch (idx) {
      case 0: return <Compass className={colorClass} size={22} />;
      case 1: return <QrCode className={colorClass} size={22} />;
      case 2: return <Sparkles className={colorClass} size={22} />;
      case 3: return <Zap className={colorClass} size={22} />;
      case 4: return <ShieldCheck className={colorClass} size={22} />;
      default: return <Award className={colorClass} size={22} />;
    }
  };

  const colors = [
    'text-blue-400 group-hover:text-blue-300',
    'text-cyan-400 group-hover:text-cyan-300',
    'text-emerald-400 group-hover:text-emerald-300',
    'text-purple-400 group-hover:text-purple-300',
    'text-amber-400 group-hover:text-amber-300'
  ];

  return (
    <section id="key-achievements" className="relative py-24 bg-white dark:bg-navy-950 bg-grid-pattern">
      
      {/* Dynamic background lights */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-mono font-medium uppercase tracking-wider">
            <Award size={12} />
            KEY ACHIEVEMENTS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight">
            {KEY_ACHIEVEMENTS.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-sans">
            Our system is engineered to provide premium campus-wide positioning without relying on shaky global satellite setups. Discover what sets our spatial intelligence stack apart.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {KEY_ACHIEVEMENTS.achievements.map((achievement, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:border-cyan-500/30 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="flex justify-between items-start">
                  <div className="p-2 ml-0 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-white/10 shadow-inner">
                    {getIcon(idx, colors[idx % colors.length])}
                  </div>
                  <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest leading-none bg-slate-50 dark:bg-slate-950/40 px-1.5 py-0.5 rounded border border-slate-200 dark:border-white/5">
                    ACHIEVED
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-black dark:hover:text-white transition">
                    {achievement.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans min-h-[48px]">
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* Tag descriptor at bottom */}
              <div className="pt-4 mt-6 border-t border-slate-950 flex items-center font-mono text-[9px] text-slate-500 uppercase tracking-widest">
                <span>SEGMENT {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
