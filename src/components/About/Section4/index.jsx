import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

const Section4 = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-8  lg:pt-16 xl:pt-20 2xl:pt-24 containers lg:gap-x-8 xl:gap-x-14">
        <div className="flex flex-col gap-y-3 lg:gap-y-6 justify-center items-center lg:items-start mt-8 lg:mt-0">
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="main_heading"
          >
            We are Expertise
          </motion.h3>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className="description-2 text-center lg:text-left"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industrys
          </motion.p>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="-order-1 lg:order-1"
        >
          <Image
            src={"/About/image3.jpg"}
            alt="Deluxe_dinning_image3"
            width={400}
            height={450}
            sizes="100vw"
            className="w-full h-auto object-cover"
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section4;
