import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-base text-ink transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-mesh" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-dot-pop bg-[size:20px_20px]" />
      <Navbar sections={SECTIONS} isDark={isDark} setIsDark={setIsDark} />
      <main className="mx-auto max-w-6xl px-6 pb-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
