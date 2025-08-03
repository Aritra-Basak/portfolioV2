import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bigbrain from "@/public/bigBrain.png"
import SpringBoot_Prometheus from "@/public/SpringBoot_Prometheus.png";
import SpringBoot_GraphQl from "@/public/SpringBoot_GraphQl.png";
import CoreJava from "@/public/CoreJava.png";
import Microservice from "@/public/Microservice.png";
import AI_Agent from "@/public/AI_Agent.png";

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
//Adding const make the links object more precise what it will actually contain with example and also makes it readonly.
export const experiencesData = [
    {
        title: "Higher Secondary",
        location: "Kolkata, India",
        description:
            "I passed my higher secondary education in science stream with biological science as an elective subject with 81% from ISC board.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Java Programmer | Suven Consultants & Technology Pvt. Ltd. ",
        location: "Remote",
        description:
            "Interned with the company, where I actively improved and upskilled my proficiency in core Java. Additionally, I applied my knowledge by successfully developing Java projects based on core Java principles to reinforce my learning.",
        icon: React.createElement(CgWorkAlt),
        date: "Feb, 2022 - Aug, 2022",
    },
    {
        title: "Graduated from College | B-Tech",
        location: "Narula Institute of Technology, Kolkata",
        description:
            "Pursued Bachelor's degree in Electronics and Communication Engineering with an average of 9.07 DGPA.",
        icon: React.createElement(LuGraduationCap),
        date: "2019 - 2023",
    },
    {
        title: "Full Stack Developer | EY",
        location: "Kolkata, India",
        description:
            "As a Full Stack Java Developer, I deliver high-impact web solutions, specializing in designing, developing, and deploying robust applications using Java, Spring Boot, and React.js across MVC and microservices architectures. I led the development of a central government project, significantly boosting user engagement by 70% through comprehensive error handling. My work includes developing AI-powered solutions for automated data extraction (reducing errors by 50%, speeding processing by 60%) and increasing health record linking by over 100%. I also engineered a Python script for medical insurance fraud detection, augmenting detection by 70%. I actively integrate Generative AI and Ollama to drive innovation, leveraging a diverse tech stack including Python, Docker, RabbitMQ, Grafana, Prometheus, and GraphQL.",
        icon: React.createElement(FaReact),
        date: "Feb, 2023 - present",
    }
] as const;

export const projectsData = [
    {
        title: "AI Agent - Personal Assistant",
        description:
            "Developed a personal AI Agent using Python and Generative AI, enabling real-time responses beyond standard LLM limitations. Features include email automation, local file search, and RAG-based document analysis.",
        tags: ["Python", "Generative AI", "Email Automation", "Local File Search", "RAG based Document Analysis"],
        imageUrl: AI_Agent,
        link: "https://github.com/Aritra-Basak/AI-Agent",
    },
    {
        title: "Big Brain",
        description:
            "Developed a functional application enabling users to upload, query, and perform vector searches on documents and notes while facilitating collaborative sharing through organizations. ",
        tags: ["Next Js", "Typescript", "Clerk", "Convex", "Shadecn UI", "Tailwind Css"],
        imageUrl: bigbrain,
        link: "https://bigbrain-indol.vercel.app/",
    },
    {
        title: "Graph QL",
        description:
            "This project demonstrates the integration of Spring Boot, GraphQL, and an H2 in-memory database. Reduced data-fetching latency by 45% and streamlined API response time.",
        tags: [
            "Java",
            "Spring Boot",
            "Graph QL",
            "H2 Database",
            "SQL"
        ],
        imageUrl: SpringBoot_GraphQl,
        link: "https://github.com/Aritra-Basak/SpringBoot_GraphQl",
    },
    {
        title: "Connection Pool and Prometheus",
        description:
            "This project showcases the use of Spring Boot, HikariCP, and SQL for efficient data handling, with Prometheus and Grafana.",
        tags: ["Java", "Spring Boot", "SQL", "Hikari CP", "RESTful API", "Prometheus", "Grafana"],
        imageUrl: SpringBoot_Prometheus,
        link: "https://github.com/Aritra-Basak/SpringBoot_ConnectionPool",
    },
    {
        title: "User Contact Service",
        description:
            "Gained hands-on experience with microservice architecture, learned how to integrate Spring Cloud Netflix dependencies, and developed a foundational understanding of deploying Spring Boot services using Docker.",
        tags: ["Java", "Spring Boot", "Spring Cloud", "RESTful API", "Microservices", "Docker"],
        imageUrl: Microservice,
        link: "https://github.com/Aritra-Basak/MicroserviceProject1-UserContactService",
    },
] as const;

export const skillsData = [
    "Java",
    "Python",
    "Javascript",
    "Spring Boot",
    "Spring MVC",
    "RESTful API",
    "GraphQL",
    "Grafana",
    "Prometheus",
    "GEN AI",
    "React Js",
    "Next Js",
    "SQL",
    "MongoDB",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "Docker",
] as const;