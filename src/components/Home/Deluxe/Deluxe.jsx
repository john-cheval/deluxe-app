import React from "react";
import styles from "./style.module.css";
import leftImg1 from "../../../../public/Home/Deluxe/image2.png";
import leftImg2 from "../../../../public/Home/Deluxe/deluxe.svg";
import leftImg3 from "../../../../public/Home/Deluxe/Vector.svg";
import rightImg1 from "../../../../public/Home/Deluxe/image1.png";
import Image from "next/image";
import arrowForward from "../../../../public/arrow_forward-2.svg";

const Deluxe = () => {
  return (
    <section className={styles.del_wrapper}>
      <div className={styles.del_container}>
        <div className={styles.del_left}>
          <h2>Lorem Ipsum is simply dummy text of the</h2>
          <div className={styles.img_container}>
            <div className={styles.image}>
              <Image
                src={leftImg1}
                alt="Deluxe"
                layout="fill"
                objectFit="cover"
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
              />

              <Image
                src={leftImg2}
                alt="Deluxe"
                objectFit="cover"
                className={styles.badge}
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
              />
            </div>

            <Image
              src={leftImg3}
              alt="Deluxe"
              objectFit="cover"
              className={styles.left_img}
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            />
          </div>
        </div>
        <div className={styles.del_right}>
          <div className={styles.right_img}>
            <Image
              src={rightImg1}
              alt="Deluxe"
              layout="fill"
              objectFit="cover"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industrys
          </p>
          <button className="buttonRed button ">
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
      </div>
    </section>
  );
};

export default Deluxe;
