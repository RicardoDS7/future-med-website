"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

const navLinks = [
    { name: "Use Cases", href: "use-cases" },
    { name: "Features", href: "features" },
    { name: "Compliance", href: "compliance" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-gray-50 sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link 
            to="hero"
            offset={-100}
            smooth={true}
            className="cursor-pointer text-3xl font-bold flex flex-row items-center space-x-2">
          <Image
            src="/futuremed-logo.png"
            alt="FutureMed Logo"
            width={50}
            height={50}
            className=""
          />
          FUTURE
          <span className="text-[var(--color-primary)]">MED</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              offset={-24}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-700 hover:text-[var(--color-primary)] font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="get-started"
          offset={-48}
          smooth={true}
          duration={500}
          className="hidden cursor-pointer relative md:inline-block font-bold text-white py-2 px-6 rounded-full hover:shadow-lg transition shadow-md"
          style={{
            background:
              "linear-gradient(120deg, var(--color-primary-hover) 30%, var(--color-primary) 70%)",
          }}
        >
          Get Started
        </Link>

        {/* Mobile Toggle */}
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
          <div className="max-w-screen-xl mx-auto flex flex-col px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                offset={-200}
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-gray-700 hover:text-[var(--color-primary)] font-medium transition"
              >
                {link.name}
              </Link>
            ))}
            <Link
                to="get-started"
                offset={-96}
                smooth={true}
                duration={500}
                className="cursor-pointer text-center mx-auto mt-4 relative md:hidden font-bold text-white py-2 px-6 rounded-full hover:shadow-lg transition shadow-md"
                style={{
                    background:
                    "linear-gradient(120deg, var(--color-primary-hover) 30%, var(--color-primary) 70%)",
                }}
                >
                Book a Free Demo
            </Link>
          </div>
          
        </div>
      )}
    </header>
  );
}
