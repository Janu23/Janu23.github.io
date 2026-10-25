import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';

interface ProjectCardProps {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  year,
  category,
  description,
  image,
  featured = false,
}) => {
  const { t, language } = useLanguage();

  return (
    <article className={featured ? 'md:col-span-2' : ''}>
      <Link
        to={`/project/${id}`}
        className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
        aria-label={`${title}, ${year}. ${description}`}
      >
        <div
          className={`h-full border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${
            featured ? 'lg:flex lg:items-stretch lg:gap-6' : ''
          }`}
        >
          <div className={`relative aspect-video overflow-hidden border-2 border-black ${featured ? 'lg:mb-0 lg:w-3/5 lg:shrink-0' : 'mb-4'}`}>
            <img
              src={image.replace('.avif', '-360w.avif')}
              srcSet={`${image.replace('.avif', '-360w.avif')} 360w, ${image.replace('.avif', '-720w.avif')} 720w, ${image} 1440w`}
              alt={language === 'pt' ? `Imagem do projeto ${title}` : `${title} project preview`}
              className="h-full w-full object-cover"
              loading={featured ? 'eager' : 'lazy'}
              width="720"
              height="405"
              sizes={featured ? '(max-width: 1024px) 100vw, 60vw' : '(max-width: 768px) 100vw, 50vw'}
              decoding="async"
            />
          </div>

          <div className={`flex flex-1 flex-col ${featured ? 'pt-4 lg:py-3' : ''}`}>
            {featured && (
              <span className="mb-3 w-fit border border-black bg-yellow-200 px-2 py-1 text-xs font-bold uppercase tracking-wide">
                {t('featuredProject')}
              </span>
            )}
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-600">{category}</p>
            <h3 className={`${featured ? 'text-2xl sm:text-3xl' : 'text-xl'} mb-2 font-bold`}>{title}</h3>
            <time dateTime={year} className="mb-3 block text-xs font-bold">{year}</time>
            <p className={`mb-5 text-sm leading-relaxed text-gray-700 ${featured ? '' : 'line-clamp-3'}`}>{description}</p>
            <span className="mt-auto inline-flex items-center font-bold">
              {t('learnMore')}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
