import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects | Nur Mohammad",
  description:
    "Explore projects built by Nur Mohammad using React, Next.js, TypeScript, and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Projects />
      </main>
      <Footer />
    </>
  );
}
