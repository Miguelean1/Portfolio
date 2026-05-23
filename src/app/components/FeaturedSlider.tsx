import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectCard } from './ProjectCard';

interface FeaturedSliderProps {
  projects: React.ComponentProps<typeof ProjectCard>[];
}

export function FeaturedSlider({ projects }: FeaturedSliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full -mx-2 slick-dark-theme">
      <style>{`
        .slick-dark-theme .slick-dots li button:before { color: #94a3b8; }
        .slick-dark-theme .slick-dots li.slick-active button:before { color: #1a1a1a; }
        .slick-dark-theme .slick-prev:before, .slick-dark-theme .slick-next:before { color: #1a1a1a; }
        .slick-dark-theme .slick-slide > div { padding: 0 8px; }
        .slick-dark-theme .slick-list { margin: 0 -8px; }
      `}</style>
      <Slider {...settings}>
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} className="h-full" />
        ))}
      </Slider>
    </div>
  );
}
