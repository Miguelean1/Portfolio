import React from 'react';
import { Typography } from '../components/ui/Typography';
import { SocialLinks } from '../components/SocialLinks';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router';
import { FileText, ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col gap-24">
      <section className="flex flex-col-reverse md:flex-row items-center gap-12 pt-8">
        <div className="flex-1 space-y-6">
          <div>
            
            <Typography variant="h1" className="mb-4">
              EL TIPO
            </Typography>
            <Typography variant="h3" className="text-2xl md:text-4xl text-[#333] font-['Merriweather'] italic mb-4 font-normal text-center md:text-left">
              Un breve resumen de mi vida
            </Typography>
          </div>

          <Typography variant="p" className="text-lg max-w-2xl">
            Hola! Soy Mike. Después de muchos años en otros sectores, decidí reciclarme y empezar en el desarrollo web. A pesar de ser bueno con las matemáticas, los problemas de lógica, y cosas así
             la programación me parecía un mundo completamente nuevo. Sin embargo, todo se enseña, y todo se aprende. Así que con algo de café y muchas horas de pantalla, 
             me convertí en un desarrollador web. Si has llegado hasta aquí, quizás deberías echar un vistazo a algunos de mis proyectos. 
             

          </Typography>

          <div className="flex items-center justify-center md:justify-start gap-6 pt-8 pb-8 border-b-2 border-[#1a1a1a] mb-8">
            <Button asChild size="lg" className="gap-2">
              <Link to="/projects">
                Proyectos <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <FileText className="w-4 h-4" /> Currículum
            </Button>
          </div>

          <div className="pt-4 flex items-center justify-center md:justify-start gap-4">
            <span className="text-sm font-bold text-[#1a1a1a] uppercase tracking-widest font-['Playfair_Display']">Contáctame aquí:</span>
            <SocialLinks />
          </div>
        </div>

        <div className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0 group mx-auto">
          <div className="absolute inset-0 border-4 border-double border-[#1a1a1a] translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 z-0 bg-[#eaddc5]" />
          <div className="absolute inset-0 bg-[#eaddc5] border-4 border-[#1a1a1a] z-10 overflow-hidden filter grayscale contrast-125 sepia-[.4] hover:sepia-0 transition-all duration-500">
            <img
              src="https://res.cloudinary.com/dhhxrrgut/image/upload/v1779546415/perfilHarryuPotter_izo22p.jpg"
              alt="Portrait"
              className="w-full h-full object-cover mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-[#f4ecd8]/30 mix-blend-multiply pointer-events-none" />
          </div>
        </div>
      </section>

    </div>
  );
}
