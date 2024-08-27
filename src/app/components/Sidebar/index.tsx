import { Menu } from '../Menu';
import './styles.scss';

// export interface SidebarProps {
//   className: string;
//   children: React.ReactNode;
// }

export const Sidebar = (/*{ className, children }: SidebarProps*/) => {
  return (
    <div className="sidebar">
      <h1>Francisco Navarro</h1>

      <h2>Frontend Developer</h2>

      <p>I build pixel-perfect, engaging, and accessible digital experiences.</p>

      <Menu />
    </div>
  );
};
