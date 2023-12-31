/* eslint-disable */

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";

import {
  SlSocialLinkedin,
  SlSocialGithub,
  SlSocialInstagram,
} from "react-icons/sl";
import { useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutMe from "@/components/AboutMe/AboutMe";
import Navbar from "@/components/NavBar/NavBar";

// const textVariants = {
//   initial: {
//     x: -500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       stageChildren: 0.1,
//     },
//   },
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };

export default function Home() {
  // const firstText = useRef(null);
  // const secondText = useRef(null);
  // const thirdText = useRef(null);
  // const fourthText = useRef(null);
  // const fifthText = useRef(null);
  // const sixthText = useRef(null);
  // const seventhText = useRef(null);
  // const eighthText = useRef(null);
  // const ninethText = useRef(null);
  // const eleventhText = useRef(null);
  // const tenthText = useRef(null);
  // const twelvthText = useRef(null);

  // let xPercent = 0;
  // let direction = -1;

  // useEffect(() => {
  //   requestAnimationFrame(animation);
  // }, []);

  // const animation = () => {
  //   gsap.set(firstText.current, { xPercent: xPercent });
  //   gsap.set(secondText.current, { xPercent: xPercent });
  //   gsap.set(thirdText.current, { xPercent: xPercent });
  //   gsap.set(fourthText.current, { xPercent: xPercent });
  //   gsap.set(fifthText.current, { xPercent: xPercent });
  //   gsap.set(sixthText.current, { xPercent: xPercent });
  //   gsap.set(seventhText.current, { xPercent: xPercent });
  //   gsap.set(eighthText.current, { xPercent: xPercent });
  //   gsap.set(ninethText.current, { xPercent: xPercent });
  //   gsap.set(tenthText.current, { xPercent: xPercent });
  //   gsap.set(twelvthText.current, { xPercent: xPercent });
  //   gsap.set(eleventhText.current, { xPercent: xPercent });

  //   xPercent += 1 * direction;
  //   requestAnimationFrame(animation);
  // };

  return (
    <>
      {/* <Image
        className="h-full w-fit"
        src="/bg.png"
        width={100}
        height={100}
      ></Image> */}

      {/* <motion.div
        className="flex flex-col justify-center items-center text-yellow-500  bg-black h-full min-h-screen "
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <div className="flex text-xl mb-14 bg-yellow-500  p-4 text-black w-full">
          <p className="mr-2" ref={firstText}>
            {" "}
            coming soon{" "}
          </p>
          <p className="mr-2" ref={secondText}>
            {" "}
            coming soon{" "}
          </p>
          <p className="mr-2" ref={thirdText}>
            {" "}
            coming soon{" "}
          </p>
          <p className="mr-2" ref={fourthText}>
            {" "}
            coming soon{" "}
          </p>
          <p className="mr-2" ref={fifthText}>
            coming soon
          </p>
          <p className="mr-2" ref={sixthText}>
            coming soon
          </p>
          <p className="mr-2" ref={seventhText}>
            {" "}
            coming soon{" "}
          </p>
          <p className="mr-2" ref={eighthText}>
            {" "}
            coming soon{" "}
          </p>
          <p className="mr-2" ref={ninethText}>
            {" "}
            coming soon{" "}
          </p>
          <p className="mr-2" ref={tenthText}>
            {" "}
            coming soon{" "}
          </p>
          <p className="mr-2" ref={eleventhText}>
            coming soon
          </p>
          <p className="mr-2" ref={twelvthText}>
            coming soon
          </p>
        </div>
        <motion.div
          className=" sm:text-2xl md:text-4xl lg:text-8xl mb-4"
          variants={textVariants}
        >
          UNDER CONSTRUCTION
        </motion.div>

        <motion.div
          className="flex space-x-4 text-2xl "
          variants={textVariants}
        >
          <Link
            className=" hover:text-yellow-800"
            variants={textVariants}
            target="_blank"
            href="https://www.linkedin.com/in/katiaghezali/"
          >
            {" "}
            <SlSocialLinkedin />
          </Link>
          <Link
            className=" hover:text-yellow-800"
            variants={textVariants}
            target="_blank"
            href="https://github.com/KatiaGhezali"
          >
            {" "}
            <SlSocialGithub />
          </Link>
          <Link
            className=" hover:text-yellow-800"
            variants={textVariants}
            target="_blank"
            href="https://github.com/KatiaGhezali"
          >
            <SlSocialInstagram />
          </Link>
        </motion.div>
      </motion.div>
    */}
      <Navbar />
      <HeroSection />
      <AboutMe />
    </>
  );
}
