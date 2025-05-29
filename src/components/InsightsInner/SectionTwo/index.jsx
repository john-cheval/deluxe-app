"use client";
import { insightsData } from "@/app/lib/insightsData";
import Cards from "@/components/common/Cards";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

const SectionTwo = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);
  return (
    <section className="containers pb-[130px]">
      <h3 className="main_heading mb-8">Our Latest insights</h3>
      <div className="carousel" ref={emblaRef}>
        <div className="flex ">
          {insightsData?.map((data, index) => (
            <div key={index}>
              <Cards cardData={data} ind={0} slides={true} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
