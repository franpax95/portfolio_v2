import { useLanguage } from '@hooks/useLanguage';
import './styles.scss';
import { Sections } from '@states/sections';
import { IProject } from '@interfaces/IProject';
import { TechBadge } from '../TechBadge';

export interface ProjectsTableProps {
  projects: Array<IProject>;
}

export const ProjectsTable = ({ projects }: ProjectsTableProps) => {
  const { txt } = useLanguage(Sections.ProjectsTable);

  return (
    <div className="projects-table">
      <div className="projects-table__header">
        <div className="projects-table__col">{txt.year}</div>
        <div className="projects-table__col">{txt.project}</div>
        <div className="projects-table__col projects-table__col--made-at">{txt.madeAt}</div>
        <div className="projects-table__col projects-table__col--stack">{txt.technologies}</div>
      </div>

      {projects.map((project, key) => (
        <div className="projects-table__row" key={key}>
          <div className="projects-table__col" title={`${project.year}`}>
            {project.year}
          </div>
          <div className="projects-table__col" title={project.name}>
            {project.name}
          </div>
          <div className="projects-table__col projects-table__col--made-at" title={project.job}>
            {project.job}
          </div>
          <div className="projects-table__col projects-table__col--stack">
            {project.stack.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
