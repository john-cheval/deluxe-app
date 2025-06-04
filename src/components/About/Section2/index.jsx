import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

const Section2 = () => {
  return (
    <section className="containers pt-8  lg:pt-16 xl:pt-20 2xl:pt-24 w-full relative overflow-hidden">
      <div className="flex flex-col items-center gap-y-3 md:gap-y-6">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="main-heading-2 text-center !max-w-[875px]"
        >
          Creating unforgettable moments paired with delicious food
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="description !max-w-[730px] text-center"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industrys
        </motion.p>
      </div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="absolute -top-10 lg:top-0 -left-14 w-full h-auto max-w-[380px] md:max-w-[480px]"
      >
        <Image
          src={"/About/leftSVg.svg"}
          height={485}
          width={465}
          alt="eft_inner_image"
          sizes="100vw"
          className=" w-full h-auto "
          unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
        />
      </motion.div>
    </section>
  );
};

export default Section2;
