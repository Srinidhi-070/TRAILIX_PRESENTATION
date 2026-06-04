import React from 'react';
import { ARCHITECTURE } from '../data';
import { 
  AppWindow, QrCode, Sliders, Milestone, MessageSquareCode, Server, Database, Eye,
  ArrowRight, ShieldAlert, Cpu, Activity, Workflow
} from 'lucide-react';

export default function Architecture() {
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

  return (
    <section id="architecture" className="relative py-24 bg-navy-950 bg-grid-pattern">
      
      {/* Visual lighting background */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header container */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
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
        </div>

        {/* Dynamic Connected Node Map Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 relative">
          {ARCHITECTURE.components.map((component, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-cyan-500/30 hover:bg-slate-900 shadow-xl transition-all duration-300 text-left flex flex-col justify-between h-[160px] relative group backdrop-blur-sm"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-110 transition duration-300">
                  {getIcon(idx)}
                </div>
                <div className="space-y-0.5">
                  <div className="text-[8px] font-mono text-cyan-400 uppercase tracking-widest leading-none">{badges[idx]}</div>
                  <h4 className="text-sm font-bold text-slate-100 group-hover:text-white leading-tight">
                    {component}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sequence Diagram Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
            <Workflow className="text-cyan-400" size={24} />
            <h3 className="text-2xl font-bold text-white tracking-tight">Data Flow Sequence</h3>
          </div>
          
          <div className="space-y-3 relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[20px] top-4 bottom-4 w-px bg-slate-800"></div>
            
            {sequenceSteps.map((step, idx) => (
              <div key={idx} className="relative pl-12 group">
                <div className="absolute left-[15px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-slate-950 border-2 border-cyan-500 group-hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)] z-10"></div>
                
                <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/20 hover:bg-slate-900 transition-all duration-300 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950/50 px-2 py-1 rounded border border-cyan-900 w-8 text-center shrink-0">
                      {step.id}
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 mb-0.5 uppercase tracking-wider">{step.actor}</div>
                      <div className="text-sm font-semibold text-slate-200">{step.action}</div>
                    </div>
                  </div>
                  
                  {step.target !== 'Local Core' && (
                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 shrink-0 bg-slate-950 px-3 py-1.5 rounded-lg border border-white/5">
                      <Activity size={10} className="text-emerald-400" />
                      <span>{step.target}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
