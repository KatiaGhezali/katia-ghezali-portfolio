import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import skills from "./technologiesData";

const Technologies = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.07,
      },
    },
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24 sm:px-10 md:py-32"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-indigo-700/[0.08] blur-[120px] md:h-96 md:w-96"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section label */}
        <motion.div
          className="mb-4 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        >
          <span className="h-px w-8 bg-purple-400/60" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
            What I work with
          </span>

          <span className="h-px w-8 bg-purple-400/60" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            delay: prefersReducedMotion ? 0 : 0.1,
          }}
        >
          My <span className="text-purple-300">Skills</span>
        </motion.h2>

        {/* Underline */}
        <motion.div
          className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-400"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
          }}
        />

        {/* Skills grid */}
        <motion.div
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name || index}
              variants={skillVariants}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: -5,
                      transition: { duration: 0.2 },
                    }
              }
              className="group flex min-h-[76px] items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-4 transition-colors duration-300 hover:border-purple-400/40 hover:bg-purple-500/[0.07] sm:px-4"
            >
              {skill.icon && (
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-purple-400/15 bg-purple-500/[0.08] transition-colors duration-300 group-hover:border-purple-400/40 group-hover:bg-purple-500/[0.15]">
                  {React.cloneElement(skill.icon, {
                    color: "#a78bfa",
                    size: 24,
                  })}
                </span>
              )}

              <span className="text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white sm:text-base">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
