import './styles.scss';

// export interface MenuProps {
//   className: string;
//   children: React.ReactNode;
// }

export const Menu = () => {
  return (
    <div className="menu">
      <a className="menu__link">About</a>
      <a className="menu__link">Experience</a>
      <a className="menu__link">Projects</a>
    </div>
  );
};
