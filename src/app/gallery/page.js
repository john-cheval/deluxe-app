import MainHeading from "@/components/common/MainHeading";
import SectionOne from "@/components/Gallery/Section1";
import React from "react";

export const metadata = {
  title: "Gallery | Deluxe Catering",
  description:
    "Browse our gallery to see highlights of events we’ve catered and managed — from lavish weddings to corporate functions.",
};

const page = () => {
  return (
    <div className="gallery-bg">
      <MainHeading small_title={"Event showcase"} title={"Gallery"} />
      <SectionOne />
    </div>
  );
};

export default page;
