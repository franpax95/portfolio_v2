import { useLanguage } from '@hooks/useLanguage';
import { Sections } from '@states/sections';
import './styles.scss';

export const About = () => {
  const { txt } = useLanguage(Sections.About);

  return (
    <div className="about">
      <p className="about__paragraph">{txt.first}</p>
      <p className="about__paragraph">{txt.second}</p>
      <p className="about__paragraph">{txt.third}</p>
    </div>
  );
};
