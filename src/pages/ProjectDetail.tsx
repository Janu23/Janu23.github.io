import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { assetUrl } from '@/lib/utils';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectsData = {
    project5: {
      en: {
        title: "BrassFlow",
        description: "Guided daily practice for B♭ brass instruments in the browser.",
        fullDescription: "I developed BrassFlow as a browser-based music practice platform for B♭ brass players. The experience combines focused five-minute sessions, instrument-specific microphone calibration, real-time pitch and stability feedback, and a structured learning roadmap. Practice history, streaks, XP, and achievements help players build a consistent routine and understand what to improve next.\n\nThe production application is built with Next.js and TypeScript, uses Supabase for authentication and data, analyzes audio directly in the browser, and runs on AWS infrastructure. BrassFlow is currently in public beta and supports B♭ trumpet, cornet, and flugelhorn without requiring an app installation or professional microphone.",
        technologies: ["Next.js", "TypeScript", "React", "Supabase", "AWS", "Web Audio API"],
        linkText: "Visit BrassFlow"
      },
      pt: {
        title: "BrassFlow",
        description: "Prática diária guiada para instrumentos de metal em Sib diretamente no navegador.",
        fullDescription: "Desenvolvi o BrassFlow como uma plataforma de estudo musical no navegador para instrumentistas de metais em Sib. A experiência reúne sessões focadas de cinco minutos, calibração do microfone específica por instrumento, feedback de afinação e estabilidade em tempo real e um roadmap estruturado de aprendizagem. O histórico de prática, as sequências, o XP e as conquistas ajudam o músico a criar uma rotina consistente e entender o que precisa melhorar.\n\nA aplicação em produção foi construída com Next.js e TypeScript, usa Supabase para autenticação e dados, analisa áudio diretamente no navegador e roda em infraestrutura AWS. O BrassFlow está em beta público e oferece suporte a trompete, cornet e flugelhorn em Sib, sem exigir instalação de aplicativo ou microfone profissional.",
        technologies: ["Next.js", "TypeScript", "React", "Supabase", "AWS", "Web Audio API"],
        linkText: "Acessar BrassFlow"
      },
      image: "projects/p05-01brassflow.avif",
      link: "https://brassflow.app"
    },
    project1: {
      en: {
        title: "Cartography of Memories",
        description: "A collaborative project that transforms personal stories from the Covid-19 pandemic into an immersive sound map.",
        fullDescription: "A collaborative project that documents personal experiences during the COVID-19 pandemic through georeferenced oral accounts. Initially developed under the Emergency Laboratory | COVID-19, the initiative brings together a multidisciplinary collective of artists, researchers, developers, and educators committed to preserving the collective memory of this historic period. The project invites the public to contribute their own testimonies and share the platform, aiming to build a diverse archive that reflects the multiple perspectives on this global event. \n\nConducted on a non-profit basis, the project is supported by the Open Society Foundations, managed by the Centre for Applied Human Rights at the University of York (UK), as part of the program [Art + Activism Against Repression During the COVID-19 Crisis]. This partnership reinforces the commitment to documenting not only facts but also the human and social dimensions of the pandemic, transforming individual memories into an accessible collective heritage.",
        technologies: ["Javascript", "PHP", "Mapbox", "AWS S3"],
        linkText: "View Project"
      },
      pt: {
        title: "Cartografia das Memórias",
        description: "É um projeto colaborativo que transforma histórias pessoais da pandemia da Covid-19 em um mapa sonoro.",
        fullDescription: "É um projeto colaborativo que documenta, através de relatos orais georreferenciados, as experiências pessoais durante a pandemia de Covid-19. Desenvolvido inicialmente no âmbito do Laboratório de Emergência | Covid-19, a iniciativa reúne um coletivo multidisciplinar de artistas, pesquisadores, desenvolvedores e educadores comprometidos com a preservação da memória coletiva desse período histórico. O projeto convida o público a contribuir com seus próprios relatos e a compartilhar a plataforma, visando construir um arquivo diversificado que reflita as múltiplas perspectivas sobre este evento global. \n\nRealizado sem fins lucrativos, o projeto conta com o apoio da Open Society Foundations, gerenciado pelo Centro de Direitos Humanos Aplicados da Universidade de York (Reino Unido), no âmbito do programa [Arte + Ativismo Contra a Repressão Durante a Crise da Covid-19]. Essa parceria reforça o compromisso em documentar não apenas os fatos, mas também as dimensões humanas e sociais da pandemia, transformando memórias individuais em um patrimônio coletivo acessível a todos.",
        technologies: ["Javascript", "PHP", "Mapbox", "AWS S3"],
        linkText: "Ver Projeto"
      },
      image: "projects/p01-02cartografias.avif",
      link: "https://cartografiadasmemorias.org"
    },
    project2: {
      en: {
        title: "Quizz App",
        description: "",
        fullDescription: "Developed Quizz App as an interactive educational game testing knowledge of all 26 Brazilian state flags plus the Federal District. Combines learning with fun through visual identification challenges.\n\nKey learning objectives included mastering:\n\n-Signed bundle (AAB) preparation.\n-Store listing assets creation.\n-Google policy compliance adjustments.\n-The app remains published as a result of this process.",
        technologies: ["Android", "Kotlin"],
        linkText: "View Project"
      },
      pt: {
        title: "Quizz App",
        description: "",
        fullDescription: "Desenvolvi o Quizz App como um jogo educativo interativo que testa conhecimentos sobre as bandeiras dos 26 estados brasileiros e do Distrito Federal. O aplicativo combina aprendizagem com diversão através de um desafio de identificação visual.\n\nO projeto teve como objetivo adicional dominar o processo completo de publicação na Google Play Store, incluindo:\n\n-Preparação do pacote assinado (AAB).\n-Criação de materiais de divulgação (screenshots, descrição).\n-Submissão e ajustes para compliance com políticas Google.\n-O app permanece disponível como resultado deste aprendizado.",
        technologies: ["Android", "Kotlin"],
        linkText: "Ver Projeto"
      },
      image: "projects/p02-02quizz.avif",
      link: "https://github.com/Janu23/Flags"
    },
    project3: {
      en: {
        title: "Mega Sorte",
        description: "",
        fullDescription: "Developed Mega Sorte as a study project to enter Android development with Kotlin. The app generates random combinations of 6 numbers for lottery games, featuring an intuitive interface and simple functionality.\n\nOne of the core objectives was to learn the complete app publication process on Google Play Store - from APK preparation, asset creation (icons, screenshots), to submission and approval. The app remains available online as a result of this learning journey.\n\nKey Features:\n-Instant generation of 6 random numbers between 1-60 (no duplicates).\n-Minimalist and user-friendly interface.\n-One-tap number regeneration.\n\nLessons Learned:\n-Mastered Kotlin and Android Studio fundamentals.\n-Hands-on experience with Play Store publication cycle (developer accounts, Google policies).\n-Technical requirement adaptation (APK size, compatibility).",
        technologies: ["Android SDK", "Kotlin"],
        linkText: "View Project"
      },
      pt: {
        title: "Mega Sorte",
        description: "",
        fullDescription: "Desenvolvi o Mega Sorte como um projeto de estudo para ingressar no desenvolvimento Android com Kotlin. O aplicativo gera combinações aleatórias de 6 números, simulando jogos de loteria, com interface intuitiva e funcionalidades simples.\n\nUm dos objetivos centrais do projeto foi aprender o fluxo completo de publicação de aplicativos na Google Play Store — desde a preparação do APK, criação de assets (ícones, screenshots), até a submissão e aprovação. O app segue disponível online como resultado desse processo de aprendizado.\n\nPrincipais Funcionalidades:\n-Geração instantânea de 6 números aleatórios entre 1 e 60, sem repetições.\n-Interface minimalista e de fácil interação.\n-Botão para regenerar números com um toque.\n\nAprendizados e Desafios:\n-Domínio dos fundamentos de Kotlin e Android Studio.\n-Experiência prática com o ciclo de publicação na Play Store (contas de desenvolvedor, políticas Google).\n-Adaptação a requisitos técnicos (tamanho de APK, compatibilidade).",
        technologies: ["Android SDK", "Kotlin"],
        linkText: "Ver Projeto"
      },
      image: "projects/p03-01mega.avif",
      link: "https://github.com/Janu23/Luck"
    },
    project4: {
      en: {
        title: "Creative Thinking",
        description: "A space for critical-creative reflection on how technology and society shape each other.",
        fullDescription: "It is a reflective space where I explore the intersections between technology and society through a critical and creative lens. Through articles and essays, I address topics ranging from the social impacts of technological innovations to ethical discussions about digital development, always striving to connect technical aspects with humanistic questions. More than just a repository of ideas, this project demonstrates my ability to analyze complex phenomena and translate them into accessible discussions, revealing my multidimensional perspective on technology's role in the contemporary world.",
        technologies: ["Blogspot"],
        linkText: "View Project"
      },
      pt: {
        title: "Mente Criativa",
        description: "É um espaço de reflexão onde examino as complexas relações entre tecnologia e sociedade através de uma perspectiva crítica e criativa.",
        fullDescription: "É um espaço de reflexão onde exploro as interseções entre tecnologia e sociedade com um olhar crítico e criativo. Através de artigos e ensaios, abordo desde os impactos sociais das inovações tecnológicas até discussões éticas sobre o desenvolvimento digital, sempre buscando conectar aspectos técnicos com questões humanísticas. Mais do que um repositório de ideias, este projeto demonstra minha capacidade de analisar fenômenos complexos e traduzi-los em discussões acessíveis, revelando minha visão multidimensional sobre o papel da tecnologia no mundo contemporâneo.",
        technologies: ["Blogspot"],
        linkText: "Ver Projeto"
      },
      image: "projects/p04-01mente.avif",
      link: "https://mementecriativa.blogspot.com/"
    }
  };

  const currentLang = language === 'en' ? 'en' : 'pt';
  // @ts-ignore
  const project = id && projectsData[id] ? projectsData[id][currentLang] : null;

  const backText = language === 'en' ? 'Back to home page' : 'Voltar para a página inicial';
  const projectNotFoundText = language === 'en' ? 'Project not found' : 'Projeto não encontrado';
  const descriptionText = language === 'en' ? 'Description' : 'Descrição';
  const technologiesText = language === 'en' ? 'Technologies Used' : 'Tecnologias Utilizadas';

  if (!project) {
    return (
      <div className="grid-bg min-h-screen font-mono flex items-center justify-center">
        <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-2xl font-bold mb-4">{projectNotFoundText}</h1>
          <Link to="/" className="inline-flex items-center text-black font-bold">
            <ArrowLeft className="mr-1 h-4 w-4" /> {backText}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid-bg min-h-screen font-mono">
      <Header />

      <main className="container mx-auto px-4 pt-8 pb-16">
        <Link
          to="/"
          className="inline-flex items-center text-black font-bold mb-8 hover:underline"
          aria-label={backText}
        >
          <ArrowLeft className="mr-1 h-4 w-4" aria-hidden="true" /> {backText}
        </Link>

        <article className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

          <div className="aspect-video w-full overflow-hidden mb-8 border border-black">
            <img
              src={id && projectsData[id] ? assetUrl(projectsData[id].image) : ''}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <section aria-labelledby="description-heading">
            <h2 id="description-heading" className="text-xl font-bold mb-2">{descriptionText}</h2>
            <p className="mb-6 whitespace-pre-wrap">{project.fullDescription}</p>
          </section>

          <section aria-labelledby="technologies-heading">
            <h2 id="technologies-heading" className="text-xl font-bold mb-2">{technologiesText}</h2>
            <div className="flex flex-wrap gap-2 mb-8" role="list">
              {project.technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 border border-black text-sm"
                  role="listitem"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <a
            href={id && projectsData[id] ? projectsData[id].link : '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-black text-white font-bold hover:bg-gray-800 transition-colors"
            aria-label={`${project.linkText} - ${project.title}`}
          >
            {project.linkText}
          </a>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
