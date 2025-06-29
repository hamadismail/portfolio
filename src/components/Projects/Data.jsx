import { FaReact } from "react-icons/fa";
import Project1 from "../../assets/project_1.png";
import Project2 from "../../assets/project_2.png";
import Project3 from "../../assets/project_3.png";
import Project4 from "../../assets/project_4.png";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiMongoose, SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

export const projectsData = [
  {
    id: 1,
    image: Project1,
    title: "Readora",
    category: "Frontend",
    details: {
      title: "Readora",
      description:
        "Readora is a full-stack library management system that allows users to browse, borrow, and manage books online.",
      features: [
        "Browse books by category",
        "View book details and availability",
        "Borrow books with return date",
        "Manage user’s borrowed books",
        "Protected routes and role-based access",
        "Responsive design using Tailwind CSS",
      ],
    },
    tech: [
      <FaReact color="#2b7fff" />,
      <RiTailwindCssFill color="#00b8db" />,
      <IoLogoJavascript color="#f0b100" />,
      <IoLogoFirebase color="#ff6900" />,
      <SiExpress color="#101828" />,
      <SiMongodb color="#00c950" />,
    ],
    live: "https://readora1.web.app/",
    source: "https://github.com/hamadismail/library-management-client",
  },
  {
    id: 2,
    image: Project2,
    title: "HobbyHub",
    category: "Frontend",
    details: {
      title: "HobbyHub",
      description:
        "HobbyHub is a community-driven platform where users can create and join local hobby groups.",
      features: [
        "Create, Read, Update, Delete hobby groups",
        "Join button disabled after group start date",
        "Dark/Light theme toggle",
        "Responsive design using Tailwind CSS",
      ],
    },
    tech: [
      <FaReact color="#2b7fff" />,
      <RiTailwindCssFill color="#00b8db" />,
      <IoLogoJavascript color="#f0b100" />,
      <IoLogoFirebase color="#ff6900" />,
      <SiExpress color="#101828" />,
      <SiMongodb color="#00c950" />,
    ],
    live: "https://hobbyhubss.web.app/",
    source: "https://github.com/hamadismail/hobby-hubs-client",
  },
  {
    id: 3,
    image: Project3,
    title: "EventNest",
    category: "Frontend",
    details: {
      title: "EventNest",
      description:
        "EventNest, a vibrant and user-centric platform that helps users explore, discover, and engage with local events such as tech conferences, art exhibitions, sports competitions, and more.",
      features: [
        "Password reset with Firebase",
        "Event details with reservation form",
        "Real-time countdown to event",
        "Responsive design using Tailwind CSS",
      ],
    },
    tech: [
      <FaReact color="#2b7fff" />,
      <RiTailwindCssFill color="#00b8db" />,
      <IoLogoJavascript color="#f0b100" />,
      <IoLogoFirebase color="#ff6900" />,
    ],
    live: "https://eventnest2.web.app/",
    source: "https://github.com/hamadismail/event-nest",
  },
  {
    id: 4,
    image: Project4,
    title: "Library Management",
    category: "Backend",
    details: {
      title: "Library Management API",
      description:
        "A full-featured RESTful API for managing a library system, built with Express, TypeScript, and MongoDB (Mongoose).",
      features: [
        "Manage book records (Create, Read, Update, Delete)",
        "Borrow books with business rules",
        "Retrieve borrow summaries using MongoDB aggregation",
      ],
    },
    tech: [
      <SiExpress color="#101828" />,
      <SiMongodb color="#00c950" />,
      <SiMongoose color="#880000" />,
      <SiTypescript color="#3178C6"/>,
    ],
    live: null,
    source: "https://github.com/hamadismail/library-management-b5a3",
  },
];

export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "Frontend",
  },
  {
    name: "Backend",
  },
];
