"use client";
import { serviceTabs } from "@/app/lib/servicesData";
import React, { useState } from "react";
import ServiceCards from "../serviceCards";
import ServiceCardAlter from "../ServiceCardAlter";
import { motion } from "framer-motion";
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
        <motion.div
          className="flex gap-x-20 gap-y-9 flex-wrap items-center justify-center max-w-[85%]"
          variants={tabParentVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {serviceTabs?.map((tab, index) => {
            return (
              <motion.p
                onClick={() => setActiveTab(tab?.tabTitle)}
                className={`- ${
                  activeTab === tab?.tabTitle
                    ? "text-secondary after:content-[''] after:absolute after:h-[2px] after:w-1/2 after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:bg-secondary"
                    : "text-main"
                }  font-selfModern text-sm font-medium cursor-pointer  transition-colors duration-300  tracking-[0.42px] relative`}
                key={index}
                variants={tabItemVariants}
              >
                {tab?.tabTitle}
              </motion.p>
            );
          })}
        </motion.div>
      </article>

      <div className=" pt-20 space-y-14">
        {activeTabData?.services?.map((service, index) => {
          const isEven = index % 2 === 0;
          return isEven ? (
            <ServiceCards key={index} data={service} index={index} />
          ) : (
            <ServiceCardAlter key={index} data={service} index={index} />
          );
        })}
      </div>
    </section>
  );
};

export default ServiceTab;
