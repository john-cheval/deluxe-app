import MainHeading from "@/components/common/MainHeading";
import SectionOne from "@/components/Gallery/Section1";
import React from "react";

const page = () => {
  return (
    <>
      <MainHeading small_title={"Event showcase"} title={"Gallery"} />
      <SectionOne />
    </>
  );
};

export default page;
