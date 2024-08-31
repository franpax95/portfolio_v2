import './styles.scss';
import { IRecommendationCard } from '@interfaces/IRecommendationCard';
import { FaExternalLinkAlt } from 'react-icons/fa';

export interface RecommendationCardProps {
  data: IRecommendationCard;
}

export const RecommendationCard = ({ data }: RecommendationCardProps) => {
  const stopPropagation = (e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation();

  const redirect = (url: string) => {
    window.open(url);
  };

  return (
    <div className="recommendation-card" onClick={() => redirect(data.pdf)}>
      <div className="recommendation-card__avatar-wrapper">
        <img className="recommendation-card__avatar" src={data.avatar} alt={data.name} />
      </div>

      <h2 className="recommendation-card__name">
        <a
          className="recommendation-card__name-link"
          href={data.linkedin}
          target="_blank"
          onClick={(e) => stopPropagation(e)}
        >
          <span>{data.name}</span>
          <FaExternalLinkAlt />
        </a>
      </h2>
      <h3 className="recommendation-card__role">{data.role}</h3>
      <p className="recommendation-card__desc">{data.desc}</p>
    </div>
  );
};
