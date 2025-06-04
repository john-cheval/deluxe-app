import Contact from "@/components/common/Contact/Contact";
import Hero from "@/components/common/Hero";
import MainHeading from "@/components/common/MainHeading";
import ServiceTab from "@/components/Services/TabSection";
import React from "react";

const Services = () => {
  return (
    <div className="service-bg">
      <Hero imageUrl={"/services/banner.jpg"} />
      <MainHeading
        small_title={"What we do"}
        title={"Services"}
        isTop={false}
      />
      <ServiceTab />
      <Contact isService={true} />
    </div>
  );
};

export default Services;
