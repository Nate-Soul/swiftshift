"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentUrl = usePathname();

  return (
    <nav className="py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <button className="inline-flex md:hidden text-lg text-black">
            <span className="bi-list"></span>
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
          <li>
            <Link
              href="/services"
              className={`${
                currentUrl === "/services"
                  ? "text-primary-500 hover:text-dark-300 font-semibold"
                  : "hover:text-primary-500"
              }`}
            >
              Services <span className="bi-chevron-down"></span>
            </Link>
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
