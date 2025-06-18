"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { menuTabsData } from "@/app/lib/menuData";
import MenuCards from "../MenuCards";
import MenuCardAlter from "../MenuCardAlter";

const tabParentVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const tabItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const MenuTab = () => {
  const [activeTab, setActiveTab] = useState(menuTabsData[0]?.title);
  // const activeTabData = menuTabsData.find((tab) => tab.title === activeTab);
  const getIdFromTitle = (title) =>
    title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/&/g, "")
      .replace(/[^a-z0-9-]/g, "");
  const sectionRefs = useRef({});
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // setActiveTab(hash);
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // slight delay ensures layout is ready
      }
    }
  }, []);
  return (
    <section className="containers pt-8 md:pt-10">
      <article className=" max-w-[80%]- md:mx-auto w-full flex md:justify-center pb-8 md:pb-14 lg:pb-20 xl:pb-[100px] border-b border-b-[#926F39]">
        <div className="flex gap-x-6 md:gap-x-8 lg:gap-x-10 xl:gap-x-14 gap-y-6 flex-wrap items-center justify-center md:max-w-[80%] ">
          {menuTabsData?.map((tab, index) => (
            <motion.div
              key={index}
              onClick={() => {
                setActiveTab(tab.title);
                // const section = sectionRefs.current[id];
                // if (section) {
                //   section.scrollIntoView({
                //     behavior: "smooth",
                //     block: "start",
                //   });
                // }
                const id = getIdFromTitle(tab?.title);
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" });
                // setActiveTab(id);
              }}
              className="relative cursor-pointer"
              initial="hidden"
              animate="show"
              variants={tabParentVariants}
            >
              <motion.p
                className={`${
                  activeTab === tab?.title ? "text-secondary" : "text-main"
                } font-selfModern text-sm font-medium transition-colors duration-300 tracking-[0.42px]`}
                variants={tabItemVariants}
              >
                {tab?.title}
              </motion.p>
              {activeTab === tab?.title && (
                <motion.div
                  layoutId="underline"
                  className="absolute  -translate-x-1/2- left-10 w-10 md:w-1/2  -bottom-2 h-[2px] bg-secondary rounded-full"
                  transition={{ duration: 0.3 }}
                  variants={tabItemVariants}
                />
              )}
            </motion.div>
          ))}
        </div>
      </article>

      <motion.div className="pt-10 space-y-5 sm:space-y-10">
        {menuTabsData?.map((menu, index) => {
          const isEven = index % 2 === 0;
          const id = getIdFromTitle(menu?.title);
          return (
            <div key={id} id={id} ref={(el) => (sectionRefs.current[id] = el)}>
              {isEven ? (
                <MenuCards key={index} data={menu} index={index} />
              ) : (
                <MenuCardAlter key={index} data={menu} index={index} />
              )}
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default MenuTab;
