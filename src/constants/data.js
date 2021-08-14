export const projects = [
  {
    title: 'To-do app',

    description:
      'Here I made an to-do app using React, and I used local storage',
    image: '/assets/project_1.gif',
    link: 'https://todo-app-280992.netlify.app/',
  },
  {
    title: 'Pomdoro Timer app',

    description:
      'This is a pomodo timer app, you can set time, pause it and cancel',
    image: '/assets/project_2.gif',
    link: 'https://timer-setter.netlify.app/',
  },
  {
    title: 'CEPI School site',

    description:
      'I made website of the school where I work, I used a WordPress',
    image: '/assets/project_3.gif',
    link: 'https://cepi-edu.org',
  },
];

export const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'Jesse Hicks',
    company: 'Zoozle',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.',
    image: 'https://randomuser.me/api/portraits/men/94.jpg',
    name: 'Ruben Alvarez',
    company: 'Dooble.io',
  },
];

export const skills = [
  'JavaScript',
  'React & React Native',
  'Node.js',
  'Material UI',
  'HTML',
  'CSS',
  'SQL',
];

export const sections = [
  {
    title: 'Home',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='25'
        fill='currentColor'
        className='bi bi-house-fill'
        viewBox='0 0 16 16'
      >
        <path
          fillRule='evenodd'
          d='m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z'
        />
        <path
          fillRule='evenodd'
          d='M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z'
        />
      </svg>
    ),
    id: 'about',
  },
  {
    title: 'Projects',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='25'
        fill='currentColor'
        className='bi bi-code-slash'
        viewBox='0 0 16 16'
      >
        <path d='M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z' />
      </svg>
    ),
    id: 'projects',
  },
  {
    title: 'Skills',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='25'
        fill='currentColor'
        className='bi bi-cpu-fill'
        viewBox='0 0 16 16'
      >
        <path d='M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z' />
        <path d='M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z' />
      </svg>
    ),
    id: 'skills',
  },
  // {
  //   title: 'Tetsimonials',
  //   icon: (
  //     <svg
  //       xmlns='http://www.w3.org/2000/svg'
  //       width='25'
  //       height='25'
  //       fill='currentColor'
  //       className='bi bi-people-fill'
  //       viewBox='0 0 16 16'
  //     >
  //       <path d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
  //       <path
  //         fillRule='evenodd'
  //         d='M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z'
  //       />
  //       <path d='M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' />
  //     </svg>
  //   ),
  //   id: 'testimonials',
  // },
];
