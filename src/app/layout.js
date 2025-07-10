import Navbar from "@/components/common/Navbar/Navbar";
import "./globals.css";
import { Americana, Helvertica, SelfModern } from "./ui/fonts";
import Footer from "@/components/common/Footer/Footer";

export const metadata = {
  title: "Deluxe Catering",
  description:
    "Deluxe offers premium catering and full-service event management for weddings, corporate functions, and special occasions in the UAE and beyond.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        // /> */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
      </head>
      <body
        className={`${Americana.variable} ${Helvertica.variable} ${SelfModern.variable} antialiased flex flex-col min-h-full `}
      >
        <Navbar />
        <main className="flex-grow main_bg w-full-">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
