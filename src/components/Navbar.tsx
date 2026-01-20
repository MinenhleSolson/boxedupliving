"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "3D View", href: "/3d-view" },
    { name: "About", href: "/about" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-black"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center z-10">
            <Image
              src="/logo.png"
              alt="Boxed Up Living Logo"
              width={120}
              height={40}
              className="h-auto w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex md:items-center md:space-x-8 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-white font-medium transition-all duration-300 group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 transition-all duration-300 ${active
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                      }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Contact Us Button - Right */}
          <div className="hidden md:block z-10">
            <Link
              href="/contact"
              className="px-6 py-2 bg-white text-black rounded-md font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-green-400 rounded-md p-2 z-10"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 transition-transform duration-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Pushes content down */}
      <div
        className={`md:hidden bg-black border-t border-gray-800 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link, index) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white font-medium transition-all duration-300 hover:text-green-400 relative group py-2"
                style={{
                  animation: isOpen
                    ? `fadeInUp 0.4s ease-out ${index * 0.1}s both`
                    : "none",
                }}
              >
                <span className="relative z-10">{link.name}</span>
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 transition-all duration-300 ${active
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                    }`}
                />
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block mt-4 px-6 py-2 bg-white text-black rounded-md font-medium text-center transition-all duration-300 hover:bg-gray-100"
            style={{
              animation: isOpen
                ? `fadeInUp 0.4s ease-out ${navLinks.length * 0.1}s both`
                : "none",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

