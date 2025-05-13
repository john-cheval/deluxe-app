import localFont from "next/font/local";

export const Americana = localFont({
  src: [
    {
      path: "./fonts/americana-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-americana",
  display: "swap",
});

export const Helvertica = localFont({
  src: [
    {
      path: "./fonts/helvetica-neue.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

export const SelfModern = localFont({
  src: [
    {
      path: "./fonts/Self Modern Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Self Modern Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Self Modern Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-self",
  display: "swap",
});
