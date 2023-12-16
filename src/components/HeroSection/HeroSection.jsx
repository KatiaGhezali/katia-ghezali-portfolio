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
    <div className="flex bg-gray-600 h-screen ">
      <div className=" text-white ml-4 mt-64">
        <p className="text-gray-400">Hello, I'm</p>
        <motion.h1
          className="text-3xl mt-2 text-bold"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.span
            animate={{
              color: ["#b9b3b3", "#00FF00", "#b9b3b3", "#00FF00"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Katia Ghezali{" "}
          </motion.span>
        </motion.h1>
        <motion.h2 className="text-xl mt-2">Full Stack Web Developer</motion.h2>
        <motion.h4 className="text-lg mt-2">
          Embracing challenges, crafting solutions
        </motion.h4>
        <div>
          <Link href="#" className=" ">
            <button className="mt-8 mr-4 py-2 border-b border-b-[#00FF00] text-[#00FF00]">
              Contact Me
            </button>
          </Link>
          <Link href="#" className="mt-8">
            <button className="mt-8 py-2 border-b border-b-[#00FF00] text-[#00FF00] inline-flex">
              <span className="mr-1">Download CV </span> <RxOpenInNewWindow />
            </button>
          </Link>
        </div>
      </div>
      <div>2</div>
    </div>
  );
};

export default HeroSection;
