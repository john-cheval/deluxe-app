import AboutHero from "@/components/About/Hero";
import Section2 from "@/components/About/Section2";
import Section3 from "@/components/About/Section3";
import Section4 from "@/components/About/Section4";
import Contact from "@/components/common/Contact/Contact";
import React from "react";

const About = () => {
  return (
    <div className="about-bg">
      <AboutHero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Contact />
    </div>
  );
};

export default About;
