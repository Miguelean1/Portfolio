import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';

const navItems = [
  { name: 'About', path: '/' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-[#1a1a1a] bg-[#eaddc5] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-black font-['Playfair_Display'] text-[#1a1a1a] tracking-widest uppercase flex items-center gap-2">
            Mike-dev
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-bold tracking-widest uppercase transition-colors hover:text-[#555] font-['Playfair_Display']",
                  location.pathname === item.path ? "text-[#1a1a1a] border-b-2 border-[#1a1a1a]" : "text-[#333]"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-[#1a1a1a] hover:text-[#555] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t-2 border-[#1a1a1a] bg-[#f4ecd8] absolute top-16 left-0 w-full z-50">
          <div className="flex flex-col space-y-4 px-4 py-6 shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-bold tracking-widest uppercase transition-colors font-['Playfair_Display']",
                  location.pathname === item.path ? "text-[#1a1a1a]" : "text-[#444]"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
