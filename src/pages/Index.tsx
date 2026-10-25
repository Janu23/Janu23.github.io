import React, { useMemo } from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Terminal from '@/components/Terminal';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import SocialButtons from '@/components/SocialButtons';
import { useLanguage } from '@/hooks/useLanguage';
import { usePageMetadata } from '@/hooks/usePageMetadata';
import { projects } from '@/data/projects';
import { assetUrl } from '@/lib/utils';

const Index = () => {
  const { t, language } = useLanguage();

  const content = {
    en: {
      role: 'Full Stack Developer',
      headline: 'I turn complex problems into clear digital products.',
      intro: 'I build web, mobile, and cloud experiences from product idea to production, combining thoughtful interfaces with reliable engineering.',
      viewProjects: 'View projects',
      contactMe: 'Get in touch',
      about: 'I work across mobile solutions with Android and Kotlin, backend systems with Kotlin, Java, and Spring, and modern web applications with React, Next.js, and Node.js. My work also includes AWS, Supabase, relational and document databases, and data analysis with Power BI.\n\nI care about clean architecture, accessible interfaces, and products that solve real problems. Beyond code, I play the trumpet, collect vinyl records, read with my book club, and rarely turn down a chess match.',
      pageDescription: 'Portfolio of Victor Januário, a Full Stack Developer building web, mobile, and cloud products with React, Next.js, Kotlin, Java, and AWS.',
    },
    pt: {
      role: 'Desenvolvedor Full Stack',
      headline: 'Transformo problemas complexos em produtos digitais claros.',
      intro: 'Construo experiências web, mobile e cloud da ideia à produção, combinando interfaces bem pensadas com engenharia confiável.',
      viewProjects: 'Ver projetos',
      contactMe: 'Entrar em contato',
      about: 'Atuo com soluções mobile em Android e Kotlin, sistemas backend com Kotlin, Java e Spring e aplicações web modernas com React, Next.js e Node.js. Meu trabalho também envolve AWS, Supabase, bancos relacionais e de documentos e análise de dados com Power BI.\n\nValorizo arquitetura limpa, interfaces acessíveis e produtos que resolvem problemas reais. Fora do código, toco trompete, coleciono discos, participo de um clube de leitura e dificilmente recuso uma partida de xadrez.',
      pageDescription: 'Portfólio de Victor Januário, Desenvolvedor Full Stack de produtos web, mobile e cloud com React, Next.js, Kotlin, Java e AWS.',
    },
  }[language];

  const schema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Victor Januário',
      jobTitle: content.role,
      url: 'https://janu23.github.io/',
      image: 'https://janu23.github.io/lovable-uploads/profile-384.webp',
      sameAs: ['https://github.com/Janu23', 'https://www.linkedin.com/in/victor-januario/'],
      knowsAbout: ['Full Stack Development', 'React', 'Next.js', 'Kotlin', 'Java', 'AWS'],
    }),
    [content.role],
  );

  usePageMetadata({
    title: language === 'pt' ? 'Victor Januário | Desenvolvedor Full Stack' : 'Victor Januário | Full Stack Developer',
    description: content.pageDescription,
    canonicalPath: '/',
    imagePath: '/lovable-uploads/profile-384.webp',
    language,
    schema,
  });

  return (
    <div className="grid-bg min-h-screen font-mono">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border-2 focus:border-black focus:bg-white focus:px-4 focus:py-2 focus:font-bold"
      >
        {t('skipToContent')}
      </a>

      <Header />

      <main id="main-content" className="container mx-auto px-4">
        <section className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16" aria-labelledby="hero-heading">
          <div className="order-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -bottom-3 -right-3 h-full w-full border-2 border-black bg-yellow-200" aria-hidden="true" />
              <img
                src={assetUrl('lovable-uploads/profile-192.webp')}
                srcSet={`${assetUrl('lovable-uploads/profile-192.webp')} 192w, ${assetUrl('lovable-uploads/profile-384.webp')} 384w`}
                alt="Victor Januário"
                className="relative h-48 w-48 border-4 border-black object-cover sm:h-56 sm:w-56"
                width="224"
                height="224"
                sizes="(max-width: 640px) 192px, 224px"
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="order-2 text-center lg:text-left">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-gray-600">Victor Januário · {content.role}</p>
            <h1 id="hero-heading" className="mb-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {content.headline}
            </h1>
            <p className="mx-auto mb-7 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg lg:mx-0">{content.intro}</p>

            <div className="mb-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center gap-2 border-2 border-black bg-black px-5 py-3 font-bold text-white shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                {content.viewProjects}
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:victorjdacruz@gmail.com"
                className="inline-flex min-h-12 items-center gap-2 border-2 border-black bg-white px-5 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {content.contactMe}
              </a>
            </div>

            <SocialButtons />
          </div>
        </section>

        <section className="mb-20 scroll-mt-24" id="about" aria-labelledby="about-heading">
          <h2 id="about-heading" className="mb-6 border-b-2 border-black pb-2 text-2xl font-bold md:text-3xl">
            {t('about')}
          </h2>
          <div className="border-2 border-black bg-white p-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] sm:p-5">
            <Terminal aboutText={content.about} />
          </div>
        </section>

        <section className="mb-20 scroll-mt-24" id="projects" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="mb-6 border-b-2 border-black pb-2 text-2xl font-bold md:text-3xl">
            {t('projects')}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project) => {
              const localizedProject = project[language];
              return (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={localizedProject.title}
                  year={project.year}
                  category={localizedProject.category}
                  description={localizedProject.summary}
                  image={assetUrl(project.image)}
                  featured={project.featured}
                />
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
