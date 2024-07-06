import project1 from '../assets/projects/eticaret.png';
import project2 from '../assets/projects/hasandan.png';
import project3 from '../assets/projects/wp.png';
import project4 from '../assets/projects/threads.png';

export const HERO_CONTENT = `I have 3 years of experience in software development. I am a fast learner, have high problem solving skills and are prone to teamwork. In the projects I am involved in, I not only write code, but also think in detail about how the product we produce will respond to the end user and aim to contribute to my team with a solution-oriented approach. In addition to constantly improving my technical knowledge, I aim to become a talented team leader by increasing my communication and collaboration skills. I am someone who follows technology closely and does not neglect to integrate new trends into my own projects.`;

export const EDUCATION = `I studied computer engineering at Fenerbahçe University with a full scholarship. I grasped the basics of programming and the deep philosophy of algorithms. "How to write good code?" instead of "How can I be a good engineer?" I learned the answer to the question. I managed the university's software club for 2 years. Together with my team, we planned the organization of various software events and projects.`;

export const EXPERIENCES = [
  {
    year: 'Dec. 2022 - Present',
    role: 'Full Stack Developer',
    company: 'Cormind Inc.',
    description: `I had the chance to work with the CTO of the company where we serve Turkey's largest production
factories. We developed the product with my team on developing and maintaining web applications using Typescript, React.js and Node.js industry 4.0 software in order to catch up with the technology era for the leading factories in the production sector. Implemented RESTful APIs and integrated with Postgres databases. Collaborated with stakeholders to define project requirements and timelines. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on time`,
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
    description: `At VBT, one of Turkey's largest software companies, I learned how software projects are carried out,
how agile methods are used in software processes, and computer architecture. Designed and developed for web applications.`,
    technologies: ['Javascript', 'Java', 'Kafka', 'Hibernate', 'Postgres'],
  },
  {
    year: 'Dec. 2021 - May 2022',
    role: 'Frontend Developer',
    company: 'Flalingo',
    description: `I had my first professional software development experience at Flalingo, a startup based in Germany. I completely rebuilt the frontend of the application with React. My work was appreciated and I was promoted from intern to the main team. Developed and maintained web applications using JavaScript, React.js, and Node.js.`,
    technologies: ['HTML', 'CSS', 'Javascript', 'React.js'],
  },
];

export const PROJECTS = [
  {
    title: 'Hasandan',
    image: project2,
    description:
      'Inspired by sahibinden.com, I created an e-commerce site for myself. There are many features such as adding, deleting and editing products, adding products to favorites and categories.',
    technologies: [
      'HTML',
      'CSS',
      'React.js',
      'React Query',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
  },
  {
    title: 'Threads',
    image: project4,
    description:
      'To better understand why the Threads application suddenly became so popular and why it suddenly became an application that no one uses, I wanted to make the application myself. There are features such as adding and removing friends, suggested users, messaging features, creating and replying to threads, and being able to interact with threads.',
    technologies: [
      'HTML',
      'CSS',
      'React.js',
      'Express.js',
      'SocketIO',
      'MongoDB',
    ],
  },
  {
    title: 'WhatsApp',
    image: project3,
    description:
      'I developed a WhatsApp application that I connected with Google services. Features such as adding people, messaging, and creating a chat room are available.',
    technologies: ['HTML', 'CSS', 'React.js', 'Firebase'],
  },
  {
    title: 'FBucks',
    image: project1,
    description:
      "I created an order tracking platform for my university's cafe and made it available. I was inspired by Starbucks.",
    technologies: ['HTML', 'CSS', 'React.js', 'Express.js', 'MongoDB'],
  },
];

export const CONTACT = {
  address: 'Atasehir / Istanbul',
  phoneNo: '+90 545 302 8583',
  email: 'hassan.gokgoz@gmail.com',
  medium: 'medium.com/@hassan.gokgoz',
  linkedin: 'linkedin.com/in/hasangokgoz',
  stackoverflow: 'stackoverflow.com/users/16951957/hasangkz',
  github: 'github.com/hasangkz',
};
