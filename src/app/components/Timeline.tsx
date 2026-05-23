import React from 'react';
import { TimelineItem } from './TimelineItem';

interface TimelineProps {
  items: React.ComponentProps<typeof TimelineItem>[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
}
