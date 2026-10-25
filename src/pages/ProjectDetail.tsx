import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { usePageMetadata } from '@/hooks/usePageMetadata';
import { getProject } from '@/data/projects';
import { assetUrl } from '@/lib/utils';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const project = getProject(id);
  const localizedProject = project?.[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const metadata = localizedProject && project
    ? {
        title: `${localizedProject.title} | Victor Januário`,
        description: localizedProject.summary,
        canonicalPath: `/project/${project.id}/`,
        imagePath: `/${project.detailImage}`,
      }
    : {
        title: language === 'pt' ? 'Projeto não encontrado | Victor Januário' : 'Project not found | Victor Januário',
        description: language === 'pt' ? 'O projeto solicitado não foi encontrado.' : 'The requested project could not be found.',
        canonicalPath: window.location.pathname,
        imagePath: '/lovable-uploads/profile-384.webp',
      };

  const schema = useMemo(
    () =>
      localizedProject && project
        ? {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: localizedProject.title,
            description: localizedProject.summary,
            url: `https://janu23.github.io/project/${project.id}/`,
            image: `https://janu23.github.io/${project.detailImage}`,
            creator: {
              '@type': 'Person',
              name: 'Victor Januário',
              url: 'https://janu23.github.io/',
            },
            dateCreated: project.year,
          }
        : undefined,
    [localizedProject, project],
  );

  usePageMetadata({ ...metadata, language, schema });

  if (!project || !localizedProject) {
    return (
      <div className="grid-bg min-h-screen font-mono">
        <Header />
        <main className="container mx-auto grid min-h-[70vh] place-items-center px-4">
          <div className="border-2 border-black bg-white p-8 text-center shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
            <h1 className="mb-5 text-2xl font-bold">{t('projectNotFound')}</h1>
            <Link to="/" className="inline-flex items-center font-bold underline">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" /> {t('backToHome')}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="grid-bg min-h-screen font-mono">
      <Header />

      <main className="container mx-auto px-4 pb-20 pt-10">
        <Link
          to="/"
          className="mb-8 inline-flex min-h-11 items-center font-bold underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          aria-label={t('backToHome')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" /> {t('backToHome')}
        </Link>

        <article className="border-2 border-black bg-white p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:p-8 lg:p-10">
          <header className="mb-8 max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-gray-600">{localizedProject.category} · {project.year}</p>
            <h1 className="mb-4 text-3xl font-bold sm:text-5xl">{localizedProject.title}</h1>
            <p className="text-base leading-relaxed text-gray-700 sm:text-xl">{localizedProject.summary}</p>
          </header>

          <div className="mb-10 aspect-video w-full overflow-hidden border-2 border-black bg-gray-100">
            <img
              src={assetUrl(project.detailImage)}
              alt={language === 'pt' ? `Imagem do projeto ${localizedProject.title}` : `${localizedProject.title} project preview`}
              className="h-full w-full object-cover"
              width="1440"
              height="810"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className="mb-10 grid gap-8 lg:grid-cols-2">
            <section aria-labelledby="challenge-heading" className="border-l-4 border-black pl-5">
              <h2 id="challenge-heading" className="mb-3 text-xl font-bold">{t('challenge')}</h2>
              <p className="leading-relaxed text-gray-700">{localizedProject.challenge}</p>
            </section>
            <section aria-labelledby="solution-heading" className="border-l-4 border-yellow-400 pl-5">
              <h2 id="solution-heading" className="mb-3 text-xl font-bold">{t('solution')}</h2>
              <p className="leading-relaxed text-gray-700">{localizedProject.solution}</p>
            </section>
          </div>

          <section aria-labelledby="highlights-heading" className="mb-10">
            <h2 id="highlights-heading" className="mb-4 text-xl font-bold">{t('highlights')}</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {localizedProject.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 border-2 border-black bg-gray-50 p-4">
                  <span className="mt-1 h-3 w-3 shrink-0 bg-yellow-400" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="technologies-heading" className="mb-10">
            <h2 id="technologies-heading" className="mb-4 text-xl font-bold">{t('technologiesUsed')}</h2>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li key={technology} className="border border-black bg-gray-100 px-3 py-2 text-sm font-bold">
                  {technology}
                </li>
              ))}
            </ul>
          </section>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 border-2 border-black bg-black px-5 py-3 font-bold text-white shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            aria-label={`${localizedProject.linkText} — ${localizedProject.title}`}
          >
            {localizedProject.linkText}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
