import { useLanguage } from '@hooks/useLanguage';
import { Menu } from '../Menu';
import './styles.scss';
import { Sections } from '@states/sections';
import { Footer } from '../Footer';

export const Sidebar = () => {
  const { txt } = useLanguage(Sections.Sidebar);

  return (
    <div className="sidebar">
      <div className="sidebar__img-wrapper">
        <img className="sidebar__img" src="/me/me-jumping-swimmingpool.jpg" alt="Me" />
      </div>
      <h1 className="sidebar__title">{txt.title}</h1>

      <h2 className="sidebar__subtitle">{txt.subtitle}</h2>

      <p className="sidebar__desc">{txt.description}</p>

      <Menu />

      <Footer />
    </div>
  );
};
