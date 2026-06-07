import React from 'react';
import { OUR_SOLUTION } from '../data';
import { 
  Compass, QrCode, GitPullRequest, Sparkles, Check, ArrowDown, Bot, Navigation, Layers, WifiOff
} from 'lucide-react';

export default function SolutionOverview() {
  
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass': return <Compass className="text-cyan-400 group-hover:scale-110 transition duration-300" size={24} />;
      case 'QrCode': return <QrCode className="text-blue-400 group-hover:scale-110 transition duration-300" size={24} />;
      case 'Waypoints': return <GitPullRequest className="text-emerald-400 group-hover:scale-110 transition duration-300" size={24} />;
      case 'Sparkles': return <Sparkles className="text-purple-400 group-hover:scale-110 transition duration-300" size={24} />;
      case 'Layers': return <Layers className="text-pink-400 group-hover:scale-110 transition duration-300" size={24} />;
      case 'WifiOff': return <WifiOff className="text-amber-400 group-hover:scale-110 transition duration-300" size={24} />;
      default: return <Navigation className="text-cyan-400" size={24} />;
    }
  };

  return (
    <section id="solution" className="relative py-24 bg-white dark:bg-navy-950 bg-grid-pattern">
      
      {/* Background glowing gradients offset */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header container */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-mono font-medium uppercase tracking-wider">
            <Bot size={12} className="animate-bounce" />
            Introducing the Solution
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight">
            {OUR_SOLUTION.title}
          </h2>
          <div className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-sans space-y-3">
            {OUR_SOLUTION.subtitle.split('\n\n').map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {/* Feature pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {OUR_SOLUTION.features.map((feature) => (
            <div 
              key={feature.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 hover:border-cyan-500/30 hover:bg-white dark:hover:bg-slate-900/80 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)] transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Icon wrapper */}
                <div className="w-11 h-11 ml-0 rounded-xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center border border-slate-300 dark:border-white/10 group-hover:border-slate-700/80 group-hover:bg-white dark:hover:bg-slate-900/60 shadow-lg shadow-black/40 transition duration-300">
                  {getIcon(feature.icon)}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-display font-bold text-black dark:text-white tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans min-h-[50px]">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Bottom tag indicator */}
              <div className="pt-4 mt-6 border-t border-slate-950/65 flex items-center justify-between text-[10px] font-mono select-none">
                <span className="text-slate-500 uppercase tracking-widest">{feature.category}</span>
                <span className="text-cyan-500 font-semibold group-hover:translate-x-1 transition-transform duration-200 flex items-center gap-1">
                  Active segment <Check size={11} />
                </span>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}
