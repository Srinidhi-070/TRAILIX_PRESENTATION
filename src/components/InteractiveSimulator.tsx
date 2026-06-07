import React, { useState, useEffect, useRef } from 'react';
import { 
  Smartphone, QrCode, Search, Sparkles, Navigation, MapPin, 
  Layers, Bot, Send, Check, RotateCcw, Camera, ArrowRight,
  Battery, Signal, Wifi, ChevronRight, CornerDownRight, MessageSquare, Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MockLocation {
  id: string;
  name: string;
  floor: number;
  block: string;
  type: string;
}

const SHORTEST_PATH_NODES = [
  { id: 'start', name: 'MSRIT Entrance Block A', x: 20, y: 75, floor: 1 },
  { id: 'node1', name: 'Main Lobby QR Anchor', x: 35, y: 55, floor: 1 },
  { id: 'node2', name: 'Elevator Shaft A', x: 55, y: 55, floor: 1 },
  { id: 'node3_f2', name: 'Floor 2 Landing', x: 55, y: 55, floor: 2 },
  { id: 'node4_f2', name: 'AI & Data Science Corr', x: 45, y: 35, floor: 2 },
  { id: 'target', name: 'AI & DS Seminar Hall', x: 75, y: 25, floor: 2 }
];

const MOCK_CAMPUS_LOCATIONS: MockLocation[] = [
  { id: 'seminar_hall', name: 'AI & DS Seminar Hall', floor: 2, block: 'Apex Block', type: 'Laboratory' },
  { id: 'library', name: 'Central Library Hall', floor: 1, block: 'LHC Block', type: 'Facility' },
  { id: 'hod_office', name: 'HOD Office - Dept of AI & DS', floor: 2, block: 'Apex Block', type: 'Office' },
  { id: 'canteen', name: 'MSRIT Tech Canteen', floor: 1, block: 'Amenities Block', type: 'Social' },
  { id: 'ml_lab', name: 'Machine Learning Lab', floor: 3, block: 'Apex Block', type: 'Laboratory' },
  { id: 'admin_office', name: 'Main Office / Administrative Block', floor: 1, block: 'Main Block', type: 'Office' }
];

export default function InteractiveSimulator() {
  const [currentStep, setCurrentStep] = useState<'scan' | 'search' | 'pathfinding' | 'ar_view'>('scan');
  const [isScanning, setIsScanning] = useState(false);
  const [scannedLocation, setScannedLocation] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState<MockLocation | null>(null);
  const [computedPath, setComputedPath] = useState<typeof SHORTEST_PATH_NODES>([]);
  const [computingPath, setComputingPath] = useState(false);
  const [arStep, setArStep] = useState(0);
  const [chats, setChats] = useState<{ sender: 'user' | 'bot'; text: string; time: string }[]>([
    { sender: 'bot', text: 'Hello! I am Trailix Bot. Scan a QR code or type where you want to go.', time: '09:00' }
  ]);
  const [userChatInput, setUserChatInput] = useState('');

  // Simulator dynamic controls
  const handleScanQR = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScannedLocation('Entrance Block A - Ground Floor Anchor (MSRIT-ENT-G1)');
      setCurrentStep('search');
      setChats(prev => [
        ...prev,
        { sender: 'user', text: '[Scanned QR code at Entrance Anchor]', time: '09:01' },
        { sender: 'bot', text: 'Localization successful! Registered at Entrance Block A (Ground Level). Where is your destination today?', time: '09:01' }
      ]);
    }, 1500);
  };

  const handleSelectLocation = (loc: MockLocation) => {
    setSelectedDestination(loc);
    setSearchQuery(loc.name);
    setComputingPath(true);
    setCurrentStep('pathfinding');

    // Simulate A* computation
    setTimeout(() => {
      setComputedPath(SHORTEST_PATH_NODES);
      setComputingPath(false);
    }, 2000);
  };

  const handleStartNavigation = () => {
    setCurrentStep('ar_view');
    setArStep(0);
  };

  const handleChatSend = (customText?: string) => {
    const textToSend = customText || userChatInput;
    if (!textToSend.trim()) return;

    const newChatUser = { sender: 'user' as const, text: textToSend, time: '09:02' };
    setChats(prev => [...prev, newChatUser]);
    setUserChatInput('');

    // LLM simulation responses
    setTimeout(() => {
      let botText = "I tracked your query. Try scanning an anchor point so I can find you first!";
      if (textToSend.toLowerCase().includes('seminar') || textToSend.toLowerCase().includes('where') || textToSend.toLowerCase().includes('hall')) {
        botText = "AI & DS Seminar Hall is located on Floor 2 of the Apex Block. I have mapped an optimized A* route avoiding the current construction wing! Click 'Navigate' below the route grid to begin.";
        const targetLoc = MOCK_CAMPUS_LOCATIONS[0];
        setSelectedDestination(targetLoc);
        setSearchQuery(targetLoc.name);
        setComputedPath(SHORTEST_PATH_NODES);
        setCurrentStep('pathfinding');
      } else if (textToSend.toLowerCase().includes('library')) {
        botText = "Central Library is on the 1st floor of the LHC Block. I can route you through the shaded canopy walk. Let's calculate the route!";
        const targetLoc = MOCK_CAMPUS_LOCATIONS[1];
        setSelectedDestination(targetLoc);
        setSearchQuery(targetLoc.name);
        setComputedPath(SHORTEST_PATH_NODES);
        setCurrentStep('pathfinding');
      } else {
        botText = "I found matches matching your request on our campus grid layout! Let's localize first to build the navigation coordinates.";
      }

      setChats(prev => [
        ...prev,
        { sender: 'bot' as const, text: botText, time: '09:02' }
      ]);
    }, 1000);
  };

  const handleReset = () => {
    setCurrentStep('scan');
    setIsScanning(false);
    setScannedLocation(null);
    setSearchQuery('');
    setSelectedDestination(null);
    setComputedPath([]);
    setComputingPath(false);
    setArStep(0);
    setChats([
      { sender: 'bot', text: 'Hello! I am Trailix Bot. Scan a QR code or type where you want to go.', time: '09:00' }
    ]);
  };

  const filteredLocations = searchByQuery(searchQuery);

  function searchByQuery(query: string) {
    if (!query) return MOCK_CAMPUS_LOCATIONS;
    return MOCK_CAMPUS_LOCATIONS.filter(l => 
      l.name.toLowerCase().includes(query.toLowerCase()) || 
      l.block.toLowerCase().includes(query.toLowerCase()) ||
      l.type.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Pre-configured speech/AI inputs
  const presetQueries = [
    "Where is the AI & DS Seminar Hall?",
    "Show me the Central Library"
  ];

  return (
    <div id="demo-sandbox" className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-6 pb-12">
      
      {/* Left controls and explanation panel */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-mono font-medium tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            ACTIVE PROJECTS SANDBOX
          </div>
          
          <h3 className="text-3xl font-display font-medium text-black dark:text-white tracking-tight leading-snug">
            Experience the Spatial Intelligence Engine
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            We built an interactive campus simulator that demonstrates the direct relationship between <strong className="text-slate-800 dark:text-slate-200">QR Anchoring</strong>, <strong className="text-slate-800 dark:text-slate-200">A* Pathfinding</strong>, and <strong className="text-slate-800 dark:text-slate-200">Unity-aligned Augmented Reality routing overlay</strong>.
          </p>

          {/* Interactive instruction tabs */}
          <div className="mt-6 space-y-3">
            <div 
              onClick={() => setCurrentStep('scan')}
              className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer text-left ${
                currentStep === 'scan' 
                  ? 'bg-cyan-500/10 border-cyan-500/40' 
                  : 'bg-transparent border-slate-300 dark:border-slate-800/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-1.5 rounded-lg ${currentStep === 'scan' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                  <QrCode size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-800 dark:text-slate-200">Step 1: Instantly Localize with QR</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Indoor GPS has structural errors. Scanning a high-contrast QR anchor matches the phone instantly to the precise campus coordinates.</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => scannedLocation ? setCurrentStep('search') : handleScanQR()}
              className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer text-left ${
                currentStep === 'search' 
                  ? 'bg-cyan-500/10 border-cyan-500/40' 
                  : 'bg-transparent border-slate-300 dark:border-slate-800/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-1.5 rounded-lg ${currentStep === 'search' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                  <Search size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-800 dark:text-slate-200">Step 2: Dual Intelligent Query Mode</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Select departments via instant dropdown query list, or type/ask questions directly to our offline Ollama LLM assistant router.</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => selectedDestination ? setCurrentStep('pathfinding') : null}
              className={`p-3 rounded-xl border transition-all duration-300 text-left ${
                selectedDestination ? 'cursor-pointer hover:border-slate-700' : 'cursor-not-allowed opacity-50'
              } ${
                currentStep === 'pathfinding' 
                  ? 'bg-cyan-500/10 border-cyan-500/40' 
                  : 'bg-transparent border-slate-300 dark:border-slate-800/60'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-1.5 rounded-lg ${currentStep === 'pathfinding' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                  <Layers size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-800 dark:text-slate-200">Step 3: A* Multi-Level Compute</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Our server calculates short-route nodes across rooms, hallways, stairwells, and lifts on MSRIT campus topology graph.</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => computedPath.length > 0 ? setCurrentStep('ar_view') : null}
              className={`p-3 rounded-xl border transition-all duration-300 text-left ${
                computedPath.length > 0 ? 'cursor-pointer hover:border-slate-700' : 'cursor-not-allowed opacity-50'
              } ${
                currentStep === 'ar_view' 
                  ? 'bg-cyan-500/10 border-cyan-500/40' 
                  : 'bg-transparent border-slate-300 dark:border-slate-800/60'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-1.5 rounded-lg ${currentStep === 'ar_view' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                  <Navigation size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-800 dark:text-slate-200">Step 4: Immersive 3D AR Guide Overlay</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">The system projects 3D spatial guide vectors on the camera screen back-to-back with a heads-up telemetry display.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action guidelines helper */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-left">
          <div className="flex gap-2 text-slate-700 dark:text-slate-300 text-xs items-center mb-2 font-semibold">
            <Info size={14} className="text-cyan-400" />
            <span>HOW TO RUN DEMO</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Use the smartphone frame to the right. Scan the QR code, select <strong className="text-cyan-400">"AI & DS Seminar Hall"</strong>, compute the shortest path, and explore the active holographic route walkthrough! You can tap <strong className="text-slate-700 dark:text-slate-300">Reset</strong> anytime.
          </p>
          <div className="flex gap-2 mt-4">
            <button 
              id="resetBtn"
              onClick={handleReset}
              className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono rounded-lg transition duration-150 inline-flex items-center gap-1.5"
            >
              <RotateCcw size={12} />
              Reset Engine
            </button>
            <div className="text-xs font-mono text-slate-500 ml-auto self-center select-none">
              v1.0.4 Release-Ready
            </div>
          </div>
        </div>
      </div>

      {/* Right Smartphone Simulator Mockup */}
      <div className="lg:col-span-7 flex justify-center items-center">
        <div className="relative w-full max-w-[340px] md:max-w-[360px] aspect-[9/19] bg-slate-50 dark:bg-slate-950 rounded-[48px] p-3 shadow-2xl border-4 border-slate-300 dark:border-slate-800/90 ring-12 ring-slate-900/60 flex flex-col overflow-hidden">
          
          {/* Phone Top Speaker and Camera Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-slate-50 dark:bg-slate-950 rounded-b-2xl z-50 flex items-center justify-center gap-1.5">
            <div className="w-12 h-1 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-white dark:bg-slate-900 rounded-full border border-slate-300 dark:border-slate-800/80"></div>
          </div>

          {/* Internal Phone Header with carrier, time, battery widgets */}
          <div className="flex justify-between items-center px-6 pt-5 pb-2 text-[10px] font-mono text-slate-600 dark:text-slate-400 select-none z-30 font-medium">
            <span>09:24 AM</span>
            <div className="flex items-center gap-1">
              <Signal size={10} className="text-slate-700 dark:text-slate-300" />
              <Wifi size={10} className="text-slate-700 dark:text-slate-300" />
              <div className="w-5 h-2.5 rounded-sm border border-slate-400/60 p-0.5 flex items-center">
                <div className="h-full w-4/5 bg-cyan-400 rounded-2xs"></div>
              </div>
            </div>
          </div>

          {/* Core App Display Area */}
          <div className="relative flex-1 bg-slate-50 dark:bg-slate-950 rounded-[38px] overflow-hidden flex flex-col border border-slate-900">
            
            {/* Top Interactive App Bar */}
            <div className="px-4 py-3 bg-white dark:bg-slate-900/95 border-b border-slate-200 dark:border-white/5 flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-xs font-display font-bold tracking-wider text-black dark:text-white">TRAILIX</span>
              </div>
              <div className="text-[9px] font-mono bg-cyan-50 dark:bg-cyan-950 text-cyan-400 px-1.5 py-0.5 rounded border border-cyan-800/30">
                {currentStep === 'scan' ? 'LOCALIZING' : currentStep === 'search' ? 'SEARCH' : currentStep === 'pathfinding' ? 'A* CORE' : 'AR LIVE'}
              </div>
            </div>

            {/* Simulated Content Frame */}
            <div className="flex-1 relative flex flex-col overflow-hidden">
              <AnimatePresence mode="wait">
                
                {/* 1. QR CODE SCANNING VIEW */}
                {currentStep === 'scan' && (
                  <motion.div 
                    key="scan-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col p-4 justify-between"
                  >
                    <div className="text-center pt-2">
                      <h4 className="text-xs font-medium text-slate-800 dark:text-slate-200">Align with Campus Anchor</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">Anchors are distributed near college entrance & lifts</p>
                    </div>

                    {/* QR Camera Feed Mockup */}
                    <div className="relative aspect-square w-full max-w-[200px] mx-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 overflow-hidden flex items-center justify-center">
                      {/* Interactive Animation Camera feed effect */}
                      <div className="absolute inset-2 border border-dashed border-slate-700 rounded-lg flex items-center justify-center">
                        
                        {/* Simulated QR Code structure */}
                        <div className="w-24 h-24 bg-white p-2 rounded-md relative flex flex-wrap gap-1">
                          <div className="w-6 h-6 border-4 border-slate-950 rounded-xs"></div>
                          <div className="w-6 h-6 flex justify-end"><div className="w-3 h-3 bg-slate-50 dark:bg-slate-950"></div></div>
                          <div className="w-full flex justify-between">
                            <div className="w-12 h-6 bg-slate-50 dark:bg-slate-950 rounded-xs"></div>
                            <div className="w-6 h-6 border-4 border-slate-950 rounded-xs"></div>
                          </div>
                          
                          {/* Scan laser animation */}
                          <div className="absolute left-0 right-0 top-0 h-0.5 bg-cyan-400 shadow-lg shadow-cyan-500/50 animate-[bounce_2s_infinite]"></div>
                        </div>
                      </div>

                      {isScanning ? (
                        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950/80 flex flex-col items-center justify-center text-center gap-2">
                          <div className="w-6 h-6 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin"></div>
                          <span className="text-[10px] font-mono text-cyan-400">DECRYPTING MARKER...</span>
                        </div>
                      ) : (
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[9px] text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950/90 px-2 py-0.5 rounded-full border border-slate-300 dark:border-slate-800">
                          <Camera size={10} className="text-cyan-400" />
                          <span>MSRIT_ENT_G1</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <button
                        onClick={handleScanQR}
                        disabled={isScanning}
                        className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-black dark:text-white font-medium text-xs rounded-xl shadow-lg transition-all duration-150 flex items-center justify-center gap-2"
                      >
                        <QrCode size={14} />
                        {isScanning ? 'Scanning...' : 'Scan Campus QR Code'}
                      </button>
                      <button 
                        onClick={() => {
                          setScannedLocation('Manual Entry Block - Lobby');
                          setCurrentStep('search');
                        }}
                        className="w-full py-1.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-mono rounded-lg transition"
                      >
                        Bypass Scan (Manual Entry)
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* 2. DESTINATION SEARCH VIEW */}
                {currentStep === 'search' && (
                  <motion.div 
                    key="search-view"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col p-3"
                  >
                    {/* Active Localized Anchor Info */}
                    <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-500/20 mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 overflow-hidden">
                        <MapPin size={12} className="text-cyan-400 flex-shrink-0" />
                        <div className="text-left overflow-hidden">
                          <div className="text-[8px] font-mono text-cyan-400 leading-none">CURRENT LOCAL ANCHOR</div>
                          <div className="text-[9px] text-slate-800 dark:text-slate-200 truncate mt-0.5 font-medium">Entrance Block A (G Floor)</div>
                        </div>
                      </div>
                      <span className="text-[8px] font-mono bg-cyan-500/20 text-cyan-300 py-0.5 px-1.5 rounded-full">ACTIVE</span>
                    </div>

                    {/* Integrated AI Assistant Chat trigger */}
                    <div className="mb-3 rounded-lg bg-white dark:bg-slate-900 p-2 border border-slate-300 dark:border-slate-800/80">
                      <div className="flex items-center gap-1 text-[9px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        <Bot size={11} className="text-cyan-400" />
                        <span>QUICK CHAT COMPASS (OLLAMA LLM)</span>
                      </div>
                      <div className="text-[10px] text-slate-600 dark:text-slate-400 text-left line-clamp-1 mb-1.5 bg-slate-50 dark:bg-slate-950 px-1.5 py-1 rounded">
                        {chats[chats.length - 1].text}
                      </div>
                      <div className="flex gap-1">
                        {presetQueries.map((q, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleChatSend(q)}
                            className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-[8px] px-1.5 py-0.5 rounded leading-tight transition text-left truncate flex-1"
                          >
                            "{idx === 0 ? 'Where Seminar Hall?' : 'Find Library'}"
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Autocomplete Input Search Field */}
                    <div className="relative mb-2">
                      <Search size={12} className="absolute left-2.5 top-2.5 text-slate-500" />
                      <input 
                        type="text"
                        placeholder="Search Room, Dept, lab, lifts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-black dark:text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>

                    {/* Scrollable list items */}
                    <div className="flex-1 overflow-y-auto no-scrollbar space-y-1.5">
                      <div className="text-[9px] font-mono text-slate-500 text-left px-1">CAMPUS GRID DIRECTORY</div>
                      {filteredLocations.map(loc => (
                        <div 
                          key={loc.id}
                          onClick={() => handleSelectLocation(loc)}
                          className="p-2 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 hover:border-cyan-500/20 hover:bg-white dark:hover:bg-slate-900 text-left cursor-pointer transition flex items-center justify-between"
                        >
                          <div>
                            <div className="text-[10px] font-medium text-slate-800 dark:text-slate-200">{loc.name}</div>
                            <div className="text-[8px] text-slate-500 mt-0.5">{loc.block} • Floor {loc.floor}</div>
                          </div>
                          <span className="text-[8px] font-mono text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-900/30 px-1 py-0.5 rounded">
                            {loc.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* 3. A* PATHFINDING NODE GRAPH COMPUTE VIEW */}
                {currentStep === 'pathfinding' && (
                  <motion.div 
                    key="pathfinding-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col p-3"
                  >
                    <div className="text-left mb-2">
                      <div className="text-[8px] font-mono text-cyan-400">RESOLVING A* PATH HEURISTICS</div>
                      <h4 className="text-[11px] font-medium text-slate-800 dark:text-slate-200 mt-0.5">Building Floor Coordinate Graph</h4>
                    </div>

                    {/* Static Campus Node Network Grid SVG Mapping */}
                    <div className="flex-1 relative bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-300 dark:border-slate-800 p-2 overflow-hidden flex flex-col justify-between">
                      
                      {/* Node connectivity canvas representation */}
                      <div className="relative w-full h-[140px] border border-slate-200 dark:border-white/5 rounded-lg bg-slate-50 dark:bg-slate-950 bg-grid-pattern">
                        
                        {/* Background mesh structure edges */}
                        <svg className="absolute inset-0 w-full h-full">
                          {/* Inactive secondary paths */}
                          <line x1="20%" y1="75%" x2="55%" y2="75%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3,3" />
                          <line x1="35%" y1="55%" x2="45%" y2="35%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                          <line x1="55%" y1="55%" x2="75%" y2="55%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                          {/* Dynamic Active Computed Paths */}
                          <line x1="20%" y1="75%" x2="35%" y2="55%" stroke="#0A5CC4" strokeWidth="2.5" className="animate-[pulse_2s_infinite]" />
                          <line x1="35%" y1="55%" x2="55%" y2="55%" stroke="#0A5CC4" strokeWidth="2.5" />
                          {/* Floor hop animation indicator */}
                          <line x1="55%" y1="55%" x2="55%" y2="55%" stroke="#1BC8C8" strokeWidth="3" />
                          <line x1="55%" y1="55%" x2="45%" y2="35%" stroke="#1BC8C8" strokeWidth="2.5" strokeDasharray="2,2" />
                          <line x1="45%" y1="35%" x2="75%" y2="25%" stroke="#1BC8C8" strokeWidth="2.5" />
                        </svg>

                        {/* Interactive dynamic computing pulses */}
                        {computingPath && (
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-3 rounded-xl bg-slate-50 dark:bg-slate-950/90 border border-slate-300 dark:border-slate-800 text-center gap-1 z-10 w-[140px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]"></span>
                            <span className="text-[8px] font-mono text-slate-600 dark:text-slate-400 block mt-1 ml-1">EVALUATING NODES</span>
                          </div>
                        )}

                        {/* Render node circles */}
                        {SHORTEST_PATH_NODES.map((node, index) => (
                          <div 
                            key={node.id}
                            className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
                            style={{ left: `${node.x}%`, top: `${node.y}%` }}
                          >
                            <div className={`w-3 h-3 rounded-full flex items-center justify-center transition-all duration-300 ${
                              index === 0 ? 'bg-blue-500 ring-4 ring-blue-500/20' : 
                              index === SHORTEST_PATH_NODES.length - 1 ? 'bg-cyan-400 ring-4 ring-cyan-400/30' : 
                              'bg-slate-700 border border-slate-600'
                            }`} />
                          </div>
                        ))}

                        {/* Node Tooltips */}
                        <div className="absolute top-2 left-2 text-[7px] font-mono bg-white dark:bg-slate-900/90 text-slate-600 dark:text-slate-400 py-0.5 px-1 rounded border border-slate-200 dark:border-white/5">
                          Start: MSRIT Gate [G]
                        </div>
                        <div className="absolute bottom-2 right-2 text-[7px] font-mono bg-cyan-50 dark:bg-cyan-950/90 text-cyan-400 py-0.5 px-1 rounded border border-cyan-900/40">
                          Target: F2 Sem Hall
                        </div>
                      </div>

                      {/* Path Details and Metric Calculations */}
                      <div className="p-2 space-y-1 bg-slate-50 dark:bg-slate-950/80 rounded-xl border border-slate-200 dark:border-white/5 text-[9px] font-mono text-left">
                        <div className="flex justify-between text-slate-600 dark:text-slate-400">
                          <span>Computed Nodes:</span>
                          <span className="text-black dark:text-white">6 Segment Intersect</span>
                        </div>
                        <div className="flex justify-between text-slate-600 dark:text-slate-400">
                          <span>Total Distance:</span>
                          <span className="text-black dark:text-white">124 meters</span>
                        </div>
                        <div className="flex justify-between text-slate-600 dark:text-slate-400">
                          <span>Vertical Change:</span>
                          <span className="text-cyan-400">+1 Floor Level Lift</span>
                        </div>
                        <div className="flex justify-between text-slate-600 dark:text-slate-400">
                          <span>Estimated Time:</span>
                          <span className="text-black dark:text-white">~1.4 mins walk</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={() => setCurrentStep('search')}
                        className="py-1.5 px-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-[10px] rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleStartNavigation}
                        className="flex-1 py-1 px-4 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black dark:text-white font-medium text-xs rounded-xl shadow-lg transition-all duration-150 flex items-center justify-center gap-1.5"
                      >
                        <Navigation size={12} className="animate-pulse" />
                        Start 3D AR Guide
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* 4. CAMERA AR MODE NAVIGATION VIEW */}
                {currentStep === 'ar_view' && (
                  <motion.div 
                    key="ar-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col justify-between"
                  >
                    
                    {/* Upper HUD indicators */}
                    <div className="p-2 bg-white dark:bg-slate-900/90 border-b border-slate-200 dark:border-white/5 z-10 text-left relative">
                      <div className="flex justify-between items-center text-[8px] font-mono text-slate-600 dark:text-slate-400 mb-1">
                        <span className="flex items-center gap-0.5"><Layers size={8} /> LEVEL 2 APEX</span>
                        <span className="text-cyan-400">EST: 35s • 42m remaining</span>
                      </div>
                      <div className="text-[10px] text-slate-800 dark:text-slate-200 mt-1 font-semibold flex items-center gap-1 leading-normal">
                        <CornerDownRight size={10} className="text-cyan-400" />
                        {arStep === 0 && "Turn Left onto the Floor 2 corridor"}
                        {arStep === 1 && "Continue straight towards the Seminar Hall"}
                        {arStep === 2 && "Destination reached! Entrance on your left."}
                      </div>
                    </div>

                    {/* Camera Feed Simulator Canvas Background */}
                    <div className="flex-1 relative bg-gradient-to-b from-navy-900 to-slate-950 overflow-hidden flex items-center justify-center p-4">
                      
                      {/* Grid overlays mapping */}
                      <div className="absolute inset-0 pointer-events-none bg-dots"></div>
                      
                      {/* Interactive Holographic overlay lines & arrows */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        
                        {/* Vanishing viewpoint boundaries */}
                        <path d="M 0 160 L 120 70 L 180 70 L 300 160" fill="rgba(10, 92, 196, 0.05)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                        
                        {arStep === 0 && (
                          <>
                            {/* Blue road lines guiding left */}
                            <path d="M 150 160 L 140 100 L 90 90 L 50 95" fill="none" stroke="#16a34a" strokeWidth="6" strokeLinecap="round" strokeDasharray="6,6" className="animate-[pulse_1.5s_infinite]" />
                            <path d="M 150 160 L 140 100 L 90 90 L 50 95" fill="none" stroke="#1BC8C8" strokeWidth="2" strokeLinecap="round" />
                          </>
                        )}

                        {arStep === 1 && (
                          <>
                            {/* Straight arrow road */}
                            <path d="M 150 160 L 150 75" fill="none" stroke="#16a34a" strokeWidth="6" strokeLinecap="round" strokeDasharray="6,6" className="animate-[pulse_1.5s_infinite]" />
                            <path d="M 150 160 L 150 75" fill="none" stroke="#00d8d6" strokeWidth="3" />
                          </>
                        )}

                        {arStep === 2 && (
                          <>
                            {/* Highlight destination aura at left side */}
                            <circle cx="90" cy="85" r="28" fill="rgba(27,200,200,0.15)" stroke="#1BC8C8" strokeWidth="1" strokeDasharray="3,3" className="animate-ping" />
                            <circle cx="90" cy="85" r="14" fill="rgba(27,200,200,0.3)" stroke="#1BC8C8" strokeWidth="2.5" />
                          </>
                        )}
                      </svg>

                      {/* Display live holographic UI over card */}
                      <div className="relative text-center flex flex-col items-center justify-center space-y-2 select-none pointer-events-none">
                        
                        {arStep === 0 && (
                          <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-white dark:bg-slate-900/90 px-3 py-1.5 rounded-xl border border-cyan-500/30 text-black dark:text-white text-[10px] font-mono flex items-center gap-1 shadow-lg shadow-cyan-900/20"
                          >
                            <Navigation size={12} className="-rotate-90 text-cyan-400" />
                            <span>TURN LEFT [12m]</span>
                          </motion.div>
                        )}

                        {arStep === 1 && (
                          <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-white dark:bg-slate-900/90 px-3 py-1.5 rounded-xl border border-cyan-500/30 text-black dark:text-white text-[10px] font-mono flex items-center gap-1 shadow-lg shadow-cyan-900/20"
                          >
                            <Navigation size={12} className="text-green-400" />
                            <span>GO STRAIGHT [30m]</span>
                          </motion.div>
                        )}

                        {arStep === 2 && (
                          <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-gradient-to-r from-cyan-950 to-emerald-950 px-4 py-2 rounded-xl border border-emerald-500/40 text-black dark:text-white text-[9px] font-semibold flex flex-col items-center shadow-2xl"
                          >
                            <Check size={14} className="text-emerald-400 mb-0.5" />
                            <span className="text-[10px] text-emerald-300">ARRIVED</span>
                            <span className="text-slate-600 dark:text-slate-400 font-normal">AI & DS Seminar Hall</span>
                          </motion.div>
                        )}

                        <div className="text-[7px] font-mono text-slate-500 bg-black/5 dark:bg-black/40 px-1 py-0.5 rounded backdrop-blur-2xs mt-2">
                          Unity Core Anchored • Pose Validated
                        </div>
                      </div>

                      {/* Dynamic distance indicator ring on screen border */}
                      <div className="absolute bottom-2 left-2 text-[8px] font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900/85 py-1 px-1.5 rounded-lg border border-slate-200 dark:border-white/5 flex flex-col text-left">
                        <span className="text-[6px] text-slate-500">ACCURACY</span>
                        <span className="text-cyan-400 font-bold">± 0.28m</span>
                      </div>

                      <div className="absolute bottom-2 right-2 text-[8px] font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900/85 py-1 px-1.5 rounded-lg border border-slate-200 dark:border-white/5 flex flex-col text-right">
                        <span className="text-[6px] text-slate-500">DEVIATION</span>
                        <span className="text-emerald-400 font-bold">0% (A*)</span>
                      </div>
                    </div>

                    {/* Navigation walkthrough controls inside mobile */}
                    <div className="p-2.5 bg-white dark:bg-slate-900/95 border-t border-slate-200 dark:border-white/5 flex items-center justify-between gap-2">
                      <button
                        onClick={() => {
                          if (arStep > 0) {
                            setArStep(arStep - 1);
                          } else {
                            setCurrentStep('pathfinding');
                          }
                        }}
                        className="py-1 px-2.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-[10px] hover:bg-slate-700 transition"
                      >
                        Back
                      </button>
                      
                      <div className="flex gap-1 justify-center flex-1">
                        {[0, 1, 2].map(s => (
                          <div 
                            key={s} 
                            className={`w-1.5 h-1.5 rounded-full ${s === arStep ? 'bg-cyan-400' : 'bg-slate-700'}`} 
                          />
                        ))}
                      </div>

                      {arStep < 2 ? (
                        <button
                          onClick={() => setArStep(arStep + 1)}
                          className="py-1 px-3 bg-cyan-600 hover:bg-cyan-500 text-black dark:text-white rounded-lg text-[10px] font-semibold transition"
                        >
                          Next Step
                        </button>
                      ) : (
                        <button
                          onClick={handleReset}
                          className="py-1 px-2 bg-emerald-600 hover:bg-emerald-500 text-black dark:text-white text-[10px] rounded-lg font-semibold transition inline-flex items-center gap-1"
                        >
                          <RotateCcw size={10} /> Finish
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
