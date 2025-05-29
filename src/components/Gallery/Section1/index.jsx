import isVideo from "@/app/lib/checkIsVideo";
import { galleryData } from "@/app/lib/galleryData";
import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
import { fadeInUp, fadeInUpSingle } from "@/app/utils/framer";

const SectionOne = () => {
  return (
    <section className="containers pt-14">
      <div className="grid grid-cols-2 gap-x-6">
        <motion.div {...fadeInUpSingle}>
          {isVideo("/gallery/image-4.jpg") ? (
            <div>
              <video
                autoPlay
                muted
                loop
                playsInline
                controlsList="nodownload"
                className="w-full"
                src="/gallery/image-4.jpg"
              />
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
                <div>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controlsList="nodownload"
                    className="w-full"
                    src={data?.imageUrl}
                  />
                </div>
              ) : (
                <Image
                  src={data?.imageUrl}
                  width={300}
                  height={300}
                  sizes="100vw"
                  alt={`image-${index + 1}`}
                  className="w-full h-auto"
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
                <div>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controlsList="nodownload"
                    className="w-full"
                    src={data?.imageUrl}
                  />
                </div>
              ) : (
                <Image
                  src={data?.imageUrl}
                  width={300}
                  height={300}
                  sizes="100vw"
                  alt={`image-${index + 1}`}
                  className="w-full h-auto"
                />
              )}

              <p className="description mt-4">{data?.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.button {...fadeInUpSingle} className="buttonOne button mx-auto">
          {" "}
          Read More
          <Image
            src={"/arrow_forward.svg"}
            alt="arrow_forward"
            width={24}
            height={14}
            sizes="100vw"
          />
        </motion.button>
      </div>
    </section>
  );
};

export default SectionOne;
