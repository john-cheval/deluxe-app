import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <section className="relative">
      <Image
        src="/About/hero.jpg"
        alt="About Hero Image"
        height={450}
        width={1200}
        sizes="100vw"
        className="h-auto w-full object-cover"
        unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
      />

      <div className="absolute w-full h-full inset-0 bg-top-grad ma-h-[318px]" />
    </section>
  );
};

export default AboutHero;
