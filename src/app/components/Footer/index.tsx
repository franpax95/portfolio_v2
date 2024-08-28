import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './styles.scss';
import { environment } from '@environments/environment';
import { Toggler, TogglerButton } from '../Toggler';
import { Lang } from '@states/lang';
import { UKFlag } from '../Flags/UnitedKingdom';
import { GermanyFlag } from '../Flags/Germany';
import { SpainFlag } from '../Flags/Spain';
import { useLanguage } from '@hooks/useLanguage';

const flagTogglerData: Array<TogglerButton<Lang>> = [
  {
    id: Lang.Eng,
    content: <UKFlag />
  },
  {
    id: Lang.Esp,
    content: <SpainFlag />
  },
  {
    id: Lang.Deu,
    content: <GermanyFlag />
  }
];

export const Footer = () => {
  const { lang, setLang } = useLanguage();

  const onClick = (l: Lang) => {
    setLang(l);
  };

  return (
    <div className="footer">
      <Toggler<Lang> data={flagTogglerData} onClick={onClick} active={lang} />

      <a className="footer__link" href={environment.links.github} target="_blank">
        <FaGithub />
      </a>

      <a className="footer__link" href={environment.links.linkedin} target="_blank">
        <FaLinkedin />
      </a>
    </div>
  );
};
