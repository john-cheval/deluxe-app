import isVideo from "@/app/lib/checkIsVideo";
import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <section className="pt-24 containers about-bg">
      <div className="grid grid-cols-12 gap-x-14">
        <div className="flex gap-x-4 col-span-7">
          <div>
            {isVideo("/About/image.jpg") ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload"
                className="w-full h-full"
              >
                <source src="/About/image.jpg" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={"/About/image.jpg"}
                alt="Deluxe_dinning_image1"
                width={400}
                height={450}
                sizes="100vw"
                className="w-full h-auto object-cover"
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
              />
            )}
          </div>
          <div className="mt-16">
            {isVideo("/About/image1.jpg") ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload"
                className="w-full h-full"
              >
                <source src="/About/image1.jpg" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={"/About/image1.jpg"}
                alt="Deluxe_dinning_image1"
                width={400}
                height={450}
                sizes="100vw"
                className="w-full h-auto object-cover"
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-y-6 mt-20 col-span-5">
          <h4 className="small_heading">Who we are</h4>
          <h1 className="main_heading">
            Our Philosophy & Commitment to Quality
          </h1>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industrys
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
