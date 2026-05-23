import React from 'react';
import { SectionTitle } from '../components/ui/Typography';
import { Timeline } from '../components/Timeline';

const EXPERIENCE_DATA = [
  {
    title: 'Desarrollador web JR',
    organization: 'Kong consulting',
    date: '2026 - Presente',
    description: [
      'Desarrollo de aplicaciones web con Angular y Node.js.',
      'Colaboración en equipo usando Git y metodologías ágiles.',
      'Mantenimiento de código legacy en Visual Basic 6.',
      'Gestión de CRM'
    ]
  },
];

const EDUCATION_DATA = [
  {
    title: 'Técnico superior en desarrollo de aplicaciones web',
    organization: 'Centro de estudios e innovación (CEI)',
    date: '2024 - 2026',
    description: [
      'Formación en desarrollo frontend y backend.',
      'Tratamiento de bases de datos SQL y NoSQL.',
      'Diseño en Figma',
      'Control de versiones con Git'
    ]
  },
];

export function Experience() {
  return (
    <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <SectionTitle title="Experiencia" subtitle="Dónde he trabajado" />
        <Timeline items={EXPERIENCE_DATA} />
      </section>

      <section>
        <SectionTitle title="Formación" subtitle="Mi trayectoria académica" />
        <Timeline items={EDUCATION_DATA} />
      </section>
    </div>
  );
}
