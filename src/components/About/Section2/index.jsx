import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="containers pt-24 w-full relative overflow-hidden">
      <div className="flex flex-col items-center gap-y-6">
        <h1 className="main_heading !text-[45px] text-center !max-w-[875px]">
          Creating unforgettable moments paired with delicious food
        </h1>
        <p className="description !max-w-[730px] text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industrys
        </p>
      </div>
      <Image
        src={"/About/leftSVg.svg"}
        height={485}
        width={465}
        alt="eft_inner_image"
        sizes="100vw"
        className="absolute top-0 -left-14"
      />
    </section>
  );
};

export default Section2;
