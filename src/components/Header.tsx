import React, { useState, useEffect } from 'react';
import { Smartphone, Menu, X, Landmark, Compass } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'Live Simulator', href: '#demo' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'Team', href: '#team' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
      scrolled 
        ? 'py-3 bg-[#020617]/85 border-b border-white/10 shadow-2xl' 
        : 'py-4 bg-[#020617]/45 border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition duration-300">
            <img src="/logo.png" alt="Trailix Logo" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-2xl font-black text-white tracking-tight leading-none group-hover:text-cyan-400 transition">TRAILIX</span>
            <span className="text-[10px] text-cyan-400 font-bold tracking-[0.2em] uppercase mt-0.5 leading-none">Spatial Intelligence</span>
          </div>
        </a>

        {/* DESKTOP LINKS */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400 font-sans">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="hover:text-white transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTAS */}
        <div className="hidden md:flex items-center gap-4">
          <div className="text-[10px] font-mono text-slate-500 self-center hidden lg:block tracking-widest">
            MSRIT DEPT OF AI & DS
          </div>
          <a
            href="#demo"
            className="px-5 py-2 bg-white text-black rounded-full font-bold hover:bg-slate-200 transition-colors inline-flex items-center gap-1.5 shadow-md text-xs font-sans"
          >
            <Smartphone size={13} />
            Watch Demo
          </a>
        </div>

        {/* MOBILE MENU TRIGGER */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white bg-slate-900/60 rounded-lg border border-slate-800 transition"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* MOBILE NAV PANEL */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-lg border-b border-slate-800 py-4 px-6 absolute top-full left-0 right-0 space-y-4">
          <div className="flex flex-col gap-3.5 text-left">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono text-slate-200 hover:text-cyan-400 transition uppercase tracking-wider block py-1.5"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-3">
            <span className="text-[9px] font-mono text-slate-500 text-left">
              M. S. Ramaiah Institute of Technology
            </span>
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-xs font-mono text-white rounded-xl font-semibold block"
            >
              Launch Live Simulator
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
