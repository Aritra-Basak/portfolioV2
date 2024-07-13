"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
    const { ref } = useSectionInView("Experience");
    return (
        <section
            id="experience"
            ref={ref}
            className="scroll-mt-28 mb-28 sm:mb-40"
        >
            <SectionHeading>My Experiences 💼</SectionHeading>
            <VerticalTimeline >
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                        contentStyle={{
                            background:"#f3f4f6",
                            boxShadow:"none",
                            border:"1px solid rgba(0,0,0,0.05)",
                            textAlign:"left",
                            padding:"1.3rem 2rem"
                        }}
                        >
                            <h3 className="font-semibold capitalize">
                                {item.title}
                            </h3>
                            <p className="italic !mt-0">{item.location}</p>
                            <p className="!mt-1 !font-normal">
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}