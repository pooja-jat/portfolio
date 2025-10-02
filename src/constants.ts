import { Project } from "./type";
import crypto from "./assets/thumnail/crypto.png";
import pokedex from "./assets/thumnail/pokedex.png";
import todo from "./assets/thumnail/todo.png";
import khatabook from "./assets/thumnail/khatabook.png";
import starbucks from "./assets/thumnail/starbucks.png";
import eventplanner from "./assets/thumnail/eventplanner.png";
import energy from "./assets/thumnail/energy.png";
import whatsapp from "./assets/thumnail/whatsapp.png";
import temperature from "./assets/thumnail/temperature.png";
import weather from "./assets/thumnail/weather.png";
import zerodha from "./assets/thumnail/zerodha.png";
import  emgmt from "./assets/thumnail/emgmt.png";


export const projects: Project[] = [
  // HTML CSS
  {
    id: 1,
    priority: 500,
    startedOn: "Sep 23, 2024",
    title: "Panfila Clone Website",
    description:
      "A responsive Panfila Global Solutions website clone built with HTML and CSS, showcasing clean UI design.",
    category: ["html/css"],
    technologies: ["HTML", "CSS"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    githubUrl: "https://github.com/pooja-jat/panfila-clone-website",
    liveUrl: "https://pooja-jat.github.io/panfila-clone-website/",
  },
  {
    id: 2,
    priority: 501,
    startedOn: "Sep 27, 2024",
    title: "Whatsapp clone",
    description:
      "A responsive WhatsApp Web clone showcasing frontend skills with HTML and CSS, and dynamic UI.",
    category: ["html/css"],
    technologies: ["HTML", "CSS"],
    image:
      whatsapp,
    githubUrl: "https://github.com/pooja-jat/whatsapp-clone",
    liveUrl: "https://pooja-jat.github.io/whatsapp-clone/",
  },
  {
    id: 3,
    priority: 502,
    startedOn: "Oct 4, 2024",
    title: "Starbucks clone",
    description:
      "A responsive Starbucks landing page clone built with HTML, CSS, and JavaScript, showcasing UI/UX design skills.",
    category: ["html/css"],
    technologies: ["HTML", "CSS"],
    image:
      starbucks,
    githubUrl: "https://github.com/pooja-jat/starbucks",
    liveUrl: "https://pooja-jat.github.io/starbucks/",
  },
  {
    id: 4,
    priority: 503,
    startedOn: "Oct 11, 2024",
    title: "Energy",
    description:
      "A modern, responsive energy-themed website showcasing frontend development skills and interactive UI design.",
    category: ["html/css"],
    technologies: ["HTML", "CSS"],
    image:
     energy,
    githubUrl: "https://github.com/pooja-jat/Energy",
    liveUrl: "https://pooja-jat.github.io/Energy/",
  },
  {
    id: 5,
    priority: 504,
    startedOn: "Oct 15, 2024",
    title: "Event Planner",
    description:
      "A responsive event management website built with HTML and CSS showcasing event planning services like weddings, corporate parties, and private celebrations. Includes service listings, contact information, and location details for booking and inquiries.",
    category: ["html/css"],
    technologies: ["HTML", "CSS"],
    image:
      eventplanner,
    githubUrl: "https://github.com/pooja-jat/Event-planner",
    liveUrl: "https://pooja-jat.github.io/Event-planner/",
  },
  {
    id: 6,
    priority: 505,
    startedOn: "Oct 21, 2024",
    title: "IEA Clone",
    description:
      "The IEA website clone showcases global energy insights with interactive sections for news, reports, and data. Built using HTML, CSS, and JavaScript, it highlights clean energy trends and country-level statistics.",
    category: ["html/css"],
    technologies: ["HTML", "CSS"],
    image:
     energy,
    githubUrl: "https://github.com/pooja-jat/IEA",
    liveUrl: "https://pooja-jat.github.io/IEA/",
  },
  {
    id: 7,
    priority: 506,
    startedOn: "Oct 21, 2024",
    title: "Zerodha Clone",
    description:
      "A responsive web app emulating Zerodha’s trading interface, featuring market charts, order forms, and portfolio tracking. Built with HTML, CSS, and JavaScript to demonstrate UI/UX skills.",
    category: ["html/css"],
    technologies: ["HTML", "CSS"],
    image:
     zerodha,
    githubUrl: "https://github.com/pooja-jat/zerodha",
    liveUrl: "https://pooja-jat.github.io/zerodha/",
  },
  {
    id: 8,
    priority: 507,
    startedOn: "Oct 23, 2024",
    title: "Ander G",
    description:
      "A responsive golf resort website demonstrating frontend development skills with modern UI/UX design.",
    category: ["html/css"],
    technologies: ["HTML", "CSS"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    githubUrl: "https://github.com/pooja-jat/ander-G",
    liveUrl: "https://pooja-jat.github.io/ander-G/",
  },

  // JS Projects
  {
    id: 9,
    startedOn: "Feb 6, 2025",
    title: "Temperature converter",
    priority: 152,
    description:
      "A dynamic temperature converter web app demonstrating JavaScript logic, DOM manipulation, and interactive UI.",
    category: ["nonReact"],
    technologies: ["Javascript", "HTML", "CSS"],
    image:
      temperature,
    githubUrl: "https://github.com/pooja-jat/Temperature",
    liveUrl: "https://pooja-jat.github.io/Temperature/",
  },
  {
    id: 10,
    startedOn: "Feb 17, 2025",
    title: "Joke Generator",
    priority: 151,
    description:
      "A dynamic web app fetching random jokes via API, showcasing JavaScript, DOM manipulation, and async operations.",
    category: ["nonReact"],
    technologies: ["Javascript", "RestAPI", "HTML", "CSS"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    githubUrl: "https://github.com/pooja-jat/Random-jokes",
    liveUrl: "https://pooja-jat.github.io/Random-jokes/",
  },
  {
    id: 11,
    startedOn: "Feb 18, 2025",
    title: "Weather App",
    priority: 150,
    description:
      "A modern weather dashboard fetching real-time data via API, showcasing JavaScript and dynamic UI skills.",
    category: ["nonReact"],
    technologies: ["Javascript", "RestAPI", "HTML", "CSS"],
    image:
      weather,
    githubUrl: "https://pooja-jat.github.io/Weather-UI/",
    liveUrl: "https://pooja-jat.github.io/Weather-UI/",
  },

  // React Project
  {
    id: 12,
    startedOn: "Mar 26, 2025",
    title: "Todo App (CRUD)",
    priority: 102,
    description:
      "A dynamic React Todo app implementing CRUD operations with state management and responsive design.",
    category: ["react"],
    technologies: ["React", "Javascript", "HTML", "CSS"],
    image:
      todo,
    githubUrl: "https://github.com/pooja-jat/Todo-UI",
    liveUrl: "https://todo-ui-blue.vercel.app/",
  },
  {
    id: 13,
    startedOn: "Apr 8, 2025",
    title: "PokeGame",
    isFeatured: true,
    priority: 101,
    description:
      "A real-time cryptocurrency dashboard built with React, fetching live data via CoinGecko API.",
    category: ["react"],
    technologies: ["React", "Javascript", "RestAPI", "HTML", "CSS"],
    image:
     pokedex,
    githubUrl: "https://github.com/pooja-jat/pokedex-game",
    liveUrl: "https://pokedex-game-wine.vercel.app",
  },
  {
    id: 14,
    startedOn: "Apr 16, 2025",
    title: "Khatabook (Web)",
    isFeatured: true,
    priority: 103,
    description:
      "A bookkeeping application built with React and Redux, demonstrating state management and CRUD operations.",
    category: ["react"],
    technologies: ["React", "Javascript", "TailwindCSS", "HTML", "CSS"],
    image:
     khatabook,
    githubUrl: "hhttps://github.com/pooja-jat/Redux-Khatabook",
    liveUrl: "https://redux-khatabook.vercel.app/",
  },
  {
    id: 15,
    startedOn: "Apr 19, 2025",
    title: "Employee Management",
    priority: 104,
    description:
      "A dynamic React Todo app implementing CRUD operations with state management and responsive design.",
    category: ["react"],
    technologies: ["React", "Javascript", "TailwindCSS", "HTML", "CSS"],
    image:
     emgmt,
    githubUrl: "https://github.com/pooja-jat/employee-mgmt",
    liveUrl: "https://employee-mgmt-six.vercel.app/",
  },
  {
    id: 16,
    startedOn: "May 8, 2025",
    title: "Crypto App",
    priority: 100,
    description:
      "A real-time cryptocurrency dashboard built with React, fetching live data via CoinGecko API.",
    category: ["react"],
    technologies: ["React", "Javascript", "RestAPI", "HTML", "CSS"],
    image: crypto,
    isFeatured: true,
    githubUrl: "https://github.com/pooja-jat/crypto",
    liveUrl: "https://crypto-ten-brown.vercel.app/",
  },

  // Backend only Project
  {
    id: 17,
    startedOn: "Sep 23, 2025",
    title: "Todo Backend Application",
    priority: 201,
    description:
      "A RESTful API for a Todo application built with Express and MongoDB, supporting CRUD operations and user authentication.",
    category: ["backend"],
    technologies: ["NodeJS", "Express", "MongoDB", "Javascript"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    githubUrl: "https://github.com/pooja-jat/crud_api",
    liveUrl: "https://crud-api-1-0ji9.onrender.com/",
  },
  {
    id: 17,
    startedOn: "Sep 23, 2025",
    title: "Blog Backend Application",
    priority: 200,
    description:
      "A backend Node.js Express application providing authentication and CRUD APIs for managing posts with like functionality.",
    category: ["backend"],
    technologies: ["NodeJS", "Express", "MongoDB", "Javascript"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    githubUrl: "https://github.com/pooja-jat/blog-api",
    liveUrl: "https://blog-api-7xmw.onrender.com/",
  },
];
