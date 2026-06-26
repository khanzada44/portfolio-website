import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import aaspaasImg from "@/public/aas-paas-image.png";
import pyrocastImg from "@/public/Pyrocast-image.png";
import simiImg from "@/public/simi-image.png";

export const links = [
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
    title: "Bachelor's Degree",
    location: "Mirpur Khas Rd, Tando Jam, Pakistan",
    description:
      "Completed my Bachelor's degree in Information Technology from Sindh Agriculture University.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "IT Intern",
    location: "The Indus Hospital, Pakistan",
    description:
      "Completed an internship in the IT Department, assisting with web development, software maintenance, and technical support while gaining practical industry experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "WAMTSOL IT Solutions",
    description:"Developed and maintained scalable web applications using Angular and Node.js. Built RESTful APIs, implemented microservices, integrated AWS services, and optimized application performance.",
    icon: React.createElement(FaReact),
    date: "2024 - 2026",
  },
] as const;

export const projectsData = [
  {
    title: "Aas-Paas",
    description:
      "A hyper-local community mobile app that enables users to connect, chat, and interact with people in their nearby neighborhoods.",
    tags: ["React Native", "Node.js", "MongoDB", "Tailwind", "Redis"],
    imageUrl: aaspaasImg,
  },
  {
    title: "Pyrocast",
    description:
      "Developed and maintained features for a synchronized audio platform using Angular, Node.js, MySQL, and AWS.",
        tags: ["Angular", "TypeScript", "Node.js", "my-sql", "scss", "angular material", "AWS"],
        imageUrl: pyrocastImg,
      },
      {
        title: "Simi Reizen",
        description:
          "Contributed to the development of a travel booking platform, building responsive features, integrating APIs, and enhancing the user experience.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: simiImg,
      },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Next.js",
  "Node.js",
  "Tailwind",
  "MongoDB",
  "GraphQL",
  "PostgreSQL",
  "MySQL",
  "Python",
  "Redis",
  "Stripe Integration",
  "Firebase",
  "Docker",
  "Cloudflare",
  "AWS",
  "COCO-SSD"
] as const;
