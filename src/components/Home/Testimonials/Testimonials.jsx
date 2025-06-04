"use client";
import React, { useRef } from "react";
import { homeTestimonialData } from "@/data/homeData";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <section className="containers ">
      <div className="flex flex-col items-center justify-center gap-y-3">
        <h4 className="small_heading ">Testimonials</h4>
        <h2 className="main_heading text-center">What our clients say</h2>
        <div className="w-full">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={11}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper p-1 ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300 overflow-hidden w-full"
          >
            {homeTestimonialData?.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col gap-y-3 md:gap-y-5 lg:gap-y-7  items-center justify-center mx-auto w-full">
                    <Image
                      src={"./quote.svg"}
                      alt="quote"
                      height={70}
                      width={50}
                      sizes="100vw"
                      className=" mx-auto"
                      unoptimized={
                        process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                      }
                    />
                    <p className="text-[#1e4242] font-americana text-center text-xl md:text-2xl lg:text-3xl font-medium !leading-[174%] max-w-[950px]">
                      {data.description}
                    </p>
                    <h5 className="text-[#1E4242] text-center text-base font-medium leading-[153%]">
                      {data.author}
                    </h5>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
