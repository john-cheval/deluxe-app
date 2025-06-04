import React from "react";
import styles from "./style.module.css";
import { homeExperienceData } from "@/data/homeData";
import Image from "next/image";
import arrowForward from "../../../../public/arrow_forward.svg";
const Experience = () => {
  return (
    <section className=" xl:px-16 lg:px-12 sm:px-8 px-5 pb-10 md:pb-12 lg:pb-16 xl:pb-28">
      <div className="flex flex-col items-center justify-center gap-y-2">
        <h4 className="small_heading">Deluxe</h4>
        <h2 className="main_heading">Experience</h2>
        <p className="description text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard
        </p>
      </div>

      {/* <div className={styles.expr_cards}>
        {homeExperienceData?.map((data) => (
          <div className={styles.expr_card} key={`index-${data.id}`}>
            <div
              className={styles.expr_card_image}
              style={{ height: `${data.height}px` }}
            >
              <Image
                src={data.imageUrl}
                alt={data.title}
                layout="fill"
                objectFit="cover"
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
              />
            </div>
            <div className={styles.card_content}>
              <h5>{data.title}</h5>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div> */}

      <button className="buttonOne button mx-auto !hidden md:!flex">
        {" "}
        View All
        <Image
          src={arrowForward}
          alt="arrow_forward"
          width={0}
          height={0}
          sizes="100vw"
          unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
        />
      </button>
    </section>
  );
};

export default Experience;
