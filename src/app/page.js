import Achievements from "@/components/Home/Achivements/Achievements";
import Deluxe from "@/components/Home/Deluxe/Deluxe";
import Experience from "@/components/Home/Experience/Experience";
import Header from "@/components/Home/Header/Header";
import Hero from "@/components/Home/Hero/Hero";
import Menu from "@/components/Home/Menu/Menu";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <main /* className="main_bg" */ className="bg_white">
        <Hero />
        <Experience />
        <Deluxe />
        <Menu />
        <Achievements />
        <Testimonials />
      </main>
    </div>
  );
}
