"use client";
import React, { useRef } from "react";
import { homeExperienceData } from "@/data/homeData";
import Image from "next/image";
import arrowForward from "../../../../public/arrow_forward.svg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";

const Experience = () => {
  const swiperRef = useRef(null);

  return (
    <section className=" xl:px-16 lg:px-12 sm:px-8 px-5 pb-10 md:pb-12 lg:pb-16 xl:pb-28 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-y-2 mb-10">
        <motion.h4
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="small_heading"
        >
          Deluxe
        </motion.h4>
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="main_heading !max-w-full !text-center"
        >
          Tailored catering for every occasion
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="description text-center"
        >
          From corporate conferences and product launches to luxury weddings and
          private celebrations, we deliver exceptional catering experiences
          built around your event goals. Our team handles every detail — from
          menu design to flawless execution — no matter the scale.
        </motion.p>
      </div>

      <div className="w-full">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={5}
          spaceBetween={11}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },

            600: {
              slidesPerView: 2.3,
              spaceBetween: 11,
            },

            1024: {
              slidesPerView: 4.3,
              spaceBetween: 11,
            },

            1200: {
              slidesPerView: 5,
              spaceBetween: 11,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper p-1 ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300 overflow-hidden"
        >
          {homeExperienceData?.map((data, index) => {
            return (
              <SwiperSlide
                key={index}
                className="flex flex-col gap-y-7 mt-auto"
              >
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="max-h-[450px]- max-w-[250px]-"
                >
                  <Image
                    src={data?.imageUrl}
                    alt={data?.title}
                    width={100}
                    height={100}
                    sizes="100vw"
                    className="w-full h-auto object-cover-"
                    unoptimized={
                      process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                    }
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-col gap-y-1 justify-center- mt-4 md:mt-7 min-h-[100px] "
                >
                  <h5 className="text-secondary text-center font-americana text-lg md:text-xl font-medi leading-[146%] tracking-[0.6px]">
                    {data.title}
                  </h5>
                  <p className="description !text-center !text-sm md:!text-base  md:!max-w-[250px]">
                    {data.description}
                  </p>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <Link
        href={"/services"}
        className="buttonOne button mx-auto !hidden md:!flex"
      >
        {" "}
        View All
        <Image
          src={arrowForward}
          alt="arrow_forward"
          width={0}
          height={0}
          sizes="100vw"
          unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
        />
      </Link>
    </section>
  );
};

export default Experience;
