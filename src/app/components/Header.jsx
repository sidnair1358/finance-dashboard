"use client";
import { useState, useEffect } from "react";
import Navbar from "./Navigation/Navbar";
import UtilityActions from "./UtillityActions";
import HamburgerMenu from "./Common/HamburgerMenu";
import Logo from "../icons/Logo";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full">
      <div className="flex w-full items-center justify-between border-b-1 border-gray-200 px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <Link href="/">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-lg font-semibold whitespace-nowrap lg:text-xl">
              Fin-Dash
            </span>
          </div>
        </Link>
        {/* Search - Desktop Only */}
        <div className="hidden flex-1 lg:block lg:px-6">
          <input
            className="mx-auto flex w-full max-w-md justify-center rounded border border-gray-300 px-3 py-1.5"
            placeholder="Search..."
            aria-label="Search dashboard"
            type="search"
          />
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:block">
            <UtilityActions />
          </div>
          {/* Hamburger Menu - Mobile Only */}
          <HamburgerMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </div>
      {/* Mobile drawer */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <Navbar isMobile />
      </div>
      {/* Desktop navigation */}
      <nav className="mx-auto hidden w-full max-w-7xl px-4 py-2 sm:px-6 lg:block lg:px-8">
        <Navbar />
      </nav>
    </header>
  );
}
