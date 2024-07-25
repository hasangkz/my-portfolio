import project1 from '../assets/projects/eticaret.jpg';
import project2 from '../assets/projects/hasandan.jpg';
import project4 from '../assets/projects/threads.jpg';
import project5 from '../assets/projects/ois.jpg';
import project6 from '../assets/projects/pentapp.jpg';

import reactSVG from '../assets/usedTechs/react.svg';
import nodejsSVG from '../assets/usedTechs/nodejs.svg';
import javaSVG from '../assets/usedTechs/java.svg';
import springSVG from '../assets/usedTechs/springboot.svg';
import mongodbSVG from '../assets/usedTechs/mongodb.svg';
import postgreSVG from '../assets/usedTechs/postgresql.svg';
import tailwindSVG from '../assets/usedTechs/tailwind.svg';
import socketSVG from '../assets/usedTechs/socket.svg';

export const ABOUT_ME = `I have 3 years of experience in software development. I am a fast learner, have high problem solving skills and are prone to teamwork. In the projects I am involved in, I not only write code, but also think in detail about how the product we produce will respond to the end user and aim to contribute to my team with a solution-oriented approach. In addition to constantly improving my technical knowledge, I aim to become a talented team leader by increasing my communication and collaboration skills. I am someone who follows technology closely and does not neglect to integrate new trends into my own projects.`;

export const EDUCATION = `I studied computer engineering at Fenerbahçe University with a full scholarship. I grasped the basics of programming and the deep philosophy of algorithms. "How to write good code?" instead of "How can I be a good engineer?" I learned the answer to the question. I managed the university's software club for 2 years. Together with my team, we planned the organization of various software events and projects.`;

export const EDUCATION_CS50 = `I successfully completed the CS50 course organized by Harvard University. I learned basic computer science concepts such as algorithms, data structures, software engineering and web development. I developed advanced problem-solving skills and completed a variety of projects.`;

export const EXPERIENCES = [
  {
    year: 'Dec. 2022 - Present',
    role: 'Software Engineer',
    company: 'Cormind Inc.',
    location: 'Istanbul',
    description: `I had the chance to work with the CTO of the company where we serve Turkey's largest production
factories. We developed the product with my team on developing and maintaining web applications using Typescript, React.js and Node.js industry 4.0 software in order to catch up with the technology era for the leading factories in the production sector. Implemented RESTful APIs and integrated with Postgres databases. Collaborated with stakeholders to define project requirements and timelines. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on time.`,
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
    description: `At VBT, one of Turkey's largest software companies, I learned how software projects are carried out,
how agile methods are used in software processes, and computer architecture. Designed and developed for web applications.`,
    technologies: ['Javascript', 'Java', 'Kafka', 'Hibernate', 'Postgres'],
  },
  {
    year: 'Dec. 2021 - May 2022',
    role: 'Full Stack Developer',
    company: 'Flalingo',
    location: 'Germany',
    description: `I had my first professional software development experience at Flalingo, a startup based in Germany. I completely rebuilt the frontend of the application with React. My work was appreciated and I was promoted from intern to the main team. Developed and maintained web applications using JavaScript, React.js, and Node.js.`,
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
    technologies: [reactSVG, nodejsSVG, mongodbSVG],
  },
  {
    id: 2,
    title: 'Threads',
    image: project4,
    link: 'https://github.com/hasangkz/threads_frontend',
    description:
      'To better understand why the Threads application suddenly became so popular and why it suddenly became an application that no one uses, I wanted to make the application myself. There are features such as adding and removing friends, suggested users, messaging features, creating and replying to threads, and being able to interact with threads.',
    technologies: [reactSVG, tailwindSVG, nodejsSVG, socketSVG, mongodbSVG],
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
  {
    id: 5,
    title: 'OIS',
    image: project5,
    link: 'https://github.com/hasangkz/ois',
    description:
      'I prepared an ois system for Fenerbahçe University. I prepared a system to track students and see which student can take which course.',
    technologies: [reactSVG, tailwindSVG, javaSVG, springSVG, postgreSVG],
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
