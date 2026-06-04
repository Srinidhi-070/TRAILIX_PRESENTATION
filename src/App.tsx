/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutProject from './components/AboutProject';
import ProblemStatement from './components/ProblemStatement';
import SolutionOverview from './components/SolutionOverview';
import SystemWorkflow from './components/SystemWorkflow';
import FeaturesShowcase from './components/FeaturesShowcase';
import TechStack from './components/TechStack';
import Architecture from './components/Architecture';
import PerformanceMetrics from './components/PerformanceMetrics';
import ResultsGallery from './components/ResultsGallery';
import TeamSection from './components/TeamSection';
import FutureScope from './components/FutureScope';
import Footer from './components/Footer';
import { Play, Pause } from 'lucide-react';

export default function App() {
  const [autoScroll, setAutoScroll] = useState(false);

  // Custom document visual scroll actions or telemetry console logs
  useEffect(() => {
    console.log("%cTRAILIX Spatial Engine Core initialized.", "color: #1BC8C8; font-weight: bold; font-size: 14px;");
    console.log("%cM. S. Ramaiah Institute of Technology - Department of AI & DS", "color: #0A5CC4;");
  }, []);

  // Continuous animated auto-scroll logic
  useEffect(() => {
    let animationFrameId: number;
    
    const smoothScroll = () => {
      // Scroll by 1.5 pixels per frame (~90px per second)
      window.scrollBy({ top: 1.5, left: 0 });
      
      // Check if we hit the bottom of the page
      if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
        // Loop back to the top instantly
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
      
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    if (autoScroll) {
      // Temporarily disable scroll snapping so it doesn't fight the continuous animation
      document.documentElement.style.scrollSnapType = 'none';
      animationFrameId = requestAnimationFrame(smoothScroll);
    } else {
      // Restore native scroll snapping
      document.documentElement.style.scrollSnapType = '';
    }
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      document.documentElement.style.scrollSnapType = '';
    };
  }, [autoScroll]);

  return (
    <div id="trailix-root" className="min-h-screen bg-white text-black dark:bg-navy-950 dark:text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-white antialiased transition-colors duration-300">
      
      {/* Decorative global ambient static nodes behind */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden dark:block">
        <div className="absolute top-[15%] left-[10%] w-[450px] h-[450px] bg-electric/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[150px]"></div>
      </div>

      {/* Persistent global Navigation bar */}
      <Header />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <AboutProject />
        <ProblemStatement />
        <SolutionOverview />
        <SystemWorkflow />
        <FeaturesShowcase />
        <TechStack />
        <Architecture />
        <PerformanceMetrics />
        <ResultsGallery />
        <TeamSection />
        <FutureScope />
      </main>

      <Footer />

      {/* Theme Toggle Floating Action Button */}
      <button
        onClick={() => {
          const root = window.document.documentElement;
          const isDark = root.classList.contains('dark');
          const newTheme = isDark ? 'light' : 'dark';
          root.classList.remove('light', 'dark');
          root.classList.add(newTheme);
          localStorage.setItem('trailix-ui-theme', newTheme);
          // Dispatch a custom event so ThemeProvider syncs if needed
          window.dispatchEvent(new Event('storage'));
        }}
        className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 p-4 rounded-full shadow-lg dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group border-2 bg-slate-100/80 border-slate-300/50 text-slate-700 hover:bg-slate-200/80 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:bg-slate-800/80 dark:border-slate-700/50 dark:text-slate-300 dark:hover:bg-slate-700/80 dark:shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-xl cursor-pointer"
        title="Toggle Light/Dark Theme"
      >
        <span className="hidden dark:block"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg></span>
        <span className="block dark:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg></span>
        <span className="text-[10px] sm:text-xs font-bold font-mono tracking-widest max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-500 ease-in-out whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:ml-1">
          <span className="hidden dark:inline">LIGHT MODE</span>
          <span className="inline dark:hidden">DARK MODE</span>
        </span>
      </button>

      {/* Auto-Scroll Floating Action Button */}
      <button
        onClick={() => setAutoScroll(!autoScroll)}
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-4 rounded-full shadow-lg dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group border-2 ${
          autoScroll 
            ? 'bg-rose-500/10 border-rose-500/50 text-rose-600 hover:bg-rose-500/20 shadow-[0_0_20px_rgba(244,63,94,0.3)] dark:text-rose-400' 
            : 'bg-cyan-500/10 border-cyan-500/50 text-cyan-700 hover:bg-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.3)] dark:text-cyan-400'
        } backdrop-blur-xl cursor-pointer bg-white/50 dark:bg-transparent`}
        title={autoScroll ? "Stop Presentation" : "Start Auto Presentation"}
      >
        {autoScroll ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
        <span className="text-[10px] sm:text-xs font-bold font-mono tracking-widest max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-500 ease-in-out whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:ml-1">
          {autoScroll ? 'STOP AUTO' : 'AUTO PLAY'}
        </span>
      </button>

    </div>
  );
}
