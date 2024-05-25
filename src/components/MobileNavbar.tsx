"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Logo from "./Logo";

interface MobileNavbarProps {
    toggleFn: () => void;
    isOpenNav: boolean;
};

const MobileNavbar: React.FC<MobileNavbarProps> = ({ toggleFn, isOpenNav }) => {
  const mobileNavLinks = [
    {
      url: "/",
      text: "Home",
      icon: "bi-house",
    },
    {
      url: "/services",
      text: "Services",
      icon: "bi-headphones",
    },
    {
      url: "/about",
      text: "About Us",
      icon: "bi-people",
    },
    {
      url: "/contact",
      text: "Contact Us",
      icon: "bi-envelope",
    },
  ];

  const currentUrl = usePathname();

  return (
    <nav id="mainMobileMenu" className="fixed top-0 left-0 right-0 bottom-0 z-90 bg-[#A9A5A1] bg-opacity-85">
      <div className="w-3/4 h-full bg-white text-dark-700 py-10 px-5 overflow-y-auto hide-scrollbar">
        <div className="flex items-center justify-between gap-x-3">
          <button 
            onClick={toggleFn} 
            aria-expanded={isOpenNav} 
            aria-controls="mainMobileMenu" 
            aria-label="Close Mobile Navigation"
            className="h-6 w-6 shadow-custom-sm font-extrabold"
        >
            <span className="bi-x-lg"></span>
          </button>
          <Logo />
        </div>
        <div className="h-full flex flex-col justify-between gap-y-5">
          <ul className="flex flex-col gap-y-8 mt-10">
            {mobileNavLinks?.map((navLink, navLinkIndex) => (
              <li key={navLinkIndex}>
                <Link
                  href={navLink.url}
                  className={`flex items-center gap-x-6 ${
                    currentUrl === navLink.url
                      ? "font-medium text-primary-500"
                      : "font-normal text-dark-500"
                  }`}
                >
                  <span className={`${navLink.icon}`}></span>
                  {navLink.text}
                </Link>
              </li>
            ))}
          </ul>
          <figure className="text-center">
            <Image
              src="/media/images/logos/swiftshift-logo-dark.png"
              alt="SwiftShift's logo"
              className="mx-auto"
              height={44}
              width={54}
            />
            <figcaption>
              <h6 className="text-2xl font-extrabold text-dark-500">
                SwiftShift
              </h6>
            </figcaption>
          </figure>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
