import React from "react";

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div>
      {" "}
      <button
        className="p-2 text-gray-700 lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 duration-400 ${isMenuOpen ? "scale-110 rotate-90" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
    </div>
  );
};

export default HamburgerMenu;
