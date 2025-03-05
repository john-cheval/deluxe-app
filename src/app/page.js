import Experience from "@/components/Home/Experience/Experience";
import Header from "@/components/Home/Header/Header";
import Hero from "@/components/Home/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <main className="main_bg">
        <Hero />
        <Experience />
      </main>
    </div>
  );
}
