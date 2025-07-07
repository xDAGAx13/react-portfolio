"use client";
import { CONTACT } from "@/constants";
import React from "react";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        initial={{ y: -70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center tracking-tighter"
      >
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="mailto:rohandaga05@gmail.com" className="underline">
          {CONTACT.email}
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
