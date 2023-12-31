/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },

    {
      id: 5,
      link: "experience",
    },

    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-transparent fixed nav ">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black font-bold "
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-[#00FF00]">K</span>G
          </a>
        </h1>
      </div>

      <ul className="hidden border-b border-b-[#00FF00] py-4 md:flex mx-auto">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`nav-links px-4 cursor-pointer capitalize font-medium ${
              link === "home" &&
              (router.pathname === `/${link}` || router.pathname === "/")
                ? "text-[#00FF00] "
                : "text-gray-300"
            } hover:scale-105 hover:text-[#00FF00] duration-200 hover:underline link-underline`}
          >
            <Link href={`/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize py-6 text-4xl" ${
                link === "home" && router.pathname === "/"
                  ? "text-[#00FF00]"
                  : "text-gray-500"
              }`}
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
