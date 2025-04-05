"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import UtilityActions from "./UtillityActions";
import HamburgerMenu from "./HamburgerMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="flex w-full items-center justify-between border-b-1 border-gray-200 px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <div className="flex items-center gap-3">
          <svg
            width="40"
            height="40"
            viewBox="0 0 48 48"
            fill="none"
            className="lg:h-12 lg:w-12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="8" fill="#4F46E5" />
            <path
              d="M16 32V16H20V20H24V16H28V32H24V24H20V32H16Z"
              fill="white"
            />
          </svg>
          <span className="text-lg font-semibold whitespace-nowrap lg:text-xl">
            Paapi.ai
          </span>
        </div>
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
