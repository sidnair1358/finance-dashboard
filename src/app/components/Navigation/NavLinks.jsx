"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { RiAccountCircleLine } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { GrAnalytics } from "react-icons/gr";

const NAV_ITEMS = [
  {
    name: "Dashboard",
    href: "/",
    icon: <RiDashboardHorizontalLine className="h-5 w-5" />,
  },
  {
    name: "Accounts",
    href: "/pages/accounts",
    icon: <RiAccountCircleLine className="h-5 w-5" />,
  },
  {
    name: "Transactions",
    href: "/pages/transactions",
    icon: <GrTransaction className="h-5 w-5" />,
  },
  {
    name: "Reports",
    href: "/pages/reports",
    icon: <TbReportSearch className="h-5 w-5" />,
  },
  {
    name: "Analytics",
    href: "/pages/analytics",
    icon: <GrAnalytics className="h-5 w-5" />,
  },
];

const NavLinks = ({ isMobile = false }) => {
  const pathname = usePathname();

  const linkClasses = (href) =>
    isMobile
      ? `rounded px-3 py-2 text-sm font-medium hover:bg-gray-100 ${
          pathname === href ? "bg-gray-100" : ""
        }`
      : `items-center flex gap-2 text-sm font-medium hover:text-indigo-600 transition-colors ${
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
          {item.icon && <span className="hidden lg:block">{item.icon}</span>}
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
