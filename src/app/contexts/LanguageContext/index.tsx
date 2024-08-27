import React, { ReactNode, createContext, useState } from 'react';
import { Storage } from '@states/storage';
import { Lang } from '@states/lang';
import { useStorage } from '@hooks/useStorage';
import { environment } from '@environments/environment';

interface LanguageContextType {
  lang: Lang;
  setLang: (t: Lang) => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const storage = useStorage();
  const [lang, setLangState] = useState<Lang>(
    storage.get(Storage.Language) || environment.defaults.lang
  );

  function setLang(l?: Lang): void {
    // Argument or, in case its not specified, toggle lang
    const newLang = l || (lang === Lang.Esp ? Lang.Eng : Lang.Esp);

    setLangState(newLang);
    storage.set(Storage.Language, newLang);
  }

  /**
   * Variables, estados y funciones a exportar en el contexto
   */
  const value = {
    lang,
    setLang
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
