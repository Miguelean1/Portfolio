import React from 'react';
import { Outlet } from 'react-router';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#eaddc5] text-[#1a1a1a] selection:bg-[#333]/20 font-['Merriweather',serif]">
      <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] z-0"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow w-full max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20 border-x-4 border-double border-[#1a1a1a]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
