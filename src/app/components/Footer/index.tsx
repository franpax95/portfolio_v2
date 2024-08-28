import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './styles.scss';
import { environment } from '@environments/environment';

export const Footer = () => {
  return (
    <div className="footer">
      <a className="footer__link" href={environment.links.github} target="_blank">
        <FaGithub />
      </a>

      <a className="footer__link" href={environment.links.linkedin} target="_blank">
        <FaLinkedin />
      </a>
    </div>
  );
};
