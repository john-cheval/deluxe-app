"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { GrClose } from "react-icons/gr";
import isVideo from "@/app/lib/checkIsVideo";
import Backdrop from "@/components/shared/Backdrop";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const GalleryModal = ({ isOpen, onClose, data, initialIndex }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <>
      <Backdrop onClick={onClose}>
        {isOpen && (
          <motion.div
            className="relative  w-full max-w-[300px] sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto "
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Swiper
              initialSlide={initialIndex}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              loop
              modules={[
                Navigation,
                // Autoplay,
              ]}
              className="overflow-hidden "
            >
              {data.map((item, index) => (
                <SwiperSlide key={index} className="">
                  {isVideo(item.imageUrl) ? (
                    <video
                      src={item.imageUrl}
                      controls
                      className="w-full h-[70vh]- max-h-[500px]  object-cover  bg-black-"
                    />
                  ) : (
                    <Image
                      src={item.imageUrl}
                      alt={`gallery-${index}`}
                      width={1200}
                      height={800}
                      className="w-full  max-h-[500px] object-cover"
                      unoptimized={
                        process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                      }
                    />
                  )}
                  <p className="text-white mt-3 text-base md:text-lg text-center font-helvetica font-normal">
                    {item?.description}
                  </p>

                  <button className="swiper-button-prev-custom absolute top-1/2 left-3 transform -translate-y-1/2 z-20 text-3xl md:text-4xl text-white bg-black/40 rounded-full   p-2 hover:bg-black/60 transition duration-300">
                    <span className="sr-only">Previous</span>
                    <MdKeyboardArrowLeft />
                  </button>
                  <button className="swiper-button-next-custom absolute top-1/2 right-3 transform -translate-y-1/2 z-20 text-3xl md:text-4xl text-white bg-black/40 rounded-full p-2 hover:bg-black/60 transition duration-300">
                    <span className="sr-only">Next</span>
                    <MdKeyboardArrowRight />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              onClick={onClose}
              className="absolute top-2 md:top-4 right-2 md:right-4 bg-main rounded-full p-2 z-10 cursor-pointer"
            >
              <GrClose className="text-sm md:text-lg text-white " />
            </button>
          </motion.div>
        )}
      </Backdrop>
    </>
  );
};

export default GalleryModal;
