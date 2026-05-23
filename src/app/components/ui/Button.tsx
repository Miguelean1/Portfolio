import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center text-sm font-bold uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] disabled:pointer-events-none disabled:opacity-50 font-['Playfair_Display']",
          {
            "bg-[#1a1a1a] text-[#eaddc5] hover:bg-[#333] border-2 border-[#1a1a1a]": variant === 'primary',
            "bg-[#333] text-[#eaddc5] hover:bg-[#444] border-2 border-[#333]": variant === 'secondary',
            "border-2 border-[#1a1a1a] bg-transparent hover:bg-[#1a1a1a] hover:text-[#eaddc5] text-[#1a1a1a]": variant === 'outline',
            "hover:bg-[#1a1a1a]/10 text-[#1a1a1a]": variant === 'ghost',
            "bg-transparent hover:bg-[#1a1a1a]/10 text-[#333] hover:text-[#1a1a1a]": variant === 'icon',
            "h-9 px-3": size === 'sm',
            "h-10 px-4 py-2": size === 'md',
            "h-12 px-8": size === 'lg',
            "h-10 w-10": size === 'icon',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
