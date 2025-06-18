import React from "react";
import { homeMenuData } from "@/data/homeData";
import Image from "next/image";
import * as motion from "motion/react-client";
import Link from "next/link";

const Menu = () => {
  return (
    <section className="py-14 md:pt-16 containers md:pb-20 lg:pb-24">
      <div className="flex flex-col items-center justify-center gap-3">
        <motion.h4
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="small_heading "
        >
          Deluxe
        </motion.h4>
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            delay: 0.1,
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="main_heading"
        >
          Menu Solutions
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="description text-center"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard
        </motion.p>
      </div>

      <div className="pt-7 md:pt-12 gap-x-5  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-y-20 mb-20">
        {homeMenuData?.map((data, index) => (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center gap-8 relative menu__card  md:max-w-[250px]-  w-full"
            key={`index-${data.id}` || index}
          >
            <div className="sm:max-h-[50px] max-h-[30px]">
              <Image
                src={data.imageUrl}
                alt={data.title}
                sizes="100vw"
                width={60}
                height={50}
                className="w-full h-full object-cover"
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
              />
            </div>

            <h5 className="text-main text-center font-americana text-sm sm:text-base xl:text-lg font-medium leading-[128%] tracking-[0.54px]">
              {data.title}
            </h5>
          </motion.div>
        ))}
      </div>

      <Link href="/menu" className="buttonOne button mx-auto ">
        {" "}
        View All
        <Image
          src={"./arrow_forward.svg"}
          alt="arrow_forward"
          width={0}
          height={0}
          sizes="100vw"
          unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
        />
      </Link>
    </section>
  );
};

export default Menu;
