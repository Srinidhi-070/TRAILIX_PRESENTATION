import React from 'react';
import { PERFORMANCE_RESULTS } from '../data';
import { 
  Gauge, CheckCircle, Zap, Activity, ShieldCheck, Cpu, Battery, Info
} from 'lucide-react';

export default function PerformanceMetrics() {
  
  const getIcon = (id: string) => {
    const cls = "text-inherit";
    switch (id) {
      case 'p1': return <CheckCircle className={cls} size={18} />;
      case 'p2': return <Zap className={cls} size={18} />;
      case 'p3': return <Activity className={cls} size={18} />;
      case 'p4': return <ShieldCheck className={cls} size={18} />;
      case 'p5': return <Cpu className={cls} size={18} />;
      case 'p6': return <Battery className={cls} size={18} />;
      default: return <Gauge className={cls} size={18} />;
    }
  };

  const ringColors = [
    'stroke-cyan-400',
    'stroke-emerald-400',
    'stroke-purple-400',
    'stroke-pink-400',
    'stroke-amber-400',
    'stroke-blue-400'
  ];

  const fillPercentages = [95.5, 80, 100, 96, 45, 15]; // Visual mapping for circles

  return (
    <section id="metrics" className="relative py-24 bg-navy-950/40 border-t border-white/5 overflow-hidden">
      
      {/* Absolute glow bulbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header summary */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-mono font-medium uppercase tracking-wider">
            <Gauge size={12} className="animate-spin" style={{ animationDuration: '6s' }} />
            PERFORMANCE RESULTS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {PERFORMANCE_RESULTS.title}
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            {PERFORMANCE_RESULTS.description}
          </p>
        </div>

        {/* Dashboard Grid list of Performance parameters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PERFORMANCE_RESULTS.metrics.map((metric, idx) => {
            const visualPercent = fillPercentages[idx];
            const radius = 34;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (visualPercent / 100) * circumference;

            return (
              <div 
                key={metric.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 hover:bg-slate-900 transition-all duration-300 text-left flex flex-col justify-between group h-[240px] relative overflow-hidden"
              >
                
                {/* Upper line metadata */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-slate-705 border border-white/5 shadow-inner transition duration-300">
                      {getIcon(metric.id)}
                    </div>
                    <div>
                      <span className="text-[8px] font-mono font-bold text-slate-500 tracking-wider block">TELEMETRY</span>
                      <h4 className="text-xs font-bold text-slate-300 group-hover:text-white leading-tight">
                        {metric.label}
                      </h4>
                    </div>
                  </div>

                  {/* Circular visual gauge using SVGs */}
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle 
                        cx="24" 
                        cy="24" 
                        r={radius} 
                        fill="none" 
                        className="stroke-slate-950" 
                        strokeWidth="3.5" 
                      />
                      <circle 
                        cx="24" 
                        cy="24" 
                        r={radius} 
                        fill="none" 
                        className={`transition-all duration-1000 ${ringColors[idx % ringColors.length]}`}
                        strokeWidth="3.5" 
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-[8px] font-mono text-slate-500 font-bold">
                      {visualPercent}%
                    </div>
                  </div>
                </div>

                {/* Massive digital readout display row */}
                <div className="my-3 space-y-0.5">
                  <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight flex items-baseline gap-1 select-none">
                    {metric.value}
                    {metric.unit && (
                      <span className="text-lg font-mono font-medium text-slate-400">{metric.unit}</span>
                    )}
                  </div>
                </div>

                {/* Footnote details */}
                <div className="text-[10px] text-slate-400 font-sans leading-relaxed border-t border-slate-950 pt-3 mt-1.5 min-h-[40px]">
                  {metric.details}
                </div>

              </div>
            );
          })}
        </div>

        {/* Informative technical validation footnote card */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 text-left flex gap-3 items-center">
          <Info size={16} className="text-cyan-400 flex-shrink-0" />
          <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-2">
            <span className="text-xs font-sans text-slate-300">
              "{PERFORMANCE_RESULTS.footer}"
            </span>
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block bg-slate-950 px-2 py-1 rounded border border-white/5 whitespace-nowrap">
              STRESS TEST AUDITED G-STABLE
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
