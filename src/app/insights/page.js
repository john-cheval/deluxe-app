import MainHeading from "@/components/common/MainHeading";
import SectionOne from "@/components/Insights/Section1";
import React from "react";

export const metadata = {
  title: "Insights  | Deluxe Catering ",
  description:
    "Get inspired with event planning ideas, catering tips, seasonal menus, and behind-the-scenes insights from the Deluxe team.",
};

const Insights = () => {
  return (
    <>
      {" "}
      <MainHeading small_title={"Lorem Ipsum"} title={"Insights"} />
      <SectionOne />
    </>
  );
};

export default Insights;
