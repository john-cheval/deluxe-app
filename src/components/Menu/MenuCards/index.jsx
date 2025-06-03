import React from "react";
import * as motion from "motion/react-client";
import Link from "next/link";
import Image from "next/image";
const MenuCards = () => {
  return (
    <motion.article className="grid grid-cols-12 gap-x-32 ">
      <div className="col-span-5 pl-12 space-y-3">
        <h3 className="text-3xl font-americana font-medium leading-[146%] tracking-[0.9px] text-main">
          International Cuisine
        </h3>
        <p className="description ">
          From global flavors to fusion concepts, we curate cross-cultural menus
          that bring something unique to the table.
        </p>
        <Link
          href="#"
          className="underline font-helvetica text-base font-light text-desc leading-[188%] tracking-[0.48px] hover:no-underline"
        >
          Contact us for full menu
        </Link>
      </div>

      <div className="col-span-7">
        <Image
          src={"/menu/menu.jpg"}
          width={700}
          height={500}
          sizes="100vw"
          alt="menu"
          className="w-full h-auto"
        />
      </div>
    </motion.article>
  );
};

export default MenuCards;
