import Deluxe from "@/components/Home/Deluxe/Deluxe";
import Experience from "@/components/Home/Experience/Experience";
import Header from "@/components/Home/Header/Header";
import Hero from "@/components/Home/Hero/Hero";
import Menu from "@/components/Home/Menu/Menu";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <main className="main_bg">
        <Hero />
        <Experience />
        <Deluxe />
        <Menu />
      </main>
    </div>
  );
}
