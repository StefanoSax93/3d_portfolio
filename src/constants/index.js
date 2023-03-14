import {
  backend,
  web,
  bootstrap,
  javascript,
  typescript,
  html,
  css,
  vue,
  reactjs,
  redux,
  tailwind,
  laravel,
  php,
  mysql,
  git,
  boolflix,
  deliveboo,
  insurance,
  boolzapp,
  christmas,
  CV,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Vue JS",
    icon: vue,
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
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "Insurance Consulting",
    description:
      "This is a prototype of an insurance agency website. I created this responsive project with vue js and i used aos library for components animations.",
    tags: [
      {
        name: "vue js",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "violet-text-gradient",
      },
    ],
    image: insurance,
    source_code_link: "https://github.com/StefanoSax93/proj-html-vuejs",
    demo_code_link: "https://stefanosax93.github.io/proj-html-vuejs",
  },
  {
    name: "Christmas Countdown",
    description:
      "This is a very simple app, but also pretty cool, that counts the time remaining to Christmas. I used only html,css and javascript for developing it.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "yellow-text-gradient",
      },
    ],
    image: christmas,
    source_code_link: "https://github.com/StefanoSax93/Christmas-countdown-app",
    demo_code_link: "https://stefanosax93.github.io/Christmas-countdown-app/",
  },
  {
    name: "Boolflix",
    description:
      "In this responsive project you can search films or tv series. I got the data from themoviedb through an API call, for which I used axios library.",
    tags: [
      {
        name: "vue js",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "violet-text-gradient",
      },
      {
        name: "axios",
        color: "violet-text-gradient",
      },
    ],
    image: boolflix,
    source_code_link: "https://github.com/StefanoSax93/vue-boolflix",
    demo_code_link: "https://stefanosax93.github.io/vue-boolflix",
  },
  {
    name: "Deliveboo",
    description:
      "Team project inspired by deliveroo website, where there is a back-end section developed with php and laravel, and a front-end section developed with vue.js.",
    tags: [
      {
        name: "vue js",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "violet-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
    ],
    image: deliveboo,
    source_code_link: "https://github.com/StefanoSax93/Deliveboo",
    demo_code_link: "",
  },
  {
    name: "Boolzapp",
    description:
      "This non-responsive project is inspired to whatsapp. Here you can search for your contacts, send them messages and get a static answer.",
    tags: [
      {
        name: "vue js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: boolzapp,
    source_code_link: "https://github.com/StefanoSax93/vue-boolzapp",
    demo_code_link: "https://stefanosax93.github.io/vue-boolzapp",
  },
];

export { services, technologies, projects, CV };
