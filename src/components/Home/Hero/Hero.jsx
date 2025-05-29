import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import heroImage from "../../../../public/Home/Hero/hero.svg";
import heroImage1 from "../../../../public/Home/Hero/hero1.jpg";
import arrowForward from "../../../../public/arrow_forward.svg";

const Hero = () => {
  return (
    <section className={styles.hero_wrapper}>
      <div className={styles.hero__left}>
        <div className={styles.hero__left__image}>
          <Image
            src={heroImage1}
            alt="Deluxe_dinning_image1"
            width={0}
            height={0}
            sizes="100vw"
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          />
        </div>
        <div className={styles.hero__video}>
          <video autoPlay playsInline loop muted controlsList="nodownload">
            <source src="/Home/Hero/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className={styles.hero__image}>
            <Image
              src={heroImage}
              alt="Deluxe_hero_image"
              width={0}
              height={0}
              sizes="100vw"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            />
          </div>
        </div>
      </div>
      <div className={styles.hero__right}>
        <h4 className="small_heading">Who we are</h4>
        <h1 className="main_heading">
          Creating unforgettable moments paired with delicious food
        </h1>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industrys
        </p>
        <button className="buttonOne button">
          {" "}
          Read More
          <Image
            src={arrowForward}
            alt="arrow_forward"
            width={0}
            height={0}
            sizes="100vw"
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          />
        </button>
      </div>
    </section>
  );
};

export default Hero;
