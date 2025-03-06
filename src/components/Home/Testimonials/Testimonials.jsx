"use client";
import React from "react";
import styles from "./style.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { homeTestimonialData } from "@/data/homeData";
import quote from "../../../../public/quote.svg";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  return (
    <section className={styles.testi__wrapper}>
      <div className={styles.testi__header}>
        <h4 className="small_heading">Testimonials</h4>
        <h2 className="main_heading">What our clients say</h2>
        <div className={styles.carousel} ref={emblaRef}>
          <div className={styles.carouselContainer}>
            {homeTestimonialData?.map((data) => (
              <div key={`index-${data.id}`} className={styles.slide}>
                <Image
                  src={quote}
                  alt="quote"
                  height={70}
                  width={50}
                  sizes="100vw"
                />
                <p>{data.description}</p>
                <h5>{data.author}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
