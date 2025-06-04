import React from "react";
import * as motion from "motion/react-client";
import Link from "next/link";
import Image from "next/image";
const MenuCards = () => {
  return (
    <motion.article
      className="grid grid-cols-12 gap-y-7 md:gap-x-10 2xl:gap-x-32 border-b pb-10 border-b-[#926F39] "
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="col-span-12 md:col-span-5 lg:pl-12 gap-y-2 md:gap-y-3 flex flex-col justify-center items-center md:items-start"
      >
        <h3 className="text-3xl font-americana font-medium leading-[146%] tracking-[0.9px] text-main text-center md:text-left">
          International Cuisine
        </h3>
        <p className="description text-center md:text-left">
          From global flavors to fusion concepts, we curate cross-cultural menus
          that bring something unique to the table.
        </p>
        <Link
          href="#"
          className="underline font-helvetica text-base font-light text-desc leading-[188%] tracking-[0.48px] hover:no-underline"
        >
          Contact us for full menu
        </Link>
      </motion.div>

      <motion.div
        className="col-span-12 md:col-span-7 relative grid -order-1  md:order-2 "
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src={"/menu/menu.png"}
          width={700}
          height={500}
          sizes="100vw"
          alt="menu"
          className="w-full h-auto"
        />
        {/* <div className="absolute">
          <div className="relative w-fit">
            <Image
              src={"/menu/image-5.jpg"}
              alt="Mediterranean mezze platters"
              width={100}
              height={100}
              sizes="100vw"
              className="w-full h-auto max-w-[350px]"
            />
            <p className="cusine_name">Mediterranean mezze platters</p>
            <div className="cusine-overlay" />
          </div>
        </div> */}
      </motion.div>
    </motion.article>
  );
};

export default MenuCards;
