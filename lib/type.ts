import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];
export type Section =
    | "Home"
    | "About"
    | "Projects"
    | "Skills"
    | "Experience"
    | "Contact";