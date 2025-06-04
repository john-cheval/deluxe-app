import Contact from "@/components/common/Contact/Contact";
import Hero from "@/components/common/Hero";
import MainHeading from "@/components/common/MainHeading";
import Customization from "@/components/Menu/Customizes";
import MenuTab from "@/components/Menu/MenuTab";
import React from "react";

const Menu = () => {
  return (
    <div>
      {" "}
      <Hero imageUrl={"/menu/banner.jpg"} />
      <MainHeading
        small_title={"selection of menu"}
        title={"Menu"}
        isTop={false}
        subTitle="Crafted for Every Palate, Designed for Every Event"
        description="Our menus are tailored to your audience, theme, and goals — whether you’re feeding 100 or 10,000. We offer a wide variety of cuisines and serving styles to suit any event type."
      />
      <MenuTab />
      <Customization />
      <Contact isService={true} />
    </div>
  );
};

export default Menu;
