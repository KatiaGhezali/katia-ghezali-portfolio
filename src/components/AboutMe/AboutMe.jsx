import { motion, useReducedMotion } from "framer-motion";

const AboutMe = () => {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 sm:px-10 md:py-32"
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[120px] md:h-96 md:w-96"
      />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          className="mb-4 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-purple-400/60" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
            A little about me
          </span>
          <span className="h-px w-8 bg-purple-400/60" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          About <span className="text-purple-300">Me</span>
        </motion.h2>

        {/* Decorative underline */}
        <motion.div
          variants={fadeUp}
          className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-400"
        />

        {/* About card */}
        <motion.div
          variants={fadeUp}
          className="group relative mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-xl shadow-purple-950/10 transition-colors duration-500 hover:border-purple-400/30 hover:bg-white/[0.04] sm:p-8 md:p-12"
        >
          {/* Small decorative corner */}
          <div className="absolute left-0 top-8 h-12 w-1 rounded-r-full bg-purple-400/70 transition-all duration-500 group-hover:h-20" />

          <p className="text-base leading-8 text-gray-300 sm:text-lg sm:leading-9">
            Hi there, I&apos;m Katia, a full-stack web developer with a
            bachelor&apos;s degree in computer science.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg sm:leading-9">
            I&apos;m passionate about new technologies, software development,
            and artificial intelligence.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg sm:leading-9">
            Web development wasn&apos;t always my goal, but once I started
            studying for my degree, it was hard to keep me away from my
            computer.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg sm:leading-9">
            When I&apos;m not coding, I enjoy working out, reading, and spending
            time with loved ones.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
