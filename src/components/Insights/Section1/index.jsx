import { insightsData } from "@/app/lib/insightsData";
import Cards from "@/components/common/Cards";
import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { fadeInUpSingle } from "@/app/utils/framer";

const SectionOne = () => {
  return (
    <section className="py-14 containers">
      <div className="grid grid-cols-3 gap-9 pb-9 ">
        {insightsData?.map((data, index) => (
          <Cards cardData={data} key={index} ind={index} />
        ))}
      </div>
      <motion.button {...fadeInUpSingle} className="buttonOne button mx-auto">
        {" "}
        View All
        <Image
          src={"/arrow_forward.svg"}
          alt="arrow_forward"
          width={24}
          height={14}
          sizes="100vw"
        />
      </motion.button>
    </section>
  );
};

export default SectionOne;
