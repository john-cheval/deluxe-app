import { colorThemes } from "@/app/lib/serviceCardColors";
import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

const ServiceCardAlter = ({ data, index }) => {
  const theme = colorThemes[index % 3];

  return (
    <motion.article
      className="relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid grid-cols-12 service_card_bg_alter">
        <motion.div
          className=" col-start-4 -col-end-1"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={data?.image}
            alt={data?.title}
            width={800}
            height={700}
            sizes="100vw"
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            className="w-full h-auto max-h-[668px]-"
          />
        </motion.div>
      </div>
      <motion.div
        className="grid grid-cols-12 -mt-[30%] "
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          className="col-start-1 col-end-9 bg-[#021B3A]- text-[#FFDEAB]- py-14 pl-16 pr-8"
          style={{ backgroundColor: theme.bg, color: theme.text }}
        >
          <div className="">
            <h3 className=" text-4xl  font-americana font-medium leading-[146%] tracking-[1.05px]">
              {data?.title}
            </h3>
            <h5 className=" text-2xl  font-americana font-medium leading-[146%] tracking-[0.75px]">
              {data?.subTitle}
            </h5>
          </div>
          <p className="font-helvetica text-base font-light leading-[203%] tracking-[0.48px] mt-7">
            {data?.description}
          </p>

          <ul className="mt-5 w-fit">
            {data?.list2?.map((item, index) => {
              return (
                <li
                  className={`font-helvetica text-base font-light leading-[339%] tracking-[0.48px] border ${
                    index === 0 ? "border-t border-b" : "border-b border-t-0"
                  } border-x-0 border-dashed border-[#FFf]-`}
                  key={index}
                  style={{ borderColor: theme.border }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </motion.article>
  );
};

export default ServiceCardAlter;
