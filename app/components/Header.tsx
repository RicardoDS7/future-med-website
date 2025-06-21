"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Use Cases", href: "#use-cases" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    // Listen to scroll
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-3xl font-bold flex flex-row items-center space-x-2">
            <Image src="/futuremed-logo.png" alt="FutureMed Logo" width={50} height={50} className="" />
            FUTURE 
            <span className="text-[var(--color-primary)]">
            MED
            </span>
        </div>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition"
            >
              {link.name}
            </a>
          ))}
        </div>
        <button className="cursor-pointer relative inline-block font-bold text-white py-2 px-6 rounded-full hover:shadow-lg transition shadow-md"
            onClick={() => window.location.href = "#get-started"}
            style={{
                    background: `linear-gradient(120deg, var(--color-primary-hover) 30%, var(--color-primary) 70%)`,
                    }}>
            Get Started
        </button>

        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="max-w-screen-xl mx-auto flex flex-col px-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
