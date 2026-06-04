/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutProject from './components/AboutProject';
import ProblemStatement from './components/ProblemStatement';
import SolutionOverview from './components/SolutionOverview';
import SystemWorkflow from './components/SystemWorkflow';
import InteractiveSimulator from './components/InteractiveSimulator';
import FeaturesShowcase from './components/FeaturesShowcase';
import TechStack from './components/TechStack';
import Architecture from './components/Architecture';
import PerformanceMetrics from './components/PerformanceMetrics';
import ResultsGallery from './components/ResultsGallery';
import RealWorldDemo from './components/RealWorldDemo';
import TeamSection from './components/TeamSection';
import FutureScope from './components/FutureScope';
import Footer from './components/Footer';
import { Sparkles, Terminal, Smartphone } from 'lucide-react';

export default function App() {
  
  // Custom document visual scroll actions or telemetry console logs
  useEffect(() => {
    console.log("%cTRAILIX Spatial Engine Core initialized.", "color: #1BC8C8; font-weight: bold; font-size: 14px;");
    console.log("%cM. S. Ramaiah Institute of Technology - Department of AI & DS", "color: #0A5CC4;");
  }, []);

  return (
    <div id="trailix-root" className="min-h-screen bg-navy-950 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-white overflow-x-hidden antialiased">
      
      {/* Decorative global ambient static nodes behind */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[15%] left-[10%] w-[450px] h-[450px] bg-electric/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[150px]"></div>
      </div>

      {/* Persistent global Navigation bar */}
      <Header />

      {/* Main Sections */}
      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <Hero />

        {/* ABOUT THE PROJECT */}
        <AboutProject />

        {/* PROBLEM STATEMENT SECTION */}
        <ProblemStatement />

        {/* SOLUTION BLOCK PILLARS */}
        <SolutionOverview />

        {/* SYSTEM WORKFLOW DATA PIPELINE */}
        <SystemWorkflow />

        {/* CORE INTERACTIVE SANDBOX EXPERIMENTAL SUITE */}
        <section id="demo" className="py-24 border-t border-slate-900 bg-navy-950 relative overflow-hidden">
          {/* Inner radial mesh light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-[140px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            
            {/* Header description */}
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-mono font-medium uppercase tracking-wider">
                <Smartphone size={12} className="animate-pulse" />
                Interactive Campus Simulator
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                Interactive Campus Simulation
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Take the device below for a test run. Walk through the active coordinates generation, run real A* path segments calculations, and explore the immersive holographic AR viewport directly inside your browser!
              </p>
            </div>

            {/* Mount Sim block */}
            <InteractiveSimulator />

          </div>
        </section>

        {/* DETAILED FEATURES LISTING Spectrum */}
        <FeaturesShowcase />

        {/* INTERACTIVE TECH COMPONENT GRID */}
        <TechStack />

        {/* COMPREHENSIVE ARCHITECTURE DIAGRAM */}
        <Architecture />

        {/* KEY PERFORMANCE telemetry INDICATORS */}
        <PerformanceMetrics />

        {/* RESULTS SCREEN GALLERY */}
        <ResultsGallery />

        {/* REAL-WORLD DEMO SECTION */}
        <RealWorldDemo />

        {/* ACADEMIC RESEARCH TEAM & GUIDANCE */}
        <TeamSection />

        {/* ROADMAP FUTURE HORIZON */}
        <FutureScope />

      </main>

      {/* PERSISTENT FOOTER SECTION */}
      <Footer />

    </div>
  );
}
