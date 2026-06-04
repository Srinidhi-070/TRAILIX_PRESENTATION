import React, { useRef, useState } from 'react';
import { ARCHITECTURE } from '../data';
import { 
  AppWindow, QrCode, Sliders, Milestone, MessageSquareCode, Server, Database, Eye,
  ArrowRight, Activity, Workflow, Cpu, Zap
} from 'lucide-react';
import { motion, useInView } from 'motion/react';

export default function Architecture() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [selectedNode, setSelectedNode] = useState<number | null>(null);

  // Exact Nodes from 6.2 Architecture Design
  const nodes = [
    { id: 0, x: 50, y: 8, label: 'User', type: 'user', desc: 'The physical end-user traversing the indoor campus environment.' },
    { id: 1, x: 14, y: 32, label: 'AR', type: 'module', desc: 'Initializes the Augmented Reality viewport and processes device camera feed.' },
    { id: 2, x: 32, y: 32, label: 'Interaction', type: 'module', desc: 'Handles user inputs, physical QR code scanning, and destination selection.' },
    { id: 3, x: 50, y: 32, label: 'Graph', type: 'module', desc: 'Maintains the local topological graph state and spatial mapping anchor for the client.' },
    { id: 4, x: 68, y: 32, label: 'A*', type: 'module', desc: 'Executes localized path smoothing algorithms on the downloaded graph edges.' },
    { id: 5, x: 86, y: 32, label: 'AR', type: 'module', desc: 'Final rendering pass drawing 3D navigational chevrons and path overlays on the camera.' },
    { id: 6, x: 42, y: 62, label: 'API', type: 'module', desc: 'FastAPI endpoint that securely receives navigational queries and processes intents.' },
    { id: 7, x: 58, y: 62, label: 'Target', type: 'module', desc: 'Identifies the destination node and matches coordinates to the specific building and floor.' },
    { id: 8, x: 50, y: 76, label: 'Query', type: 'module', desc: 'Executes optimized spatial queries to retrieve the shortest path across multiple graphs.' },
    { id: 9, x: 50, y: 94, label: 'Location', type: 'db', desc: 'A JSON-based spatial graph database storing all topological edges, stairs, and coordinates.' },
  ];

  // Exact Edges from 6.2 Architecture Design
  const edges = [
    { from: 0, to: 3, label: 'Unity AR', curve: false, control: 0 },
    { from: 1, to: 2, label: '', curve: false, control: 0 },
    { from: 2, to: 3, label: '', curve: false, control: 0 },
    { from: 3, to: 4, label: '', curve: false, control: 0 },
    { from: 4, to: 5, label: '', curve: false, control: 0 },
    { from: 3, to: 6, label: 'Query', curve: true, control: -8 }, 
    { from: 6, to: 8, label: '', curve: false, control: 0 },
    { from: 7, to: 8, label: '', curve: false, control: 0 },
    { from: 8, to: 3, label: '', curve: true, control: 8 }, 
    { from: 8, to: 9, label: '', curve: false, control: 0 },
  ];

  // SVG Path generation
  const getPath = (n1: {x:number, y:number}, n2: {x:number, y:number}, isCurved: boolean, offset: number) => {
    if (!isCurved) return `M ${n1.x} ${n1.y} L ${n2.x} ${n2.y}`;
    return `M ${n1.x} ${n1.y} Q ${n1.x + offset} ${(n1.y+n2.y)/2} ${n2.x} ${n2.y}`;
  };

  const getIconForType = (type: string) => {
    if (type === 'user') return <Eye className="text-white" size={20} />;
    if (type === 'db') return <Database className="text-emerald-400" size={20} />;
    return <Cpu className="text-cyan-400" size={20} />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="architecture" className="relative py-24 bg-navy-950 bg-grid-pattern overflow-hidden">
      
      {/* Visual lighting background */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        
        {/* Header container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-mono font-medium uppercase tracking-wider">
            <Workflow size={12} className="animate-pulse" />
            DIAGRAM 6.2 SPECIFICATION
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            System Architecture
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans max-w-xl mx-auto">
            Click on any node in the architecture diagram to inspect its functional responsibilities within the TRAILIX stack.
          </p>
        </motion.div>

        {/* Interactive Node Graph Map */}
        <div className="relative w-full h-[650px] md:h-[800px] bg-slate-900/60 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl mb-16 overflow-hidden">
          
          {/* Conceptual Boundaries (Unity AR & FastAPI) */}
          <div className="absolute top-[22%] left-[5%] right-[5%] h-[20%] border-2 border-dashed border-cyan-500/30 rounded-xl bg-cyan-950/10 pointer-events-none">
             <span className="absolute -top-3 left-6 bg-slate-900 px-2 text-[10px] font-mono text-cyan-500">Unity AR (Client)</span>
          </div>
          <div className="absolute top-[52%] left-[35%] right-[35%] h-[32%] border-2 border-dashed border-purple-500/30 rounded-xl bg-purple-950/10 pointer-events-none">
             <span className="absolute -top-3 left-6 bg-slate-900 px-2 text-[10px] font-mono text-purple-500">FastAPI (Server)</span>
          </div>

          {/* SVG Connectors Layer */}
          <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            {edges.map((edge, i) => {
              const n1 = nodes[edge.from];
              const n2 = nodes[edge.to];
              const isHovered = hoveredNode === edge.from || hoveredNode === edge.to;
              const isSelected = selectedNode === edge.from || selectedNode === edge.to;
              const isActive = isHovered || isSelected;
              const pathStr = getPath(n1, n2, edge.curve, edge.control);
              
              return (
                <g key={`edge-${i}`}>
                  {/* Line segment */}
                  <motion.path 
                    d={pathStr}
                    fill="none"
                    stroke={isActive ? "#06b6d4" : "rgba(255,255,255,0.15)"}
                    strokeWidth={isActive ? "2" : "1.5"}
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "easeInOut" }}
                    className={`transition-all duration-300 ${isActive ? 'shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-[dash_1s_linear_infinite]' : ''}`}
                    strokeDasharray={isActive ? "5 5" : "none"}
                  />
                  {/* Arrow head indicator (approximate center point for labels) */}
                  {edge.label && (
                    <text 
                      x={edge.curve ? n1.x + (edge.control * 0.5) : (n1.x + n2.x)/2 + 2} 
                      y={(n1.y + n2.y)/2} 
                      fill={isActive ? "#22d3ee" : "#64748b"} 
                      fontSize="1.5" 
                      fontFamily="monospace"
                      textAnchor="middle"
                      className="transition-colors duration-300"
                    >
                      {edge.label}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          {/* HTML Nodes Layer */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="absolute inset-0 z-10"
          >
            {nodes.map((node, idx) => {
              const isHovered = hoveredNode === idx;
              const isSelected = selectedNode === idx;
              const isFaded = selectedNode !== null && !isSelected;

              return (
                <motion.div
                  key={idx}
                  variants={nodeVariants}
                  onMouseEnter={() => setHoveredNode(idx)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => setSelectedNode(isSelected ? null : idx)}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-32 md:w-40 p-3 rounded-xl bg-slate-900 border transition-all duration-300 cursor-pointer flex flex-col items-center text-center shadow-xl
                    ${isSelected ? 'border-emerald-400 scale-110 z-40 shadow-[0_0_40px_rgba(16,185,129,0.3)] bg-slate-800' : 
                      isHovered ? 'border-cyan-400 scale-105 z-30 shadow-[0_0_30px_rgba(6,182,212,0.3)] bg-slate-800' : 
                      'border-white/10 hover:border-cyan-500/30 z-10'}
                    ${isFaded ? 'opacity-40 blur-[1px]' : 'opacity-100'}
                  `}
                >
                  <div className={`w-10 h-10 rounded-lg mb-2 flex items-center justify-center border shadow-inner transition-colors duration-300
                    ${isSelected ? 'bg-emerald-950/50 border-emerald-500/50' : 
                      isHovered ? 'bg-cyan-950/50 border-cyan-500/50' : 
                      'bg-slate-950 border-white/10'}
                  `}>
                    {getIconForType(node.type)}
                  </div>
                  <h4 className={`text-xs md:text-sm font-bold leading-tight ${isSelected ? 'text-emerald-400' : 'text-slate-100'}`}>
                    {node.label}
                  </h4>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Active Node Info Panel Overlay */}
          {selectedNode !== null && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-slate-900/95 border border-emerald-500/50 rounded-2xl p-5 shadow-[0_0_50px_rgba(16,185,129,0.2)] backdrop-blur-xl z-50 flex items-start gap-4"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                {getIconForType(nodes[selectedNode].type)}
              </div>
              <div>
                <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-1">NODE INSPECTOR</div>
                <h3 className="text-lg font-bold text-white mb-2">{nodes[selectedNode].label}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {nodes[selectedNode].desc}
                </p>
                <button 
                  onClick={() => setSelectedNode(null)}
                  className="mt-3 text-[10px] font-mono text-slate-400 hover:text-white transition-colors underline"
                >
                  Close Inspector
                </button>
              </div>
            </motion.div>
          )}

        </div>

        {/* Fallback Grid for Mobile / Tablet */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 relative">
          {nodes.map((node, idx) => (
            <motion.div 
              key={`mobile-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-950 flex items-center justify-center border border-white/10 shrink-0">
                {getIconForType(node.type)}
              </div>
              <div>
                <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest leading-none mb-1">
                  {node.type === 'user' ? 'CLIENT' : node.type === 'db' ? 'DATABASE' : 'SYSTEM MODULE'}
                </div>
                <h4 className="text-sm font-bold text-slate-100 leading-tight mb-1">{node.label}</h4>
                <p className="text-xs text-slate-400 leading-tight">{node.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

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
                  key={`seq-${idx}`} 
                  variants={nodeVariants}
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
