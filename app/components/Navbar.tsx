"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "The Edit", href: "/the-edit" },
  { name: "Styling", href: "/styling" },
  { name: "Personal Shopping", href: "/personal-shopping" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="relative z-50 w-full bg-[#f8f5f0]">
      <nav className="mx-auto flex min-h-[80px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:min-h-[92px] lg:px-12 xl:px-16">
        
        {/* ==================== */}
        {/* LOGO */}
        {/* ==================== */}

        <Link
          href="/"
          onClick={closeMenu}
          className="group shrink-0"
        >
          <div className="flex flex-col">
            <span className="font-serif text-[13px] tracking-[0.08em] text-[#3d281d] sm:text-[14px] lg:text-[16px]">
              THE WARDROBE EDIT
            </span>

            <span className="mt-1 font-serif text-[9px] italic tracking-[0.04em] text-[#765f51] sm:text-[12px]">
              Your wardrobe, but better.
            </span>
          </div>
        </Link>

        {/* ==================== */}
        {/* DESKTOP NAVIGATION */}
        {/* ==================== */}

        <div className="hidden items-center gap-5 lg:flex xl:gap-7 2xl:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative py-2 text-[9px] font-medium uppercase tracking-[0.09em] text-[#3d332d] transition-colors duration-300 hover:text-[#76513c] lg:text-[11px]"
            >
              {link.name}

              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#76513c] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* ==================== */}
        {/* DESKTOP ACTIONS */}
        {/* ==================== */}

        <div className="hidden items-center gap-4 lg:flex xl:gap-5">
          <Link
            href="/contact"
            className="group flex items-center gap-2 bg-[#4a2e20] px-5 py-3 text-[9px] font-medium uppercase tracking-[0.11em] text-white transition-all duration-300 hover:bg-[#352016] xl:px-6"
          >
            <span>Book a consultation</span>

            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact The Wardrobe Edit on WhatsApp"
            className="text-[#4a3327] transition-transform duration-300 hover:scale-110"
          >
            <MessageCircle size={18} strokeWidth={1.5} />
          </a>
        </div>

        {/* ==================== */}
        {/* MOBILE MENU BUTTON */}
        {/* ==================== */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center text-[#4a3327] lg:hidden"
        >
          {menuOpen ? (
            <X size={23} strokeWidth={1.5} />
          ) : (
            <Menu size={23} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* ==================== */}
      {/* MOBILE MENU */}
      {/* ==================== */}

      <div
        className={`overflow-hidden border-t border-[#e6ded6] bg-[#f8f5f0] transition-all duration-500 ease-in-out lg:hidden ${
          menuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-8 pt-5 sm:px-8">
          
          {/* Mobile Links */}

          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-[#e6ded6] py-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[#3d332d] transition-colors duration-300 hover:text-[#76513c]"
              >
                <span>{link.name}</span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                />
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="flex flex-1 items-center justify-center bg-[#4a2e20] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#352016]"
            >
              Book a consultation
            </Link>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-[#4a3327] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.12em] text-[#4a3327] transition-colors duration-300 hover:bg-[#4a3327] hover:text-white"
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}