"use client";

import Link from "next/link";
import Image from "next/image";
import logod from "@/public/logo2.svg";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) =>
    pathname === path ? "text-primary" : "text-white hover:text-primary";

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Background layer (FIXED z-index issue) */}
      <div
        className={`absolute inset-0 transition-all duration-300 z-0 ${
          scrolled
            ? "bg-black/90 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      />

      <div className="relative z-10 flex items-center justify-between px-4 md:px-8 h-16 md:h-20 w-full">
        {/* Logo */}
        <Link href="/" className="z-50 relative h-full shrink-0 flex items-center">
          <Image
            src={logod}
            alt="CMP Builders"
            width={320}
            height={120}
            className="h-[80%] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className={`${isActive("/")} transition`}>Home</Link>
          <Link href="/about" className={`${isActive("/about")} transition`}>About</Link>
          <Link href="/services" className={`${isActive("/services")} transition`}>Services</Link>
          <Link href="/projects" className={`${isActive("/projects")} transition`}>Projects</Link>
          <Link href="/contact" className={`${isActive("/contact")} transition`}>Contact Us</Link>
          <Link
            href="/quote"
            className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-sm font-semibold transition"
          >
            Request Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`text-2xl ${isActive("/")}`}>Home</Link>
        <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={`text-2xl ${isActive("/about")}`}>About</Link>
        <Link href="/services" onClick={() => setMobileMenuOpen(false)} className={`text-2xl ${isActive("/services")}`}>Services</Link>
        <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className={`text-2xl ${isActive("/projects")}`}>Projects</Link>
        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={`text-2xl ${isActive("/contact")}`}>Contact Us</Link>
        <Link
          href="/quote"
          onClick={() => setMobileMenuOpen(false)}
          className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-sm font-semibold text-xl transition"
        >
          Request Quote
        </Link>
      </div>
    </nav>
  );
}
