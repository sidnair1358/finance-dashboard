import React from "react";
import NavLinks from "./NavLinks";

const Navbar = ({ isMobile = false }) => {
  return (
    <div>
      {isMobile ? (
        <nav className="fixed z-50 h-screen w-full bg-white lg:hidden">
          <div className="flex h-[calc(100vh-100px)] flex-col">
            <div className="flex-1 overflow-y-auto px-4 py-2">
              <div className="my-4">
                <input
                  className="w-full rounded border border-gray-300 px-3 py-2"
                  placeholder="Search..."
                  aria-label="Search dashboard"
                  type="search"
                />
              </div>
              <NavLinks isMobile />
            </div>
            <div className="border-t border-gray-200 p-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gray-300">
                  <img
                    src="https://avatar.iran.liara.run/public/50"
                    aria-label="Profile picture"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">Sid Nair</p>
                  <p className="text-xs text-gray-500">sid@email.com</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="mx-auto hidden w-full max-w-7xl px-4 py-2 sm:px-6 lg:block lg:px-8">
          <NavLinks />
        </nav>
      )}
    </div>
  );
};

export default Navbar;
