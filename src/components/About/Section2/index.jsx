import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

const Section2 = () => {
  return (
    <section className="containers pt-8  lg:pt-16 xl:pt-20 2xl:pt-24 w-full relative overflow-hidden">
      <div className="flex flex-col items-center gap-y-3 md:gap-y-6">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="main-heading-2 text-center !max-w-[875px]"
        >
          Catering that scales.
          <br /> Quality that lasts.
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="description !max-w-[730px] text-center"
        >
          With years of experience catering across the UAE, we’ve built a
          reputation for delivering exceptional food experiences at scale. From
          high-profile corporate events and luxury weddings to large public
          gatherings and institutional catering, our team understands the unique
          demands of every format — and delivers with consistency, creativity,
          and care.
        </motion.p>
      </div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="absolute -top-10 lg:top-0 -left-14 w-full h-auto max-w-[380px] md:max-w-[480px]"
      >
        <Image
          src={"/About/leftSVg.svg"}
          height={485}
          width={465}
          alt="eft_inner_image"
          sizes="100vw"
          className=" w-full h-auto "
          unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
        />
      </motion.div>
    </section>
  );
};

export default Section2;
