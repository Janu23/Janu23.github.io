
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';

interface ProjectCardProps {
  id: string;
  title: string;
  year: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, year, description, image }) => {
  const { t } = useLanguage();

  return (
    <Link
      to={`/project/${id}`}
      className="block"
      aria-label={`${title} - ${year}. ${description.substring(0, 100)}...`}
    >
      <div className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition duration-300 cursor-pointer">
        <div className="relative aspect-video w-full overflow-hidden mb-4 border-2 border-black">
          <img
            src={image.replace('.avif', '-360w.avif')}
            srcSet={`${image.replace('.avif', '-360w.avif')} 360w, ${image.replace('.avif', '-720w.avif')} 720w, ${image} 1920w`}
            alt={`${title} project screenshot`}
            className="w-full h-full object-cover"
            loading="lazy"
            width="400"
            height="225"
            sizes="(max-width: 768px) 340px, (max-width: 1024px) 400px, 500px"
            decoding="async"
          />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <h6 className="text-xs font-bold mb-2">{year}</h6>
        <p className="text-gray-700 mb-4 text-sm line-clamp-3">{description}</p>
        <div className="inline-flex items-center text-black font-bold group">
          {t('learnMore')}
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
