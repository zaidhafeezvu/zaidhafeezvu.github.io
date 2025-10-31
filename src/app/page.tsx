import About from "../../components/about";
import { Contact } from "../../components/contact";
import Experience from "../../components/experiences";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Intro from "../../components/intro";
import Projects from "../../components/projects";
import SectionDivider from "../../components/section-driver";
import Skills from "../../components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header />
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
