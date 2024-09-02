import { useState } from 'react';
import './styles.scss';

import htmlLogo from '/tech/html.svg';
import cssLogo from '/tech/css.svg';
import sassLogo from '/tech/sass.svg';
import jsLogo from '/tech/javascript.svg';
import tsLogo from '/tech/typescript.svg';
import angularLogo from '/tech/angular.svg';
import reactLogo from '/tech/react.svg';
import nextLogo from '/tech/next.svg';
import ionicLogo from '/tech/ionic.svg';
import phpLogo from '/tech/php.svg';
import laravelLogo from '/tech/laravel.svg';
import javaLogo from '/tech/java.svg';
import nodeLogo from '/tech/node.svg';
import gitLogo from '/tech/git.svg';
import dockerLogo from '/tech/docker.svg';

const technologies: { [key: string]: { src: string; color: string } } = {
  html: {
    src: htmlLogo,
    color: '#E34F26'
  },
  css: {
    src: cssLogo,
    color: '#2565AE'
  },
  sass: {
    src: sassLogo,
    color: '#CD6799'
  },
  javascript: {
    src: jsLogo,
    color: '#F0DB4F'
  },
  typescript: {
    src: tsLogo,
    color: '#0F5298'
  },
  angular: {
    src: angularLogo,
    color: '#B52E31'
  },
  react: {
    src: reactLogo,
    color: '#61DBFB'
  },
  next: {
    src: nextLogo,
    color: '#4A4A4A'
  },
  ionic: {
    src: ionicLogo,
    color: '#387ef5'
  },
  php: {
    src: phpLogo,
    color: '#787CB5'
  },
  laravel: {
    src: laravelLogo,
    color: '#F05340'
  },
  java: {
    src: javaLogo,
    color: '#5382A1'
  },
  node: {
    src: nodeLogo,
    color: '#3C873A'
  },
  git: {
    src: gitLogo,
    color: '#F34F29'
  },
  docker: {
    src: dockerLogo,
    color: '#0DB7ED'
  }
};

const findTech = (tech: string) =>
  Object.entries(technologies).find((entry) => entry[0] === tech)?.[1] ?? null;

export interface TechBadgeProps {
  tech: string;
}

export const TechBadge = ({ tech }: TechBadgeProps) => {
  const [badge] = useState(findTech(tech));

  if (!badge) {
    return;
  }

  return (
    <div
      className="tech-badge"
      style={{ '--color': badge.color } as React.CSSProperties}
      title={tech}
    >
      <div className="tech-badge__img-wrapper">
        <img className="tech-badge__img" src={badge.src} alt={tech} />
      </div>

      <div className="tech-badge__legend">{tech}</div>
    </div>
  );
};
