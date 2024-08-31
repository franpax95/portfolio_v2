import './styles.scss';

export interface AnchorProps {
  href: string;
  stopPropagation?: boolean;
  target?: string;
  children: React.ReactNode;
}

export const Anchor = ({ href, stopPropagation, target, children }: AnchorProps) => {
  const stopPropagationHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (stopPropagation) {
      e.stopPropagation();
    }
  };

  return (
    <a className="anchor" href={href} target={target} onClick={(e) => stopPropagationHandler(e)}>
      {children}
    </a>
  );
};
