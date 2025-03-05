import React from "react";
import styles from "./style.module.css";
import { homeExperienceData } from "@/data/homeData";
import Image from "next/image";
import arrowForward from "../../../../public/arrow_forward.svg";
const Experience = () => {
  return (
    <div className={styles.exper__wrapper}>
      <div className={styles.exper__header}>
        <h4 className="small_heading">Deluxe</h4>
        <h2 className="main_heading">Experience</h2>
        <p className="description text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard
        </p>
      </div>

      <div className={styles.expr_cards}>
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
              />
            </div>
            <div className={styles.card_content}>
              <h5>{data.title}</h5>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="buttonOne button mx-auto">
        {" "}
        View All
        <Image
          src={arrowForward}
          alt="arrow_forward"
          width={0}
          height={0}
          sizes="100vw"
        />
      </button>
    </div>
  );
};

export default Experience;
