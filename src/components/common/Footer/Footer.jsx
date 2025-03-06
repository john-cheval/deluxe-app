import React from "react";
import styles from "./style.module.css";
import call from "../../../../public/Footer/call.svg";
import fb from "../../../../public/Footer/fb.svg";
import insta from "../../../../public/Footer/insta.svg";
import linkedin from "../../../../public/Footer/linkedin.svg";
import location from "../../../../public/Footer/location_on.svg";
import mail from "../../../../public/Footer/mail.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer_wrapper}>
      <div className={styles.footer_container}>
        <div className={styles.footer_left}>
          <h4>Contact</h4>
          <div className={styles.footer_contact}>
            <div className={styles.footer_contact_item}>
              <Image
                src={call}
                alt="Call Icon"
                height={23}
                width={23}
                sizes="100vw"
              />
              <Link href={"tel:+971 000 000000"}>+971 000 000000</Link>
            </div>
            <div className={styles.footer_contact_item}>
              <Image
                src={mail}
                alt="mail Icon"
                height={23}
                width={23}
                sizes="100vw"
              />
              <Link href={"mailto:deluxe@example.com"}>deluxe@example.com</Link>
            </div>
          </div>
          <div className={styles.footer_contact_item_loc}>
            <Image
              src={location}
              alt="location Icon"
              height={23}
              width={23}
              sizes="100vw"
            />
            <Link href={"#"} /* href={"mailto:deluxe@example.com"} */>
              Lorem Ipsum has been the industrys standard typesetting industry
            </Link>
          </div>
          <p className={styles.contact__bottom}>
            Designed & Developed by Cheval
          </p>
        </div>
        <div className={styles.footer_right}>
          <div className={styles.footer_icons}>
            <Link href={"#"} target="_blank">
              <Image
                src={fb}
                alt="fb Icon"
                height={11}
                width={11}
                sizes="100vw"
              />
            </Link>
            <Link href={"#"} target="_blank">
              <Image
                src={insta}
                alt="insta Icon"
                height={11}
                width={11}
                sizes="100vw"
              />
            </Link>
            <Link href={"#"} target="_blank">
              <Image
                src={linkedin}
                alt="linkedin Icon"
                height={11}
                width={11}
                sizes="100vw"
              />
            </Link>
          </div>

          <div className={styles.footer_news_letter}>
            <h3>Sign up</h3>
            <p>for our newsletter</p>

            <form>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Sign up</button>
            </form>
          </div>
          <p className={styles.contact__bottom_right}>
            © 2024 Deluxe catering . All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
