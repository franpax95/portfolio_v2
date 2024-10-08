import { IRecommendationCard } from '@interfaces/IRecommendationCard';
import { RecommendationCard } from '../RecommendationCard';
import './styles.scss';
import { useLanguage } from '@hooks/useLanguage';
import { Sections } from '@states/sections';
import { useEffect, useState } from 'react';
import { MainAnchor } from '../MainAnchor';

const eduardoRecommendation: IRecommendationCard = {
  name: 'Eduardo Bernabé',
  role: 'Chief Operations Officer',
  avatar: '/recommendations/eduardo_bernabe.jpg',
  desc: '',
  pdf: '/recommendations/EduardoBernabe_Recommendation.pdf',
  linkedin: 'https://www.linkedin.com/in/edubernabe/'
};

const rocioRecommendation: IRecommendationCard = {
  name: 'Rocío Lanzas',
  role: 'Director of Human Resources',
  avatar: '/recommendations/rocio_lanzas.jpg',
  desc: '',
  pdf: '/recommendations/RocioLanzas_Recommendation.pdf',
  linkedin: 'https://www.linkedin.com/in/rociobelenlanzaszambrana/'
};

const getRecommendations = (txt: { [key: string]: string }) => [
  {
    ...rocioRecommendation,
    desc: txt.rocioLanzas_desc.slice(0, 200) + '...'
  },
  {
    ...eduardoRecommendation,
    desc: txt.eduardoBernabe_desc.slice(0, 200) + '...'
  }
];

export const Recognitions = () => {
  const { txt } = useLanguage(Sections.Recognitions);
  const [recommendations, set] = useState<Array<IRecommendationCard>>(getRecommendations(txt));

  useEffect(() => {
    set(getRecommendations(txt));
  }, [txt]);

  return (
    <div className="recognitions" id="recognitions">
      <div className="recognitions__recommendations">
        {recommendations.map((rec, key) => (
          <RecommendationCard key={key} data={rec} />
        ))}
      </div>

      <div className="recognitions__curriculum-link">
        <MainAnchor href="/cv/FJNG_CV_2024.pdf" target="_blank">
          {txt.seeCV}
        </MainAnchor>
      </div>
    </div>
  );
};
