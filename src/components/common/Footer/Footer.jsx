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
    <footer className="containers pt-[68px] pb-[57px] bg-main text-light">
      <div className="flex justify-between pb-14">
        <div className="flex flex-col gap-6 w-1/2-">
          <h4 className="text-2xl font-americana font-medium leading-[128%]">
            Contact
          </h4>
          <div className="flex gap-x-[72px]">
            <div className="flex gap-x-4 items-center">
              <FaPhoneAlt />
              <Link
                href={"tel:+971 000 000000"}
                className="text-[#ADADAD] text-base leading-[194%] tracking-[0.48px] hover:text-white transition-colors duration-300"
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
          <div className="flex gap-x-4 text-base leading-[194%] max-w-[300px] tracking-[0.48px] ">
            <FaLocationDot className="text-2xl mt-2" />
            <Link
              href={"#"}
              className="text-[#ADADAD] text-base leading-[194%] hover:text-white transition-colors duration-300 tracking-[0.48px"
            >
              Lorem Ipsum has been the industrys standard typesetting industry
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 ">
          <h4 className="text-2xl font-americana font-medium leading-[128%]">
            Services
          </h4>

          <div className="flex flex-col gap-y-2">
            {footerLinksData?.map((links, index) => (
              <Link
                className="text-[#adadad] font-helvetica text-base leading-[194%] tracking-[0.48px] hover:text-light transition-all duration-300"
                key={index}
                href={links?.link}
              >
                {links?.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-7  max-w-[545px] w-1/2">
          <div className="flex gap-3 footer_icons">
            <Link href={"#"} target="_blank">
              <FaFacebookF />
            </Link>
            <Link href={"#"} target="_blank">
              <FaInstagram />
            </Link>
            <Link href={"#"} target="_blank">
              <FaLinkedinIn />
            </Link>
          </div>

          <div className="footer_news_letter">
            <h3>Sign up</h3>
            <p>for our newsletter</p>

            <form>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Sign up</button>
            </form>
          </div>
        </div>
      </div>

      <div>
        <p className="text-[#adadad] font-helvetica text-base leading-[170%] capitalize">
          Designed & Developed by{" "}
          <Link
            href={"https://chevalme.com/"}
            target="_blank"
            className="underline hover:no-underline  hover:text-white transition-colors duration-300"
          >
            Cheval
          </Link>
        </p>

        <p className="text-[#adadad] text-right font-helvetica text-base leading-[170%] capitalize">
          © {new Date().getFullYear()} Deluxe catering . All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
