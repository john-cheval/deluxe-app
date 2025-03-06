"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import ContactImg from "../../../../public/contact.png";
import Image from "next/image";

const Contact = () => {
  const [formData, seFormData] = useState({
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
    setName(e.target.value);
  };
  return (
    <section className={styles.contact_wrapper}>
      <div className={styles.contact_container}>
        <div className={styles.contact_left}>
          <Image src={ContactImg} alt="Contact Us" layout="fill" />
        </div>
        <div className={styles.contact_right}>
          <h2 className="main_heading">Let’s start planning</h2>
          <form className={styles.form_conntainer}>
            <div class="form__group field">
              <input
                type="text"
                class="form__field"
                placeholder="Name"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChnage}
                maxLength={50}
              />
              <label for="name" class="form__label">
                Name <sup>*</sup>
              </label>
            </div>
            <div className={styles.input_container}>
              <div class="form__group field">
                <input
                  type="email"
                  class="form__field"
                  placeholder="Email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChnage}
                />
                <label for="name" class="form__label">
                  Email <sup>*</sup>
                </label>
              </div>
              <div class="form__group field">
                <input
                  type="number"
                  class="form__field"
                  placeholder="Phone"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChnage}
                  maxLength={15}
                />
                <label for="name" class="form__label">
                  Phone <sup>*</sup>
                </label>
              </div>
            </div>
            <div className={styles.input_container}>
              <div class="form__group field">
                <input
                  type="text"
                  class="form__field"
                  placeholder="guests"
                  name="guests"
                  id="guests"
                  required
                  value={formData.numberOfGuests}
                  onChange={handleChnage}
                />
                <label for="name" class="form__label">
                  Number of guests
                </label>
              </div>
              <div class="form__group field">
                <input
                  type="text"
                  class="form__field"
                  placeholder="Type of events"
                  name="events"
                  id="events"
                  required
                  value={formData.typeOfEvents}
                  onChange={handleChnage}
                />
                <label for="name" class="form__label">
                  Type of events
                </label>
              </div>
            </div>
            <div className={styles.input_container}>
              <div class="form__group field">
                <input
                  type="date"
                  class="form__field"
                  placeholder="date"
                  name="date"
                  id="date"
                  required
                  value={formData.date}
                  onChange={handleChnage}
                />
                <label for="name" class="form__label">
                  Date of event
                </label>
              </div>
              <div class="form__group field">
                <input
                  type="text"
                  class="form__field"
                  placeholder="venue"
                  name="venue"
                  id="venue"
                  required
                  value={formData.venue}
                  onChange={handleChnage}
                />
                <label for="name" class="form__label">
                  Venue
                </label>
              </div>
            </div>
            <div class="form__group field">
              <input
                type=""
                class="form__field"
                placeholder="Name"
                name="name"
                id="name"
                required
              />
              <label for="name" class="form__label">
                Special Request
              </label>
            </div>

            <button type="submit" className={styles.contact_btn}>Request a call back</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
