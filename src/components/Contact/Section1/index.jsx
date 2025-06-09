import Link from "next/link";
import React from "react";
import { HiPhone } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ContactForm from "../ContactForm";
import * as motion from "motion/react-client";
const SectionOne = () => {
  return (
    <section className="containers pt-6 pb-10 md:pb-12 lg:pb-16 2xl:pb-20">
      <div className="grid grid-cols-12">
        <div className="bg-light p-8 md:p-12 2xl:p-16 col-span-12  md:col-span-6 lg:col-span-5">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl lg:text-3xl font-americana text-main font-medium leading-[146%] tracking-[0.9px] text-center md:text-left"
          >
            Get in touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-y-2 md:gap-y-5 mt-3 md:mt-8 items-center md:items-start"
          >
            <Link
              href={"tel:+971 000 00000 000"}
              className="gap-x-2 flex items-center text-base font-helvetica font-medium leading-[189%] tracking-[0.48px] text-contact_color"
            >
              <HiPhone className="text-secondary " /> +971 000 00000 000
            </Link>
            <Link
              href={"mailto:deluxecatering@example.com"}
              className="gap-x-2 flex items-center text-base font-helvetica font-medium leading-[189%] tracking-[0.48px] text-contact_color "
            >
              <IoMdMail className="text-secondary" /> deluxecatering@example.com
            </Link>
            <Link
              href={"/"}
              className="gap-x-2 flex text-base font-helvetica font-medium leading-[189%] tracking-[0.48px] text-contact_color "
            >
              <FaLocationDot className="text-secondary text-xl mr-1 md:mr-1  mt-2  " />{" "}
              <p className="text-center md:text-left">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and
              </p>
            </Link>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-start gap-x-4 mt-5 md:mt-10 sm:ml-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href={"/"}
              target="_blank"
              className="h-10 w-10 flex items-center justify-center bg-contact_color rounded-full hover:bg-opacity-90 trasition-all  duration-300"
            >
              <FaFacebookF color="#fff" />
            </Link>

            <Link
              href={"/"}
              target="_blank"
              className="h-10 w-10 flex items-center justify-center bg-contact_color rounded-full hover:bg-opacity-90 trasition-all  duration-300"
            >
              <FaInstagram color="#fff" />
            </Link>

            <Link
              href={"/"}
              target="_blank"
              className="h-10 w-10 flex items-center justify-center bg-contact_color rounded-full hover:bg-opacity-90 trasition-all  duration-300"
            >
              <FaLinkedinIn color="#fff" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 md:mt-10 sm:ml-5 flex flex-col lg:flex-row  gap-y-4 lg:gap-x-5 items-center"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4442.911925079892!2d55.273836900000006!3d25.178003399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f699813fd9451%3A0xc4b554ceb43cff51!2sCheval%20-%20Website%20Design%20%7C%20App%20Development%20Agency%20Dubai%20UAE!5e1!3m2!1sen!2sae!4v1748591531475!5m2!1sen!2sae"
              // width="600"
              // height="450"
              // style="border:0;"
              className="w-64 h-20 rounded-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <Link
              href={"https://maps.app.goo.gl/qvXNpQX2YFvHVS5u5"}
              className="text-contact_color font-helvetica text-base font-medium leading-[179%] tracking-[0.48px] underline"
            >
              View on map
            </Link>
          </motion.div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-7 bg-[#FFF5E4] p-8 md:p-12 2xl:p-16 md:pb-0">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl lg:text-3xl  font-americana text-main font-medium leading-[146%] tracking-[0.9px] text-center md:text-left"
          >
            Enquire
          </motion.h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
