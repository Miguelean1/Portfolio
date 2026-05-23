import React from 'react';
import { cn } from '../../utils/cn';

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'lead' | 'small' | 'muted';
  as?: React.ElementType;
}

export function Typography({ className, variant = 'p', as, ...props }: TypographyProps) {
  const Component = as || (variant.startsWith('h') ? variant : 'p');

  return (
    <Component
      className={cn(
        "font-['Playfair_Display',serif]",
        {
          "scroll-m-20 text-4xl font-black tracking-tight lg:text-6xl text-[#1a1a1a] uppercase text-center border-y-4 border-double border-[#1a1a1a] py-6 my-6": variant === 'h1',
          "scroll-m-20 border-b-2 border-[#1a1a1a] pb-2 text-3xl font-bold tracking-tight first:mt-0 text-[#1a1a1a] uppercase": variant === 'h2',
          "scroll-m-20 text-2xl font-bold tracking-tight text-[#2b2b2b]": variant === 'h3',
          "scroll-m-20 text-xl font-bold tracking-tight text-[#1a1a1a]": variant === 'h4',
          "leading-8 text-[#333] [&:not(:first-child)]:mt-6 font-['Merriweather',serif] text-justify": variant === 'p',
          "text-xl text-[#444] font-['Merriweather',serif] italic": variant === 'lead',
          "text-sm font-medium leading-none": variant === 'small',
          "text-sm text-[#555] font-['Merriweather',serif]": variant === 'muted',
        },
        className
      )}
      {...props}
    />
  );
}

export function SectionTitle({ title, subtitle, className }: { title: string, subtitle?: string, className?: string }) {
  return (
    <div className={cn("mb-8 md:mb-12 border-b-4 border-[#1a1a1a] pb-4", className)}>
      <Typography variant="h2" className="border-none pb-0 text-[#1a1a1a] font-black uppercase tracking-widest text-3xl mb-2 text-center md:text-left">{title}</Typography>
      {subtitle && <Typography variant="h3" className="mt-2 text-center md:text-left italic text-[#444] font-normal">{subtitle}</Typography>}
    </div>
  );
}
