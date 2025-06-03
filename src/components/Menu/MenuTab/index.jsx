"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuDataTabs } from "@/app/lib/menuData";
import MenuCards from "../MenuCards";

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
  const [activeTab, setActiveTab] = useState(menuDataTabs[0]?.tabTitle);
  return (
    <section className="containers pt-10">
      <article className=" max-w-[80%]- mx-auto w-full flex justify-center pb-[100px] border-b border-b-[#926F39]">
        <div className="flex gap-x-14 gap-y-6 flex-wrap items-center justify-center ">
          {menuDataTabs?.map((tab, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveTab(tab?.tabTitle)}
              className="relative cursor-pointer"
              initial="hidden"
              animate="show"
              variants={tabParentVariants}
            >
              <motion.p
                className={`${
                  activeTab === tab?.tabTitle ? "text-secondary" : "text-main"
                } font-selfModern text-sm font-medium transition-colors duration-300 tracking-[0.42px]`}
                variants={tabItemVariants}
              >
                {tab?.tabTitle}
              </motion.p>
              {activeTab === tab?.tabTitle && (
                <motion.div
                  layoutId="underline"
                  className="absolute  -translate-x-1/2- left-10 w-1/2  -bottom-2 h-[2px] bg-secondary rounded-full"
                  transition={{ duration: 0.3 }}
                  variants={tabItemVariants}
                />
              )}
            </motion.div>
          ))}
        </div>
      </article>

      <div className="pt-10">
        <MenuCards />
      </div>
    </section>
  );
};

export default MenuTab;
