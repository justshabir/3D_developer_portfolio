import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Component-based architecture: React.js allows you to build UI components that can be reused across your application. This makes it easier to manage your code and maintain consistency across your app.",

      "Virtual DOM: React.js uses a virtual DOM to optimize performance. This allows it to update only the parts of the UI that have changed, rather than updating the entire UI every time there is a change.",

      "JSX syntax: React.js uses a syntax called JSX, which allows you to write HTML-like code within your JavaScript. This makes it easier to build UI components and manage their state.",

      "One-way data flow: React.js follows a one-way data flow model, which means that data flows from parent components to child components. This makes it easier to manage the state of your application and ensures that your code is easier to understand and maintain.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "DadaSoko",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Writing code in JavaScript and/or TypeScript to build user interfaces for mobile apps using the React Native framework.",

      "Understanding how to use React Native components, APIs, and libraries to create mobile applications that can run on both iOS and Android platforms.",

      "Using various tools like debugging, profiling, and testing tools to ensure that the applications you develop are high-quality and meet the requirements of the client.",

      "Collaborating with designers, product managers, and other stakeholders to understand project requirements and deliver the desired results.",

      "Staying up-to-date with the latest trends, techniques, and best practices in mobile app development to improve the quality of your work and deliver better results.",

      "Troubleshooting issues that arise during the development process and finding ways to solve them.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "System Engineer",
    company_name: "NETCB",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2017 - Present",
    points: [
      "Designing and developing computer systems and networks that meet the needs of the organization or client.",
      "Evaluating existing systems and recommending improvements or upgrades to enhance performance and functionality.",
      "Ensuring system and network security by implementing appropriate protocols and safeguards.",
      "Troubleshooting system and network issues to identify and resolve problems.",
      "Collaborating with other IT professionals, such as software developers, network administrators, and database administrators, to ensure that all components of the system work together seamlessly.",
      "Developing and maintaining system documentation, including user manuals, technical specifications, and system architecture diagrams.",
      "Providing technical support to end-users and training them on the proper use of the system.",
      "Keeping up-to-date with new technologies and industry trends to ensure that the system is state-of-the-art and meets the needs of the organization.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
