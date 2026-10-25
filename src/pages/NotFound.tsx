import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { usePageMetadata } from '@/hooks/usePageMetadata';

const NotFound = () => {
  const location = useLocation();
  const { language, t } = useLanguage();

  usePageMetadata({
    title: language === 'pt' ? 'Página não encontrada | Victor Januário' : 'Page not found | Victor Januário',
    description: language === 'pt' ? 'A página solicitada não foi encontrada.' : 'The requested page could not be found.',
    canonicalPath: location.pathname,
    imagePath: '/lovable-uploads/profile-384.webp',
    language,
  });

  return (
    <div className="grid-bg min-h-screen font-mono">
      <Header />
      <main className="container mx-auto grid min-h-[70vh] place-items-center px-4">
        <div className="w-full max-w-md border-2 border-black bg-white p-8 text-center shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
          <p className="mb-4 text-7xl font-bold" aria-hidden="true">404</p>
          <h1 className="mb-6 text-xl font-bold">{t('pageNotFound')}</h1>
          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center gap-2 border-2 border-black bg-black px-4 py-2 font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t('backToHome')}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
