import { useLanguage } from '@hooks/useLanguage';
import { Sections } from '@states/sections';
import { ExperienceCard } from '../ExperienceCard';

const esail1_techs = ['sass', 'typescript', 'angular', 'react', 'laravel', 'java', 'ionic', 'git'];
const kubide_techs = ['sass', 'typescript', 'angular', 'next', 'ionic', 'docker', 'git', 'node'];
const esail2_techs = ['sass', 'typescript', 'angular', 'git'];

export const Experience = () => {
  const { txt } = useLanguage(Sections.Experience);

  return (
    <div className="experience" id="experience">
      <ExperienceCard
        title={txt.esail2_title}
        subtitle={txt.esail2_subtitle}
        description={txt.esail2_desc}
        duration={txt.esail2_duration}
        techs={esail2_techs}
      />

      <ExperienceCard
        title={txt.kubide_title}
        subtitle={txt.kubide_subtitle}
        description={txt.kubide_desc}
        duration={txt.kubide_duration}
        techs={kubide_techs}
      />

      <ExperienceCard
        title={txt.esail1_title}
        subtitle={txt.esail1_subtitle}
        description={txt.esail1_desc}
        duration={txt.esail1_duration}
        techs={esail1_techs}
      />
    </div>
  );
};
