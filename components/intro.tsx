"use client";

import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
    const { ref } = useSectionInView("Home");
  return (
    <section
    ref={ref}
    id="home"
    className="mb-28 max-w-[64rem] text-center sm:mb-0 scroll-mt-[100rem]"
>
        <div className="flex items-center justify-center">
            <div className='relative'>
                <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "tween",
                                duration: 0.2,
                            }}
                        >
                    <Image
                                src="/PortfolioPic.jpeg"
                                alt="Aritra's portrait"
                                width="218"
                                height="218"
                                quality="100"
                                priority={true}
                                className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                            />
                </motion.div>
           
                <motion.span
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                </motion.span>
            </div>
        </div>
        <motion.p
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I'm Aritra</span>, a{" "}
                <span className="font-bold">full-stack developer </span> with{" "}
                <span className="font-bold">
                    <span className="italic">
                        1 year of experience
                    </span>
                </span>
                {" "}in blending the art of design with programming skills to deliver an immersive and engaging user experience through efficient{" "}
                <span className="italic">website development</span>, embracing new
                technologies while tackling exciting{" "}
                <span className="italic">development challenges</span>.
            </motion.p>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                {/* The group classname gives the child component the similar property from the parent component */}
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
                        Contact me here{" "} <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                    href="/Aritra-Basak-Resume.pdf"
                    download
                >
                    Download CV{" "}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://www.linkedin.com/in/aritra-basak-java-web-dev/"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>

                <a
                    className="bg-white p-4 text-gray-700  hover:text-gray-950  flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://github.com/Aritra-Basak"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>

    </section>
  )
}
 