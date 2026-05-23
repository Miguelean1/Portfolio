import React from 'react';
import { cn } from '../utils/cn';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Typography } from './ui/Typography';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  className?: string;
  imageClassName?: string;
}

export function ProjectCard({ title, description, imageUrl, tags, githubUrl, demoUrl, className, imageClassName }: ProjectCardProps) {
  return (
    <div className={cn("group relative flex flex-col border-4 border-double border-[#1a1a1a] bg-[#f4ecd8] overflow-hidden transition-all duration-300 shadow-[4px_4px_0_0_#1a1a1a] hover:shadow-[6px_6px_0_0_#1a1a1a] hover:-translate-y-1", className)}>
      <div className="relative aspect-video w-full overflow-hidden border-b-2 border-[#1a1a1a] bg-[#eaddc5]">
        <img
          src={imageUrl}
          alt={title}
          className={cn("object-cover w-full h-full transition-transform duration-500 group-hover:scale-105", imageClassName)}
        />
        <div className="absolute inset-0 bg-[#f4ecd8]/20 mix-blend-multiply transition-colors duration-300 pointer-events-none" />
      </div>

      <div className="flex flex-col flex-grow p-6">
        <Typography variant="h4" className="mb-2 line-clamp-1 border-b border-[#1a1a1a] pb-2 uppercase tracking-widest text-xl">{title}</Typography>
        <Typography variant="p" className="text-sm mt-2 mb-4 line-clamp-3 flex-grow text-[#333]">
          {description}
        </Typography>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto pt-4 border-t-2 border-[#1a1a1a]">
          {githubUrl && (
            <Button variant="outline" size="sm" className="flex-1 gap-2" onClick={() => window.open(githubUrl, '_blank')}>
              <Github className="w-4 h-4" />
              <span>Code</span>
            </Button>
          )}
          {demoUrl && (
            <Button variant="primary" size="sm" className="flex-1 gap-2" onClick={() => window.open(demoUrl, '_blank')}>
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
