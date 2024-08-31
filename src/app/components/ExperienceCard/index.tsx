import { TechBadge } from '../TechBadge';
import './styles.scss';

export interface ExperienceCardProps {
  title: string;
  subtitle?: string;
  description: string;
  duration: string;
  techs: Array<string>;
}

export const ExperienceCard = ({
  title,
  subtitle,
  description,
  duration,
  techs
}: ExperienceCardProps) => {
  return (
    <div className="experience-card">
      <h1 className="experience-card__title">{title}</h1>

      <h2 className="experience-card__subtitle">{subtitle}</h2>

      <span className="experience-card__duration">{duration}</span>

      <p className="experience-card__desc">{description}</p>

      <div className="experience-card__badges">
        {techs.map((tech, key) => (
          <TechBadge key={key} tech={tech} />
        ))}
      </div>
    </div>
  );
};
