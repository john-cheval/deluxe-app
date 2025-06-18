"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Modal from "@/components/shared/Modal";

const Contact = ({ isService = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, seFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    numberOfGuests: "",
    typeOfEvents: "",
    date: "",
    venue: "",
    specialRequest: "",
  });
  const handleChnage = (e) => {
    const { name, value } = e.target;
    seFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsModalOpen(true);
        seFormData({
          company: "",
          name: "",
          email: "",
          phone: "",
          numberOfGuests: "",
          typeOfEvents: "",
          date: "",
          venue: "",
          specialRequest: "",
        });
      }
    } catch (err) {
      console.error("Error submitting form:", error);
    }
  };
  const close = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <section
        id="contact-form"
        className={`containers ${
          isService ? "py-10 md:py-14 lg:py-16" : "py-10 md:py-14 lg:py-20"
        } `}
      >
        <div className={styles.contact_container}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className={styles.contact_left}
          >
            <Image
              src={"./contact.png"}
              alt="Contact Us"
              width={400}
              height={700}
              sizes="100vw"
              // layout="fill"
              className="w-full  object-cover h-full max-h-[700px]"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            />
          </motion.div>
          <div className={styles.contact_right}>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="main_heading text-center md:text-left"
            >
              Let’s start planning
            </motion.h2>
            <form onSubmit={handleSubmit} className={styles.form_conntainer}>
              <div className={styles.input_container}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="form__group field"
                >
                  <input
                    type="text"
                    className="form__field"
                    placeholder="Company Name"
                    name="company"
                    id="company"
                    // required
                    value={formData.company}
                    onChange={handleChnage}
                  />
                  <label htmlFor="company" className="form__label">
                    Company Name {/* <sup>*</sup> */}
                  </label>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="form__group field"
                >
                  <input
                    type="text"
                    className="form__field"
                    placeholder="Name"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChnage}
                    maxLength={50}
                  />
                  <label htmlFor="name" className="form__label">
                    Name <sup>*</sup>
                  </label>
                </motion.div>
              </div>

              <div className={styles.input_container}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="form__group field"
                >
                  <input
                    type="email"
                    className="form__field"
                    placeholder="Email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChnage}
                  />
                  <label htmlFor="email" className="form__label">
                    Email <sup>*</sup>
                  </label>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="form__group field"
                >
                  <input
                    type="text"
                    className="form__field"
                    placeholder="Phone"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChnage}
                    maxLength={15}
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
                        (isPlus &&
                          (cursorPosition !== 0 || inputValue.includes("+"))) ||
                        (!isNumber && !isPlus && !allowedKeys.includes(e.key))
                      ) {
                        e.preventDefault();
                      }
                    }}
                  />
                  <label htmlFor="phone" className="form__label">
                    Phone <sup>*</sup>
                  </label>
                </motion.div>
              </div>
              <div className={styles.input_container}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="form__group field"
                >
                  <input
                    type="number"
                    className="form__field"
                    placeholder="guests"
                    name="numberOfGuests"
                    id="numberOfGuests"
                    // required
                    value={formData.numberOfGuests}
                    onChange={handleChnage}
                  />
                  <label htmlFor="numberOfGuests" className="form__label">
                    Number of guests
                  </label>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="form__group field"
                >
                  <input
                    type="text"
                    className="form__field"
                    placeholder="Type of events"
                    name="typeOfEvents"
                    id="typeOfEvents"
                    // required
                    value={formData.typeOfEvents}
                    onChange={handleChnage}
                  />
                  <label htmlFor="typeOfEvents" className="form__label">
                    Type of events
                  </label>
                </motion.div>
              </div>
              <div className={styles.input_container}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="form__group field"
                >
                  <input
                    type="date"
                    className="form__field"
                    placeholder="date"
                    name="date"
                    id="date"
                    required
                    value={formData.date}
                    onChange={handleChnage}
                  />
                  <label htmlFor="date" className="form__label">
                    Date of event
                  </label>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="form__group field"
                >
                  <input
                    type="text"
                    className="form__field"
                    placeholder="venue"
                    name="venue"
                    id="venue"
                    // required
                    value={formData.venue}
                    onChange={handleChnage}
                  />
                  <label htmlFor="venue" className="form__label">
                    Venue
                  </label>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
                className="form__group field"
              >
                <input
                  type="text"
                  className="form__field"
                  placeholder="Special Request"
                  name="specialRequest"
                  id="specialRequest"
                  value={formData.specialRequest}
                  onChange={handleChnage}
                />
                <label htmlFor="specialRequest" className="form__label">
                  Special Request
                </label>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                viewport={{ once: true, amount: 0.2 }}
                type="submit"
                className={styles.contact_btn}
              >
                Request a call back
              </motion.button>
            </form>
          </div>
        </div>
      </section>

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

export default Contact;
