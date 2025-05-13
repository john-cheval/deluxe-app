import "./globals.css";
import { Americana, Helvertica, SelfModern } from "./ui/fonts";

export const metadata = {
  title: "Deluxe",
  description: "Deluxe Catering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${Americana.variable} ${Helvertica.variable} ${SelfModern.variable} antialiased `}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
