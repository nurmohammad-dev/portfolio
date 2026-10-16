"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", path: "/" },
    { name: "About", href: "/about", path: "/about" },
    { name: "Skills", href: "/skills", path: "/skills" },
    { name: "Education", href: "/#education", path: "/#education" },
    { name: "Projects", href: "/projects", path: "/projects" },
    { name: "Contact", href: "/contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#080a0f]/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-[4.5rem] items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white transition-colors duration-200 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Nur Mohammad
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={pathname === link.path ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  pathname === link.path
                    ? "bg-cyan-400/10 text-cyan-300"
                    : "text-gray-400 hover:bg-white/5 hover:text-cyan-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            className="rounded-lg border border-white/10 p-2 text-xl leading-none text-gray-300 transition-colors duration-200 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-white/10 py-5 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={pathname === link.path ? "page" : undefined}
                  className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    pathname === link.path
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-gray-400 hover:bg-white/5 hover:text-cyan-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
