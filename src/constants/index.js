import project1 from '../assets/projects/eticaret.jpg';
import project2 from '../assets/projects/hasandan.jpg';
import project4 from '../assets/projects/threads.jpg';
import project6 from '../assets/projects/pentapp.jpg';

import reactSVG from '../assets/usedTechs/react.svg';
import nodejsSVG from '../assets/usedTechs/nodejs.svg';
import mongodbSVG from '../assets/usedTechs/mongodb.svg';
import postgreSVG from '../assets/usedTechs/postgresql.svg';
import tailwindSVG from '../assets/usedTechs/tailwind.svg';
import socketSVG from '../assets/usedTechs/socket.svg';

export const ABOUT_ME = `I have 3 years of experience in software development and during this time, I have actively participated in many different projects and expanded my technical knowledge. Thanks to my fast learning ability and strong problem-solving skills, I can produce effective solutions to complex software problems. I understand the importance of being a part of a team and with my inclination to teamwork, I exhibit a constructive and supportive approach to achieve common goals.

In projects, beyond just writing code, I evaluate the user experience, performance and interaction model of the developed product in detail. I contribute to my team with a solution-oriented mindset by considering user needs. While constantly updating my technical competencies, I also keep my goal of becoming a talented and effective team leader alive in the future by improving my communication and collaboration skills.

I do not hesitate to integrate innovative approaches into my projects by closely following current technology trends. In this way, I not only apply existing technical solutions, but also incorporate innovative ideas into my projects to create more comprehensive and user-friendly products. Thanks to my analytical thinking ability and curiosity, I see every new challenge I encounter as an opportunity for development.`;

export const EDUCATION = `I studied computer engineering at Fenerbahçe University with a full scholarship. I grasped the basics of programming and the deep philosophy of algorithms. "How to write good code?" instead of "How can I be a good engineer?" I learned the answer to the question. I managed the university's software club for 2 years. Together with my team, we planned the organization of various software events and projects.`;

export const EDUCATION_CS50 = `I successfully completed the CS50 course organized by Harvard University. I learned basic computer science concepts such as algorithms, data structures, software engineering and web development. I developed advanced problem-solving skills and completed a variety of projects.`;

export const EXPERIENCES = [
  {
    year: 'Dec. 2022 - Present',
    role: 'Software Engineer',
    company: 'Cormind Inc.',
    location: 'Istanbul',
    description: `I had the chance to work with the CTO of the company where we serve Turkey's largest production factories. We developed industry 4.0 software in order to catch up with the technology era for the leading factories in the production sector.`,
    technologies: [
      'Typescript',
      'React.js',
      'Node.js',
      'GraphQL',
      'Redis',
      'Docker',
      'Postgres',
    ],
  },
  {
    year: 'June 2022 - Sep. 2022',
    role: 'Full Stack Developer',
    company: 'VBT Software',
    location: 'Istanbul',
    description: `At VBT, one of Turkey's largest software companies, I learned how software projects are carried out, how agile methods are used in software processes, and computer architecture.`,
    technologies: ['Javascript', 'Java', 'Kafka', 'Hibernate', 'Postgres'],
  },
  {
    year: 'Dec. 2021 - May 2022',
    role: 'Full Stack Developer',
    company: 'Flalingo',
    location: 'Germany',
    description: `I had my first professional software development experience at Flalingo, a startup based in Germany. I completely rebuilt the frontend of the application with React. My work was appreciated and I was promoted from intern to the main team.`,
    technologies: [
      'HTML',
      'CSS',
      'Javascript',
      'React.js',
      'Node.js',
      'Express.js',
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Hasandan',
    image: project2,
    link: 'https://github.com/hasangkz/e-commerce',
    description:
      'Inspired by sahibinden.com, I created an e-commerce site for myself. There are many features such as adding, deleting and editing products, adding products to favorites and categories.',
    technologies: [reactSVG, nodejsSVG, postgreSVG],
  },
  {
    id: 2,
    title: 'Threads',
    image: project4,
    link: 'https://github.com/hasangkz/threads_frontend',
    description:
      'To better understand why the Threads application suddenly became so popular and why it suddenly became an application that no one uses, I wanted to make the application myself. There are features such as adding and removing friends, suggested users, messaging features, creating and replying to threads, and being able to interact with threads.',
    technologies: [reactSVG, nodejsSVG, socketSVG, mongodbSVG],
  },
  {
    id: 3,
    title: 'PENTApp',
    image: project6,
    link: 'https://github.com/hasangkz/PENTApp',
    description:
      'I developed "PENTA", a social media platform where people anonymously voice their opinions and live day to day.',
    technologies: [reactSVG, tailwindSVG, nodejsSVG, mongodbSVG],
  },
  {
    id: 4,
    title: 'FBucks',
    image: project1,
    link: 'https://github.com/hasangkz/fbucks_frontend',
    description:
      "I created an order tracking platform for my university's cafe and made it available. I was inspired by Starbucks. Many features are active, such as preparing invoices, viewing package status, reviewing sales status on a daily, weekly and monthly basis.",
    technologies: [reactSVG, tailwindSVG, nodejsSVG, mongodbSVG],
  },
];

export const DOCUMENTS = [
  {
    id: 1,
    title: 'What Is OOP ?',
    link: 'https://medium.com/@hassan.gokgoz/nedir-bu-oopnin-alameti-farikas%C4%B1-1-432cfad0c4ec',
    description:
      'An article that I explain what OOP is and why we need something like this.',
  },
  {
    id: 2,
    title: 'How It Works:OOP ?',
    link: 'https://medium.com/@hassan.gokgoz/nedir-bu-oopnin-alameti-farikas%C4%B1-2-c391d45b3789',
    description:
      'An article explaining how oop works and what we need to pay attention to in which parts.',
  },
  {
    id: 3,
    title: 'What Is A.C.I.D ?',
    link: 'https://medium.com/@hassan.gokgoz/nedir-bu-a-c-i-d-64f3f92c4bb7',
    description:
      'An article explaining the concept of A.C.I.D and reinforcing it with daily examples.',
  },
  {
    id: 4,
    title: 'What Is API ?',
    link: 'https://medium.com/@hassan.gokgoz/nedir-bu-api-e5b263fa8953',
    description:
      'An article where I explain what an API is, why everyone uses it, and what problems it solves.',
  },
  {
    id: 5,
    title: 'What Is Redis ?',
    link: 'https://medium.com/@hassan.gokgoz/nedir-bu-redis-267320f64fdc',
    description:
      'An article that I explain what Redis is, how its cache mechanism works and where it appears',
  },
  {
    id: 6,
    title: 'How It Works:Javascript ?',
    link: 'https://medium.com/@hassan.gokgoz/javascript-sunucuda-nas%C4%B1l-%C3%A7al%C4%B1%C5%9F%C4%B1r-85a1eb2d1f94',
    description:
      'An article where I explain how javascript works, what the v8 engine is and how it functions on the server.',
  },
];

export const CONTACT = {
  address: 'Atasehir / Istanbul',
  phoneNo: '+90 545 302 8583',
  email: 'hassan.gokgoz@gmail.com',
  medium: 'https://medium.com/@hassan.gokgoz',
  linkedin: 'https://linkedin.com/in/hasangokgoz',
  stackoverflow: 'https://stackoverflow.com/users/16951957/hasangkz',
  github: 'https://github.com/hasangkz',
};

export const TECHS = [
  'HTML',
  'CSS',
  'Javascript',
  'Typescript',
  'Node.js',
  'Java',
  'Spring Boot',
  'Rest APIs',
  'GraphQL',
  'Hibernate',
  'Redis',
  'Docker',
  'Postgres',
  'MongoDB',
];
