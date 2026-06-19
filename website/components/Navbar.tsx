"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BulldogCrest from "./BulldogCrest";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Teams", href: "#teams" },
  { label: "Results", href: "#results" },
  { label: "News", href: "#news" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#04091d]/95 shadow-2xl backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
              <BulldogCrest />
            </div>
            <div className="leading-tight">
              <div className="text-white font-heading font-900 text-sm md:text-base tracking-widest uppercase">
                Bali Bulldogs
              </div>
              <div className="text-[#ffc200] font-heading font-700 text-xs tracking-widest uppercase">
                Football Club
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-white/80 hover:text-white text-sm font-heading font-600 tracking-wide uppercase"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#join"
            className="hidden md:inline-flex btn-sunflower px-5 py-2.5 rounded-lg text-sm font-heading font-700 uppercase tracking-wide"
          >
            Join Now
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#04091d]/98 backdrop-blur-md px-4 pb-6 pt-2 border-t border-white/10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-white/80 hover:text-[#ffc200] font-heading font-600 text-sm uppercase tracking-wide border-b border-white/10 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setMenuOpen(false)}
            className="btn-sunflower mt-4 block text-center px-6 py-3 rounded-lg text-sm font-heading font-700 uppercase tracking-wide"
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}
