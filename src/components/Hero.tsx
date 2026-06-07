import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, Sparkles, Navigation, Play, ArrowRight, Layers, HelpCircle, 
  Landmark, Pause, Volume2, VolumeX, X, Upload, Video, MonitorPlay
} from 'lucide-react';

export default function Hero() {
  const demos = [
    '/demo/demo_vid_1.mp4',
    '/demo/demo_vid_2.mp4',
    '/demo/demo_vid_3.mp4',
    '/demo/demo_vid_4.mp4'
  ];
  const [currentDemoIdx, setCurrentDemoIdx] = useState(0);
  const [videoSrc, setVideoSrc] = useState<string | null>(demos[0]);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleDurationChange = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      const nextIdx = (currentDemoIdx + 1) % demos.length;
      setCurrentDemoIdx(nextIdx);
      setVideoSrc(demos[nextIdx]);
      setIsPlaying(true);
    };

    const handleCanPlay = () => {
      if (isPlaying) {
        video.play().catch(e => console.error("Video play failed", e));
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('durationchange', handleDurationChange);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('canplay', handleCanPlay);

    // If it's already able to play, start it
    if (video.readyState >= 3 && isPlaying) {
      video.play().catch(e => console.error(e));
    }

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('durationchange', handleDurationChange);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [videoSrc, currentDemoIdx, isPlaying]);

  const loadVideoFile = (file: File) => {
    if (file.type.startsWith('video/')) {
      setErrorMsg(null);
      setVideoFile(file);
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setIsPlaying(true);
      setIsMuted(true);
    } else {
      setErrorMsg("Invalid file type. Please upload a valid .mp4, .webm, or .mov video file.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      loadVideoFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      loadVideoFile(file);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.error("Video play failed:", err);
      });
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const seekTime = parseFloat(e.target.value);
    video.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const nextVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentDemoIdx + 1) % demos.length;
    setCurrentDemoIdx(nextIdx);
    setVideoSrc(demos[nextIdx]);
    setIsPlaying(true);
  };

  const clearVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoSrc && videoSrc.startsWith('blob:')) {
      URL.revokeObjectURL(videoSrc);
    }
    setVideoSrc(null);
    setVideoFile(null);
    setIsPlaying(false);
    setErrorMsg(null);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="overview" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-white dark:bg-navy-950 bg-grid-pattern">
      <input 
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Background glowing gradients from Sleek Interface */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60"></div>

      {/* Decorative Vector Network overlay lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M -100 200 C 200 100, 300 400, 600 300 S 800 600, 1200 400" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5" strokeDasharray="5,5" />
          <path d="M 100 800 C 400 600, 600 900, 900 700 S 1300 800, 1600 900" fill="none" stroke="rgba(37,99,235,0.3)" strokeWidth="1.5" />
          
          <circle cx="600" cy="300" r="4" fill="#06b6d4" className="animate-ping" />
          <circle cx="900" cy="700" r="4" fill="#2563eb" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Hero text representation */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Institution Badge from sleek theme */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold w-fit shadow-lg shadow-blue-950/20">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              M.S. RAMAIAH INSTITUTE OF TECHNOLOGY
            </div>

            {/* Title / Name from sleek theme */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-500 dark:from-white dark:via-white dark:to-slate-500">TRAILIX Core</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">AR Spatial Navigation</span>
              </h1>
              <h2 className="text-lg sm:text-xl font-display font-medium text-slate-800 dark:text-slate-200 tracking-tight leading-relaxed max-w-2xl">
                Augmented Reality Spatial Intelligence System for Smart Campus Navigation and Interaction
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-sans leading-relaxed max-w-xl">
              Trailix transforms campus navigation through immersive Augmented Reality overlays, decentralized QR localization, high-throughput A* pathfinding networks, and natural language AI assistance.
            </p>

            {/* Team indicator from sleek design */}
            <div className="flex gap-4 pt-2">
              <div className="flex -space-x-3">
                <span className="w-10 h-10 rounded-full border-2 border-white dark:border-[#020617] bg-slate-100 dark:bg-[#1e293b] text-slate-600 dark:text-white flex items-center justify-center text-[10px] font-bold">SN</span>
                <span className="w-10 h-10 rounded-full border-2 border-white dark:border-[#020617] bg-slate-100 dark:bg-[#1e293b] text-slate-600 dark:text-white flex items-center justify-center text-[10px] font-bold">RP</span>
                <span className="w-10 h-10 rounded-full border-2 border-white dark:border-[#020617] bg-slate-100 dark:bg-[#1e293b] text-slate-600 dark:text-white flex items-center justify-center text-[10px] font-bold">RC</span>
                <span className="w-10 h-10 rounded-full border-2 border-white dark:border-[#020617] bg-slate-100 dark:bg-[#1e293b] text-slate-600 dark:text-white flex items-center justify-center text-[10px] font-bold">MN</span>
              </div>
              <div className="text-sm flex flex-col justify-center">
                <span className="text-slate-800 dark:text-slate-200 font-bold leading-none">Engineering Team</span>
                <span className="text-slate-500 text-xs mt-0.5 font-mono">AI & DS Dept • 2026 Batch</span>
              </div>
            </div>

            {/* Direct video drag-and-drop or touch triggers stay active directly on the emulator chassis */}

            {/* Meta statistics footer */}
            <div className="pt-8 border-t border-slate-200 dark:border-white/5 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2.5xl sm:text-3xl font-display font-bold text-black dark:text-white tracking-tight">60 FPS</div>
                <div className="text-[10px] font-mono text-slate-500 mt-1 uppercase tracking-wider">Smooth Unity AR</div>
              </div>
              <div>
                <div className="text-2.5xl sm:text-3xl font-display font-bold text-cyan-400 tracking-tight">&lt; 200ms</div>
                <div className="text-[10px] font-mono text-slate-500 mt-1 uppercase tracking-wider">Complex Pathfinding</div>
              </div>
              <div>
                <div className="text-2.5xl sm:text-3xl font-display font-bold text-black dark:text-white tracking-tight">Zero</div>
                <div className="text-[10px] font-mono text-slate-500 mt-1 uppercase tracking-wider">External GPS Dependency</div>
              </div>
            </div>

          </div>

          {/* Right visual mockup: Floating Phone Container with 3D elements using absolute styling */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Drag & Drop high-fidelity phone screen frame */}
            <div 
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative w-full max-w-[325px] aspect-[9/16] bg-slate-50 dark:bg-slate-950 rounded-[44px] p-2.5 shadow-[0_0_50px_rgba(6,182,212,0.15)] border-4 transition-all duration-300 select-none overflow-hidden ${
                dragOver 
                  ? 'border-cyan-400 scale-[1.02] shadow-[0_0_60px_rgba(6,182,212,0.3)]' 
                  : 'border-slate-300 dark:border-slate-800/80 hover:border-slate-700/60'
              } ring-1 ring-slate-700/30 flex flex-col justify-between`}
            >
              
              {videoSrc ? (
                /* LIVE VIDEO MODE */
                <div className="absolute inset-0 bg-black rounded-[38px] overflow-hidden group">
                  <video
                    ref={videoRef}
                    src={videoSrc}
                    poster="/demo/demo1.jpg"
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-contain rounded-[36px] bg-black"
                  />
                  
                  {/* Subtle video status tag */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-50 dark:bg-slate-950/80 border border-cyan-500/20 text-cyan-400 text-[8px] font-mono rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-sm z-30 opacity-75">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    PRESENTATION FEED
                  </div>

                  {/* Playback Controls layer (revealed on hover) */}
                  <div className="absolute inset-x-3 bottom-3 p-2 bg-slate-50 dark:bg-slate-950/85 border border-slate-200 dark:border-white/5 backdrop-blur-md rounded-2xl flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30">
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min={0}
                        max={duration || 100}
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full cursor-pointer accent-cyan-400 focus:outline-none"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={togglePlay}
                        className="p-1 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition cursor-pointer"
                      >
                        {isPlaying ? <Pause size={13} className="fill-slate-300" /> : <Play size={13} className="fill-slate-300" />}
                      </button>
                      
                      <span className="text-[8px] font-mono text-slate-600 dark:text-slate-400">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <button 
                          onClick={() => setIsMuted(!isMuted)}
                          className="p-1 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition cursor-pointer"
                        >
                          {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                        </button>
                        
                        <button 
                          onClick={nextVideo}
                          className="p-1 text-cyan-400 hover:text-cyan-300 transition cursor-pointer"
                          title="Next Demo Video"
                        >
                          <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* STANDBY HOLOGRAPHIC DIAGRAM LOOP */
                <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-slate-950 to-navy-900 flex flex-col justify-between p-5 overflow-hidden rounded-[38px]">
                  <div className="absolute inset-0 pointer-events-none bg-dots opacity-40"></div>
                  
                  {/* Top phone widgets */}
                  <div className="flex justify-between items-center text-[8px] font-mono text-slate-500">
                    <span className="flex items-center gap-1">
                      <Compass size={8} className="text-cyan-400 rotate-12" /> COORD LOCKED
                    </span>
                    <span>STANDBY VIDEO FEED</span>
                  </div>

                  {/* Active radar overlay system layout */}
                  <div className="my-auto relative flex flex-col items-center justify-center space-y-4">
                    <div className="relative w-28 h-28 rounded-full border border-dashed border-cyan-500/15 flex items-center justify-center">
                      <div className="absolute inset-4 rounded-full border border-double border-blue-500/20 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-400/30 flex items-center justify-center relative animate-pulse">
                          <Navigation size={22} className="text-cyan-400 animate-bounce" />
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-full border-t border-cyan-400/30 animate-[spin_4s_linear_infinite]" />
                    </div>

                    <div className="text-center space-y-2 z-10 px-4">
                      <div className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest animate-pulse leading-none">
                        AR VIEWPORT ACTIVE
                      </div>
                      <p className="text-[9px] text-slate-600 dark:text-slate-400 uppercase font-bold tracking-wider leading-none">
                        Drag & Drop Screen capture
                      </p>
                      <p className="text-[8px] text-slate-500 font-sans leading-tight">
                        Or click below to load an on-campus navigation session walkthrough MP4
                      </p>
                    </div>
                  </div>

                  {/* Glassmorphic interactive action deck */}
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/5 space-y-1.5 text-left relative overflow-hidden">
                    <div className="flex justify-between items-center text-[7px] font-mono text-slate-600 dark:text-slate-400 leading-none">
                      <span>WALKTHROUGH PLAYER</span>
                      <span className="text-cyan-400 font-bold">READY</span>
                    </div>
                    
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full py-1.5 bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-500/20 rounded-lg text-[9px] font-mono text-cyan-400 font-bold tracking-wider uppercase transition text-center cursor-pointer"
                    >
                      Click to Select MP4
                    </button>
                  </div>
                </div>
              )}
              
              {/* Phone Speaker & Camera Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-24 bg-slate-100 bg-[#020617] rounded-b-xl z-50"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
