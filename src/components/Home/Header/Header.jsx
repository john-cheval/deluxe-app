import React from "react";
import styles from "./style.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <video autoPlay loop muted className={styles.header_video}>
        <source src="/Home/Header/headerVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.overlay}></div>

      <div className={styles.header_text}>The true essence of Hospitality</div>
    </div>
  );
};

export default Header;
