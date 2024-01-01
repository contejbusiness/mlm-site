"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn, formatter } from "@/lib/utils";
import { User } from "@/types";

interface Props {
  user: User;
}

const Navbar: React.FC<Props> = ({ user }) => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const routes = [
    {
      label: "Plans",
      href: "plans",
    },
    {
      label: "Add Balance",
      href: "balance",
    },
    {
      label: "Withdrawal",
      href: "redeems",
    },
    // {
    //   label: "Refferals",
    //   href: "refferal",
    // },
  ];

  return (
    <nav className="bg-white  border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Balance</p>
          </Link>

          <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-2 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
            {formatter.format(user.balance)}
            {/* {1000} */}
          </span>
        </div>

        <button
          onClick={toggleNavbar}
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${
            user.referredById == null ? "hidden" : "block"
          }`}
          aria-controls="navbar-default"
          aria-expanded={isNavbarOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isNavbarOpen ? "block" : "hidden"
          } `}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* Navigation items */}
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "block py-2 px-3 md:p-0 border-b",
                  `${user.referredById == null ? "hidden" : "block"}`
                )}
              >
                {route.label}
              </Link>
            ))}
            <div className="py-2 px-3 md:p-0 flex items-center gap-4">
              {/* <UserButton afterSignOutUrl="/" /> */}
              <p className="md:hidden">Profile</p>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
