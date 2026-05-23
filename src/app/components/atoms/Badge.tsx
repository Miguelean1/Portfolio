import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline';
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center border-2 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:ring-offset-2 font-['Playfair_Display']",
          {
            "border-[#1a1a1a] bg-[#1a1a1a] text-[#eaddc5] hover:bg-[#333]": variant === 'default',
            "text-[#1a1a1a] border-[#1a1a1a] bg-transparent": variant === 'outline',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';
