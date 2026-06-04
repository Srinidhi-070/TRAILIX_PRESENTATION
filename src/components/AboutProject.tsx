import React from 'react';
import { ABOUT_PROJECT } from '../data';
import { BookOpen, HelpCircle, Compass, Target } from 'lucide-react';

export default function AboutProject() {
  return (
    <section id="about" className="relative py-24 bg-white dark:bg-navy-950/70 border-t border-slate-200 dark:border-white/5 overflow-hidden">
      {/* Sleek Interface BG Highlights */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold w-fit shadow-md">
              <BookOpen size={14} className="text-cyan-400" />
              ABOUT THE PROJECT
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black dark:text-white leading-tight">
              {ABOUT_PROJECT.title}
            </h2>
            
            <div className="space-y-4 text-slate-700 dark:text-slate-300 font-sans text-sm md:text-base leading-relaxed">
              {ABOUT_PROJECT.description.split('\n\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
          
            {/* Right Visual Highlight Block */}
          <div className="lg:col-span-6 relative">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-gradient-to-br dark:from-blue-950/30 dark:to-slate-900/30 border border-slate-300 dark:border-white/10 relative overflow-hidden backdrop-blur-md">
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-cyan-500/10 dark:bg-cyan-400/15 rounded-full blur-3xl pointer-events-none"></div>
              
              <h3 className="text-xl font-bold text-black dark:text-white mb-6 text-left flex items-center gap-2">
                <Target size={20} className="text-cyan-600 dark:text-cyan-400" />
                Immersion & Direction Specs
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/5 flex gap-4 text-left shadow-sm dark:shadow-none">
                  <div className="p-2.5 h-10 w-10 text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center">
                    <Compass size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-black dark:text-white leading-none mb-1">Spatial Projection Layer</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Renders responsive pathway markers onto the actual physical space.</p>
                  </div>
                </div>
                
                <div className="p-4 rounded-2xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/5 flex gap-4 text-left shadow-sm dark:shadow-none">
                  <div className="p-2.5 h-10 w-10 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-black dark:text-white leading-none mb-1">Zero Blindspots</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">High-precision multi-floor route handovers across hallways and elevators.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 border-t border-slate-200 dark:border-white/5 pt-4 text-left">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">PROJECT SCOPE STATUS</span>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-400 rounded-full animate-ping"></span>
                  <span className="text-xs font-mono text-green-400 font-bold">READY FOR ON-CAMPUS DISPATCH TIER</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
