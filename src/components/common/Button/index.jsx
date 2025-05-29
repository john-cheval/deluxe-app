import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { fadeInUpSingle } from "@/app/utils/framer";

const Button = ({ text }) => {
  return (
    <motion.button {...fadeInUpSingle} className="buttonOne button mx-auto">
      {" "}
      {text}
      <Image
        src={"/arrow_forward.svg"}
        alt="arrow_forward"
        width={24}
        height={14}
        unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
        sizes="100vw"
      />
    </motion.button>
  );
};

export default Button;
