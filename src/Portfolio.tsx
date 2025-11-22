import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import Typed from "typed.js";
import { GoDownload } from "react-icons/go";
import { cn } from "./util";

const MATCHA = {
  matchaGreen: "#88A37C",
  primaryButton: "bg-[#88A37C] text-white dark:shadow-[#3d3d3d]",
  secondaryButton: "border-[#88A37C] text-[#88A37C] dark:shadow-[#88A37C]",
};

const HrefButton: React.FC<{
  children: React.ReactElement;
  href: string;
  target?: string;
  appearence: "primary" | "secondary";
  download?: boolean;
}> = ({ children, href, appearence = "primary", download = false, target }) => {
  return (
    <motion.a
      href={href}
      download={download}
      target={target}
      whileHover={{ y: -6, scale: 1.02 }}
      className={cn(
        "px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-md ",
        appearence == "primary" ? MATCHA.primaryButton : MATCHA.secondaryButton
      )}
    >
      {children}
    </motion.a>
  );
};

const PROJECTS = [
  {
    title: "Smart Cart (IoT)",
    desc: "Led a 6-member team building an IoT Smart Cart with clean UI and smooth product interaction.",
    tech: ["python", "arudino", "flask"],
  },
  {
    title: "Internet Vehicle Interface",
    desc: "ESP32-CAM IoT system enabling remote vehicle control using real-time streaming.",
    tech: ["python", "arudino", "http"],
  },
  {
    title: "Sign Language Recognition (CNN)",
    desc: "Real-time ASL translator built using Python + CNN.",
    tech: ["python", "CNN", "ML"],
  },
];

const programs = [
  { icon: SiReact, name: "React" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiPython, name: "Python" },
  { icon: SiNodedotjs, name: "Node.js" },
];

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handle = () => {
      const heroHeight = window.innerHeight * 0.8;
      setShowNav(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => {
    const el = document.getElementById("typed");
    if (!el) return;
    const typed = new (Typed as any)("#typed", {
      strings: ["Software Developer", "UI Engineer", "Aspiring Programmer"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  const iconStyle = "text-4xl md:text-5xl";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        dark ? "bg-[#0E0F0E] text-[#EAEAEA]" : "bg-[#F3F8F2] text-[#1A1A1A]"
      }`}
      data-theme="light"
    >
      {showNav && (
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 left-0 right-0 backdrop-blur-md bg-opacity-80 w-full flex justify-between items-center px-8 py-4 border-b z-20 ${
            dark
              ? "border-[#88A37C]/30 bg-[#0E0F0E]"
              : "border-[#88A37C] bg-[#F3F8F2]"
          }`}
        >
          <h1
            className="text-2xl font-semibold"
            style={{ color: MATCHA.matchaGreen }}
          >
            Dachepalli Sathvik
          </h1>
        </motion.nav>
      )}

      <button
        onClick={() => setDark(!dark)}
        className="px-4 py-2 rounded-xl border fixed top-4 right-4 z-50 shadow-lg"
        style={{ borderColor: MATCHA.matchaGreen, color: MATCHA.matchaGreen }}
      >
        {dark ? "Light" : "Dark"}
      </button>

      {/* Hero */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-center px-8 max-w-6xl mx-auto gap-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#88A37C20] to-transparent pointer-events-none" />

        <div className="flex-1 text-left relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ color: MATCHA.matchaGreen }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Dachepalli Sathvik
          </motion.h1>
          <motion.div
            className="text-2xl md:text-3xl font-semibold mt-4 h-10 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span id="typed" style={{ color: MATCHA.matchaGreen }}></span>
          </motion.div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <HrefButton href="./resume.pdf" download appearence="primary">
              <>
                <GoDownload /> Resume
              </>
            </HrefButton>
            <HrefButton
              href="https://github.com/SathvikDachepalli"
              appearence="secondary"
              target="_blank"
            >
              <>
                <SiGithub /> GitHub
              </>
            </HrefButton>
            <HrefButton
              href="https://www.linkedin.com/in/sathvik-dachepalli"
              appearence="secondary"
              target="_blank"
            >
              <>
                <SiLinkedin /> LinkedIn
              </>
            </HrefButton>
          </div>
        </div>

        {/* Portrait */}
        <motion.div
          className="flex-1 flex justify-center relative z-10"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03, boxShadow: "0 0 40px #88A37C55" }}
            src="/portrait.png"
            alt="Sathvik portrait"
            className="rounded-2xl shadow-2xl w-[320px] md:w-[380px] object-cover"
          />
        </motion.div>
      </section>

      {/* About */}
      <section className="px-8 py-12 max-w-4xl mx-auto">
        <h3
          className="text-3xl font-semibold mb-4"
          style={{ color: MATCHA.matchaGreen }}
        >
          About Me
        </h3>
        <p className="opacity-80 leading-relaxed text-lg">
          I'm Sathvik, a software developer who loves building visually
          pleasing, high-performance UIs.
        </p>
      </section>

      {/* Stack */}
      <section className="px-8 py-12 max-w-5xl mx-auto">
        <h3
          className="text-3xl font-semibold mb-6"
          style={{ color: MATCHA.matchaGreen }}
        >
          Tech Stack
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 justify-center">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.15 }}
              className="flex justify-center flex-col items-center gap-2"
            >
              <program.icon
                className={iconStyle}
                style={{ color: MATCHA.matchaGreen }}
              />
              <div>{program.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-10 max-w-5xl mx-auto">
        <h3
          className="text-3xl font-semibold mb-6"
          style={{ color: MATCHA.matchaGreen }}
        >
          Featured Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-2xl shadow-lg border border-[#88A37C]/30 space-y-2"
            >
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="opacity-80 text-sm">{project.desc}</p>
              <div className="flex gap-2">
                {project.tech.map((item) => (
                  <div
                    className={cn(
                      "rounded-md border border-green-800 text-xs px-2 py-1 capitalize",
                      dark ? MATCHA.secondaryButton : MATCHA.primaryButton,
                      "dark:text-white"
                    )}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-12 max-w-4xl mx-auto">
        <h3
          className="text-3xl font-semibold mb-4"
          style={{ color: MATCHA.matchaGreen }}
        >
          Contact
        </h3>
        <p className="opacity-80 leading-relaxed text-lg">
          Reach me at
          <a
            href="mailto:dachepallisathvik@gmail.com"
            className="underline ml-1"
            style={{ color: MATCHA.matchaGreen }}
          >
            dachepallisathvik@gmail.com
          </a>
        </p>
      </section>

      <footer className="py-10 text-center opacity-70 text-sm">
        © {new Date().getFullYear()} Sathvik Dachepalli — Crafted with Matcha •
        <a
          href="https://github.com/SathvikDachepalli"
          className="underline mx-2"
        >
          GitHub
        </a>
        •
        <a
          href="https://www.linkedin.com/in/sathvik-dachepalli"
          className="underline ml-2"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
