import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  ivyarc,
  Eyepal,
  Titan,
  Toptal,
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
  rockpaper,
  youtube,
  restaurant,
  maverick,
  photograph,
  moviecard,
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
    title: "React.js Developer (Intern)",
    company_name: "IVYARC",
    icon: ivyarc,
    iconBg: "#383E56",
    date: "January 2023 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "STUDENT",
    company_name: "ALX",
    icon: Eyepal,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - MAY 2023",
    points: [
      "Engaged with Languages such as C and Python.",
      "Collaborating with cross-functional teams to create high-quality products.",
      "Engaged with Linux Command Line, Shell Navigation and GIT from the terminal",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer (Student)",
    company_name: "FreeCode Camp",
    icon: Titan,
    iconBg: "#383E56",
    date: "Jan 2022 - December 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Olaoluwa proved me wrong.",
    name: "Naomi Shore",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Olaoluwa does.",
    name: "Matt Redman",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    testimonial:
      "After Olaoluwa optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/85.jpg",
  },
  {
    testimonial:
      "Olaoluwa provided a well-designed website with an easy to use content management system.",
    name: "Natasha William",
    designation: "CTO",
    company: "Fluid Enterprises",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

const projects = [
  {
    name: "Photography Website",
    description:
      "A Photography Website  that allows clients to navigate through client's work",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: photograph,
    source_code_link: "https://emmanuel0846.github.io/photograph/",
  },
  {
    name: "Maverick City Website",
    description:
      "Practice Website developed for Maverick City Band. With sections to play and download songs, buy and book tickets.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: maverick,
    source_code_link: "https://emmanuel0846.github.io/mavericks/",
  },
  {
    name: "MovieCard App",
    description:
      "Web application that enables users to fectch and know information about latest movies.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: moviecard,
    source_code_link: "https://emmanuel0846.github.io/moviecard-react/",
  },
  {
    name: "Restaurant Landing Page",
    description:
      "A Restaurant Website where clients can navigate through foods and book online.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link: "https://emmanuel0846.github.io/dadel-restaurant/",
  },
  {
    name: "Youtube Clone",
    description:
      "A practice Youtube Clone Project.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://emmanuel0846.github.io/sigma-website/youtube.html",
  },
  {
    name: "Rock Paper Scissors Game",
    description:
      "A web game about Rock, Paper and Scissors.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: rockpaper,
    source_code_link: "https://emmanuel0846.github.io/rock-paper-scissors/",
  },
];

export { services, technologies, experiences, testimonials, projects };