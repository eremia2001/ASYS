"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { companyInfo } from "../data/companyInfo";
import { handleSmoothScroll } from "../utils/smoothScroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Überwache Scroll-Position für Navbar-Styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menü umschalten
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Menü schließen
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Sanftes Scrollen mit Menü-Schließen
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleSmoothScroll(e, 100); // 100px Offset vom oberen Rand
    closeMenu();
  };

  const navLinks = [
    { href: "/#leistungen", label: "Leistungen" },
    { href: "/#team", label: "Team" },
    { href: "/#werte", label: "Werte" },
    { href: "/#usecases", label: "Use Cases" },
    { href: "/#contact", label: "Kontakt" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md py-2 shadow-lg shadow-black/10"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-10 mr-2">
              <Image
                src="/logo_asys.svg"
                alt="Agent Systems Logo"
                width={40}
                height={40}
                className="transition-all duration-300"
              />
            </div>
            <span className="text-white font-bold text-xl hidden sm:inline-block">
              Agent Systems
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="px-3 py-2 text-gray-300 hover:text-white relative group text-sm lg:text-base"
                onClick={handleNavClick}
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-teal-500/20"
              onClick={handleNavClick}
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-gray-900/90 backdrop-blur-md mt-4 rounded-xl border border-gray-800/40"
            >
              <div className="p-4 space-y-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/60 rounded-lg transition-all"
                      onClick={handleNavClick}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-2 mt-2 border-t border-gray-800/60"
                >
                  <Link
                    href="#contact"
                    className="text-teal-400 hover:text-teal-300 transition-colors py-2 font-medium"
                    onClick={handleNavClick}
                  >
                    Kontakt
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
