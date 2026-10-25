
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    about: 'About',
    projects: 'Projects',
    learnMore: 'Learn more',
    copyright: '© {year} Victor Januário. All rights reserved.',
    viewProject: 'View Project',
    backToHome: 'Back to home page',
    projectNotFound: 'Project not found',
    description: 'Description',
    technologiesUsed: 'Technologies Used'
  },
  pt: {
    about: 'Sobre',
    projects: 'Projetos',
    learnMore: 'Saiba mais',
    copyright: '© {year} Victor Januário. Todos os direitos reservados.',
    viewProject: 'Ver Projeto',
    backToHome: 'Voltar para a página inicial',
    projectNotFound: 'Projeto não encontrado',
    description: 'Descrição',
    technologiesUsed: 'Tecnologias Utilizadas'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

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
