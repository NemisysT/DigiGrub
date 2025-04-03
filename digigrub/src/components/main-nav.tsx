"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "react-feather";

export function MainNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Menu", href: "/menu" },
    { name: "My Orders", href: "/orders" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-dark shadow-md">
      <div className="container mx-auto px-0 py-4 flex justify-start items-center">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-2 pl-6">
          <span className="font-bold text-2xl tracking-wide text-light hover:opacity-80 transition-opacity">
            DigiGrub
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-light transition-colors hover:text-accent ${
                pathname === link.href ? "font-semibold" : "opacity-80"
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-accent rounded-full transition-all"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-light focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark shadow-md">
          <nav className="flex flex-col items-start space-y-4 py-4 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-light transition-colors hover:text-accent text-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
