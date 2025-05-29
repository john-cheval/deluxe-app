import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";
import { fadeInUp } from "@/app/utils/framer";

const Cards = ({ cardData, ind }) => {
  return (
    <motion.div className="border border-gold " {...fadeInUp(ind * 0.3)}>
      <Link href={`/insights/${cardData?.id}`}>
        {cardData?.imageUrl && (
          <div>
            <Image
              src={cardData?.imageUrl}
              alt={cardData?.title}
              height={275}
              width={412}
              sizes="100vw"
              className="h-auto  w-full "
            />
          </div>
        )}

        <div
          className={`flex flex-col gap-y-2 px-10 pb-11 ${
            cardData?.imageUrl ? "pt-9" : "pt-11"
          }`}
        >
          <span className="text-secondary font-helvetica text-sm font-medium leading-[179%] tracking-[0.42px]">
            {cardData?.date}
          </span>
          <h2 className="text-main font-americana text-[22px] font-medium leading-[160%] tracking-[0.66px] max-w-[350px]">
            {cardData?.title}
          </h2>
          <p className="description max-w-[330px]">{cardData?.description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Cards;
