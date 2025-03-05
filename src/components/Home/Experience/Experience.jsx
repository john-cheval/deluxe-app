import React from "react";
import styles from "./style.module.css";
import { homeExperienceData } from "@/data/homeData";
import Image from "next/image";
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
                // height={data.height}
                // width={260}
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
    </div>
  );
};

export default Experience;
