/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";

import { motion, useInView } from "framer-motion";

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};
const projects = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "A website about who I am as a developer, showcasing my skills.",
    image: "/portfolio.png",
    gitUrl: "https://github.com/202306-NEA-DZ-FEW/e-commerce-project-e-buy",
    previewUrl: "https://katia-ghezali.vercel.app/",
  },
  {
    id: 2,
    title: "Student Store",
    description:
      "A marketplace for students to sell, borrow, lend and purchase products online",
    image: "/sstore.png",
    gitUrl: "https://github.com/202306-NEA-DZ-FEW/StudentStore",
    previewUrl: "https://studentsstore.vercel.app/home",
  },
  {
    id: 3,
    title: "CNChill",
    description:
      "A website displaying all type of movies with the necessary information, as well as the actors information",
    image: "/cnchill.png",
    gitUrl: "https://github.com/202306-NEA-DZ-FEW/movie-project-codenchill",
    previewUrl: "https://cnchill.netlify.app/",
  },
  {
    id: 4,
    title: "EBuy",
    description: "Am online store where you users couls buy products",
    image: "/ebuy.png",
    gitUrl: "https://github.com/202306-NEA-DZ-FEW/e-commerce-project-e-buy",
    previewUrl: "https://e-commerce-project-e-buy.vercel.app/",
  },
  {
    id: 5,
    title: "Weather App",
    description: "Weather App",
    image: "/ebuy.png",
    gitUrl: "https://github.com/202306-NEA-DZ-FEW/e-commerce-project-e-buy",
    previewUrl: "https://e-commerce-project-e-buy.vercel.app/",
  },
];

const ProjectsData = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-2xl lg:text-4xl font-bold text-[#00FF00] pt-8 mb-8 md:mb-12">
        My Projects
      </h2>

      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsData;
