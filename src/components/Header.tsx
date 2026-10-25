import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, type Language } from '@/hooks/useLanguage';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b-2 border-black bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between gap-3 px-4">
        <a
          href="/"
          className="grid h-10 w-10 shrink-0 place-items-center border-2 border-black bg-black font-bold text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.25)]"
          aria-label="Victor Januário — home"
        >
          VJ
        </a>

        <nav className="ml-auto flex items-center gap-3 text-xs font-bold sm:gap-5 sm:text-sm" aria-label={t('primaryNavigation')}>
          <a href="/#about" className="hidden underline-offset-4 hover:underline focus-visible:underline sm:inline">
            {t('about')}
          </a>
          <a href="/#projects" className="underline-offset-4 hover:underline focus-visible:underline">
            {t('projects')}
          </a>
          <a href="mailto:victorjdacruz@gmail.com" className="underline-offset-4 hover:underline focus-visible:underline">
            {t('contact')}
          </a>
        </nav>

        <label className="relative shrink-0">
          <span className="sr-only">{t('selectLanguage')}</span>
          <Globe className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" aria-hidden="true" />
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value as Language)}
            className="h-10 appearance-none rounded-none border-2 border-black bg-white py-1 pl-9 pr-7 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:text-sm"
            aria-label={t('selectLanguage')}
          >
            <option value="en">EN</option>
            <option value="pt">PT</option>
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[10px]" aria-hidden="true">▾</span>
        </label>
      </div>
    </header>
  );
};

export default Header;
