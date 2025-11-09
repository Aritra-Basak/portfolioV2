/** @format */

"use client";

import React from "react";
import SectionHeading from "./section-heading"
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");
    return (
        <motion.section
            ref={ref}
            className="mb-16 max-w-[49rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>
                Aritra&apos;s Syntax: Beyond the Screen 💭
            </SectionHeading>

            <p>
                Meet Aritra, a skilled{" "}
                <span className="font-medium">
                professional with over two years of experience at Ernst & Young (EY),
                </span>{" "}
                one of the Big Four firms. Aritra holds a Bachelor&apos;s degree in Electronics and Communication Engineering with an impressive score of{" "}
                <span className="italic">9.07 CGPA</span>. As a
                seasoned <span className="italic">full-stack developer</span>
                <br />
                he specializes in{" "}backend developement particularly with
                <span className="font-medium"> Spring Boot</span>.{" "}Aritra&apos;s proficiency extends to various tools & technologies, including{" "}
                <span className="font-medium">Gen AI, Agentic AI, Prompt Engineering, React Js, Python, GraphQL, SQL, MongoDB</span>. <br />
                His diverse skill set and dedication make him a{" "}
                <span className="italic">
                     valuable contributor in the fast-paced world of Software Development.
                </span>
            </p>
            <br />
            <p>
                <span className="italic">When I&apos;m not coding</span>, I enjoy{" "}
                <span className="font-medium">
                    hitting the Gym
                </span>
                , listening to some good music, feeding the
                community dogs{" "}&
                <span className="font-medium">{" "}learning new things</span>. 
                <br/>
                <span className="font-medium">I&apos;ve also recently started reading books, which has been a refreshing addition to my routine</span>. 
            </p>
        </motion.section>
    );
}