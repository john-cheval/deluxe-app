import Image from "next/image";
import React from "react";

const Section4 = () => {
  return (
    <section>
      <div className="grid grid-cols-2 pt-24 containers">
        <div className="flex flex-col gap-y-6 justify-center ">
          <h3 className="main_heading">We are Expertise</h3>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industrys
          </p>
        </div>
        <div>
          <Image
            src={"/About/image3.jpg"}
            alt="Deluxe_dinning_image3"
            width={400}
            height={450}
            sizes="100vw"
            className="w-full h-auto object-cover"
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          />
        </div>
      </div>
    </section>
  );
};

export default Section4;
