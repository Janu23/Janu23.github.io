
import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/hooks/useLanguage';

const Header: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>('');
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      };
      const dateString = now.toLocaleDateString(language === 'en' ? 'en-US' : 'pt-BR', options);
      setCurrentDate(dateString);
    };

    updateDate();
    // Update once per minute
    const interval = setInterval(updateDate, 60000);

    return () => clearInterval(interval);
  }, [language]);

  return (
    <header className="flex justify-between items-center p-6">
      <div className="language-switcher">
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[140px] border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" aria-label="Select language">
            <Globe className="mr-2 h-4 w-4" aria-hidden="true" />
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="pt">Portuguese</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="font-mono text-sm md:text-base">{currentDate}</div>
    </header>
  );
};

export default Header;
