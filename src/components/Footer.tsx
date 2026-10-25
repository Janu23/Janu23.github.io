
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-20 py-8 border-t border-black">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="font-mono text-sm">
              {t('copyright')}
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Janu23"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
              aria-label="Github"
            >
              <Github size={20} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/victor-januario/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
            <a
              href="mailto:victorjdacruz@gmail.com"
              className="hover:text-gray-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
