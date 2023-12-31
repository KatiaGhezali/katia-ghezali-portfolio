/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: 500,
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
  hidden: { opacity: 0.5 },
  visible: { opacity: 1 },
};

const AboutMe = () => {
  return (
    <div className="flex bg-gray-600 px-4 h-screen lg:text-center  ">
      <motion.div variants={textVariants} initial="initial" animate="animate">
        <motion.h1
          className="text-2xl font-bold text-[#00FF00] text-center items-center md:text-3xl lg:text-center lg:text-4xl  lg:p-2"
          variants={textVariants}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-white mt-2 md:text-xl lg:text-2xl    md:p-2 lg:p-4 lg:mx-8 lg:leading-10"
          variants={textVariants}
        >
          Hi there, I am Katia, a full-stack web Developer with a bachelor's
          degree in computer science. <br /> Passionate about new technologies
          and software development as well as artificial intelligence. <br />{" "}
          Web development hasn't always been my goal, but once I started
          studying for my degree it was hard to keep me away from my computer.
          br When I am not coding, I am working out, reading or spending time
          with loved ones.
        </motion.p>
      </motion.div>

      {/* <div>
        <Image className="mt-12" src="/bg.png" width={300} height={300}></Image>
      </div> */}
    </div>
  );
};

export default AboutMe;
