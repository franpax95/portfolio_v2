import './styles.scss';
import { IProject } from '@interfaces/IProject';
import { ProjectsTable } from '../ProjectsTable';

const esail = 'Esail';
const kubide = 'Kubide';

const projects: Array<IProject> = [
  {
    year: 2024,
    name: 'CeballosERP',
    job: esail,
    stack: ['html', 'sass', 'typescript', 'angular']
  },
  {
    year: 2023,
    name: 'Codify',
    job: kubide,
    stack: ['html', 'sass', 'typescript', 'angular', 'ionic', 'mongodb', 'android', 'ios']
  },
  {
    year: 2023,
    name: 'Onyze',
    job: kubide,
    stack: ['html', 'sass', 'typescript', 'react', 'next']
  },
  {
    year: 2023,
    name: 'Excalibur',
    job: kubide,
    stack: ['html', 'scss', 'typescript', 'angular', 'mongodb', 'android', 'ios']
  },
  {
    year: 2023,
    name: 'AtiendeQ',
    job: esail,
    stack: ['html', 'sass', 'typescript', 'angular', 'ionic']
  },
  {
    year: 2023,
    name: 'Prolongo Ronda Presencias',
    job: esail,
    stack: ['html', 'sass', 'typescript', 'angular']
  },
  {
    year: 2023,
    name: 'Prolongo Red Agentes',
    job: esail,
    stack: ['html', 'sass', 'typescript', 'angular']
  },
  {
    year: 2022,
    name: 'espacioT',
    job: esail,
    stack: ['html', 'css', 'react']
  },
  {
    year: 2022,
    name: 'VPeio Gestor Imágenes',
    job: esail,
    stack: ['html', 'css', 'angular', 'java', 'spring']
  },
  {
    year: 2021,
    name: 'Tramicar',
    job: esail,
    stack: ['html', 'css', 'angular', 'java', 'spring']
  },
  {
    year: 2021,
    name: 'VPeio Gestión Interna',
    job: esail,
    stack: ['html', 'css', 'angular', 'java', 'spring']
  }
];

export const Projects = () => {
  return (
    <div className="projects">
      <ProjectsTable projects={projects} />
    </div>
  );
};
