"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Modal from "@/components/shared/Modal";

const inputVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newformData = new FormData();
    newformData.append("your-name", formData.name);
    newformData.append("your-email", formData.email);
    newformData.append("tel-phone", formData.phone);
    newformData.append("your-message", formData.message);
    newformData.append("_wpcf7_unit_tag", "8c6c893");

    try {
      // const response = await fetch(
      //   "https://chevaldemo.xyz/demo/white-label/wp-json/contact-form-7/v1/contact-forms/5/feedback",
      //   {
      //     method: "POST",
      //     body: newformData,
      //   }
      // );

      // if (!response.ok) {
      //   throw new Error(`HTTP error! Status: ${response.status}`);
      // }

      setIsModalOpen(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (e) {
      console.error("Error submitting form:", error);
    }
  };
  const close = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-5 md:gap-y-7 pt-5 md:pt-8 md:pb-10"
      >
        {" "}
        <motion.input
          type="text"
          placeholder="Name*"
          required
          maxLength={50}
          id="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          custom={0}
          className="contact_input"
        />
        <motion.input
          type="text"
          placeholder="Phone*"
          required
          maxLength={15}
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          custom={2}
          className="contact_input"
          onInput={(e) => {
            if (e.target.value.length > 15) {
              e.target.value = e.target.value.slice(0, 15);
            }
          }}
          onKeyDown={(e) => {
            const allowedKeys = [
              "Backspace",
              "ArrowLeft",
              "ArrowRight",
              "Tab",
              "Delete",
            ];

            const isNumber = /^[0-9]$/.test(e.key);
            const isPlus = e.key === "+";
            const inputValue = e.currentTarget.value;
            const cursorPosition = e.currentTarget.selectionStart;

            if (
              (isPlus && (cursorPosition !== 0 || inputValue.includes("+"))) ||
              (!isNumber && !isPlus && !allowedKeys.includes(e.key))
            ) {
              e.preventDefault();
            }
          }}
        />
        <motion.input
          type="email"
          placeholder="Email*"
          required
          maxLength={50}
          id="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          custom={1}
          className="contact_input"
        />
        <motion.textarea
          type="text"
          required
          placeholder="Message*"
          maxLength={2000}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          custom={3}
          className="contact_input"
        />
        <motion.button
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          custom={4}
          type="submit"
          className="buttonOne button mx-auto text-sm md:text-base"
        >
          {" "}
          Submit
          <Image
            src={"/arrow_forward.svg"}
            alt="arrow_forward"
            width={24}
            height={14}
            sizes="100vw"
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          />
        </motion.button>
      </form>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isModalOpen && <Modal modalOpen={isModalOpen} handleClose={close} />}
      </AnimatePresence>
    </>
  );
};

export default ContactForm;
