import './styles.scss';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

const sections = ['about', 'experience', 'projects', 'recognitions'];

export const Menu = () => {
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
        About
      </a>

      <a
        className={`menu__link ${active === 'experience' && 'menu__link--active'}`}
        href="/#experience"
        onClick={handleClick}
      >
        Experience
      </a>

      <a
        className={`menu__link ${active === 'projects' && 'menu__link--active'}`}
        href="/#projects"
        onClick={handleClick}
      >
        Projects
      </a>

      <a
        className={`menu__link ${active === 'recognitions' && 'menu__link--active'}`}
        href="/#recognitions"
        onClick={handleClick}
      >
        Recognitions
      </a>
    </div>
  );
};
