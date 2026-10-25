
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage';

const SocialButtons = () => {
  const { toast } = useToast();
  const { language } = useLanguage();

  const handleEmailClick = () => {
    const email = 'victorjdacruz@gmail.com';
    navigator.clipboard.writeText(email);

    toast({
      title: language === 'en' ? 'Email copied!' : 'Email copiado!',
      description: language === 'en' ? 'The email has been copied to your clipboard.' : 'O email foi copiado para sua área de transferência.',
    });
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center mt-4 px-4">
      <Button
        variant="outline"
        size="sm"
        className="rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all text-xs md:text-sm"
        asChild
      >
        <a
          href="https://www.linkedin.com/in/victor-januario/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 md:gap-2"
          aria-label="Visit Victor Januário's LinkedIn profile"
        >
          <Linkedin size={16} className="md:w-5 md:h-5" aria-hidden="true" />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all text-xs md:text-sm"
        asChild
      >
        <a
          href="https://github.com/Janu23"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 md:gap-2"
          aria-label="Visit Victor Januário's GitHub profile"
        >
          <Github size={16} className="md:w-5 md:h-5" aria-hidden="true" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all text-xs md:text-sm"
        onClick={handleEmailClick}
        aria-label="Copy Victor Januário's email address to clipboard"
      >
        <Mail size={16} className="md:w-5 md:h-5 mr-1 md:mr-2" aria-hidden="true" />
        <span className="hidden sm:inline">Email</span>
      </Button>
    </div>
  );
};

export default SocialButtons;
