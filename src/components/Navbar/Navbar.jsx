"use client";
import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import Logo from "../../../public/Home/Navbar/Logo.svg";
import { navLinksLeft, navLinksRight } from "@/data/navLinks";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.navbar}>
      <nav className={styles.navbar_wrapper}>
        <ul className={styles.navbar__left}>
          {navLinksLeft?.map((links, index) => {
            const isActive = pathname === links.href;
            return (
              <li key={index} className={isActive ? styles.activeLink : ""}>
                <a href={links.href}>{links.label}</a>
              </li>
            );
          })}
        </ul>
        <Image
          src={Logo}
          alt="Deluxe"
          className={styles.navbar__logo}
          sizes="100vw"
          height={0}
          width={0}
        />

        <ul className={styles.navbar__right}>
          {navLinksRight?.map((links, index) => {
            const isActive = pathname === links.href;
            console.log(isActive, "hhhhhhh");
            return (
              <li key={index} className={isActive ? styles.activeLink : ""}>
                {links?.type === "link" ? (
                  <a href={links.href}>{links.label}</a>
                ) : (
                  <button className={styles.nav_btn}>{links.label}</button>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
