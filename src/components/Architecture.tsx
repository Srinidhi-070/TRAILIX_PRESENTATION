import React, { useRef } from 'react';
import { ARCHITECTURE } from '../data';
import { 
  AppWindow, QrCode, Sliders, Milestone, MessageSquareCode, Server, Database, Eye,
  ArrowRight, ShieldAlert, Cpu, Activity, Workflow
} from 'lucide-react';
import { motion, useInView } from 'motion/react';

export default function Architecture() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <AppWindow className="text-blue-400" size={20} />;
      case 1: return <QrCode className="text-cyan-400" size={20} />;
      case 2: return <Sliders className="text-emerald-400" size={20} />;
      case 3: return <Milestone className="text-amber-400" size={20} />;
      case 4: return <MessageSquareCode className="text-purple-400" size={20} />;
      case 5: return <Server className="text-pink-400" size={20} />;
      case 6: return <Database className="text-indigo-400" size={20} />;
      default: return <Eye className="text-sky-400" size={20} />;
    }
  };

  const badges = [
    'MOBILE AR APP', 'LOCALIZATION', 'CONTROLLER', 'PATH PATHFINDING',
    'AI CHAT INTEGRATION', 'FASTAPI SERVER', 'CAMPUS GRAPH DATA', 'IMMERSE AR VIZ'
  ];

  const sequenceSteps = [
    { id: 1, actor: 'Trailix Client', action: 'Scan Environmental QR Code', target: 'Physical QR Anchor' },
    { id: 2, actor: 'Physical QR Anchor', action: 'Decode JSON Payload (node_id, building, floor)', target: 'Trailix Client' },
    { id: 3, actor: 'Trailix Client', action: 'Calibrate AR World Origin', target: 'Local Core' },
    { id: 4, actor: 'Trailix Client', action: 'POST /api/navigate (Current Node, Target Node)', target: 'FastAPI Backend' },
    { id: 5, actor: 'FastAPI Backend', action: 'Load Topographical Edges', target: 'JSON Graph Database' },
    { id: 6, actor: 'JSON Graph Database', action: 'Return Graph Weights', target: 'FastAPI Backend' },
    { id: 7, actor: 'FastAPI Backend', action: 'Execute Dijkstra Shortest-Path Algorithm', target: 'Local Core' },
    { id: 8, actor: 'FastAPI Backend', action: 'Return 200 OK (Array[Vector3], Floor Transitions)', target: 'Trailix Client' },
    { id: 9, actor: 'Trailix Client', action: 'Generate 3D Catmull-Rom Splines', target: 'Local Core' },
    { id: 10, actor: 'Trailix Client', action: 'Instantiate Procedural Chevron Indicators', target: 'Local Core' },
    { id: 11, actor: 'Trailix Client', action: 'Begin Visualizer Animation Flow', target: 'Local Core' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="architecture" className="relative py-24 bg-navy-950 bg-grid-pattern overflow-hidden">
      
      {/* Visual lighting background */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10" ref={containerRef}>
        
        {/* Header container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-mono font-medium uppercase tracking-wider">
            <Cpu size={12} className="animate-pulse" />
            SYSTEM ARCHITECTURE
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {ARCHITECTURE.title}
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans max-w-xl mx-auto">
            {ARCHITECTURE.description}
          </p>
        </motion.div>

        {/* Dynamic Connected Node Map Flow */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 relative"
        >
          {ARCHITECTURE.components.map((component, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-5 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 text-left flex flex-col justify-between h-[160px] relative group backdrop-blur-sm cursor-pointer"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-110 group-hover:border-cyan-500/30 transition duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {getIcon(idx)}
                </div>
                <div className="space-y-1 mt-2">
                  <div className="text-[8px] font-mono text-cyan-400 uppercase tracking-widest leading-none">{badges[idx]}</div>
                  <h4 className="text-sm font-bold text-slate-100 group-hover:text-white leading-tight">
                    {component}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sequence Diagram Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 mb-10 border-b border-white/5 pb-4"
          >
            <Workflow className="text-cyan-400" size={24} />
            <h3 className="text-2xl font-bold text-white tracking-tight">Data Flow Sequence</h3>
          </motion.div>
          
          <div className="relative">
            {/* Animated SVG timeline line */}
            <svg className="absolute left-[13px] top-4 bottom-4 w-4 h-full pointer-events-none z-0" preserveAspectRatio="none">
              <line x1="7" y1="0" x2="7" y2="100%" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="4,4" />
              <motion.line 
                x1="7" y1="0" x2="7" y2="100%" 
                stroke="#06b6d4" 
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </svg>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="space-y-4"
            >
              {sequenceSteps.map((step, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="relative pl-12 group cursor-pointer"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5 + (idx * 0.1), type: "spring" }}
                    className="absolute left-[14px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-cyan-500 group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)] z-10"
                  />
                  
                  <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 group-hover:border-cyan-500/30 group-hover:bg-slate-800/80 transition-all duration-300 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg group-hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] overflow-hidden relative">
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out pointer-events-none"></div>

                    <div className="flex items-center gap-4 relative z-10">
                      <div className="text-[11px] font-mono font-bold text-cyan-400 bg-cyan-950/70 px-2.5 py-1.5 rounded border border-cyan-900 w-9 flex justify-center shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                        {step.id}
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-slate-500 mb-1 uppercase tracking-wider flex items-center gap-2">
                          {step.actor}
                          <ArrowRight size={10} className="text-slate-600 group-hover:text-cyan-400 transition-colors" />
                        </div>
                        <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">{step.action}</div>
                      </div>
                    </div>
                    
                    {step.target !== 'Local Core' && (
                      <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 shrink-0 bg-slate-950 px-3 py-1.5 rounded-lg border border-white/10 group-hover:border-emerald-500/30 relative z-10">
                        <Activity size={12} className="text-emerald-400 group-hover:animate-pulse" />
                        <span className="group-hover:text-emerald-300 transition-colors">{step.target}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
