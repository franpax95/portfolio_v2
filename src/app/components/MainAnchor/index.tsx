import './styles.scss';

export interface MainAnchorProps {
  href: string;
  stopPropagation?: boolean;
  target?: string;
  children: React.ReactNode;
}

export const MainAnchor = ({ href, stopPropagation, target, children }: MainAnchorProps) => {
  const stopPropagationHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (stopPropagation) {
      e.stopPropagation();
    }
  };

  return (
    <a
      className="main-anchor"
      href={href}
      target={target}
      onClick={(e) => stopPropagationHandler(e)}
    >
      <span className="main-anchor__mask">
        <div className="main-anchor__link-container">
          <span className="main-anchor__link-title1 main-anchor__title">{children}</span>
          <span className="main-anchor__link-title2 main-anchor__title">{children}</span>
        </div>
      </span>

      <div className="main-anchor__link-icon">
        <svg
          className="main-anchor__icon"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>

        <svg
          className="main-anchor__icon"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
      </div>
    </a>
  );
};
