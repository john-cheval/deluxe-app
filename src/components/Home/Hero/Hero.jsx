import React from "react";
import Image from "next/image";
import heroImage from "../../../../public/Home/Hero/hero.svg";
import heroImage1 from "../../../../public/Home/Hero/hero1.jpg";
import arrowForward from "../../../../public/arrow_forward.svg";
import * as motion from "motion/react-client";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="  pb-10  lg:py-28  xl:py-36  xl:px-16 lg:px-12 relative grid grid-cols-12 gap-y-9  md:gap-10 ">
      <div className="col-span-12 lg:col-span-7 flex  lg:gap-x-4 ">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className=" w-full lg:md:max-w-[400px] z-50"
        >
          <Image
            src={heroImage1}
            alt="Deluxe_dinning_image1"
            width={100}
            height={100}
            sizes="100vw"
            className="w-full h-auto object-cover "
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className=" w-full lg:max-w-[300px] lg:h-[368px] lg:self-end"
        >
          <video
            autoPlay
            playsInline
            loop
            muted
            controlsList="nodownload"
            className="w-full h-full object-cover lg:-mt-16 xl:mt-16"
          >
            <source src="/Home/Hero/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="hidden lg:block absolute top-[30px] left-[20%]"
          >
            <Image
              src={heroImage}
              alt="Deluxe_hero_image"
              width={0}
              height={0}
              sizes="100vw"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="col-span-12 lg:col-span-5 flex gap-y-3 md:gap-y-6 flex-col items-center lg:items-start px-5">
        <motion.h4
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="small_heading"
        >
          Who we are
        </motion.h4>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="main_heading text-center lg:text-left"
        >
          Beyond catering — we deliver experiences
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="description text-center lg:text-left"
        >
          We’re a full-service catering partner trusted by event organizers,
          corporates, and institutions for high-volume, high-impact dining
          experiences. From large festivals to luxury weddings and daily
          corporate meals, we deliver quality, consistency, and seamless
          execution — every time, at any scale.
        </motion.p>
        <Link href={"/about"} className="buttonOne button">
          {" "}
          Read More
          <Image
            src={arrowForward}
            alt="arrow_forward"
            width={0}
            height={0}
            sizes="100vw"
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
