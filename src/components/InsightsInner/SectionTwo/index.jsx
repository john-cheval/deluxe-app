"use client";
import { insightsData } from "@/app/lib/insightsData";
import Cards from "@/components/common/Cards";
import React, { useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const SectionTwo = () => {
  const swiperRef = useRef(null);
  return (
    <section className="containers pb-8 md:pb-14 lg:pb-20 xl:pb-[100px] 2xl:pb-[130px]">
      <h3 className="main_heading mb-5 md:mb-8 text-center md:text-left">
        Our Latest insights
      </h3>
      <div className="w-full">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={4}
          spaceBetween={11}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },

            600: {
              slidesPerView: 2.1,
              spaceBetween: 11,
            },

            1024: {
              slidesPerView: 3.3,
              spaceBetween: 11,
            },

            1200: {
              slidesPerView: 4,
              spaceBetween: 11,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper p-1 ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300 overflow-hidden"
        >
          {insightsData?.map((card, index) => {
            return (
              <SwiperSlide key={index}>
                <div key={index}>
                  <Cards cardData={card} ind={0} slides={true} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionTwo;
