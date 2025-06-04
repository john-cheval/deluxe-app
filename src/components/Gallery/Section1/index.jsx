"use client";
import isVideo from "@/app/lib/checkIsVideo";
import { galleryData } from "@/app/lib/galleryData";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInUp, fadeInUpSingle } from "@/app/utils/framer";
import { GrPlayFill } from "react-icons/gr";
import GalleryModal from "../GalleryModal";

const SectionOne = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <section className="containers pt-6 md:pt-10 lg:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-x-6">
          <motion.div {...fadeInUpSingle}>
            {isVideo("/gallery/image-4.jpg") ? (
              <div className="relative">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controlsList="nodownload"
                  className="w-full cursor-pointer"
                  poster="/gallery/image-4.jpg"
                  src="/gallery/image-4.jpg"
                  onClick={() => handleOpenModal(4)}
                />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  "
                >
                  <GrPlayFill className="text-white text-4xl rotate-180 cursor-pointer" />
                </div>
              </div>
            ) : (
              <Image
                src={"/gallery/image-4.jpg"}
                width={650}
                height={700}
                alt="image-1"
                sizes="100vw"
                className="w-full h-auto cursor-pointer"
                onClick={() => handleOpenModal(4)}
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
              />
            )}

            <p className="description m-2 md:mt-4 !text-sm md:!text-base text-center md:text-left">
              Lorem Ipsum is simply dummy text of the printing
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 md:gap-7">
            {galleryData?.map((data, index) => (
              <motion.div {...fadeInUp(index * 0.3)} key={index}>
                {isVideo(data?.imageUrl) ? (
                  <div className="relative">
                    <video
                      autoPlay={false}
                      muted
                      // ref={(el) => (videoRefs.current[index + 1] = el)}
                      loop
                      playsInline
                      controlsList="nodownload"
                      className="w-full cursor-pointer"
                      poster={data?.imageUrl}
                      src={data?.imageUrl}
                      onClick={() => handleOpenModal(index)}
                    />
                    <div
                      // onClick={() => handlePlay(index + 1)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  "
                    >
                      <GrPlayFill className="text-white text-4xl rotate-180 cursor-pointer" />
                    </div>
                  </div>
                ) : (
                  <Image
                    src={data?.imageUrl}
                    width={300}
                    height={300}
                    sizes="100vw"
                    alt={`image-${index + 1}`}
                    className="w-full h-auto cursor-pointer"
                    onClick={() => handleOpenModal(index)}
                    unoptimized={
                      process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                    }
                  />
                )}

                <p className="description !text-sm md:!text-base mt-2 md:mt-4 text-center md:text-left">
                  {data?.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="h-[0.5px] w-full bg-[#E1BC75] mt-8 md:mt-12 mb-8 md:mb-10" />

        <div className="pb-8 md:pb-12  lg:pb-14 xl:pb-20">
          <div className="grid grid-cols-12 gap-3 md:gap-6 pb-5 md:pb-10 xl:pb-16">
            {galleryData?.map((data, index) => (
              <motion.div
                {...fadeInUp(index * 0.25)}
                key={index}
                className="col-span-6 md:col-span-4 lg:col-span-3"
              >
                {isVideo(data?.imageUrl) ? (
                  <div className="relative">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      controlsList="nodownload"
                      className="w-full cursor-pointer"
                      src={data?.imageUrl}
                      poster={data?.imageUrl}
                      onClick={() => handleOpenModal(index)}
                    />
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  "
                    >
                      <GrPlayFill className="text-white text-4xl rotate-180 cursor-pointer" />
                    </div>
                  </div>
                ) : (
                  <Image
                    src={data?.imageUrl}
                    width={300}
                    height={300}
                    sizes="100vw"
                    alt={`image-${index + 1}`}
                    className="w-full h-auto cursor-pointer"
                    onClick={() => handleOpenModal(index)}
                    unoptimized={
                      process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                    }
                  />
                )}

                <p className="description !text-sm md:!text-base mt-2 md:mt-4 text-center md:text-left">
                  {data?.description}
                </p>
              </motion.div>
            ))}
          </div>
          <button className="buttonOne button mx-auto">
            {" "}
            View All
            <Image
              src={"/arrow_forward.svg"}
              alt="arrow_forward"
              width={24}
              height={14}
              sizes="100vw"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            />
          </button>
        </div>
      </section>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isModalOpen && (
          <GalleryModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            data={galleryData}
            initialIndex={currentIndex}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionOne;
