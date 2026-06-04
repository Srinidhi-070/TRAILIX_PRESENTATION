import React, { useState } from 'react';
import { TEAM_MEMBERS, PROJECT_GUIDE } from '../data';
import { 
  Users, Award, Github, Linkedin, GraduationCap, Code2, 
  Settings2, Hammer, Activity, BookOpen, Layers, CheckCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Specific contributions that each member owned
const CONTRIBUTIONS_DB = {
  'Srinidhi N S': {
    focus: 'AR Viewport & Camera Alignment',
    statistics: [
      { label: 'Camera Tracking accuracy', value: '98%' },
      { label: 'Frame rate performance', value: '60 FPS' },
      { label: 'Anchor sync rate', value: '<50ms' }
    ],
    ownedModules: [
      'Unity AR Foundation Viewport',
      'QR Code Anchor Solver',
      'Real-time Spatial Drift Filter',
      'Viewfinder Navigation Indicators'
    ],
    summary: 'Spearheaded the integration of on-device sensor loops with Unity AR Foundation. Developed the QR tag calibration system to reset coordinates dynamically, bypassing shaky external GPS attenuation inside MSRIT buildings.'
  },
  'Rudrapratap Patil': {
    focus: 'UI/UX & Native State Engine',
    statistics: [
      { label: 'Fast-travel dispatch overhead', value: '<5ms' },
      { label: 'Dynamic screens responsiveness', value: '100%' },
      { label: 'WebSocket channel latency', value: '<10ms' }
    ],
    ownedModules: [
      'React Native Live Dashboard',
      'Dynamic Fast-Travel Card Layouts',
      'Local Persistence State Engine',
      'Client-Server Interface Hook System'
    ],
    summary: 'Designed and built the core visual interface. Engineered the state management pipelines and local persistence layers, ensuring smooth transitions between screens and low-overhead messaging to the FastAPI backend.'
  },
  'Raghu C': {
    focus: '3D modeling & Vertex Graph CAD Layouts',
    statistics: [
      { label: 'Mesh asset weight reduction', value: '75%' },
      { label: 'Graph vertex density', value: '124 nodes' },
      { label: 'Campus level alignments', value: '4 floors' }
    ],
    ownedModules: [
      '3D Building Mesh Optimization',
      'Level Coordinate Graph Alignment',
      'Blender Campus Vertex Mapping',
      'CAD Bounded Collision Grids'
    ],
    summary: 'Created optimized glTF 3D assets and converted physical MSRIT interior structures into high-fidelity coordinate systems. Mapped the 124-node pathfinding graph vertices meticulously to match architectural blueprints.'
  },
  'Mallesh N': {
    focus: 'FastAPI Backend & A* Pathfinding Networks',
    statistics: [
      { label: 'Path calculation duration', value: '<15ms' },
      { label: 'Ollama embedding lookup sync', value: '96%' },
      { label: 'API request throughput', value: '250/sec' }
    ],
    ownedModules: [
      'A* Multi-floor Shortest Path Solver',
      'FastAPI Server Framework Core',
      'Ollama Semantic Matching Embeddings',
      'Conversational LLM Route Planner'
    ],
    summary: 'Engineered the high-power navigation backend. Implemented the weighted A* algorithm traversing multiple campus block elevations, and paired it with LLM semantic matching to translate vague queries into valid route targets.'
  }
};

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<string>('Srinidhi N S');

  const activeDetails = CONTRIBUTIONS_DB[selectedMember as keyof typeof CONTRIBUTIONS_DB] || CONTRIBUTIONS_DB['Srinidhi N S'];
  const activeMember = TEAM_MEMBERS.find(m => m.name === selectedMember) || TEAM_MEMBERS[0];

  return (
    <section id="team" className="relative py-24 bg-navy-950 bg-grid-pattern">
      
      {/* Background abstract overlay lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header content summaries */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-mono font-medium uppercase tracking-wider">
            <Users size={12} />
            Academic Engineers
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Collaborative Contributions
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans max-w-xl mx-auto">
            Artificial Intelligence and Data Science engineering students at M. S. Ramaiah Institute of Technology. Click a member's profile card below to explore their specific system ownership, metrics, and architecture modules in detail.
          </p>
        </div>

        {/* Advisor / Guide Featured Row */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto p-6 md:p-8 rounded-3xl bg-slate-900 border border-white/5 shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-8 items-center text-left group">
            
            {/* Interactive cyan neon ring behind */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition duration-300 pointer-events-none"></div>
            
            {/* Advisor Vector Emblem */}
            <div className="w-24 h-24 rounded-full bg-slate-950 border-2 border-dashed border-cyan-400/40 flex items-center justify-center relative flex-shrink-0">
              <div className="w-18 h-18 rounded-full bg-cyan-950/40 border border-white/5 flex items-center justify-center">
                <GraduationCap className="text-cyan-400" size={32} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-cyan-400 tracking-wider block">PROJECT GUIDE</span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {PROJECT_GUIDE.name}
                </h3>
                <p className="text-xs font-mono text-slate-300">
                  {PROJECT_GUIDE.role}
                </p>
                <p className="text-xs font-mono text-slate-400">
                  {PROJECT_GUIDE.department}
                </p>
                <p className="text-xs font-mono text-slate-500 leading-none">
                  {PROJECT_GUIDE.institution}
                </p>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-xl">
                {PROJECT_GUIDE.description}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Workspace Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          
          {/* Left Hand: Student Cards Column (col-span-6) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TEAM_MEMBERS.map((member) => {
              const isSelected = selectedMember === member.name;
              return (
                <div 
                  key={member.name}
                  onClick={() => setSelectedMember(member.name)}
                  className={`p-6 rounded-2xl cursor-pointer border text-left flex flex-col justify-between transition-all duration-300 relative group ${
                    isSelected 
                      ? 'bg-gradient-to-br from-cyan-950/45 to-slate-900 border-cyan-500/40 shadow-[0_0_24px_rgba(6,182,212,0.08)] scale-[1.01]' 
                      : 'bg-slate-900/50 border-white/5 hover:border-slate-700/80'
                  }`}
                >
                  {/* Selected neon edge line */}
                  {isSelected && (
                    <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-cyan-400 rounded-l-2xl"></div>
                  )}

                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      {/* Initials badge */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-md transition-all duration-300 border ${
                        isSelected 
                          ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' 
                          : 'bg-slate-950 border-white/10 text-slate-400 group-hover:text-cyan-400'
                      }`}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>

                      {/* USN identifier */}
                      <div className="text-[9px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-white/5">
                        {member.usn}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-md font-bold text-slate-100 group-hover:text-white transition leading-snug">
                        {member.name}
                      </h4>
                      <p className="text-xs font-mono text-cyan-400 font-bold tracking-wide">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed font-sans min-h-[48px] line-clamp-3">
                      {member.bio}
                    </p>
                  </div>

                  {/* Skills tags list */}
                  <div className="flex flex-wrap gap-1 mt-4 pt-3 border-t border-slate-950">
                    {member.skills.slice(0, 3).map((skill) => (
                      <span 
                        key={skill}
                        className="text-[8px] font-mono text-slate-400 bg-slate-950/80 px-1.5 py-0.5 rounded border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="text-[8px] font-mono text-slate-500 px-1">+{member.skills.length - 3}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Hand: Deep dive telemetry panel (col-span-6) */}
          <div className="lg:col-span-6 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedMember}
                initial={{ opacity: 0, scale: 0.99, x: 10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.99, x: -10 }}
                className="p-6 md:p-8 rounded-2xl bg-slate-900 border border-white/5 flex-1 flex flex-col justify-between relative overflow-hidden text-left"
              >
                
                {/* Background accent bulb */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none"></div>

                <div className="space-y-6">
                  
                  {/* Ownership header */}
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-850">
                        <Code2 size={14} />
                      </div>
                      <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-widest leading-none">
                        Engineering Artifact Archive
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">MSRIT ENG • 2026</span>
                  </div>

                  {/* Name and Focus area */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white tracking-tight leading-none">
                      {activeMember.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <span>{activeMember.role}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-cyan-400 font-semibold">{activeDetails.focus}</span>
                    </div>
                  </div>

                  {/* Core biography statement */}
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {activeDetails.summary}
                  </p>

                  {/* Statistics Metrics Dashboard */}
                  <div className="grid grid-cols-3 gap-3">
                    {activeDetails.statistics.map((metric) => (
                      <div key={metric.label} className="p-3 rounded-xl bg-slate-950/80 border border-white/5 text-center flex flex-col justify-center">
                        <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
                          {metric.value}
                        </div>
                        <div className="text-[8px] font-mono text-slate-500 uppercase mt-1 leading-normal tracking-wider">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Owned architecture modules list */}
                  <div className="space-y-3">
                    <h5 className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Layers size={11} className="text-cyan-400" />
                      SYSTEM COMPONENT DIRECT OWNERSHIP
                    </h5>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {activeDetails.ownedModules.map((mod) => (
                        <div 
                          key={mod}
                          className="p-2.5 bg-slate-950/50 hover:bg-slate-950 border border-white/5 hover:border-cyan-500/25 rounded-lg flex items-center gap-2 text-slate-300 transition duration-150 font-sans"
                        >
                          <CheckCircle className="text-cyan-400 flex-shrink-0" size={12} />
                          <span className="text-[11px] truncate">{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Footer details & socials */}
                <div className="pt-6 mt-8 border-t border-white/5 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-slate-500">INDIVIDUAL REPOSITORY SHA-256</span>
                  
                  <div className="flex gap-2">
                    <a 
                      href={activeMember.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-slate-950 border border-white/5 hover:bg-slate-900 text-slate-500 hover:text-white transition cursor-pointer"
                    >
                      <Github size={12} />
                    </a>
                    <a 
                      href={activeMember.linkedin} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-slate-950 border border-white/5 hover:bg-slate-900 text-slate-500 hover:text-white transition cursor-pointer"
                    >
                      <Linkedin size={12} />
                    </a>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
