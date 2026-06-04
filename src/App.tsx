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
import FeaturesShowcase from './components/FeaturesShowcase';
import TechStack from './components/TechStack';
import Architecture from './components/Architecture';
import PerformanceMetrics from './components/PerformanceMetrics';
import ResultsGallery from './components/ResultsGallery';
import TeamSection from './components/TeamSection';
import FutureScope from './components/FutureScope';
import Footer from './components/Footer';

export default function App() {
  
  // Custom document visual scroll actions or telemetry console logs
  useEffect(() => {
    console.log("%cTRAILIX Spatial Engine Core initialized.", "color: #1BC8C8; font-weight: bold; font-size: 14px;");
    console.log("%cM. S. Ramaiah Institute of Technology - Department of AI & DS", "color: #0A5CC4;");
  }, []);

  return (
    <div id="trailix-root" className="min-h-screen bg-navy-950 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-white antialiased">
      
      {/* Decorative global ambient static nodes behind */}
      <div className="fixed inset-0 pointer-events-none z-0">
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

    </div>
  );
}
