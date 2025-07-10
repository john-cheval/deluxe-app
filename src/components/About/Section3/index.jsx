import isVideo from "@/app/lib/checkIsVideo";
import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

const Section3 = () => {
  return (
    <section className="pt-8  lg:pt-16 xl:pt-20 2xl:pt-24 containers ">
      <div className="grid grid-cols-12 lg:gap-x-8 xl:gap-x-14">
        <div className="flex gap-x-3 lg:gap-x-4 col-span-12 lg:col-span-7">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {isVideo("/About/image.jpg") ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload"
                className="w-full h-full"
              >
                <source src="/About/image.jpg" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={"/About/image.jpg"}
                alt="Deluxe_dinning_image1"
                width={400}
                height={450}
                sizes="100vw"
                className="w-full h-auto object-cover"
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
              />
            )}
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:mt-16"
          >
            {isVideo("/About/image1.jpg") ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload"
                className="w-full h-full"
              >
                <source src="/About/image1.jpg" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={"/About/image1.jpg"}
                alt="Deluxe_dinning_image1"
                width={400}
                height={450}
                sizes="100vw"
                className="w-full h-auto object-cover"
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
              />
            )}
          </motion.div>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-y-3 lg:gap-y-6 mt-8 lg:mt-14 xl:mt-20 col-span-12 lg:col-span-5">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="small_heading"
          >
            Who we are
          </motion.p>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className="main_heading text-center lg:text-left"
          >
            More than food. <br /> We&lsquo;re your event partner.
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="description-2 text-center lg:text-left "
          >
            We’re more than just a catering provider; we’re your end-to-end
            event food partner. Whether it’s a multi-day conference, an elegant
            private dinner, or a 5,000-guest concert, we handle everything —
            from menu design and logistics to staffing and on-site execution.
            Our operations are backed by a dedicated team of chefs, event
            managers, and service professionals who take pride in getting every
            detail right.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
