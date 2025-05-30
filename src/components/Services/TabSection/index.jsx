"use client";
import { serviceTabs } from "@/app/lib/servicesData";
import React, { useState } from "react";
import ServiceCards from "../serviceCards";
import ServiceCardAlter from "../ServiceCardAlter";
import { motion, AnimatePresence } from "framer-motion";
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

const ServiceTab = () => {
  const [activeTab, setActiveTab] = useState(serviceTabs[0]?.tabTitle);

  const activeTabData = serviceTabs.find((tab) => tab.tabTitle === activeTab);

  return (
    <section className="containers pt-16">
      <article className=" max-w-[80%]- mx-auto w-full flex justify-center ">
        <div className="flex gap-x-20 gap-y-9 flex-wrap items-center justify-center max-w-[85%]">
          {serviceTabs?.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(tab?.tabTitle)}
              className="relative cursor-pointer"
            >
              <p
                className={`${
                  activeTab === tab?.tabTitle ? "text-secondary" : "text-main"
                } font-selfModern text-sm font-medium transition-colors duration-300 tracking-[0.42px]`}
              >
                {tab?.tabTitle}
              </p>
              {activeTab === tab?.tabTitle && (
                <motion.div
                  layoutId="underline"
                  className="absolute  -translate-x-1/2- left-10 w-1/2  -bottom-2 h-[2px] bg-secondary rounded-full"
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          ))}
        </div>
      </article>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="pt-20 space-y-14"
        >
          {activeTabData?.services?.map((service, index) => {
            const isEven = index % 2 === 0;
            return isEven ? (
              <ServiceCards key={index} data={service} index={index} />
            ) : (
              <ServiceCardAlter key={index} data={service} index={index} />
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ServiceTab;
