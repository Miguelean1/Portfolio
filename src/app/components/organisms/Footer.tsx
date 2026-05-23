import React from 'react';
import { SocialLinks } from '../molecules/SocialLinks';
import { Typography } from '../atoms/Typography';

export function Footer() {
  return (
    <footer className="w-full border-t-4 border-double border-[#1a1a1a] bg-[#eaddc5] py-8 mt-auto relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <Typography variant="muted" className="text-[#333] font-bold font-['Playfair_Display'] uppercase">
          © {new Date().getFullYear()} Mike-dev. All Rights Reserved.
        </Typography>
        <SocialLinks />
      </div>
    </footer>
  );
}
