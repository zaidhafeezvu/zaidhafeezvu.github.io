"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-12 max-w-[45rem] text-center leading-8 sm:mb-20 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am an undergraduate student at <span className="font-medium">Punjab University</span>, where I am pursuing a degree in
        <span className="font-medium"> Technology Education</span>. Alongside my studies, I learnt <span className="font-medium ">full-stack web development</span>.
        My core stack is
        <span className="font-semibold"> React, Next.js, Node.js, and MongoDB</span>. I am also familiar with TypeScript.
      </p>


    </motion.section>
  );
}
