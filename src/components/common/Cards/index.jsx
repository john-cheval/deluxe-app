import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";
import { fadeInUp } from "@/app/utils/framer";
import isVideo from "@/app/lib/checkIsVideo";
import { truncateByWords } from "@/app/lib/truncateByWords";

const Cards = ({ cardData, ind, slides = "false" }) => {
  const { text: descText, isTruncated: showReadMore } = truncateByWords(
    cardData?.description,
    cardData?.imageUrl ? 10 : 30,
    false
  );
  return (
    <motion.div
      className={`border border-gold w-full  ${
        slides ? "slides- last:mr-8- min-h-[530px]" : ""
      } `}
      {...(ind ? fadeInUp(ind * 0.3) : {})}
    >
      <Link href={`/insights/${cardData?.id}`}>
        {cardData?.imageUrl && (
          <div className="relative w-full">
            {isVideo(cardData?.imageUrl) ? (
              <div>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={cardData?.imageUrl}
                  className="w-full h-full"
                />
              </div>
            ) : (
              <Image
                src={cardData?.imageUrl}
                alt={cardData?.title}
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto  w-full object-cover "
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
              />
            )}
          </div>
        )}

        <div
          className={`flex flex-col gap-y-2 px-5 lg:px-10 pb-5 lg:pb-11 ${
            cardData?.imageUrl ? "pt-5 lg:pt-9" : "lg:pt-11 pt-5"
          }`}
        >
          <span className="text-secondary font-helvetica text-sm font-medium leading-[179%] tracking-[0.42px] text-center md:text-left">
            {cardData?.date}
          </span>
          <h2 className="text-main font-americana text-lg md:text-xl lg:text-[22px] font-medium leading-[160%] tracking-[0.66px] w-full lg:max-w-[350px] text-center md:text-left">
            {cardData?.title}
          </h2>
          <p className="description w-full md:max-w-[330px] text-center md:text-left">
            {descText}
            {showReadMore && (
              <Link
                href={`/insights/${cardData?.id}`}
                className="text-main underline hover:no-underline ml-2 "
              >
                Read More...
              </Link>
            )}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Cards;
