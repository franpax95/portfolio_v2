import './styles.scss';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

const sections = ['about', 'experience', 'projects', 'recognitions'];

export const Menu = () => {
  const active = useIntersectionObserver(sections);

  return (
    <div className="menu">
      <a className={`menu__link ${active === 'about' && 'menu__link--active'}`}>About</a>

      <a className={`menu__link ${active === 'experience' && 'menu__link--active'}`}>Experience</a>

      <a className={`menu__link ${active === 'projects' && 'menu__link--active'}`}>Projects</a>

      <a className={`menu__link ${active === 'recognitions' && 'menu__link--active'}`}>
        Recognitions
      </a>
    </div>
  );
};
