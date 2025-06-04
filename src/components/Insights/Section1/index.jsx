import { insightsData } from "@/app/lib/insightsData";
import Cards from "@/components/common/Cards";
import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { fadeInUpSingle } from "@/app/utils/framer";

const SectionOne = () => {
  return (
    <section className="py-10 insights lg:py-12 xl:py-14 containers">
      <div className="grid w-full grid-cols-1- lg:grid-cols-2 xl:grid-cols-3 gap-y-5 lg:gap-9 pb-5 md:pb-9 ">
        {insightsData?.map((data, index) => (
          <Cards cardData={data} key={index} ind={index} slides={false} />
        ))}
      </div>
      <button {...fadeInUpSingle} className="buttonOne button mx-auto">
        {" "}
        View All
        <Image
          src={"/arrow_forward.svg"}
          alt="arrow_forward"
          width={24}
          height={14}
          sizes="100vw"
          unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
        />
      </button>
    </section>
  );
};

export default SectionOne;
