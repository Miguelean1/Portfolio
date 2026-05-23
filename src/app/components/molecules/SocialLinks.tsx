import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../atoms/Button';
import { cn } from '../../utils/cn';

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Button variant="icon" size="icon" aria-label="GitHub">
        <Github className="w-5 h-5" />
      </Button>
      <Button variant="icon" size="icon" aria-label="LinkedIn">
        <Linkedin className="w-5 h-5" />
      </Button>
      <Button variant="icon" size="icon" aria-label="Email">
        <Mail className="w-5 h-5" />
      </Button>
    </div>
  );
}
