import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../utils/cn';

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Button variant="icon" size="icon" aria-label="GitHub" asChild>
        <a href="https://github.com/Miguelean1" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5" />
        </a>
      </Button>
      <Button variant="icon" size="icon" aria-label="LinkedIn" asChild>
        <a href="https://www.linkedin.com/in/miguelean1" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5" />
        </a>
      </Button>
    </div>
  );
}
