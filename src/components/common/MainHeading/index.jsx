import React from "react";
import * as motion from "motion/react-client";

const MainHeading = ({ title, small_title, isTop = true }) => {
  return (
    <div
      className={` ${
        isTop ? "pt-[200px]" : "pt-16"
      }  flex flex-col items-center gap-y-3  -ml-[5%]`}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="small_heading"
      >
        {small_title}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="main_heading"
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default MainHeading;
