import { useLanguage } from '@hooks/useLanguage';
import { Sections } from '@states/sections';
import './styles.scss';
import { Anchor } from '../Anchor';

const keywords: Record<string, string> = {
  Esail: 'https://esail.es/',
  Kubide: 'https://kubide.es/',
  Angular: 'https://angular.dev/',
  React: 'https://es.react.dev/',
  TypeScript: 'https://www.typescriptlang.org/',
  Next: 'https://nextjs.org/',
  Ionic: 'https://ionicframework.com/',
  Android: 'https://www.android.com/intl/es_es/',
  iOS: 'https://www.apple.com/es/ios/ios-17/',
  Cordova: 'https://cordova.apache.org/',
  Capacitor: 'https://capacitorjs.com/',
  Laravel: 'https://laravel.com/',
  MySQL: 'https://www.mysql.com/',
  PostgreSQL: 'https://www.postgresql.org/',
  Node: 'https://nodejs.org/en',
  Webpack: 'https://webpack.js.org/',
  Vite: 'https://vitejs.dev/'
};

const replaceTextWithLinks = (text: string) => {
  const parts = text.split(new RegExp(`(${Object.keys(keywords).join('|')})`, 'gi'));
  return parts.map((key, index) => {
    if (keywords[key]) {
      return (
        <Anchor key={index} target="_blank" href={keywords[key]}>
          {key}
        </Anchor>
      );
    } else {
      return key;
    }
  });
};

export const About = () => {
  const { txt } = useLanguage(Sections.About);

  return (
    <div className="about" id="about">
      <p className="about__paragraph">{replaceTextWithLinks(txt.first)}</p>
      <p className="about__paragraph">{replaceTextWithLinks(txt.second)}</p>
      <p className="about__paragraph">{replaceTextWithLinks(txt.third)}</p>
    </div>
  );
};
