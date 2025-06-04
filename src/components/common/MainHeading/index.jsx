import React from "react";
import * as motion from "motion/react-client";

const MainHeading = ({
  title,
  small_title,
  isTop = true,
  subTitle,
  description,
}) => {
  return (
    <div
      className={` ${
        isTop
          ? "pt-[125px]  md:pt-[180px]  lg:pt-[200px]"
          : " pt-8 md:pt-12 lg:pt-16"
      }  flex flex-col items-center gap-y-2 md:gap-y-3  md:-ml-[5%]`}
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
        className="main-heading-2 mb-1"
      >
        {title}
      </motion.h1>

      {subTitle && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl font-americana font-medium text-main leading-[146%] tracking-[0.9px]"
        >
          {subTitle}
        </motion.h2>
      )}

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base font-helvetica font-light text-[#3c3c3c] leading-[188%] tracking-[0.48px] max-w-[775px] text-center"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default MainHeading;
