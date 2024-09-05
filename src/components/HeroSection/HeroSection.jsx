/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import React from "react";
import { RxOpenInNewWindow } from "react-icons/rx";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      stageChildren: 0.1,
    },
  },
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const HeroSection = () => {
  return (
    <div className="flex md:mb-64 lg:h-screen bg-[#121416] justify-center text-center ">
      <div className="  text-white ml-4 mt-56 md:mt-38  lg:ml-20 lg:mt-48 ">
        <motion.h1
          className="text-3xl mt-2 md:mb-10 text-bold md:text-6xl lg:text-6xl "
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <span>Hello, I&apos;m </span>
          <motion.span
            animate={{
              color: ["#b9b3b3", "#7764EA", "#b9b3b3", "#7764EA"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Katia Ghezali{" "}
          </motion.span>
        </motion.h1>
        <motion.h1 className="text-3xl mt-2 md:text-6xl md:my-10 lg:text-6xl lg:mt-8">
          A <span className="text-[#7764EA]">Full Stack</span> Web Developer
        </motion.h1>
        <motion.h1 className=" mt-2 md:text-4xl md:my-10 text-gray-300 lg:text-6xl lg:mt-8">
          Embracing Challenges, Crafting Solutions
        </motion.h1>
        <div>
          <Link href="#" className=" ">
            <button className="mt-8 mr-4 py-2 border-b border-b-[#7764EA] text-[#7764EA]  md:p-2 md:border-[#7764EA] md:border md:rounded-md lg:px-8 lg:text-lg hover:bg-[#7764EA] hover:text-[#121416]">
              Contact Me
            </button>
          </Link>
          <Link href="#" className="mt-8  ">
            <button className="mt-8 py-2 border-b border-b-[#7764EA] text-[#7764EA] inline-flex md:ml-4 lg:text-lg lg:text-[#121416] lg:bg-[#7764EA] lg:px-8 hover:border hover:border-[#7764EA] lg:rounded-md hover:text-[#7764EA] hover:bg-[#121416]">
              <span className="mr-1">Download CV </span> <RxOpenInNewWindow />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
