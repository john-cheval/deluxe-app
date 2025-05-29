"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { navLinksLeft, navLinksRight } from "@/data/navLinks";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { RiPhoneFill } from "react-icons/ri";
const Navbar = () => {
  const pathname = usePathname();
  const [bgColor, setBgColor] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const currentScrollY = window.scrollY;
    setBgColor(currentScrollY > 150);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setBgColor(currentScrollY > 80);

      if (isMobileOpen) return;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileOpen]);

  return (
    <header
      className={`containers   font-selfModern bg-transparent z-[999] fixed  ease-in-out w-full transition-all duration-500  ${
        bgColor ? "bg-white py-5 shadow-md " : "py-7"
      } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav>
        <div className={`${bgColor ? "hidden" : "flex"}    justify-between`}>
          <Link
            aria-label="Email"
            href={"mailto:info@deluxecatering.com"}
            className="font-semimoder text-sm font-medium tracking-[0.36px] flex items-center gap-x-1"
          >
            <MdEmail /> info@deluxecatering.com
          </Link>

          <div className="flex gap-x-5">
            <Link
              aria-label="Phone"
              href={"tel:+971 000 0000000"}
              className="font-semimoder text-sm font-medium tracking-[0.36px] flex items-center gap-x-1"
            >
              <RiPhoneFill size={16} /> +971 000 0000000
            </Link>
            <Link
              aria-label="Whatsapp"
              href={"https://wa.me/9710000000000?text=Hello%20there"}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semimoder text-sm font-medium tracking-[0.36px] flex items-center gap-x-1"
            >
              <FaWhatsapp size={17} /> +971 000 0000000
            </Link>
          </div>
        </div>

        <div className="pt-3  flex items-center justify-between">
          <ul className="flex relative  gap-x-14 text-sm font-medium traking-[0.42px] items-center font-selfModern">
            {navLinksLeft?.map((links, index) => {
              const isActive = pathname === links.href;
              return (
                <li
                  key={index}
                  className={`relative ${
                    isActive
                      ? "after:content-[''] after:w-2 after:h-[1px] after:bg-main after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 after:visible"
                      : "after:invisible"
                  }`}
                >
                  <a href={links.href}>{links.label}</a>
                </li>
              );
            })}
          </ul>

          <Link href={"/"} aria-label="Go to HomePage">
            <Image
              src="/Home/Navbar/Logo.svg"
              alt="Deluxe"
              className="w-full h-auto object-cover max-w-[175px]"
              sizes="100vw"
              height={60}
              width={175}
              priority
            />
          </Link>

          <ul className="flex gap-x-14 text-sm font-medium traking-[0.42px] items-center font-selfModern ">
            {navLinksRight?.map((links, index) => {
              const isActive = pathname === links.href;
              return (
                <li
                  key={index}
                  c
                  className={`relative ${
                    isActive
                      ? "after:content-[''] after:w-2 after:h-[1px] after:bg-main after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 after:visible"
                      : "after:invisible"
                  }`}
                >
                  {links?.type === "link" ? (
                    <Link href={links.href}>{links.label}</Link>
                  ) : (
                    <button className="nav_btn">{links.label}</button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
