import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

interface TerminalProps {
  aboutText: string;
}

const Terminal: React.FC<TerminalProps> = ({ aboutText }) => {
  const { language } = useLanguage();
  const paragraphs = aboutText.split('\n\n');

  return (
    <div
      className="relative w-full bg-terminal-bg p-5 font-mono text-sm text-terminal-text sm:p-6 sm:text-base"
      role="region"
      aria-label={language === 'pt' ? 'Apresentação profissional' : 'Professional introduction'}
    >
      <div className="mb-4 flex gap-2" aria-hidden="true">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <p className="mb-4 break-words">
        <span className="text-terminal-prompt">user@victor</span>
        <span>:</span>
        <span className="text-blue-400">~</span>
        <span>$ </span>
        <span className="text-terminal-command">whoami</span>
      </p>

      <div className="space-y-4 leading-relaxed">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <p className="mt-5" aria-hidden="true">
        <span className="text-terminal-prompt">user@victor</span>
        <span>:</span>
        <span className="text-blue-400">~</span>
        <span>$ </span>
        <span className="cursor" />
      </p>
    </div>
  );
};

export default Terminal;
