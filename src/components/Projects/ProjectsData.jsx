import { motion, useReducedMotion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "My personal portfolio showcasing my background, skills, and web development projects.",
    image: "/portfolio.png",
    gitUrl: null,
    previewUrl: "https://katia-ghezali.vercel.app/",
  },
  {
    id: 2,
    title: "Student Store",
    description:
      "A student marketplace for buying, selling, lending, and borrowing products.",
    image: "/sstore.png",
    gitUrl: "https://github.com/202306-NEA-DZ-FEW/StudentStore",
    previewUrl: "https://studentsstore.vercel.app/home",
  },
  {
    id: 3,
    title: "CNChill",
    description:
      "A movie discovery website featuring film information and details about actors.",
    image: "/cnchill.png",
    gitUrl: "https://github.com/202306-NEA-DZ-FEW/movie-project-codenchill",
    previewUrl: "https://cnchill.netlify.app/",
  },
  {
    id: 4,
    title: "EBuy",
    description:
      "An e-commerce website where users can explore products and shop online.",
    image: "/ebuy.png",
    gitUrl: "https://github.com/202306-NEA-DZ-FEW/e-commerce-project-e-buy",
    previewUrl: "https://e-commerce-project-e-buy.vercel.app/",
  },
];

const ProjectsData = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 sm:px-10 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-purple-700/[0.08] blur-[120px] md:h-96 md:w-96"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mb-4 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        >
          <span className="h-px w-8 bg-purple-400/60" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
            Things I&apos;ve built
          </span>

          <span className="h-px w-8 bg-purple-400/60" />
        </motion.div>

        <motion.h2
          className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
        >
          My <span className="text-purple-300">Projects</span>
        </motion.h2>

        <motion.div
          className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-400"
          initial={{ opacity: 0, scaleX: prefersReducedMotion ? 1 : 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
        />

        <motion.ul
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.12,
              },
            },
          }}
        >
          {projects.map((project) => (
            <motion.li
              key={project.id}
              className="h-full"
              variants={{
                hidden: {
                  opacity: 0,
                  y: prefersReducedMotion ? 0 : 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: prefersReducedMotion ? 0 : 0.55,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default ProjectsData;
