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
  decagon,
  lgs,
  starbucks,
  tesla,
  smooze,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  findfood,
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
      title: "Front Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Technical Writer",
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
      title: "NodeJs Developer",
      company_name: "1byte Tech",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Present",
      points: [
        "Developing and maintaining server side applications using Node.js and other related technologies in a Monolithic architecture and Microservice architecture.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive API endpoints using  REST.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Fullstack Developer",
      company_name: "Decagon",
      icon: decagon,
      iconBg: "#383E56",
      date: "Feb 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using Node.js React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
   
    {
      title: "Project Management",
      company_name: "LGS ",
      icon: lgs,
      iconBg: "#383E56",
      date: "Jan 2021 - Jan 2022",
      points:[
        "Planning and Esitimating project scope, time, and cost.",
        "Collaborating with cross-functional teams Electrical Teams,Mechanical Teams, and other Engineers to Install high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in project reviews and providing constructive feedback to the team members.",
      ],
    },
    {
      title: "Frontend Developer intern",
      company_name: "Startng",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "March 2020 - May2020",
      points: [
        "Developing and maintaining web applications using Html,Css, and Javascript",
        "Collaborating with teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive designs",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Ndifreke proved me wrong.",
      name: " Ukpono Obott",
      designation: "Cloud Engineer",
      company: "Perizer",
      image: "https://randomuser.me/api/portraits/men/59.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Ndifreke does.",
      name: "Oluwafemi Tom",
      designation: ".Net Developer",
      company: "Decagon",
      image: "https://randomuser.me/api/portraits/men/16.jpg",
    },
    {
      testimonial:
        "After Ndifreke optimized our website, our traffic increased by 50%. We can't thank her enough!",
      name: "Faith Alugue",
      designation: "Software Engineer",
      company: "Pinkotab Technologies",
      image: 'https://randomuser.me/api/portraits/women/92.jpg',
    },
  ];
  
  const projects = [
    {
      name: "Smooze App",
      description:
        "Web-based platform that allows users to search, listen, and create their playlist of of favorite song.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "Styled Components",
          color: "pink-text-gradient",
        },
      ],
      image: smooze,
      source_code_link: "https://github.com/smoozepro",
    },
    {
      name: "Find Food",
      description:
        "Web application that enables users to search for food to cook based on the ingredients they have in their kitchen. And also provide a list of recipes for the selected food and videos link on how to prepare the meal.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: findfood,
      source_code_link: "https://github.com/frekeB/find-food",
    },
    {
      name: "Event Ticketing App",
      description:
        " web application that allows users to pay for event tickets online.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "RESTapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/frekeB/Paystack-integration",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };