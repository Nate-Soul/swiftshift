"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import services from "@/data/servicesList.json";
import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const currentUrl = usePathname();

  const [servicePaneOpen, setServiceOpen] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const handleMobileNav = () => {
    setOpenMobileNav(prev => !prev);
  };

  return (
    <>
      <nav className="py-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <button 
              className="inline-flex flex-col gap-y-1 md:hidden text-lg text-black" 
              onClick={handleMobileNav}
              aria-label="Open Mobile Navigation"
              aria-expanded={openMobileNav}
              aria-controls="mainMobileMenu"
            >
              <span className="w-5 h-[2px] bg-dark-500"></span>
              <span className="w-5 h-[2px] bg-dark-500"></span>
              <span className="w-3 h-[2px] bg-dark-500"></span>
            </button>
            <Logo/>
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
                // className={`${
                //   currentUrl === "/services"
                //     ? "text-primary-500 hover:text-dark-300 font-semibold"
                //     : "hover:text-primary-500"
                // } `}
              >
                Services
              </Link>
              <button
                id="servicesMainMenuDropdownToggler"
                className="inline-flex items-center justify-center h-6 w-6 hover:text-primary-500"
                onClick={() => setServiceOpen(prev => !prev)}
                aria-haspopup="true"
                aria-expanded={servicePaneOpen}
              >
                <span className={`bi-chevron-${servicePaneOpen ? 'up' : 'down'}`}></span>
              </button>
              {servicePaneOpen && ( 
              <ul 
                className="absolute left-0 z-50 bg-black bg-opacity-95 p-3 rounded-b-[0.625rem] w-max flex flex-col gap-y-2"
                aria-labelledby="servicesMainMenuDropdownToggler"
              >
              {services?.map((service, serviceIndex) => (
                <li 
                  key={serviceIndex} 
                  className="flex gap-x-2 before:w-px before:h-4 items-start before:bg-primary-500 border-b border-primary-400 p-2 last:border-b-0"
                >
                  <Link href="/services" className="text-light-200 hover:text-light-50">{service.title}</Link>          
                </li>
              ))}
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
            href="/about#acquirePlatform"
            className="btn btn-primary shadow-custom-sm h-[41px] sm:h-[50px] w-[103px] sm:w-[120px] lg:w-[148px] text-sm sm:text-lg"
          >
            Buy Site
          </Link>
        </div>
      </nav>
      {openMobileNav && (
        <MobileNavbar toggleFn={handleMobileNav} isOpenNav={openMobileNav} />
      )}
    </>
  );
};

export default Navbar;
