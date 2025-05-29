import MainHeading from "@/components/common/MainHeading";
import SectionOne from "@/components/Gallery/Section1";
import React from "react";

const page = () => {
  return (
    <div className="gallery-bg">
      <MainHeading small_title={"Event showcase"} title={"Gallery"} />
      <SectionOne />
    </div>
  );
};

export default page;
