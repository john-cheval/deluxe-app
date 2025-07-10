import MainHeading from "@/components/common/MainHeading";
import SectionOne from "@/components/Contact/Section1";
import React from "react";

export const metadata = {
  title: "Contact Us | Deluxe Catering",
  description:
    "Get in touch with Deluxe Catering & Event Management. Request a quote or consultation for your next event today.",
};

const Contact = () => {
  return (
    <>
      {" "}
      <MainHeading small_title={"Enquire"} title={"Contact us"} />
      <SectionOne />
    </>
  );
};

export default Contact;
