import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import SpringBoot_OPD from "@/public/SpringBoot_OPD.png";
import SpringBoot_Prometheus from "@/public/SpringBoot_Prometheus.png";
import SpringBoot_GraphQl from "@/public/SpringBoot_GraphQl.png";
import CoreJava from "@/public/CoreJava.png";

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
        title: "Graduated from College | B.Tech",
        location: "Narula Institute of Technology, Kolkata",
        description:
            "Pursued Bachelor's degree in Electronics and Communication Engineering with an average of 9.07 CGPA.",
        icon: React.createElement(LuGraduationCap),
        date: "2019 - 2023",
    },
    {
        title: "Full Stack Developer | EY",
        location: "Kolkata, India",
        description:
            "Currently employed as a Full Stack Java Developer, where I play a vital role in contributing to a range of critical client projects on a daily basis. With an extensive background in web application development, I excel in designing, developing, and implementing robust and scalable web applications using Java and related technologies.",
        icon: React.createElement(FaReact),
        date: "Feb, 2023 - present",
    }
] as const;

export const projectsData = [
    {
        title: "Graph QL",
        description:
            "This project demonstrates the integration of Spring Boot, GraphQL, and an H2 in-memory database to create a robust, efficient, and scalable API for querying and managing data.",
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
            "This project showcases the use of Spring Boot, HikariCP, and SQL for efficient data handling, with monitoring and visualization capabilities provided by Prometheus and Grafana.",
        tags: ["Java", "Spring Boot", "SQL", "Hikari CP","RESTful API", "Prometheus", "Grafana"],
        imageUrl: SpringBoot_Prometheus,
        link: "https://github.com/Aritra-Basak/SpringBoot_ConnectionPool",
    },
    {
        title: "Aadhaar Scanning",
        description:
            "This is an hospital OPD Booking system uses info from scanning the Aadhaar Card. This project highlights the development of a dynamic web application using Spring MVC, enhanced with HTML, JavaScript, CSS, and Bootstrap for a responsive and user-friendly interface.",
        tags: ["Java", "Spring MVC", "JSP", "HTML5", "CSS3", "JavaScript", "Bootsrap"],
        imageUrl: SpringBoot_OPD,
        link: "https://github.com/Aritra-Basak/Spring_Boot_Projects/tree/main/Camera_Project",
    },
    {
        title: "Doctor Appointment Booking",
        description:
            "This project demonstrates the application of Core Java, data structures, and multi-threading to build a high-performance console interface for efficient data processing and management.",
        tags: ["Core Java", "Data Structures", "Mutli-Threading"],
        imageUrl: CoreJava,
        link: "https://github.com/Aritra-Basak/Doctor-Appointment",
    },
] as const;

export const skillsData = [
    "Java",
    "Python",
    "Spring Boot",
    "Spring MVC",
    "RESTful API",
    "GraphQL",
    "Grafana",
    "Prometheus",
    "GEN AI",
    "React",
    "JavaScript",
    "SQL",
    "MongoDB",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Git",
] as const;