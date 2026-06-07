import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data';
import { 
  Smartphone, QrCode, MapPin, Search, Layers, Compass, CheckCircle, 
  ChevronRight, ArrowRight, CornerDownRight, Play, Server, CircuitBoard, HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function SystemWorkflow() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getIcon = (iconName: string) => {
    const cls = "text-inherit";
    switch (iconName) {
      case 'Smartphone': return <Smartphone className={cls} size={18} />;
      case 'QrCode': return <QrCode className={cls} size={18} />;
      case 'Search': return <Search className={cls} size={18} />;
      case 'Waypoints': return <CircuitBoard className={cls} size={18} />;
      case 'Route': return <Layers className={cls} size={18} />;
      case 'Compass': return <Compass className={cls} size={18} />;
      case 'CheckCircle': return <CheckCircle className={cls} size={18} />;
      default: return <HelpCircle className={cls} size={18} />;
    }
  };

  return (
    <section id="workflow" className="relative py-24 bg-white dark:bg-navy-950/40 border-t border-slate-200 dark:border-white/5 overflow-hidden">
      
      {/* Decorative radial blur background */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-electric/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-mono font-medium uppercase tracking-wider">
            <Server size={12} />
            Data Signal Pipeline
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight">
            Intelligent Navigation Workflow
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-sans">
            The navigation process follows a structured workflow designed for speed, accuracy, and ease of use. Click elements below to inspect runtime subprocesses.
          </p>
        </div>

        {/* Interactive Timeline Stepper Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Stepper Left: Interactive Stepper Timeline Grid (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <div className="text-[10px] font-mono text-slate-500 font-bold text-left tracking-wider uppercase mb-3">
                SYSTEM PIPELINE STEPS (TAP TO ANALYZE FLOW)
              </div>
              
              <div className="space-y-2.5">
                {WORKFLOW_STEPS.map((step, idx) => {
                  const isActive = activeStep === idx;
                  const isPassed = activeStep > idx;

                  return (
                    <div 
                      key={step.id}
                      onClick={() => setActiveStep(idx)}
                      className={`group p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 relative ${
                        isActive 
                          ? 'bg-gradient-to-r from-cyan-950/40 to-slate-900 border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.05)]' 
                          : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-white/5 hover:border-slate-700/80'
                      }`}
                    >
                      {/* Active green edge line */}
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-cyan-400 rounded-l-xl"></div>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {/* Step number / icon indicator */}
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                            isActive 
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                              : isPassed 
                                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-400 border border-emerald-900/20' 
                                : 'bg-slate-50 dark:bg-slate-950 text-slate-500 border border-slate-200 dark:border-white/5'
                          }`}>
                            {getIcon(step.icon)}
                          </div>

                          <div>
                            <span className="text-[8px] font-mono font-bold text-slate-500 leading-none">PHASE {step.id}</span>
                            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1 leading-none group-hover:text-black dark:hover:text-white transition">
                              {step.title}
                            </h4>
                          </div>
                        </div>

                        {/* Chevron alignment indicators */}
                        <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
                          {isActive ? (
                            <span className="text-cyan-400 font-bold animate-pulse text-[10px]">ACTIVE ANALYZER</span>
                          ) : isPassed ? (
                            <span className="text-emerald-500 font-bold">COMPLETED</span>
                          ) : (
                            <span>PENDING</span>
                          )}
                          <ChevronRight size={14} className={isActive ? 'text-cyan-400' : 'text-slate-600'} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Micro navigation triggers */}
            <div className="flex justify-between items-center bg-white dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-white/5">
              <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400">Walkthrough Pipeline</span>
              <div className="flex gap-2">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className="px-3 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/5 hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900 rounded-lg text-xs font-mono text-slate-700 dark:text-slate-300 disabled:opacity-40 transition-all leading-tight cursor-pointer"
                >
                  PREV
                </button>
                <button
                  disabled={activeStep === WORKFLOW_STEPS.length - 1}
                  onClick={() => setActiveStep(prev => Math.min(WORKFLOW_STEPS.length - 1, prev + 1))}
                  className="px-3 py-1 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-xs font-mono text-black dark:text-white disabled:opacity-40 transition-all leading-tight inline-flex items-center gap-1 cursor-pointer"
                >
                  NEXT <ArrowRight size={11} />
                </button>
              </div>
            </div>
          </div>

          {/* Stepper Right: Detail viewer with tech breakdown details (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeStep}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/5 relative flex-1 flex flex-col justify-between overflow-hidden backdrop-blur-md"
              >
                {/* Visual dynamic gradient pulse corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl pointer-events-none"></div>

                <div className="space-y-6 text-left">
                  <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/5 pb-4">
                    <span className="text-[10px] font-mono font-medium text-cyan-400 bg-cyan-50 dark:bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-805/40 uppercase tracking-widest leading-none">
                      Active Subprocesses
                    </span>
                    <span className="text-xs font-mono text-slate-500">Step {activeStep + 1} / 7</span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-display font-medium text-black dark:text-white tracking-tight leading-snug">
                      {WORKFLOW_STEPS[activeStep].title}
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                      {WORKFLOW_STEPS[activeStep].description}
                    </p>
                  </div>

                  {/* Deep dive details customized for each step */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-white/5 space-y-3 text-left">
                    <div className="text-[10px] font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider font-display flex items-center gap-1">
                      <CornerDownRight size={11} className="text-cyan-400" />
                      Runtime Subprocesses
                    </div>

                    {activeStep === 0 && (
                      <div className="space-y-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 leading-normal list-none">
                        <li>• Check mobile UI initialization states.</li>
                        <li>• Boot low-power AR Foundation visual indices.</li>
                        <li>• Set background polling interval structures.</li>
                      </div>
                    )}
                    {activeStep === 1 && (
                      <div className="space-y-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 leading-normal list-none">
                        <li>• Capture passive high-contrast barcode anchors.</li>
                        <li>• Cross-reference scanned hash in sub-100ms grids.</li>
                        <li>• Synchronize horizontal coordinates on-device.</li>
                      </div>
                    )}
                    {activeStep === 2 && (
                      <div className="space-y-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 leading-normal list-none">
                        <li>• Accept autocomplete values or manual input.</li>
                        <li>• Use Ollama search embeddings for ambiguous targets.</li>
                        <li>• Locate precise destination coordinate pointers.</li>
                      </div>
                    )}
                    {activeStep === 3 && (
                      <div className="space-y-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 leading-normal list-none">
                        <li>• Run A* grid mapping algorithm over level vertices.</li>
                        <li>• Compute shortest distance bypassing blockade areas.</li>
                        <li>• Create segment steps with precise directional heads.</li>
                      </div>
                    )}
                    {activeStep === 4 && (
                      <div className="space-y-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 leading-normal list-none">
                        <li>• Translate computed path lines into 3D AR elements.</li>
                        <li>• Render overlay arrow vectors directly on viewfinder.</li>
                        <li>• Compile level indexes for multiple floor tracks.</li>
                      </div>
                    )}
                    {activeStep === 5 && (
                      <div className="space-y-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 leading-normal list-none">
                        <li>• Project neon guideline visual overlays.</li>
                        <li>• Continuously adjust sensor drift loops in ARCore.</li>
                        <li>• Trigger haptic proximity vibrate indicators.</li>
                      </div>
                    )}
                    {activeStep === 6 && (
                      <div className="space-y-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 leading-normal list-none">
                        <li>• Fire arrival indicator warning alert sound.</li>
                        <li>• Show detailed landmark/destination metrics.</li>
                        <li>• Suspend active mapping loop to clear memory.</li>
                      </div>
                    )}
                  </div>
                </div>

                {/* Simulated visual state feedback layout at bottom */}
                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    Ready Node Loop
                  </span>
                  <span>TRAILIX_CORE_STEPS</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
