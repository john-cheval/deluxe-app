import React from "react";
import Link from "next/link";
import { footerLinksData } from "@/app/lib/navLinksData";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="containers pt-10 md:pt-[68px] pb-14 bg-main text-light">
      <div className="flex gap-8 justify-center items-center md:items-start lg:justify-between pb-10 md:pb-14 flex-wrap lg:flex-nowrap">
        <div className="flex flex-col gap-y-2 md:gap-y-4 md:gap-6 items-center md:items-start ">
          <h4 className="text-2xl text-center md:text-left font-americana font-medium leading-[128%]">
            Contact
          </h4>
          <div className="flex flex-col md:flex-row md:gap-x-2 xl:gap-x-10 flex-shrink-0 2xl:gap-x-[72px] w-fit">
            <div className="flex gap-x-4 items-center">
              <FaPhoneAlt />
              <Link
                href={"tel:+971 000 000000"}
                className="text-[#ADADAD] text-base leading-[194%] tracking-[0.48px] hover:text-white transition-colors duration-300 min-w-[150px]"
              >
                +971 000 000000
              </Link>
            </div>
            <div className="flex gap-x-4 items-center">
              <IoMail className="text-xl" />
              <Link
                href={"mailto:deluxe@example.com"}
                className="text-[#ADADAD] text-base leading-[194%] tracking-[0.48px] hover:text-white transition-colors duration-300"
              >
                deluxe@example.com
              </Link>
            </div>
          </div>

          <div className="flex gap-x-2 md:gap-x-4 text-base leading-[194%] max-w-[300px] tracking-[0.48px] ">
            <FaLocationDot className="text-2xl mt-2" />
            <Link
              href={"#"}
              className="text-[#ADADAD] text-base leading-[194%] hover:text-white text-center md:text-left transition-colors duration-300 tracking-[0.48px]"
            >
              Lorem Ipsum has been the industrys standard typesetting industry
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 md:gap-6 md:flex-shrink-0">
          <h4 className="text-2xl text-center md:text-left font-americana font-medium leading-[128%]">
            Services
          </h4>

          <div className="flex flex-row flex-wrap md:flex-nowrap md:flex-col gap-2 md:gap-y-3 w-full justify-center md:justify-start">
            {footerLinksData?.map((links, index) => (
              <Link
                className="text-[#adadad] font-helvetica text-base leading-[194%] tracking-[0.48px] hover:text-light transition-all duration-300 space-x-2"
                key={index}
                href={links?.link}
              >
                {links?.title}{" "}
                {index !== footerLinksData.length - 1 && (
                  <span className="">|</span>
                )}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-7 flex-shrink  max-w-[545px] w-full w-1/2-">
          {/* <div className="flex gap-3 footer_icons">
            <Link href={"#"} target="_blank">
              <FaFacebookF />
            </Link>
            <Link href={"#"} target="_blank">
              <FaInstagram />
            </Link>
            <Link href={"#"} target="_blank">
              <FaLinkedinIn />
            </Link>
          </div> */}

          <div className="footer_news_letter">
            <h3 className="main_heading !text-white uppercase text-center md:text-left">
              Sign up
            </h3>
            <p className="text-center md:text-left">for our newsletter</p>

            <form>
              <input
                className="w-full"
                type="email"
                placeholder="Enter your email"
                required
              />
              <button
                className="text-sm md:text-base text-[#e3e3e3] font-normal font-helvetica leading-[194%] tracking-[0.48px] -ml-16"
                type="submit"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-y-2 md:gap-y-0">
        <p className="text-[#adadad] font-helvetica text-sm md:text-base leading-[170%] capitalize">
          Designed & Developed by{" "}
          <Link
            href={"https://chevalme.com/"}
            target="_blank"
            className="underline hover:no-underline  hover:text-white transition-colors duration-300"
          >
            Cheval
          </Link>
        </p>

        <p className="text-[#adadad] text-right- text-center font-helvetica text-sm md:text-base leading-[170%] capitalize">
          © {new Date().getFullYear()} Deluxe catering . All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
