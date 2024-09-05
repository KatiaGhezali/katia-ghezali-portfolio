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
      l: "/",
    },
    {
      id: 2,
      link: "about",
      l: "/",
    },
    {
      id: 3,
      link: "skills",
      l: "/",
    },
    {
      id: 4,
      link: "projects",
      l: "/",
    },

    {
      id: 5,
      link: "experience",
      l: "./",
    },

    {
      id: 6,
      link: "contact",
      l: "/",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#121416] fixed nav ">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black font-bold "
            href=""
            target="_blank"
            rel="noreferrer"
          >
            {/* <span className="text-[#7764EA]">K</span>G */}
          </a>
        </h1>
      </div>

      <ul className="hidden py-4 md:flex mx-auto">
        {links.map(({ id, link, l }) => (
          <li
            key={id}
            className={`nav-links px-4 cursor-pointer capitalize font-medium  hover:scale-105 hover:text-[#7764EA] duration-200 `}
          >
            <Link href={`/${l}`}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#121416] text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize py-6 text-4xl" ${
                link === "home" && router.pathname === "/"
                  ? "text-[#7764EA] font-bold"
                  : "text-white "
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
