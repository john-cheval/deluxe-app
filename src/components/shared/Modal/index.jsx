"use client";
import React from "react";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
import { IoCloseOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";

const dropIn = {
  hidden: {
    scale: 0.7,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 30,
      stiffness: 400,
    },
  },
  exit: {
    scale: 0.7,
    opacity: 0,
  },
};

const Modal = ({ handleClose, modalOpen }) => {
  return (
    <>
      {modalOpen && (
        <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className=" flex flex-col gap-y-3 items-center py-10 md:pt-[170px] md:pb-[150px] md:px-[136px] relative bg-light "
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <CiCircleCheck className="text-main text-[50px] md:text-[100px]" />
            <h5 className="text-center font-americana uppercase font-medium text-main text-lg md:text-xl lg:text-[28px]  !leading-[153%] max-w-[280px] md:max-w-[320px]">
              your form was successfully submitted!
            </h5>

            <button
              onClick={handleClose}
              className="absolute top-3 md:top-10 right-3 md:right-10"
            >
              {" "}
              <IoCloseOutline size={20} color="#A10101" />
            </button>
          </motion.div>
        </Backdrop>
      )}
    </>
  );
};

export default Modal;
