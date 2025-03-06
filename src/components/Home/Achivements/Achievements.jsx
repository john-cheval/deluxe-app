import React from "react";
import styles from "./styles.module.css";
import { homeAchievementsData } from "@/data/homeData";

const Achievements = () => {
  return (
    <div className={styles.achieve_wrapper}>
      <div className={styles.achieve_seperator}></div>
      <div className={styles.achieve_container}>
        {homeAchievementsData?.map((data) => (
          <div key={`index-${data.id}`} className={styles.achieve_item}>
            <h3>{data.title}</h3>
            <h2>{data.subTitle}</h2>
          </div>
        ))}
      </div>
      <div className={styles.achieve_seperator}></div>
    </div>
  );
};

export default Achievements;
