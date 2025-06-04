import Image from "next/image";
import React from "react";

const Hero = ({ imageUrl }) => {
  return (
    <section className="relative">
      <Image
        src={imageUrl}
        alt="About Hero Image"
        height={450}
        width={1200}
        sizes="100vw"
        className="md:h-auto w-full h-[400px] object-cover md:max-h-[450px]"
        unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
      />

      <div className="absolute w-full h-full inset-0 bg-top-grad max-h-[190px] md:max-h-[318px]" />
    </section>
  );
};

export default Hero;
