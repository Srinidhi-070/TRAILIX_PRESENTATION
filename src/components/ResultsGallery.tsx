import React, { useState } from 'react';
import { GALLERY_SCREENS } from '../data';
import { 
  ChevronRight, ChevronLeft, Maximize2, X, Smartphone, QrCode, 
  Search, Navigation, Bot, Landmark, Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ResultsGallery() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % GALLERY_SCREENS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + GALLERY_SCREENS.length) % GALLERY_SCREENS.length);
  };

  const getScreenIcon = (id: string) => {
    switch (id) {
      case 'main_screen': return <Smartphone className="text-blue-400" size={16} />;
      case 'qr_scanner': return <QrCode className="text-cyan-400" size={16} />;
      case 'destination_search': return <Search className="text-emerald-400" size={16} />;
      case 'ar_navigation': return <Navigation className="text-purple-400" size={16} />;
      case 'ai_assistant': return <Bot className="text-pink-400" size={16} />;
      default: return <Smartphone className="text-white" size={16} />;
    }
  };

  // Inline SVG visual screenshot generation based on screen type to look incredibly futuristic
  const renderScreenMockup = (id: string, isLarge = false) => {
    const isMain = id === 'main_screen';
    const isScan = id === 'qr_scanner';
    const isSearch = id === 'destination_search';
    const isAr = id === 'ar_navigation';
    const isAi = id === 'ai_assistant';

    return (
      <div className={`relative w-full ${isLarge ? 'h-[360px]' : 'h-[250px]'} rounded-xl bg-slate-950 border border-white/5 overflow-hidden flex flex-col justify-between p-4 bg-dots`}>
        {/* Screen Header inside wireframe */}
        <div className="flex justify-between items-center text-[8px] font-mono text-slate-500 mb-2">
          <span>TRAILIX HUD SYSTEM</span>
          <span>FL-02_SECTOR-B</span>
        </div>

        {/* Content representations */}
        {isMain && (
          <div className="my-auto space-y-3 text-left">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <div className="text-[9px] font-mono text-slate-400 leading-none">LOCAL STATION STATUS</div>
              <div className="text-xs font-semibold text-white mt-1">Apex Block • Central Lobby</div>
              <div className="h-1 w-full bg-slate-950 rounded mt-2 overflow-hidden">
                <div className="h-full w-2/3 bg-blue-500 rounded"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded bg-slate-900/60 border border-slate-850">
                <div className="text-[7px] text-slate-500 font-mono">LATENCY</div>
                <div className="text-xs font-bold text-cyan-400 mt-0.5">&lt;14ms</div>
              </div>
              <div className="p-2 rounded bg-slate-900/60 border border-slate-850">
                <div className="text-[7px] text-slate-500 font-mono">CACHE</div>
                <div className="text-xs font-bold text-emerald-400 mt-0.5">LOCAL</div>
              </div>
            </div>
          </div>
        )}

        {isScan && (
          <div className="my-auto relative flex flex-col items-center justify-center py-4">
            <div className="w-20 h-20 rounded-xl border border-dashed border-cyan-500 flex items-center justify-center relative bg-slate-900/60">
              <QrCode size={32} className="text-cyan-400 animate-pulse" />
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400"></div>
              {/* Red slider line */}
              <div className="absolute left-0 right-0 h-0.5 bg-red-400/80 animate-[bounce_2s_infinite]"></div>
            </div>
            <span className="text-[8px] font-mono text-slate-500 mt-2">DECRYPTING COORD HASH...</span>
          </div>
        )}

        {isSearch && (
          <div className="my-auto space-y-2 text-left">
            <div className="bg-slate-900 border border-slate-850 p-1.5 rounded-lg flex items-center gap-1">
              <Search size={10} className="text-slate-400" />
              <div className="text-[9px] font-mono text-slate-300">"Seminar hall AI DS"</div>
            </div>
            <div className="space-y-1">
              <div className="p-1 rounded bg-slate-900/40 text-[8px] text-slate-200 border border-white/5">
                ✦ AI & DS Seminar Hall - Floor 2 [APEX]
              </div>
              <div className="p-1 rounded bg-slate-900/40 text-[8px] text-slate-500">
                HOD Office Dept - Floor 2 [APEX]
              </div>
            </div>
          </div>
        )}

        {isAr && (
          <div className="my-auto relative flex flex-col items-center justify-center">
            {/* Glowing AR pathway overlay lines */}
            <svg className="absolute inset-0 w-full h-[100px] pointer-events-none">
              <path d="M 10 90 L 50 40 L 90 90" fill="none" stroke="rgba(24,200,200,0.5)" strokeWidth="4" strokeLinecap="round" strokeDasharray="3,3" />
              <path d="M 10 90 L 50 40 L 90 90" fill="none" stroke="#00d8d6" strokeWidth="1.5" />
            </svg>
            <div className="relative z-10 bg-slate-900/95 border border-cyan-500/20 px-2 py-1 rounded shadow-lg text-center">
              <Navigation size={12} className="text-cyan-400 mx-auto animate-bounce" />
              <div className="text-[8px] font-mono text-white font-bold mt-1">RIGHT TURN IN 10m</div>
            </div>
            <div className="absolute bottom-1 right-1 text-[7px] font-mono text-slate-500">POSE_EST: STABLE</div>
          </div>
        )}

        {isAi && (
          <div className="my-auto space-y-2 text-left">
            <div className="bg-slate-900 border border-slate-850/80 p-2 rounded-lg text-left">
              <span className="text-[7px] font-mono text-cyan-400 block mb-0.5">OLLAMA DEPLOYED</span>
              <p className="text-[9px] leading-relaxed text-slate-300">
                "Lead me to the shortest segment avoiding any stair construction."
              </p>
            </div>
            <div className="text-[8px] font-mono text-slate-500 text-right">✦ CALCULATING NODES...</div>
          </div>
        )}

        {/* Screen footer inside wireframe */}
        <div className="border-t border-white/5 pt-2 flex justify-between items-center text-[7px] font-mono text-slate-500 leading-none">
          <span>PORT: 3000</span>
          <span>96% LATENCY SAFE</span>
        </div>
      </div>
    );
  };

  const activeScreen = GALLERY_SCREENS[activeIdx];

  return (
    <section className="relative py-24 bg-navy-950/40 border-t border-slate-900 overflow-hidden">
      
      {/* Background blurs */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-electric/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header container */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-mono font-medium uppercase tracking-wider">
            <Smartphone size={12} />
            Holographic Interfaces
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Results & Screen Gallery
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Click through our telemetry design configurations. Tap any screen below to launch a comprehensive glassmorphic inspection deep-dive details specs modal.
          </p>
        </div>

        {/* Slider representation container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left slide presentation columns (col-span-7) */}
          <div className="lg:col-span-7 relative">
            <div className="relative p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              
              {/* Dynamic screen placeholder visualization */}
              <div 
                onClick={() => setModalOpen(true)}
                className="cursor-pointer transition-all duration-300 transform group-hover:scale-101 relative"
              >
                {renderScreenMockup(activeScreen.id, true)}
                
                {/* Floating absolute Hover indicator */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                  <div className="px-3 py-1.5 bg-slate-900/90 border border-slate-800 rounded-lg text-xs text-white font-mono flex items-center gap-1.5">
                    <Maximize2 size={12} className="text-cyan-400" />
                    Inspect Module Architecture
                  </div>
                </div>
              </div>

              {/* Slider carousel buttons */}
              <div className="flex justify-between items-center mt-6">
                <div className="flex gap-1.5">
                  {GALLERY_SCREENS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === activeIdx ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-1.5 bg-slate-950 border border-slate-800 hover:border-slate-700/80 hover:bg-slate-900 rounded-lg text-slate-400 hover:text-white transition cursor-pointer"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-1.5 bg-slate-950 border border-slate-800 hover:border-slate-700/80 hover:bg-slate-900 rounded-lg text-slate-400 hover:text-white transition cursor-pointer"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right slides explanations columns (col-span-5) */}
          <div className="lg:col-span-5 text-left space-y-6">
            
            <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded-full border border-cyan-900/30">
              {getScreenIcon(activeScreen.id)}
              {activeScreen.tag}
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl font-display font-medium text-slate-100 tracking-tight">
                {activeScreen.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                {activeScreen.description}
              </p>
            </div>

            {/* Interactive button to trigger modal */}
            <button
              onClick={() => setModalOpen(true)}
              className="py-2.5 px-4 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700/80 rounded-xl text-xs font-mono font-bold text-slate-300 uppercase tracking-widest transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <Maximize2 size={13} className="text-cyan-400" />
              Deep Inspect specifications
            </button>
          </div>

        </div>

      </div>

      {/* FULL-SCREEN GLASSMORPHIC INSPECT DIALOG MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 relative shadow-2xl text-left"
            >
              {/* Reset close absolute top-right */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-500 hover:text-white border border-slate-850 transition cursor-pointer"
              >
                <X size={16} />
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-2 border-b border-white/5 pb-4">
                  <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-850 text-cyan-400">
                    {getScreenIcon(activeScreen.id)}
                  </div>
                  <div>
                    <span className="text-[8px] font-mono font-bold text-slate-500">DIAGNOSTIC DETAILED SPEC</span>
                    <h3 className="text-sm font-semibold text-white leading-none leading-normal">
                      {activeScreen.title} Architecture
                    </h3>
                  </div>
                </div>

                {/* Grid representation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  
                  {/* Left: Render mock screen in modal */}
                  <div>
                    {renderScreenMockup(activeScreen.id, false)}
                  </div>

                  {/* Right: Spec deep sheets */}
                  <div className="space-y-4">
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      This interface constitutes part of the primary mobile viewport. Evaluated on-device, it maintains asynchronous communication loops with the FastAPI layer to display telemetry cues.
                    </p>

                    <div className="p-3.5 rounded-xl bg-slate-950 text-[10px] font-mono text-slate-400 space-y-1.5 border border-white/5">
                      <div className="flex justify-between">
                        <span>MODULE PATH:</span>
                        <span className="text-white">TrailixCore/GUI/{activeScreen.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>COMPILER STATE:</span>
                        <span className="text-cyan-400">STABLE</span>
                      </div>
                      <div className="flex justify-between">
                        <span>DRIVERN:</span>
                        <span className="text-emerald-400">Unity 6.x CLI</span>
                      </div>
                      <div className="flex justify-between">
                        <span>RESPONSE RIME:</span>
                        <span className="text-white">&lt; 40ms</span>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="flex justify-end pt-4 border-t border-white/5">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="py-1.5 px-4 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-mono font-bold text-slate-400 hover:text-white transition cursor-pointer"
                  >
                    Close spec sheet
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
