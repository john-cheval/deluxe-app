import Navbar from "@/components/common/Navbar/Navbar";
import "./globals.css";
import { Americana, Helvertica, SelfModern } from "./ui/fonts";
import Footer from "@/components/common/Footer/Footer";

export const metadata = {
  title: "Deluxe",
  description: "Deluxe Catering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${Americana.variable} ${Helvertica.variable} ${SelfModern.variable} antialiased flex flex-col min-h-full `}
      >
        <Navbar />
        <main className="flex-grow main_bg">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
