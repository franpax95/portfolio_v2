import { Sections } from '@states/sections';

export default {
  [Sections.Sidebar]: {
    title: 'Francisco Navarro',
    subtitle: 'Frontend Developer',
    description: 'I build pixel-perfect, engaging, and accessible digital experiences.'
  },
  [Sections.Menu]: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects'
  },
  [Sections.About]: {
    first:
      "Originally from the Costa del Sol, Málaga, I began my journey in my hometown, at Esail. After that, I made the leap to Spain's capital, Madrid, at Kubide. Now, I am seeking the next challenge beyond my borders. I am a proactive person who always strives for the common good, understanding that there is no personal success without professional success, and vice versa. Therefore, commitment is non-negotiable. If I can use my knowledge to help internally, whether through training colleagues or developing internal applications, I am more than willing to do so.",
    second:
      "In the workplace, I am a friendly and fun person, always looking to create a positive atmosphere. I’ve always made friends at the jobs I’ve been in. And although I've always been very much a programmer, I have to admit that I’m increasingly drawn to the idea of organizing and managing teams and fostering a strong work culture.",
    third:
      'As for my skills, I have extensive professional experience with Angular. However, my favourite framework will always be React or solutions based on it, like Next for SSR. Whenever I have the opportunity, I choose it as my first option, both for personal and corporate projects. \nRegarding mobile, I have developed cross-platform applications with Ionic, both on Android and iOS, from the old Cordova to the new Capacitor. \nOn the backend, I like to develop my solutions in Laravel (PHP) with MySQL or PostgreSQL. But I also have experience with applications built in Node. \nI used to use Webpack, but now Vite has become my preferred bundler.'
  },
  [Sections.Experience]: {
    esail1_title: 'ESAIL IT SOLUTIONS',
    esail1_subtitle: 'Fullstack Web Developer',
    esail1_desc: `In my first role at ESAIL IT Solutions, I developed solutions primarily using Angular and Ionic, handling projects from initial analysis through to final documentation, within a Kanban-driven workflow. I also initiated and developed internal projects in React. My responsibilities included direct client communication, onboarding and training new team members, and promoting the adoption of new technologies and best practices.`,
    esail1_duration: 'December 2020 - May 2023',
    kubide_title: 'Kubide',
    kubide_subtitle: 'Frontend Web Developer',
    kubide_desc: `At Kubide, I focused on developing cross-platform applications using Ionic Angular and contributed to projects in Next.js (React). Organised under the SCRUM agile methodology, I played a key role in performance optimisation and enhancing solutions, with a particular emphasis on improving user interfaces and overall user experience.`,
    kubide_duration: 'May 2023 - November 2023',
    esail2_title: 'ESAIL IT SOLUTIONS',
    esail2_subtitle: 'Frontend Web Developer',
    esail2_desc: `At ESAIL IT Solutions, I led the Front-End team, focusing primarily on projects developed with Angular. My responsibilities included overseeing the quality control of my team's code and ensuring it met high standards. I implemented new work methodologies and technologies to enhance productivity and foster a collaborative work culture, with a strong emphasis on Kanban for organisational efficiency. Additionally, I was involved in onboarding and training new team members, ensuring they integrated smoothly and developed the necessary skills. I also contributed to project analysis, playing a vital role in the strategic planning and execution of our development projects.`,
    esail2_duration: 'November 2023 - July 2024'
  },
  [Sections.ProjectsTable]: {
    year: 'Year',
    project: 'Project',
    madeAt: 'Made at',
    technologies: 'Techs'
  },
  [Sections.Recognitions]: {
    rocioLanzas_desc:
      'I can attest to his responsability and competence in his work, as well as his teamwork and integration within the team, mainly working as a computer programmer. I believe that Francisco will be able to fulfill the assigned tasks, and that is why I recommend him.',
    eduardoBernabe_desc:
      'Francisco is an expert in web application development using technologies such as Angular and React. His deep knowledge of these frameworks is reflected in the successful projects he has delivered during his time at our company. He is capable of creating interactive and engaging applications that significantly enhance the user experience, effectively resolving all the functionalities he has worked on.'
  }
};
