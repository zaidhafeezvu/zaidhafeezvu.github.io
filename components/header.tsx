"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "../lib/data";
import clsx from "clsx";
import { useActiveSectionContext } from "../context/active-sectuon-context";
import { Section } from "../lib/type";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

const handleSmoothScroll = (hash: string, name: Section) => {
  const targetId = hash === "#home" ? "/" : hash;
  const targetElement = document.querySelector(`[id="${targetId}"]`) ||
    document.querySelector(hash);

  if (targetElement) {
    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const offset = 80;

    window.scrollTo({
      top: offsetTop - offset,
      behavior: "smooth"
    });
  }

  setActiveSection(name); // Now this works because name is typed as Section
  setTimeOfLastClick(Date.now());
};
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none bg-gray-200 bg-opacity-100 shadow-2xl shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <button
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition-all duration-300 relative rounded-md", "text-gray-500"
                )}
                onClick={() => {
                  handleSmoothScroll(link.hash, link.name);
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}