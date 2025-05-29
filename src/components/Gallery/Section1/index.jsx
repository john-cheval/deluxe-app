"use client";
import isVideo from "@/app/lib/checkIsVideo";
import { galleryData } from "@/app/lib/galleryData";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInUpSingle } from "@/app/utils/framer";
import { GrPlayFill } from "react-icons/gr";

const SectionOne = () => {
  // const videoRefs = useRef([]);
  // useEffect(() => {
  //   videoRefs.current = videoRefs.current.slice(0, galleryData.length + 1);
  // }, []);

  // const handlePlay = (index) => {
  //   videoRefs.current.forEach((video, i) => {
  //     if (video && i !== index) {
  //       video.pause();
  //     }
  //   });
  //   const thisVideo = videoRefs.current[index];
  //   if (thisVideo) thisVideo.play();
  // };
  return (
    <section className="containers pt-14">
      <div className="grid grid-cols-2 gap-x-6">
        <motion.div {...fadeInUpSingle}>
          {isVideo("/gallery/image-4.jpg") ? (
            <div className="relative">
              <video
                autoPlay
                // ref={(el) => (videoRefs.current[0] = el)}
                muted
                loop
                playsInline
                controlsList="nodownload"
                className="w-full"
                poster="/gallery/image-4.jpg"
                src="/gallery/image-4.jpg"
              />
              <div
                // onClick={() => handlePlay(0)}
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
              className="w-full h-auto"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            />
          )}

          <p className="description mt-4">
            Lorem Ipsum is simply dummy text of the printing
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-7">
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
                    className="w-full"
                    poster={data?.imageUrl}
                    src={data?.imageUrl}
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
                  className="w-full h-auto"
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                />
              )}

              <p className="description mt-4">{data?.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="h-[0.5px] w-full bg-[#E1BC75] mt-12 mb-10" />

      <div className="pb-20">
        <div className="grid grid-cols-12 gap-6 pb-16">
          {galleryData?.map((data, index) => (
            <motion.div
              {...fadeInUp(index * 0.25)}
              key={index}
              className="col-span-3"
            >
              {isVideo(data?.imageUrl) ? (
                <div className="relative">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controlsList="nodownload"
                    className="w-full"
                    src={data?.imageUrl}
                    poster={data?.imageUrl}
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
                  className="w-full h-auto"
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                />
              )}

              <p className="description mt-4">{data?.description}</p>
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
  );
};

export default SectionOne;
