import React, { useState } from 'react';
import { SectionTitle, Typography } from '../components/ui/Typography';
import { ProjectGrid } from '../components/ProjectGrid';

const ALL_PROJECTS = [
  {
    title: 'Portfolio Personal',
    description: 'Portfolio desarrollado con React, TypeScript y Tailwind CSS v4. Diseño inspirado en periódicos clásicos.',
    imageUrl: 'https://res.cloudinary.com/dhhxrrgut/image/upload/v1779546415/perfilHarryuPotter_izo22p.jpg',
    imageClassName: 'object-contain object-center',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/Miguelean1/Portfolio',
  },
  {
    title: 'Dikë',
    description: 'Red social de donaciones e intercambio. Plataforma que conecta personas para compartir intercambiar, y donar.',
    imageUrl: 'https://res.cloudinary.com/dhhxrrgut/image/upload/v1779034345/logonoborder.png',
    imageClassName: 'object-contain object-center',
    tags: ['React', 'Node.js', 'Figma', 'MySQL'],
  },
  {
    title: 'Gaming Mashup',
    description: 'Aplicación que combina múltiples APIs externas del mundo gaming para mostrar información cruzada de juegos, personajes y rankings.',
    imageUrl: 'https://res.cloudinary.com/dhhxrrgut/image/upload/v1779549863/mashup_hxuynb.png',
    tags: ['APIs externas', 'HTML', 'Node.js'],
    githubUrl: 'https://github.com/Miguelean1/Gaming-mashup',
  },
  {
    title: 'Toy Robot',
    description: 'Simulación de un robot de juguete que se mueve sobre una cuadrícula, desarrollada con JavaScript vanilla.',
    imageUrl: 'https://res.cloudinary.com/dhhxrrgut/image/upload/v1770232888/capturaToyRobot1_xeeo3q.png',
    tags: ['HTML', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/Miguelean1/Toy-Robot',
  },
  {
    title: 'Choreomania!',
    description: 'Wheel of doom — ruleta interactiva desarrollada con JavaScript, HTML, y CSS. Y testeada con Jest!.',
    imageUrl: 'https://res.cloudinary.com/dhhxrrgut/image/upload/v1761728336/Group_174_ouevqk.jpg',
    tags: ['JavaScript', 'HTML', 'Jest', 'CSS', 'Git'],
    githubUrl: 'https://github.com/Miguelean1/Choreomania',
  },
];

const ITEMS_PER_PAGE = 6;

export function Projects() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(ALL_PROJECTS.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = ALL_PROJECTS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <SectionTitle title="Proyectos" subtitle="Cosas que he construido" />
      <div className="mb-12 max-w-2xl">
        <Typography variant="p">
          Algunos de mis proyectos:
        </Typography>
      </div>

      <ProjectGrid
        projects={currentProjects}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
