// import Achievements from "@/components/Home/Achivements/Achievements";
// import Clients from "@/components/Home/Clients/Clients";
import Deluxe from "@/components/Home/Deluxe/Deluxe";
import Experience from "@/components/Home/Experience/Experience";
import Header from "@/components/Home/Header/Header";
import Hero from "@/components/Home/Hero/Hero";
import Menu from "@/components/Home/Menu/Menu";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import Contact from "@/components/common/Contact/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <Deluxe />
      <Menu />
      <Testimonials />
      <Contact />
      {/* <Achievements /> */}
      {/* <Clients /> */}
    </>
  );
}
