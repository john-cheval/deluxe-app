import MainHeading from "@/components/common/MainHeading";
import SectionOne from "@/components/InsightsInner/SectionOne";
import SectionTwo from "@/components/InsightsInner/SectionTwo";
import React from "react";

export async function generateMetadata({ params }) {
  return {
    title: ` Insights | Deluxe`,
    description:
      "Discover event planning inspiration and catering advice from Deluxe experts.",
  };
}

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
