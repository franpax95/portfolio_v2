import { useContext } from 'react';
import { LanguageContext, LanguageContextType } from '@contexts/LanguageContext';
import esp from '@lang/esp';
import eng from '@lang/eng';
import deu from '@lang/deu';
import { Sections } from '@states/sections';
import { Lang } from '@states/lang';
import { environment } from '@environments/environment';

const switchTxt = (
  lang: Lang,
  esp: { [key: string]: string },
  eng: { [key: string]: string },
  deu: { [key: string]: string }
): { [key: string]: string } => {
  switch (lang) {
    case Lang.Esp:
      return esp;

    case Lang.Eng:
      return eng;

    case Lang.Deu:
      return deu;
  }
};

export const useLanguage = (section?: Sections) => {
  const { lang, ...context } = useContext(LanguageContext) as LanguageContextType;
  const spanish = (section ? esp[section] : esp) as unknown as { [key: string]: string };
  const english = (section ? eng[section] : eng) as unknown as { [key: string]: string };
  const deutsche = (section ? deu[section] : deu) as unknown as { [key: string]: string };
  const txt = switchTxt(lang || environment.defaults.lang, spanish, english, deutsche);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return {
    ...context,
    lang,
    txt
  };
};
