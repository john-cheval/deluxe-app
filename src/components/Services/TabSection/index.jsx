"use client";
import { serviceTabsData } from "@/app/lib/servicesData";
import React, { useEffect, useRef, useState } from "react";
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
  const [activeTab, setActiveTab] = useState(serviceTabsData[0]?.title);
  const [bgColor, setBgColor] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
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

  // useEffect(() => {
  //   let lastScrollY = window.scrollY;

  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     setBgColor(currentScrollY > 500);

  //     if (currentScrollY > lastScrollY && currentScrollY > 80) {
  //       setShowNavbar(false);
  //     } else {
  //       setShowNavbar(true);
  //     }

  //     lastScrollY = currentScrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const activeTabData = serviceTabsData.find((tab) => tab?.title === activeTab);

  return (
    <section className="containers pt-8 md:pt-12 lg:pt-16">
      <article
        className=" max-w-[80%]- md:mx-auto w-full flex md:justify-center "
        // style={{
        //   position: "sticky",
        //   top: showNavbar ? "83px" : "0px",
        //   alignSelf: "start",
        //   zIndex: 999999,
        //   backgroundColor: bgColor ? "white" : "transparent",
        //   padding: "10px 0",
        //   transition: "all 0.5s ease",
        // }}
      >
        <div className=" flex gap-x-6 md:gap-x-10 lg:gap-x-16 xl:gap-x-20  gap-y-4 md:gap-y-5 lg:gap-y-9 flex-wrap items-center justify-center md:max-w-[80%]">
          {serviceTabsData?.map((tab, index) => {
            return (
              <motion.div
                key={index}
                onClick={() => {
                  setActiveTab(tab.title);

                  const id = getIdFromTitle(tab.title);
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
            );
          })}
        </div>
      </article>

      <motion.div
        key={activeTab}
        className="pt-10 md:pt-16 lg:pt-20 space-y-5 sm:space-y-8 md:space-y-14"
      >
        {serviceTabsData?.map((service, index) => {
          const isEven = index % 2 === 0;
          const id = getIdFromTitle(service.title);

          return (
            <div key={id} id={id} ref={(el) => (sectionRefs.current[id] = el)}>
              {isEven ? (
                <ServiceCards data={service} index={index} />
              ) : (
                <ServiceCardAlter data={service} index={index} />
              )}
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ServiceTab;
