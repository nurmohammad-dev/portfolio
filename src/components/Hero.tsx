"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const typingLines = [
  "Full-Stack Developer",
  "React | Next.js | TypeScript",
  "Node.js | Express.js | Django",
  "I build modern, responsive, and user-friendly web applications.",
];

const Hero = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = typingLines[lineIndex];
    const isComplete = text === currentLine;
    const isEmpty = text === "";
    const delay = isComplete ? 1400 : isEmpty && isDeleting ? 300 : 65;

    const timer = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setLineIndex((currentIndex) => (currentIndex + 1) % typingLines.length);
        return;
      }

      setText((currentText) =>
        isDeleting
          ? currentText.slice(0, -1)
          : currentLine.slice(0, currentText.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, lineIndex, text]);

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden border-b border-white/10"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-12 px-6 py-24 sm:py-32 md:grid-cols-[1fr_0.9fr] md:gap-20">
        <div className="text-center md:text-left">
          <p className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Hi there! <span aria-hidden="true">👋</span>
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            I am <span className="text-cyan-300">Nur Mohammad</span>
          </h1>

          <div
            aria-live="polite"
            className="mt-7 min-h-8 text-lg font-medium text-purple-300 sm:text-2xl"
          >
            {text}
            <span className="ml-1 inline-block h-6 w-px animate-pulse bg-cyan-300 align-middle" />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start">
            <a
              href="#contact"
              className="rounded-lg border border-cyan-400/60 px-6 py-3 font-medium text-cyan-300 transition-colors duration-200 hover:bg-cyan-400 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-5 rounded-full border border-purple-400/70 sm:-inset-6" />
            <div className="relative overflow-hidden rounded-full border-8 border-slate-900 bg-slate-900 shadow-2xl shadow-purple-950/40">
              <Image
                src="/profile.png"
                alt="Nur Mohammad"
                width={280}
                height={280}
                priority
                className="h-56 w-56 object-cover sm:h-72 sm:w-72"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
