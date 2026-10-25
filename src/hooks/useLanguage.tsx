
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    skipToContent: 'Skip to main content',
    learnMore: 'Learn more',
    featuredProject: 'Featured project',
    copyright: '© {year} Victor Januário. All rights reserved.',
    viewProject: 'View Project',
    backToHome: 'Back to home page',
    projectNotFound: 'Project not found',
    pageNotFound: 'Page not found',
    description: 'Description',
    technologiesUsed: 'Technologies Used',
    challenge: 'Challenge',
    solution: 'Solution',
    highlights: 'Highlights',
    selectLanguage: 'Select language',
    linkedinLabel: "Visit Victor Januário's LinkedIn profile",
    githubLabel: "Visit Victor Januário's GitHub profile",
    emailLabel: 'Send an email to Victor Januário',
    primaryNavigation: 'Primary navigation'
  },
  pt: {
    about: 'Sobre',
    projects: 'Projetos',
    contact: 'Contato',
    skipToContent: 'Pular para o conteúdo principal',
    learnMore: 'Saiba mais',
    featuredProject: 'Projeto em destaque',
    copyright: '© {year} Victor Januário. Todos os direitos reservados.',
    viewProject: 'Ver Projeto',
    backToHome: 'Voltar para a página inicial',
    projectNotFound: 'Projeto não encontrado',
    pageNotFound: 'Página não encontrada',
    description: 'Descrição',
    technologiesUsed: 'Tecnologias utilizadas',
    challenge: 'Desafio',
    solution: 'Solução',
    highlights: 'Destaques',
    selectLanguage: 'Selecionar idioma',
    linkedinLabel: 'Visitar o perfil de Victor Januário no LinkedIn',
    githubLabel: 'Visitar o perfil de Victor Januário no GitHub',
    emailLabel: 'Enviar um e-mail para Victor Januário',
    primaryNavigation: 'Navegação principal'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = window.localStorage.getItem('portfolio-language');
    if (savedLanguage === 'en' || savedLanguage === 'pt') return savedLanguage;
    return window.navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  });

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem('portfolio-language', nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const t = (key: string): string => {
    const translationObject = translations[language];
    const translation = translationObject[key as keyof typeof translationObject];

    if (!translation) return key;

    // Replace variables in translation strings
    return translation.replace(/{year}/g, new Date().getFullYear().toString());
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
