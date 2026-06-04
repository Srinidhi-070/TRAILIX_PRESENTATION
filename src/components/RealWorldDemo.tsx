import React, { useState } from 'react';
import { Play, Maximize2, X, Smartphone, Map } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const DEMOS = [
  { id: 'vid1', src: '/demo/demo_vid_1.mp4', label: 'AR Path Tracking' },
  { id: 'vid2', src: '/demo/demo_vid_2.mp4', label: 'Navigation Start' },
  { id: 'vid3', src: '/demo/demo_vid_3.mp4', label: 'Live Floor Mapping' },
  { id: 'vid4', src: '/demo/demo_vid_4.mp4', label: 'Destination Reached' },
];

export default function RealWorldDemo() {
  const [activeMedia, setActiveMedia] = useState<{ type: 'video' | 'image', src: string, label: string } | null>(null);

  return (
    <section id="real-world-demo" className="py-24 border-t border-slate-900 bg-navy-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full text-xs font-mono font-medium uppercase tracking-wider">
            <Smartphone size={12} className="animate-pulse" />
            Live Application Demo
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Real-World Action
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Witness TRAILIX deployed in an actual environment. See our internal AR mapping engine in action alongside raw unedited footage of the on-device navigation experience.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Internal Mapping System Image */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:opacity-100 opacity-60 transition duration-500"></div>
            <div className="relative h-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden p-2 flex flex-col cursor-pointer transition-transform hover:scale-[1.02]"
                 onClick={() => setActiveMedia({ type: 'image', src: '/demo/ar_mapping_demo.png', label: 'Internal Mapping Engine' })}>
              <div className="px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2 text-slate-300">
                  <Map size={16} className="text-purple-400" />
                  <span className="text-xs font-mono font-bold tracking-wider">MAPPING ENGINE</span>
                </div>
                <Maximize2 size={14} className="text-slate-500" />
              </div>
              <div className="relative flex-grow flex items-center justify-center bg-slate-950 rounded-xl overflow-hidden mt-2">
                <img 
                  src="/demo/ar_mapping_demo.png" 
                  alt="AR Mapping Demo" 
                  className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" 
                />
              </div>
            </div>
          </div>

          {/* Videos Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {DEMOS.map((demo) => (
              <div key={demo.id} 
                   className="relative group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden cursor-pointer hover:border-cyan-500/50 transition-colors aspect-[9/16]"
                   onClick={() => setActiveMedia({ type: 'video', src: demo.src, label: demo.label })}>
                
                <video 
                  src={demo.src} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity"
                  muted 
                  loop 
                  playsInline
                  onMouseOver={e => (e.target as HTMLVideoElement).play()}
                  onMouseOut={e => {
                    const v = e.target as HTMLVideoElement;
                    v.pause();
                    v.currentTime = 0;
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-cyan-500/40 group-hover:scale-110 transition-all">
                    <Play size={20} className="text-cyan-300 ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-1.5 mb-1 text-cyan-400">
                    <Smartphone size={12} />
                    <span className="text-[9px] font-mono font-bold tracking-widest uppercase">HUD Recording</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white">{demo.label}</h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Fullscreen Media Modal */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setActiveMedia(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition z-[60]"
            >
              <X size={24} />
            </button>

            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative max-w-5xl w-full h-full max-h-[85vh] flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800">
                  {activeMedia.type === 'video' ? <Smartphone size={18} className="text-cyan-400" /> : <Map size={18} className="text-purple-400" />}
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    {activeMedia.type === 'video' ? 'Raw On-Device Capture' : 'Architecture Diagram'}
                  </div>
                  <h3 className="text-lg font-bold text-white">{activeMedia.label}</h3>
                </div>
              </div>

              <div className="relative flex-grow bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                {activeMedia.type === 'video' ? (
                  <video 
                    src={activeMedia.src}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img 
                    src={activeMedia.src}
                    alt={activeMedia.label}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
