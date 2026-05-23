import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Button } from './ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectGridProps {
  projects: React.ComponentProps<typeof ProjectCard>[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function ProjectGrid({ projects, currentPage, totalPages, onPageChange }: ProjectGridProps) {
  return (
    <div className="flex flex-col w-full space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <span className="text-sm text-[#333] font-medium font-['Playfair_Display']">
            Página {currentPage} de {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
