"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu } from "react-feather";

export function MainNav({ className }: { className?: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Menu", href: "/menu" },
    { name: "My Orders", href: "/orders" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-dark shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center">
        {/* Mobile Menu Button - Aligned Left */}
        <div className="md:hidden mr-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-light focus:outline-none"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl tracking-wide text-light hover:opacity-80 transition-opacity">
            DigiGrub
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center space-x-8 ml-8 ${className}`}>
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
      </div>

      <div
        ref={menuRef}
        className={`fixed left-0 w-64 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0 top-16" : "-translate-x-full top-14"
        } md:hidden bg-black/90 rounded-b-lg`}
      >
        <nav className="flex flex-col items-start space-y-6 py-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-light text-lg transition-colors hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
