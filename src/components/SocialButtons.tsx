import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const linkClasses =
  'inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-2 text-sm font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2';

const SocialButtons = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap justify-center gap-3 lg:justify-start" aria-label={t('contact')}>
      <a
        href="https://www.linkedin.com/in/victor-januario/"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
        aria-label={t('linkedinLabel')}
      >
        <Linkedin className="h-4 w-4" aria-hidden="true" />
        LinkedIn
      </a>
      <a
        href="https://github.com/Janu23"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
        aria-label={t('githubLabel')}
      >
        <Github className="h-4 w-4" aria-hidden="true" />
        GitHub
      </a>
      <a
        href="mailto:victorjdacruz@gmail.com"
        className={linkClasses}
        aria-label={t('emailLabel')}
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
        Email
      </a>
    </div>
  );
};

export default SocialButtons;
