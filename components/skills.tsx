"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";
import {
  Code,
  CodepenIcon,
  Database,
  FileJson,
  GitBranch,
  Globe,
  Layers,
  Palette,
  Rocket,
  Server,
  Wind,
  Atom,
} from "lucide-react";

const skillIcons: Record<string, React.ReactNode> = {
  JavaScript: <FileJson size={20} />,
  Docker: <Rocket size={20} />,
  React: <Atom size={20} />,
  "Next.js": <Globe size={20} />,
  "Node.js": <Server size={20} />,
  Git: <GitBranch size={20} />,
  HTML: <CodepenIcon size={20} />,
  CSS: <Palette size={20} />,
  Tailwind: <Wind size={20} />,
  MongoDB: <Database size={20} />,
  "Redux-Toolkit": <Layers size={20} />,
  Express: <Server size={20} />,
};

// Card variants for hover effect
const cardVariants = {
  initial: {
    scale: 1,
    boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
  },
  hover: {
    scale: 1.05,
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const [hoveredSkill, setHoveredSkill] = React.useState<string | null>(null);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>

      <motion.ul
        className="flex flex-wrap justify-center gap-3 text-lg text-gray-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex items-center gap-2 cursor-pointer transition-all"
            key={index}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.05 * index,
              },
            }}
            viewport={{
              once: true,
            }}
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <motion.span
              initial={{ rotate: 0 }}
              animate={hoveredSkill === skill ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-blue-500 dark:text-blue-400"
            >
              {skillIcons[skill]}
            </motion.span>
            <span>{skill}</span>

            {hoveredSkill === skill && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-500 dark:bg-blue-400 rounded-full"
                initial={{ width: 0, left: "50%", right: "50%" }}
                animate={{ width: "100%", left: 0, right: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
