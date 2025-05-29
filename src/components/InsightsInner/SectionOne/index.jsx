import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
import isVideo from "@/app/lib/checkIsVideo";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const SectionOne = () => {
  return (
    <section className="containers pt-6 pb-20">
      <motion.div
        className="div"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          {isVideo("/insights/image-2.jpg") ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              src={"/insights/image-2.jpg"}
            />
          ) : (
            <Image
              src={"/insights/image-2.jpg"}
              alt="insigts_title"
              width={1300}
              height={420}
              sizes="100vw"
              className="w-full h-full max-h-[500px] object-center"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            />
          )}
        </motion.div>

        <div className={`flex flex-col gap-y-2 pt-7`}>
          <motion.span
            variants={itemVariants}
            className="text-secondary  font-helvetica text-sm font-medium leading-[179%] tracking-[0.42px]"
          >
            10/12/2025
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-main font-americana mb-3 text-[28px] font-medium leading-[160%] tracking-[0.66px] "
          >
            Lorem ipsum is a dummy or placeholder
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="description space-y-11 !max-w-full"
          >
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industryDs standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionOne;
