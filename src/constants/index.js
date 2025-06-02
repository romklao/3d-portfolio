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
  nextjs,
  bookslist,
  memories,
  nike,
  pitch,
  reactprojects,
  sushi,
  thread,
  zoomclone,
  movies,
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
    title: "React js Developer",
    icon: creator,
  },
  {
    title: "Front end Developer",
    icon: web,
  },
  {
    title: "Full stack Developer",
    icon: backend,
  },
  // {
  //   title: "Next.js Developer",
  //   icon: creator,
  // },
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Accountant and Tax Preparer",
    company_name: "Chigbu & Co LLP",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2014 - July 2015",
    points: [
      "Managed tax preparation for overseas corporate clients.",
      "Facilitated client savings of $100,000 each.",
      "Demonstrated strong analytical skills in tax optimization.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Advance Social Innovation",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "November 2017 - July 2019",
    points: [
      "Enhanced FAQ by applying JavaScript, HTML5, and CSS3, to hide answers and fit in 50% more items above fold, decrease load times, and show most important content while user is clicking.",
      "Improved performance grade of WordPress site using plugins, optimizing load times by 71% (7 to 2 seconds).",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Hogarth Worldwide",
    icon: shopify,
    iconBg: "#383E56",
    date: "August 2019 - September 2019",
    points: [
      "Front-end work for one of the world leading smart phone companies.",
      "Layout and wrapping of Thai language text.",
      "HTML and CSS localization",
      "Used simulator to test responsive layout across browsers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "InsurEasier",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "September 2019 - Present",
    points: [
      "Built and maintained a full-featured insurance quote platform using React, Redux, Node.js, Express, and MongoDB.",
      "Integrated 3rd-party APIs: PayPal (payments), Twilio (SMS), Veriff (ID verification), CometChat (chat).",
      "Improved UI/UX through modular, responsive design and component-based architecture.",
      "Fostered cross-functional collaboration via GitHub and Slack, driving eff icient feature delivery.",
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
    name: "Books List",

    description:
      "Web application that allows users to store, add, edit, and delete books'details.",
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
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: bookslist,
    website_url: "https://bookstore-mern-9bc618ec0bda.herokuapp.com/",
    source_code_link: "https://github.com/romklao/bookstore-mern/tree/main",
  },
  {
    name: "Zoom Clone",
    description:
      "A real-time video app where users join meetings and chat with participants.",
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
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
    ],
    image: zoomclone,
    website_url: "https://zoom-clone-rho-five.vercel.app/sign-in/",
    source_code_link: "https://github.com/romklao/zoom_clone",
  },
  {
    name: "Threads clone ",
    description:
      "A social media app for posting updates and interacting with others.",
    tags: [
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: thread,
    website_url: " https://threads-fawn-rho.vercel.app/",
    source_code_link: "https://github.com/romklao/Threads",
  },
  {
    name: "YC Directory ",
    description:
      "A web app for searching startups and viewing their business information.",
    tags: [
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: pitch,
    website_url: "https://yc-directory-dun.vercel.app",
    source_code_link: "https://github.com/romklao/Threads",
  },
  {
    name: "Movies",
    description:
      "A web application that allows users to search for movies, and view details.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: movies,
    website_url: "https://movie-app-ebon-rho.vercel.app",
    source_code_link: "https://github.com/romklao/movie-app",
  },
  {
    name: "Sushiman",
    description:
      "A sushi restaurant landing page highlighting favorite menu items and signature drinks.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: sushi,
    website_url: "https://sushiman-sandy.vercel.app",
    source_code_link: "https://github.com/romklao/sushiman",
  },
  {
    name: "Nike Landing Page",
    description:
      "A landing page for Nike showcasing their latest products and styles.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    website_url: "https://nike-umber-beta.vercel.app",
    source_code_link: "https://github.com/romklao/nike/tree/main",
  },
  {
    name: "Memories",
    description:
      "A full-stack MERN application that allows users to create, edit, and delete memories.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: memories,
    website_url: "https://memories-mern-fd265bf5b0a6.herokuapp.com/",
    source_code_link: "https://github.com/romklao/memories-mern",
  },
  {
    name: "React Projects",
    description:
      "A collection of React projects showcasing different features, and functionalities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: reactprojects,
    website_url: "https://react-projects-six-pink.vercel.app",
    source_code_link: "https://github.com/romklao/Threads",
  },
];

export { services, technologies, experiences, testimonials, projects };
