/* eslint-disable react/no-unescaped-entities */

import React from "react";

function Education() {
  return (
    <div className="text-white">
      <h1 className="text-[#00FF00] text-center text-2xl lg:text-4xl font-bold my-12">
        Experience{" "}
      </h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ml-8">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">Oct 2023 - Jan 2024</time>
            <div className="text-lg font-black">
              Web Development - Internship
            </div>
            <div className=" font-black">CodingAlpha </div>
            During my internship at CodingAlpha, I immersed myself in the world
            of web development. This hands-on experience allowed me to design
            and implement responsive web pages using HTML, CSS, and JavaScript.
            My focus was on ensuring optimal user experiences across various
            devices, honing my skills in creating dynamic and interactive
            interfaces.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">Jun 2023 - Dec 2023</time>
            <div className="text-lg font-black">
              Front-End Web Developement - Bootcamp
            </div>
            <div className=" font-black">Re:Coded</div>
            Participating in the Front-End Web Development Bootcamp at Re:Coded
            was a transformative experience. Over five months, I delved into the
            intricacies of front-end development, gaining valuable insights into
            industry best practices. The bootcamp, with its project-based
            learning approach, equipped me with the skills needed to create
            engaging and user-friendly websites.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">Apr 2021 - Sep 2021</time>
            <div className="text-lg font-black">
              Web Development - Internship
            </div>
            <div className=" font-black">Algerian Airlines</div>
            My internship at Algerian Airlines was a significant stepping stone
            in my professional journey. Working within a dynamic team, I had the
            opportunity to apply my web development skills to real-world
            projects. I contributed to the design and functionality of their HR
            platform, gaining practical experience in the aviation industry.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">Sep 2017 - Sep 2021</time>
            <div className="text-lg font-black">
              Computer Science - bachelor's degree
            </div>
            <div className=" font-black">University Of Algiers 1</div>
            Pursuing a Bachelor's degree in Computer Science at the University
            of Algiers 1 laid the foundation for my academic and technical
            expertise. Over three years, I delved into various aspects of
            computer science, gaining a comprehensive understanding of
            algorithms, programming languages, and software development. This
            educational journey has been instrumental in shaping my approach to
            problem-solving and technology.
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
}

export default Education;
