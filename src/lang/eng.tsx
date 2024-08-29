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
      "My name is Francisco Javier Navarro García, and I am a Frontend Developer with four years of experience in the industry. Originally from Málaga, I took the leap to Madrid, the capital of Spain, where I continued to hone my skills and advance my career. Now, I am ready for my next challenge: seeking opportunities beyond Spain's borders. My passion lies in web technology, where I am always eager to explore and experiment with new tools and stay up to date with the latest trends.",
    second:
      'I have a particular affinity for CSS and UI/UX design, with a special interest in animations and transitions. Professionally, I have extensive experience with Angular, having worked with it from its early days as AngularJS through to the latest versions (v16+). However, my favourite framework has always been React. I started using it back when class components were the norm, and have since embraced the shift towards functional components in the more recent versions (v16.8+). React is my go-to choice for personal projects, where I often experiment with tools like styled-components. Additionally, I have developed cross-platform applications using Ionic, from its Cordova days to the newer Capacitor, and I have plenty of stories about my battles with Android Studio!',
    third:
      'In the backend realm, my journey began with PHP and the CodeIgniter framework during my university years, eventually adopting Laravel as my preferred solution for full-stack projects. I have experience implementing my own RESTful APIs and managing databases like MySQL and PostgreSQL. I have also tackled the challenges of developing Single Page Applications, including features like Service Workers, and I am well-versed in SSR with frameworks like Next.js, as well as dependency bundlers such as Webpack and Vite. I strive to apply SOLID principles wherever possible and am always on the lookout for new practices to refine my craft. In the workplace, I am known for being friendly and humorous, yet also responsible and dedicated. Wherever I go, I always leave with fond memories and lasting friendships, as I believe that professional success and personal fulfilment are deeply intertwined, and I commit fully to every team I join.'
  }
};
