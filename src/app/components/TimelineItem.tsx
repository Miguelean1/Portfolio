import React from 'react';
import { Typography } from './ui/Typography';
import { cn } from '../utils/cn';

interface TimelineItemProps {
  title: string;
  organization: string;
  date: string;
  description: string[];
  isLast?: boolean;
}

export function TimelineItem({ title, organization, date, description, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8 md:pl-0">
      <div className="md:flex md:gap-8 lg:gap-12 md:items-start relative">

        {!isLast && (
          <div className="absolute left-[11px] md:left-[50%] md:-ml-[1px] top-8 bottom-[-2rem] w-[2px] bg-[#1a1a1a]" />
        )}

        <div className="absolute left-0 md:left-[50%] md:-ml-[6px] top-1.5 w-3 h-3 rounded-none border-2 border-[#1a1a1a] bg-[#1a1a1a] ring-4 ring-[#f4ecd8] z-10 rotate-45" />

        <div className="md:w-1/2 md:text-right md:pr-12 md:pt-1 mb-2 md:mb-0 text-[#1a1a1a] text-sm font-bold uppercase tracking-widest font-['Playfair_Display']">
          {date}
        </div>

        <div className="md:w-1/2 md:pl-12 pb-8 md:pb-12">
          <Typography variant="h4" className="text-[#1a1a1a] mb-1 uppercase tracking-wider">{title}</Typography>
          <Typography variant="h4" as="h5" className="text-[#333] text-sm font-bold mb-4 font-['Playfair_Display'] italic">{organization}</Typography>

          <ul className="space-y-2">
            {description.map((item, idx) => (
              <li key={idx} className="flex gap-2 items-start text-[#333] text-sm font-['Merriweather']">
                <span className="text-[#1a1a1a] mt-1.5 text-[10px]">■</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
