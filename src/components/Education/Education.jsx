import { motion, useReducedMotion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    date: "Oct 2023 – Jan 2024",
    title: "Web Development Intern",
    organization: "CodingAlpha",
    description:
      "Designed and implemented responsive web pages using HTML, CSS, and JavaScript, focusing on creating interactive interfaces and user experiences across different devices.",
    type: "work",
    icon: FaCode,
  },
  {
    id: 2,
    date: "Jun 2023 – Dec 2023",
    title: "Front-End Web Development Bootcamp",
    organization: "Re:Coded",
    description:
      "Completed a project-based front-end development bootcamp, building practical skills in creating engaging, responsive, and user-friendly websites.",
    type: "education",
    icon: FaGraduationCap,
  },
  {
    id: 3,
    date: "Apr 2021 – Sep 2021",
    title: "Web Development Intern",
    organization: "Air Algérie",
    description:
      "Contributed to the development of an HR platform, applying web development skills to a real-world project in the aviation industry.",
    type: "work",
    icon: FaBriefcase,
  },
  {
    id: 4,
    date: "Sep 2017 – Sep 2021",
    title: "Bachelor's Degree in Computer Science",
    organization: "University of Algiers 1",
    description:
      "Built a foundation in computer science, including algorithms, programming, and software development, developing technical and problem-solving skills.",
    type: "education",
    icon: FaGraduationCap,
  },
];

function Education() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-24 text-white sm:px-10 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-purple-700/[0.08] blur-[120px] md:h-96 md:w-96"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          className="mb-4 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        >
          <span className="h-px w-8 bg-purple-400/60" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
            My journey
          </span>

          <span className="h-px w-8 bg-purple-400/60" />
        </motion.div>

        <motion.h2
          className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
        >
          Experience & <span className="text-purple-300">Education</span>
        </motion.h2>

        <motion.p
          className="mx-auto mt-5 max-w-2xl text-center leading-7 text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            delay: prefersReducedMotion ? 0 : 0.1,
          }}
        >
          A look at the experiences and learning opportunities that have shaped
          my journey in software development.
        </motion.p>

        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-400" />

        <div className="relative mt-16">
          <div className="absolute bottom-6 left-[15px] top-6 w-px bg-gradient-to-b from-purple-400/70 via-purple-500/30 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={experience.id}
                  className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                    isLeft
                      ? "sm:pr-12 sm:text-right"
                      : "sm:ml-auto sm:pl-12 sm:text-left"
                  }`}
                  initial={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : 30,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.6,
                    delay: prefersReducedMotion ? 0 : 0.08,
                    ease: "easeOut",
                  }}
                >
                  <div
                    className={`absolute left-0 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-purple-400/50 bg-[#17132a] text-purple-300 shadow-lg shadow-purple-950/30 sm:left-auto ${
                      isLeft ? "sm:right-[-16px]" : "sm:left-[-16px]"
                    }`}
                  >
                    <Icon size={13} />
                  </div>

                  <article className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/35 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-purple-950/10 sm:p-6">
                    <time className="inline-flex rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-3 py-1.5 text-xs font-medium tracking-wide text-purple-200 sm:text-sm">
                      {experience.date}
                    </time>

                    <h3 className="mt-4 text-lg font-semibold leading-7 text-white transition-colors duration-300 group-hover:text-purple-300 sm:text-xl">
                      {experience.title}
                    </h3>

                    <p className="mt-1 font-medium text-purple-300/90">
                      {experience.organization}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                      {experience.description}
                    </p>
                  </article>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
