import MainHeading from "@/components/common/MainHeading";
import SectionOne from "@/components/InsightsInner/SectionOne";
import SectionTwo from "@/components/InsightsInner/SectionTwo";
import React from "react";

const InsightsInnerPage = () => {
  return (
    <>
      {" "}
      <MainHeading small_title={"Lorem Ipsum"} title={"Insights"} />
      <SectionOne />
      <SectionTwo />
    </>
  );
};

export default InsightsInnerPage;
