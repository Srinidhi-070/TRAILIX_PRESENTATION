import { TeamMember, FeatureItem, WorkflowStep, TechItem, PerformanceMetric, ProjectScreen, StatCard } from './types';

export const HERO_HIGHLIGHTS = [
  'AR-Powered Navigation',
  'QR-Based Localization',
  'AI-Assisted Guidance',
  'Multi-Floor Routing',
  'Real-Time Pathfinding',
  'Offline Navigation Support'
];

export const ABOUT_PROJECT = {
  title: 'Redefining Campus Navigation',
  description: 'Finding classrooms, laboratories, offices, and campus facilities can be challenging, especially for new students and visitors. Traditional navigation methods often rely on static maps and signboards that provide limited guidance and require manual interpretation.\n\nTrailix addresses this challenge through an intelligent navigation ecosystem that combines Augmented Reality, spatial mapping, and AI-powered assistance. By overlaying digital navigation cues directly onto the user\'s surroundings, Trailix delivers an intuitive and immersive navigation experience that reduces confusion and improves accessibility across campus environments.'
};

export const PROBLEM_STATEMENT = {
  title: 'Why Traditional Navigation Falls Short',
  subtitle: 'Large educational institutions often contain multiple buildings, floors, departments, and facilities spread across vast areas. Visitors and students frequently encounter difficulties locating their destinations.',
  challenges: [
    { id: 'c1', title: 'Difficulty understanding campus layouts', desc: 'Complex layouts of large campuses cause confusion when navigating.' },
    { id: 'c2', title: 'Limited effectiveness of printed maps', desc: 'Static printed materials fail to reflect relocations or floor level switches.' },
    { id: 'c3', title: 'Poor indoor GPS performance', desc: 'Concrete roofing restricts satellite sight lines causing up to 20m of drift.' },
    { id: 'c4', title: 'Time lost searching for locations', desc: 'Considerable minutes wasted during critical hours seeking lab rooms.' },
    { id: 'c5', title: 'Lack of real-time navigation assistance', desc: 'No step-by-step guidance system for continuous heading feedback.' },
    { id: 'c6', title: 'Inconvenient route planning across multiple floors', desc: 'Deciphering staircase alignments and elevators is difficult manually.' }
  ],
  footer: 'These limitations create frustration and reduce the overall campus experience.'
};

// Legacy stats mapped for problem indicators
export const LATENCY_STATS: StatCard[] = [
  {
    id: 'GPS_LOSS',
    value: '20 Meters',
    label: 'Standard GPS error indoors',
    change: 'Renders conventional 2D maps completely unusable',
    icon: 'MapPinOff'
  },
  {
    id: 'TIME_LOST',
    value: '12 Minutes',
    label: 'Average visitor search overhead',
    change: 'Spent finding specific departments or seminar halls',
    icon: 'Clock'
  },
  {
    id: 'COMPLEXITY',
    value: 'Multi-Floor',
    label: 'Vertical Navigation Drifts',
    change: 'Absence of staircases alignment inside physical spaces',
    icon: 'Layers'
  }
];

export const OUR_SOLUTION = {
  title: 'Meet Trailix',
  subtitle: 'Trailix combines advanced AR technology, intelligent pathfinding algorithms, and QR-based indoor localization to create a comprehensive navigation solution.\n\nInstead of following traditional maps, users receive live visual guidance directly through their smartphone camera, making navigation natural and effortless.',
  features: [
    {
      id: 'ar_nav',
      title: 'AR Navigation',
      description: 'Displays real-time navigation arrows and route indicators directly within the camera view.',
      category: 'AR VISUALS',
      icon: 'Compass'
    },
    {
      id: 'qr_loc',
      title: 'QR Localization',
      description: 'Uses strategically placed QR codes to determine the user\'s precise indoor location.',
      category: 'LOCALIZATION',
      icon: 'QrCode'
    },
    {
      id: 'smart_path',
      title: 'Intelligent Pathfinding',
      description: 'Utilizes the A* algorithm to compute optimal routes efficiently.',
      category: 'PATHFINDING',
      icon: 'Waypoints'
    },
    {
      id: 'ai_ast',
      title: 'AI Navigation Assistant',
      description: 'Allows users to search destinations using natural language queries.',
      category: 'LLM ENGINE',
      icon: 'Sparkles'
    },
    {
      id: 'multi_floor',
      title: 'Multi-Floor Navigation',
      description: 'Provides seamless transitions between floors using staircases and elevators.',
      category: 'GRADUAL GRAPH',
      icon: 'Layers'
    },
    {
      id: 'offline_support',
      title: 'Offline Support',
      description: 'Maintains navigation capabilities even when backend connectivity is unavailable.',
      category: 'LOCAL SYNC',
      icon: 'WifiOff'
    }
  ]
};

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 1,
    title: 'Launch Application',
    description: 'The user opens the Trailix mobile application.',
    icon: 'Smartphone'
  },
  {
    id: 2,
    title: 'QR-Based Localization',
    description: 'The system scans a nearby QR code and determines the user\'s current position.',
    icon: 'QrCode'
  },
  {
    id: 3,
    title: 'Destination Selection',
    description: 'Users choose a destination through the navigation interface or AI assistant.',
    icon: 'Search'
  },
  {
    id: 4,
    title: 'Route Computation',
    description: 'The A* pathfinding engine calculates the shortest available route.',
    icon: 'Waypoints'
  },
  {
    id: 5,
    title: 'AR Route Generation',
    description: 'The navigation route is transformed into AR visual elements.',
    icon: 'Route'
  },
  {
    id: 6,
    title: 'Real-Time Guidance',
    description: 'Directional arrows and navigation cues guide the user toward the destination.',
    icon: 'Compass'
  },
  {
    id: 7,
    title: 'Arrival',
    description: 'The system confirms successful arrival and provides destination information.',
    icon: 'CheckCircle'
  }
];

export const TECH_STACK: TechItem[] = [
  // Frontend
  {
    name: 'Unity 2022.3 LTS',
    category: 'frontend',
    logoText: 'U',
    variant: 'classic',
    description: 'Provides high-performance AR rendering and interactive user experiences.'
  },
  {
    name: 'AR Foundation',
    category: 'frontend',
    logoText: 'ARF',
    variant: 'cyan',
    description: 'Enables cross-platform augmented reality development.'
  },
  {
    name: 'ARCore',
    category: 'frontend',
    logoText: 'AC',
    variant: 'electric',
    description: 'Supports accurate motion tracking and environment understanding.'
  },
  {
    name: 'C#',
    category: 'frontend',
    logoText: 'C#',
    variant: 'classic',
    description: 'Used for application logic and AR interaction management.'
  },
  // Backend
  {
    name: 'FastAPI',
    category: 'backend',
    logoText: '⚡',
    variant: 'cyan',
    description: 'Provides high-performance API services and asynchronous communication.'
  },
  {
    name: 'Python',
    category: 'backend',
    logoText: 'Py',
    variant: 'electric',
    description: 'Powers navigation logic, AI processing, and backend services.'
  },
  {
    name: 'Ollama',
    category: 'backend',
    logoText: '🦙',
    variant: 'classic',
    description: 'Enables local AI-powered conversational assistance.'
  },
  {
    name: 'REST APIs',
    category: 'backend',
    logoText: '{}',
    variant: 'cyan',
    description: 'Facilitate communication between frontend and backend modules.'
  },
  // Algorithms
  {
    name: 'A* Pathfinding Algorithm',
    category: 'algorithms',
    logoText: 'A*',
    variant: 'electric',
    description: 'Efficiently computes shortest navigation routes between locations.'
  },
  {
    name: 'Semantic Search',
    category: 'algorithms',
    logoText: 'SS',
    variant: 'classic',
    description: 'Matches user queries with campus destinations using AI-powered text understanding.'
  }
];

export const ARCHITECTURE = {
  title: 'Intelligent Client-Server Design',
  description: 'Trailix follows a modular architecture that separates navigation, localization, AI processing, and visualization into independent components.',
  components: [
    'Mobile AR Application',
    'QR Localization Engine',
    'Navigation Controller',
    'Pathfinding Engine',
    'AI Chat Service',
    'FastAPI Backend',
    'Graph-Based Campus Model',
    'AR Visualization Layer'
  ],
  footer: 'This architecture ensures scalability, maintainability, and future extensibility.'
};

export const PERFORMANCE_RESULTS = {
  title: 'Real-World Performance',
  description: 'The system was evaluated through extensive testing across multiple Android devices and campus environments.',
  footer: 'These results demonstrate the reliability and efficiency of Trailix in real-world navigation scenarios.',
  metrics: [
    {
      id: 'p1',
      value: '95.5',
      unit: '%',
      label: 'QR Detection Accuracy',
      details: 'Robust sub-second localization scan, operating flawlessly in ambient shadows & angles.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'p2',
      value: '200',
      unit: 'ms',
      label: 'Average Pathfinding Latency',
      details: 'Near-instantaneous optimization of the entire multi-floor campus graph on FastAPI.',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      id: 'p3',
      value: '60',
      unit: 'FPS',
      label: 'AR Rendering Rate',
      details: 'Silky smooth spatial overlays on modern iOS & Android devices using Unity AR Foundation.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'p4',
      value: '96',
      unit: '%+',
      label: 'AI Destination Recognition',
      details: 'Semantic recognition of diverse queries into coordinate nodes via llama embeddings.',
      color: 'from-pink-500 to-rose-400'
    },
    {
      id: 'p5',
      value: '180',
      unit: 'MB',
      label: 'Memory Footprint',
      details: 'Low RAM budget achieved via mesh optimization, letting it run on budget phones easily.',
      color: 'from-orange-400 to-amber-500'
    },
    {
      id: 'p6',
      value: '6.0',
      unit: '%/h',
      label: 'Battery Optimization',
      details: 'Optimal background loop cycles preserving charge during active guidance journeys.',
      color: 'from-blue-400 to-cyan-400'
    }
  ]
};

export const KEY_ACHIEVEMENTS = {
  title: 'What Makes Trailix Unique',
  achievements: [
    {
      title: 'Real-Time AR Navigation',
      description: 'Provides immersive visual guidance directly in the user\'s environment.'
    },
    {
      title: 'Indoor Localization',
      description: 'Accurate QR-based positioning where GPS signals are unreliable.'
    },
    {
      title: 'Intelligent Assistance',
      description: 'AI-powered chatbot simplifies destination discovery.'
    },
    {
      title: 'Optimized Performance',
      description: 'Fast route generation with low resource consumption.'
    },
    {
      title: 'Scalable Architecture',
      description: 'Designed for future expansion into larger smart environments.'
    }
  ]
};

export const FUTURE_SCOPE = {
  title: 'Beyond Campus Navigation',
  description: 'Trailix provides a foundation for broader smart-environment navigation solutions.',
  longTermVision: 'Transform Trailix into a universal indoor navigation platform capable of supporting hospitals, airports, shopping malls, museums, corporate campuses, and smart city environments.',
  enhancements: [
    'Voice-Guided Navigation',
    'iOS Platform Support',
    'Real-Time Occupancy Tracking',
    'Cloud Synchronization',
    'Multi-Campus Navigation',
    'IoT Integration',
    'Smart Building Connectivity',
    'Advanced Computer Vision Localization'
  ]
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Srinidhi N S',
    role: 'AR & Spatial Systems Engineer',
    usn: '1MS23AD402',
    bio: 'Responsible for AR system development, spatial mapping, localization integration, and navigation visualization.',
    skills: ['Unity Engine', 'AR Foundation', 'C# Development', 'Spatial Alignment'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Rudrapratap Patil',
    role: 'Full-Stack Developer',
    usn: '1MS22AD047',
    bio: 'Managed project coordination, frontend-backend integration, UI development, and overall system testing.',
    skills: ['React Native', 'TypeScript', 'WebSockets', 'Frontend UI/UX'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Raghu C',
    role: '3D Environment Architect',
    usn: '1MS22AD042',
    bio: 'Designed and optimized 3D assets, environments, and visual components used within the AR experience.',
    skills: ['Blender 3D', 'Mesh Optimization', 'Graph Mapping', 'CAD Layouts'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Mallesh N',
    role: 'AI & Backend Specialist',
    usn: '1MS22AD033',
    bio: 'Developed backend services, AI-assisted navigation features, semantic search capabilities, and API infrastructure.',
    skills: ['FastAPI', 'Python', 'A* Pathfinding', 'Ollama Embeddings'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  }
];

export const PROJECT_GUIDE = {
  name: 'Dr. Vaneeta M',
  role: 'Associate Professor',
  department: 'Department of Artificial Intelligence and Data Science',
  institution: 'M. S. Ramaiah Institute of Technology',
  description: 'Her guidance and technical expertise played a vital role in the successful design, development, and implementation of the Trailix platform.'
};

export const FOOTER_TAGLINE = {
  brand: 'TRAILIX',
  tagline: 'Empowering Smart Campus Navigation Through Augmented Reality and Spatial Intelligence.',
  department: 'Department of Artificial Intelligence and Data Science',
  institution: 'M. S. Ramaiah Institute of Technology, Bengaluru'
};

// Map Screens used in the results viewport
export const GALLERY_SCREENS: ProjectScreen[] = [
  {
    id: 'main_screen',
    title: 'Main App Screen',
    description: 'A polished glassmorphic campus dashboard containing fast-travel panels, current level metrics, offline databases status, and active routing stats.',
    imageSeed: 'campus_dashboard',
    tag: 'INTELLIGENT HUD'
  },
  {
    id: 'qr_scanner',
    title: 'QR Localization Engine',
    description: 'Immersive sub-second visual scanner frame. Re-anchors vertical coordinates directly against hardware drift without relying on shaky external satellites.',
    imageSeed: 'qr_scanner_frame',
    tag: 'LOCALIZATION'
  },
  {
    id: 'destination_search',
    title: 'Smart Search Hub',
    description: 'Combines dynamic search with custom categories (Depts, Labs, Parking, Food) and shows distance to targets before drawing path routes.',
    imageSeed: 'search_destination',
    tag: 'SEMANTIC INTERFACE'
  },
  {
    id: 'ar_navigation',
    title: 'AR Guide HUD',
    description: 'The crowning visual feat. Superimposes path arrows, level indices, real-time metrics, and custom boundaries directly onto the camera view.',
    imageSeed: 'augmented_reality_view',
    tag: 'SPATIAL RENDER'
  },
  {
    id: 'ai_assistant',
    title: 'AI Conversational Concierge',
    description: 'Direct live messaging stream with Ollama. Allows asking conversational questions and provides custom route directions with detailed instructions.',
    imageSeed: 'ai_chat_assistant',
    tag: 'OLLAMA LLM'
  }
];
