"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const currentUrl = usePathname();

  const [servicePaneOpen, setServiceOpen] = useState(false);

  return (
    <nav className="py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <button className="inline-flex flex-col gap-y-1 md:hidden text-lg text-black">
            <span className="w-5 h-[2px] bg-dark-500"></span>
            <span className="w-5 h-[2px] bg-dark-500"></span>
            <span className="w-3 h-[2px] bg-dark-500"></span>
          </button>
          <Link href="/" className="inline-flex items-center gap-x-2 sm:gap-x-3">
            <Image
              src="/media/images/logos/swiftshift-logo-dark.png"
              alt="SwiftShift's Sail Logo"
              height={44}
              width={54}
            />
            <span className="md:hidden font-extrabold">
              SwiftShift
            </span>
          </Link>
        </div>
        <ul className="hidden md:flex items-center gap-x-8 lg:text-lg text-dark-400">
          <li>
            <Link
              href="/"
              className={`${
                currentUrl === "/"
                  ? "text-primary-500 hover:text-dark-300 font-semibold"
                  : "hover:text-primary-500"
              }`}
            >
              Home
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/services"
              className={`${
                currentUrl === "/services"
                  ? "text-primary-500 hover:text-dark-300 font-semibold"
                  : "hover:text-primary-500"
              }`}
              onClick={() => setServiceOpen((prev) =>!prev)}
            >
              Services {servicePaneOpen ? <span className="bi-chevron-up"></span> : <span className="bi-chevron-down"></span> }
            </Link>
            {servicePaneOpen && ( <ul className="absolute left-0 z-50 bg-dark-500 p-3 rounded-b-[0.625rem] w-max flex flex-col gap-y-2">
              <li className="flex gap-x-2 before:w-px before:h-4 items-start before:bg-primary-500 border-b border-primary-300 p-2">
                Individual family & office move
              </li>
              <li className="flex gap-x-2 before:w-px before:h-4 items-start before:bg-primary-500 border-b border-b-primary-400 p-2">
                Local & Interstate Move
              </li>
              <li className="flex gap-x-2 before:w-px before:h-4 items-start before:bg-primary-500 border-b border-b-primary-400 p-2">
                Comprehensive Packing solutions
              </li>
              <li className="flex gap-x-2 before:w-px before:h-4 items-start before:bg-primary-500 border-b border-b-primary-400 p-2">
              Tailored Relocation Planning
              </li>
              <li className="flex gap-x-2 before:w-px before:h-4 items-start before:bg-primary-500 border-b border-b-primary-400 p-2">
              Clear labeling and item Tracking Service
              </li>
              <li className="flex gap-x-2 before:w-px before:h-4 items-start before:bg-primary-500 border-b border-b-primary-400 p-2">
              Cleaning Services
              </li>
              <li className="flex gap-x-2 before:w-px before:h-4 items-start before:bg-primary-500 p-2">
              Post-Move Support and Setup Assistance
              </li>
            </ul>)}
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                currentUrl === "/about"
                  ? "text-primary-500 hover:text-dark-300 font-semibold"
                  : "hover:text-primary-500"
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${
                currentUrl === "/contact"
                  ? "text-primary-500 hover:text-dark-300 font-semibold"
                  : "hover:text-primary-500"
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <Link
          href="/contact"
          className="btn btn-primary shadow-custom-sm h-[41px] sm:h-[50px] w-[103px] sm:w-[120px] lg:w-[148px] text-sm sm:text-lg"
        >
          Get Quote
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
