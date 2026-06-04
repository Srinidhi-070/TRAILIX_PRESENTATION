import React from 'react';
import { Github, Linkedin, Mail, Landmark, BookOpen, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-16 relative overflow-hidden bg-dots">
      
      {/* Decorative vertical pathway line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-slate-900 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Col 1: Branding block */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center font-black text-white text-base shadow-lg shadow-cyan-950/20">
                T
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white tracking-widest leading-none">TRAILIX</span>
                <span className="text-[9px] font-mono font-medium text-slate-500 tracking-wider mt-0.5 leading-none">SPATIAL INTEL</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-sm">
              Empowering Smart Campus Navigation Through Augmented Reality and Spatial Intelligence. Trailix provides a high-level on-campus navigation flow bypassing traditional satellite limitations.
            </p>
          </div>

          {/* Col 2: Academic Institution credits block */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
              INSTITUTION & DEPARTMENT
            </h4>
            <div className="space-y-1.5 font-sans text-xs text-slate-300">
              <div className="flex gap-2 items-center">
                <Landmark size={12} className="text-cyan-400 flex-shrink-0" />
                <span>M. S. Ramaiah Institute of Technology, Bengaluru</span>
              </div>
              <div className="flex gap-2 items-center">
                <BookOpen size={12} className="text-blue-400 flex-shrink-0" />
                <span>Department of Artificial Intelligence and Data Science</span>
              </div>
            </div>
            <div className="pt-2 text-[10px] font-mono text-slate-500">
              MSRIT AD Smart Campus Project Initiative
            </div>
          </div>

          {/* Col 3: Quick contacts or administrative guides */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
              PROJECT LEADERSHIP
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              <div>
                <span className="text-[9px] font-mono text-cyan-400 block tracking-wider leading-none uppercase">PROJECT GUIDE</span>
                <strong className="text-slate-200 block text-xs mt-0.5">Dr. Vaneeta M</strong>
              </div>
              <div className="flex gap-3 pt-2">
                <a 
                  href="#"
                  className="p-1.5 rounded bg-slate-900 border border-white/5 hover:text-white transition cursor-pointer"
                >
                  <Mail size={12} />
                </a>
                <a 
                  href="https://github.com/trailix" 
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded bg-slate-900 border border-white/5 hover:text-white transition cursor-pointer"
                >
                  <Github size={12} />
                </a>
                <a 
                  href="#"
                  className="p-1.5 rounded bg-slate-900 border border-white/5 hover:text-white transition cursor-pointer"
                >
                  <Linkedin size={12} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Outer bottom copyright sector */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-slate-500 select-none">
          <div className="flex items-center gap-1.5 font-mono">
            <span>© 2026 TRAILIX. Developed for MSRIT academic requirements.</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Designed with</span>
            <Heart size={10} className="text-rose-500 fill-rose-500 animate-pulse" />
            <span>at Ramaiah AI & DS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
