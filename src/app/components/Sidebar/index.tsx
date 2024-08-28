import { useLanguage } from '@app/hooks/useLanguage';
import { Menu } from '../Menu';
import './styles.scss';
import { Sections } from '@states/sections';
import { Footer } from '../Footer';

// export interface SidebarProps {
//   className: string;
//   children: React.ReactNode;
// }

export const Sidebar = (/*{ className, children }: SidebarProps*/) => {
  const { txt } = useLanguage(Sections.Sidebar);

  return (
    <div className="sidebar">
      <h1>{txt.title}</h1>

      <h2>{txt.subtitle}</h2>

      <p className="sidebar__desc">{txt.description}</p>

      <Menu />

      <Footer />
    </div>
  );
};
