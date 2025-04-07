import React from "react";
import HamburgerIcon from "../icons/HamburgerIcon";

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div>
      <button
        className="p-2 text-gray-700 lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <HamburgerIcon isMenuOpen={isMenuOpen} />
      </button>
    </div>
  );
};

export default HamburgerMenu;
