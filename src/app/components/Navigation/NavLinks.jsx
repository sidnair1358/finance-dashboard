"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/" },
  { name: "Accounts", href: "/pages/accounts" },
  { name: "Transactions", href: "/pages/transactions" },
  { name: "Reports", href: "/pages/reports" },
  { name: "Analytics", href: "/pages/analytics" },
];

const NavLinks = ({ isMobile = false }) => {
  const pathname = usePathname();

  const linkClasses = (href) =>
    isMobile
      ? `rounded px-3 py-2 text-sm font-medium hover:bg-gray-100 ${
          pathname === href ? "bg-gray-100" : ""
        }`
      : `text-sm font-medium hover:text-indigo-600 transition-colors ${
          pathname === href
            ? "text-indigo-600 border-b-2 border-indigo-500"
            : "text-gray-600"
        }`;

  const containerClasses = isMobile
    ? "flex flex-col gap-1"
    : "mx-auto flex w-full content-center items-center justify-between";

  return (
    <div className={containerClasses}>
      {NAV_ITEMS.map((item, i) => (
        <Link key={i} href={item.href} className={linkClasses(item.href)}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
