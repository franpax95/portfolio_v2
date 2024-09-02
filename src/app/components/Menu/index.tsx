import { Sections } from '@states/sections';
import './styles.scss';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
import { useLanguage } from '@hooks/useLanguage';

const sections = ['about', 'experience', 'projects', 'recognitions'];

export const Menu = () => {
  const { txt } = useLanguage(Sections.Menu);
  const active = useIntersectionObserver(sections);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute('href')?.slice(2);
    const targetElement = document.getElementById(targetId || '');

    if (targetId === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="menu">
      <a
        className={`menu__link ${active === 'about' && 'menu__link--active'}`}
        href="/#about"
        onClick={handleClick}
      >
        {txt.about}
      </a>

      <a
        className={`menu__link ${active === 'experience' && 'menu__link--active'}`}
        href="/#experience"
        onClick={handleClick}
      >
        {txt.experience}
      </a>

      <a
        className={`menu__link ${active === 'projects' && 'menu__link--active'}`}
        href="/#projects"
        onClick={handleClick}
      >
        {txt.projects}
      </a>

      <a
        className={`menu__link ${active === 'recognitions' && 'menu__link--active'}`}
        href="/#recognitions"
        onClick={handleClick}
      >
        {txt.recognitions}
      </a>
    </div>
  );
};
