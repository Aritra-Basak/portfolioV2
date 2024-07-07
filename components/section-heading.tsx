import React from "react";

//defining the data type of the props that will be passed as children to the SectionHeading Component
type SectionHeadingProps = {
    children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
    return <h2 className="mb-9 text-center unbounded">{children}</h2>;
}