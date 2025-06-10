"use client";
import { serviceTabs, serviceTabsData } from "@/app/lib/servicesData";
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
  const [activeTab, setActiveTab] = useState(serviceTabs[0]?.tabTitle);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            // if (id) setActiveTab(id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const activeTabData = serviceTabsData.find((tab) => tab?.title === activeTab);

  return (
    <section className="containers pt-8 md:pt-12 lg:pt-16">
      <article
        className=" max-w-[80%]- md:mx-auto w-full flex md:justify-center "
        // style={{
        //   position: "sticky",
        //   top: "100px",
        //   alignSelf: "start",
        //   zIndex: 999999,
        //   backgroundColor: "white",
        //   padding: "10px 0",
        // }}
      >
        <div className=" flex gap-x-6 md:gap-x-10 lg:gap-x-16 xl:gap-x-20  gap-y-4 md:gap-y-5 lg:gap-y-9 flex-wrap items-center justify-center md:max-w-[80%]">
          {serviceTabsData?.map((tab, index) => {
            const id = getIdFromTitle(tab.title);
            return (
              <motion.div
                key={index}
                // onClick={() => setActiveTab(tab?.title)}
                onClick={() => {
                  // setActiveTab(tab.title);
                  // const section = sectionRefs.current[id];
                  // if (section) {
                  //   section.scrollIntoView({
                  //     behavior: "smooth",
                  //     block: "start",
                  //   });
                  // }
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

      {/* <AnimatePresence mode="wait"> */}
      <motion.div
        key={activeTab}
        // initial={{ opacity: 0, y: 30 }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: -30 }}
        // transition={{ duration: 0.5, ease: "easeInOut" }}
        className="pt-10 md:pt-16 lg:pt-20 space-y-5 sm:space-y-8 md:space-y-14"
      >
        {serviceTabsData?.map((service, index) => {
          const isEven = index % 2 === 0;
          const sectionId = getIdFromTitle(service.title);
          const id = getIdFromTitle(service.title);
          // return isEven ? (
          //   <ServiceCards key={index} data={service} index={index} />
          // ) : (
          //   <ServiceCardAlter key={index} data={service} index={index} />
          // );
          return (
            <div
              // key={index}
              // id={sectionId}
              // ref={(el) => (sectionRefs.current[sectionId] = el)}
              key={id}
              id={id}
              ref={(el) => (sectionRefs.current[id] = el)}
            >
              {isEven ? (
                <ServiceCards data={service} index={index} />
              ) : (
                <ServiceCardAlter data={service} index={index} />
              )}
            </div>
          );
        })}
      </motion.div>
      {/* </AnimatePresence> */}
    </section>
  );
};

export default ServiceTab;
