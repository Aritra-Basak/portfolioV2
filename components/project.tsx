"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

//Here we are classifying the data-type of ProjectsProps as the type of projectsData of any number from data.tsx 

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
    link,
}: ProjectProps) {

    const ref = useRef<HTMLDivElement>(null); 
    //the useScroll Hook from Framer Motion defines from which component the animation must start.
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
           <Link href={link}>
                <section className="bg-gray-100 max-w-[44rem] border border-black/5 rounded-lg m-b-8 overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                        <h3 className="text-2xl font-semibold">{title}</h3>
                        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                            {description}
                        </p>
                        <ul className="flex flex-wrap my-4 gap-2 sm:mt-auto">
                            {tags.map((tag, index) => (
                                <li
                                    className="bg-black/[0.7] px-3 py-1 text-[0.6rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                    key={index}
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* The images will be hidden then when the view width crosses sm and up it will become block */}
                    <Image
                        src={imageUrl}
                        alt="Project I worked on"
                        quality={95}
                        className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
                    />
                </section>
            </Link>
        </motion.div>
    );
}