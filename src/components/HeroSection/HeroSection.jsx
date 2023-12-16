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
    <div className="flex bg-gray-600 h-screen lg:bg-gradient-to-r from-gray-600 to-text-gray-200 ">
      <div className=" text-white ml-4 mt-56 md:mt-38 md:ml-12 lg:ml-20 lg:mt-48">
        <p className="text-gray-400 lg:text-transparent">Hello, I'm</p>
        <motion.h1
          className="text-3xl mt-2 text-bold md:text-6xl lg:text-6xl lg:hover:text-[#00FF00]"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <span>Hello, I'm </span>
          <motion.span
            animate={{
              color: ["#b9b3b3", "#00FF00", "#b9b3b3", "#00FF00"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Katia Ghezali{" "}
          </motion.span>
        </motion.h1>
        <motion.h2 className="text-xl mt-2 md:text-2xl lg:text-6xl lg:mt-8">
          A Full Stack Web Developer
        </motion.h2>
        <motion.h4 className="text-lg mt-2 md:text-xl text-gray-300 lg:text-2xl lg:mt-8">
          Embracing Challenges, Crafting Solutions
        </motion.h4>
        <div>
          <Link href="#" className=" ">
            <button className="mt-8 mr-4 py-2 border-b border-b-[#00FF00] text-[#00FF00]  md:p-2 md:border-[#00FF00] md:border md:rounded-md lg:px-8 lg:text-lg hover:bg-[#46f346] hover:text-gray-600">
              Contact Me
            </button>
          </Link>
          <Link href="#" className="mt-8  hover:bg-gray-600">
            <button className="mt-8 py-2 border-b border-b-[#00FF00] text-[#00FF00] inline-flex md:ml-4 lg:text-lg lg:text-gray-600 lg:bg-[#46f346] lg:px-8 hover:border hover:border-[#00FF00] lg:rounded-md hover:text-[#00FF00] hover:bg-gray-600">
              <span className="mr-1">Download CV </span> <RxOpenInNewWindow />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
