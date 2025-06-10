import React from "react";
import leftImg1 from "../../../../public/Home/Deluxe/image2.png";
import leftImg3 from "../../../../public/Home/Deluxe/Vector.svg";
import rightImg1 from "../../../../public/Home/Deluxe/image1.png";
import Image from "next/image";
import * as motion from "motion/react-client";

const Deluxe = () => {
  return (
    <section className="xl:px-16 lg:px-12 px-10 py-12 md:py-16 lg:py-20 xl:py-24 2xl:pt-28  2xl:pb-32 bg-[#021b3a] text-white overflow-hidden relative">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="main_heading md:hidden text-center !text-white mb-8"
      >
        Why Choose us
      </motion.h2>

      <div className="grid grid-cols-12 md:gap-x-10 lg:gap-x-14 xl:gap-x-20 2xl:gap-x-24 ">
        <div className="hidden md:flex col-span-7  flex-col gap-y-14 relative">
          <h2 className="main_heading !text-white">Why Choose us</h2>
          <div className="">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="ml-[25%] relative z-50 "
            >
              <Image
                src={leftImg1}
                alt="Deluxe"
                width={300}
                height={400}
                className="w-full h-auto  object-cover max-h-[450px]-"
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
              />
            </motion.div>

            <Image
              src={leftImg3}
              alt="Deluxe"
              objectFit="cover"
              className="absolute top-0 -left-20"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 relative flex flex-col gap-y-8 xl:gap-y-12 2xl:gap-y-14">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={rightImg1}
              alt="Deluxe"
              width={300}
              height={400}
              className="w-full h-auto object-cover relative z-50"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            />
          </motion.div>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: 0.3,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="description !text-white !max-w-[500px]- relative z-50 text-center md:text-left"
          >
            Expertise in large-scale catering Premium ingredients & impeccable
            service Trusted by major organizations & event agencies Premium
            ingredients & impeccable service Trusted by major organizations &
            event agencies
          </motion.p>

          {/* <button className="buttonRed button hidden ">
            {" "}
            Read More
            <Image
              src={arrowForward}
              alt="arrow_forward"
              width={0}
              height={0}
              sizes="100vw"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            />
          </button> */}
        </div>
      </div>
      <Image
        src={leftImg3}
        alt="Deluxe"
        width={100}
        height={100}
        sizes="100vw"
        className="absolute top-0 -left-20 md:hidden w-full h-auto object-cover"
        unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
      />
    </section>
  );
};

export default Deluxe;
