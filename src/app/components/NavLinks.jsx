"use client";

import Link from "next/link";

const NAV_ITEMS = [
  { name: "Dashboard", href: "#" },
  { name: "Accounts", href: "#" },
  { name: "Transactions", href: "#" },
  { name: "Reports", href: "#" },
];

const NavLinks = ({ isMobile = false }) => {
  const linkClasses = isMobile
    ? "rounded px-3 py-2 text-sm font-medium hover:bg-gray-100"
    : "text-sm font-medium hover:text-indigo-600";

  const containerClasses = isMobile
    ? "flex flex-col gap-1"
    : "mx-auto flex w-2/3 content-center items-center justify-between";

  return (
    <div className={containerClasses}>
      {NAV_ITEMS.map((item) => (
        <Link key={item.name} href={item.href} className={linkClasses}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
