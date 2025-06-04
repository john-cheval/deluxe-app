import React from "react";
import styles from "./style.module.css";
import { homeMenuData } from "@/data/homeData";
import Image from "next/image";

const Menu = () => {
  return (
    <section className="pt-16 containers pb-24">
      <div className="flex flex-col items-center justify-center gap-3">
        <h4 className="small_heading">Deluxe</h4>
        <h2 className="main_heading">Our Luxury Menu</h2>
        <p className="description text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard
        </p>
      </div>

      <div className="pt-12 flex justify-around">
        {homeMenuData?.map((data) => (
          <div
            className="flex flex-col items-center gap-8 relative "
            key={`index-${data.id}`}
          >
            <div className={styles.menu__card__image}>
              <Image
                src={data.imageUrl}
                alt={data.title}
                sizes="100vw"
                layout="fill"
                objectFit="contain"
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
              />
            </div>
            <div className={styles.menu__card__content}>
              <h5>{data.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
