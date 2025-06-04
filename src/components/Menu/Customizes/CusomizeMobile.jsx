"use client";
import React, { useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const CusomizeMobile = ({ data }) => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        spaceBetween={10}
        loop={data.length > 2}
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
            slidesPerView: 2,
            spaceBetween: 11,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper p-1 ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300 overflow-hidden"
      >
        {data?.map((card, index) => {
          return (
            <SwiperSlide
              key={index}
              className="border border-[#EDCF95] max-w-[250px]- py-8  min-h-[80px]- sm:max-h-[115px]-"
            >
              <p className="text-main text-center font-selfModern text-base font-medium leading-[150%] tracking-[0.54px] flex-grow-">
                {card}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CusomizeMobile;
