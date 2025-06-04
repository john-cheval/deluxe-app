"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
import Image from "next/image";
import { GrClose } from "react-icons/gr";
import isVideo from "@/app/lib/checkIsVideo";
import Backdrop from "@/components/shared/Backdrop";

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
            className="relative  w-full max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto "
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Swiper
              initialSlide={initialIndex}
              navigation
              loop
              modules={
                [
                  /* Navigation */
                  // Autoplay,
                ]
              }
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
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-main rounded-full p-2 z-10 cursor-pointer"
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
