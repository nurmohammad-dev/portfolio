import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills | Nur Mohammad",
  description:
    "Explore the frontend, backend, database, and development tools Nur Mohammad works with.",
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Skills />
      </main>
      <Footer />
    </>
  );
}
