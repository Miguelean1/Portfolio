import React from 'react';
import { SectionTitle, Typography } from '../components/ui/Typography';
import { Badge } from '../components/ui/Badge';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Visual Basic 6'],
  },
  {
    title: 'Bases de datos',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Herramientas',
    skills: ['Git', 'GitHub', 'Figma', 'Jest', 'Vite'],
  },
];

export function Skills() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
      <SectionTitle title="Skills" subtitle="Tecnologías y herramientas" />

      <div className="mb-12">
        <Typography variant="p">
          Tecnologías con las que he trabajado:
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title} className="bg-[#eaddc5] p-8 border-4 border-double border-[#1a1a1a] shadow-[6px_6px_0_0_#1a1a1a] relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#1a1a1a]" />
            <Typography variant="h3" className="mb-6 text-[#1a1a1a] text-xl border-b-2 border-[#1a1a1a] pb-2 uppercase tracking-widest font-['Playfair_Display']">
              {category.title}
            </Typography>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="default">{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
