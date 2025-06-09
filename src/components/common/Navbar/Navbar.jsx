"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { navLinksLeft, navLinksRight } from "@/data/navLinks";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { RiPhoneFill } from "react-icons/ri";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
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
    <>
      <header
        className={`containers   font-selfModern bg-transparent z-[999] fixed  ease-in-out w-full transition-all duration-500  ${
          bgColor ? "bg-white pt-2 pb-5 shadow-md " : "py-7"
        } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        <nav className="hide-menu">
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
            <ul className="flex relative gap-x-5 lg:gap-x-10  xl:gap-x-14 text-sm font-medium traking-[0.42px] items-center font-selfModern">
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
                className={`w-full h-auto- object-cover max-w-[175px]- ${
                  bgColor ? "h-10" : "h-full"
                }`}
                sizes="100vw"
                height={60}
                width={175}
                priority
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
              />
            </Link>

            <ul className="flex gap-x-5 lg:gap-x-10 xl:gap-x-14 text-sm font-medium traking-[0.42px] items-center font-selfModern ">
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
                    <Link href={links.href}>{links.label}</Link>
                  </li>
                );
              })}
              <li>
                <button className="nav_btn">Get quote</button>
              </li>
            </ul>
          </div>
        </nav>

        <nav className=" items-center justify-between mobile-menu ">
          <Link
            href={"/"}
            aria-label="Go to HomePage"
            className="flex flex-1 justify-center"
          >
            <Image
              src="/Home/Navbar/Logo.svg"
              alt="Deluxe"
              className={`w-auto mx-auto max-h-12`}
              sizes="100vw"
              height={60}
              width={175}
              priority
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            />
          </Link>

          <div className=" ml-auto-">
            <IoMdMenu
              className="text-2xl text-main  cursor-pointer"
              onClick={() => setIsMobileOpen(true)}
            />
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              className="bg-black/[0.4] backdrop-blur-[14.5px] fixed inset-0 z-[999956] flex flex-col mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
            />

            <motion.nav
              className="bg-white fixed top-0 right-0 px-6 md:px-10 py-9 md:py-12 h-full z-[999957] w-full sm:w-[70%] md:w-[50%] xl:w-[30%]  flex flex-col overflow-y-auto scrollbar-hide mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="flex justify-between items-center border-b border-[#DBDBDB] pb-5 md:pb-9">
                <div className="max-w-[120px] sm:max-w-[150px] md:max-w-[190px] w-full md:px-4">
                  <Link href={"/"} aria-label="Go to Homepage">
                    <Image
                      src={"/Home/Navbar/Logo.svg"}
                      // src={
                      //   isMobile
                      //     ? "/common/mobile_logo.svg"
                      //     : "/common/logo.svg"
                      // }
                      alt="White Label Media"
                      width={260}
                      height={80}
                      sizes="100vw"
                      unoptimized={
                        process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                      }
                      // className="w-full h-auto object-cover"
                      className={`w-full h-auto- object-cover max-w-[175px]- ${
                        bgColor ? "h-10" : "h-full"
                      }`}
                    />
                  </Link>
                </div>

                <IoMdClose
                  aria-label="close menu"
                  className="text-main text-xl md:text-3xl cursor-pointer"
                  onClick={() => setIsMobileOpen(false)}
                />
              </div>

              <ul className="flex flex-col gap-y-6">
                {[...navLinksLeft, ...navLinksRight]?.map((link, index) => {
                  // const url = link?.href === "" ? "/" : link?.href;
                  const isActive = pathname === link?.href;

                  return (
                    <li
                      key={index}
                      className="flex items-center justify-between border-b pb-5 md:pb-[22px]- border-b-[#DBDBDB] group"
                    >
                      <Link
                        href={link?.href}
                        className={`text-xl uppercase font-selfModern leading-[118.423%] font-medium  ${
                          index === 0 ? "pt-5 " : ""
                        } ${isActive ? "font-semibold" : "font-normal"}`}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {link?.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* <motion.ul className="flex gap-x-2 justify-center mt-auto pt-5  ">
                <li>
                  <Link
                    href={"/"}
                    target="_blank"
                    aria-label="Facebook"
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-main text-main text-sm"
                  >
                    <FaFacebookF className="text-sm md:text-lg" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    target="_blank"
                    aria-label="Instagram"
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-main text-main text-sm"
                  >
                    <FaInstagram className="text-sm md:text-lg" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    target="_blank"
                    aria-label="Linkedin"
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-main text-main text-sm"
                  >
                    <FaLinkedinIn className="text-sm md:text-lg" />
                  </Link>
                </li>
              </motion.ul> */}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
