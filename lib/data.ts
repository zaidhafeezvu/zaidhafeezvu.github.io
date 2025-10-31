import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { Section } from "./type";


export const links: {name: Section; hash: string}[] = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [

  {
    title: "Full-Stack Developer Intern",
    location: "Ideoversity , Lahore",
    description:
      "I worked as a Full-Stack developer Intern for 4 months .",
    icon: React.createElement(CgWorkAlt),
    date: "May, 2024 - Aug, 2024",
  },

  {
    title: "Frontend Developer",
    location: "Xsuite Digital , Lahore",
    description:
      "I worked as a Frontend developer  for 8 months .",
    icon: React.createElement(CgWorkAlt),
    date: "Aug, 2024 - April,2025",
  },
  {
    title: "Full Stack Developer",
    location: "Regent Business Strategies, Lahore",
    description:
      "I am currently working for Regent Business Strategies .",
    icon: React.createElement(CgWorkAlt),
    date: "May, 2025 - current",
  },

] as const;

export const projectsData = [

  {
    title: "Jobify",
    description:
      "A small frontend project in typescript with Google-auth.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Google-auth"],
    imageUrl: "/jobify.jpg",
    lnk: "https://job-portal-mu-pied.vercel.app/",
  },
  {
    title: "Fooderers-A FUll Stack Restaurant Website",
    description:
      "A Full Stack Website whole cooked in MERN with Redux Toolkit and Stripe",
    tags: ["MERN", "STRIPE", "Tailwind CSS", "Redux-Toolkit"],
    imageUrl: "/Fooderers.webp",
    lnk: "https://restaurant-vh77.vercel.app/",
  },
  {
    title: "Swifttakeoff",
    description:
      "Swift Takeoffs specializes in accurate and efficient construction estimating services,",
    tags: ["Tailwind CSS", "Vite"],
    imageUrl: "/swifttakeoffs.webp",
    lnk: "https://www.swifttakeoffs.com/",
  },
  {
    title: "ReelChop",
    description:
      "A video editing and processing application built with modern web technologies.",
    tags: ["React", "Next.js", "Video Processing"],
    imageUrl: "/reelchop.png",
    lnk: "#", // Add your project link here
  },


] as const;

export const skillsData = [
  "JavaScript",
  "Docker",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "HTML",
  "CSS",
  "Tailwind",
  "MongoDB",
  "Redux-Toolkit",
  "Express",
] as const;
