import React from 'react';
import { Typography } from '../ui/Typography';

export function Footer() {
  return (
    <footer className="w-full border-t-4 border-double border-[#1a1a1a] bg-[#eaddc5] py-8 mt-auto relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-center">
        <Typography variant="muted" className="text-[#333] font-bold font-['Playfair_Display'] uppercase">
          © {new Date().getFullYear()} Mike-dev. All Rights Reserved.
        </Typography>
      </div>
    </footer>
  );
}
