import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0c0b18] px-6 pb-20 pt-32 text-center text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/4 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-purple-700/20 blur-[120px] md:h-[500px] md:w-[500px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-24 top-1/3 h-64 w-64 rounded-full bg-indigo-600/10 blur-[100px] md:h-96 md:w-96"
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-[12%] top-[28%] h-3 w-3 rounded-full bg-purple-400/70 shadow-[0_0_20px_#a78bfa]"
          animate={{
            y: [0, -25, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-[15%] top-[22%] h-2 w-2 rounded-full bg-indigo-300/80 shadow-[0_0_16px_#818cf8]"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[25%] left-[20%] h-2 w-2 rounded-full bg-purple-300/60"
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-[12%] top-[55%] hidden h-16 w-16 rotate-45 rounded-xl border border-purple-400/20 md:block"
          animate={{
            rotate: [45, 90, 45],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(167,139,250,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 75%)",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 },
            },
          }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.07] px-4 py-2 text-sm text-purple-200"
        >
          <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_10px_#a78bfa]" />
          Welcome to my portfolio
        </motion.div>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
        >
          Hello, I&apos;m{" "}
          <span className="relative inline-block bg-gradient-to-r from-purple-300 via-[#a78bfa] to-indigo-400 bg-clip-text text-transparent">
            Katia Ghezali
          </span>
          <span className="text-purple-400">.</span>
        </motion.h1>

        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 },
            },
          }}
          className="mt-6 text-xl font-medium text-gray-200 sm:text-2xl md:text-4xl"
        >
          Software Engineer &{" "}
          <span className="text-purple-400">Web Developer</span>
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 },
            },
          }}
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
        >
          I enjoy building for the web, exploring new technologies, and turning
          ideas into meaningful digital experiences.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 },
            },
          }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 rounded-xl border border-purple-400 bg-purple-500 px-7 py-3.5 font-medium text-white shadow-lg shadow-purple-950/30 transition duration-300 hover:-translate-y-1 hover:bg-purple-400 hover:shadow-xl hover:shadow-purple-500/20"
          >
            Let&apos;s Connect
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 font-medium text-gray-200 transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
          >
            Explore My Work
          </Link>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, scaleX: 0 },
            visible: {
              opacity: 1,
              scaleX: 1,
              transition: { duration: 1 },
            },
          }}
          className="mx-auto mt-16 h-px w-24 bg-gradient-to-r from-transparent via-purple-400/70 to-transparent"
        />
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About Me"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition-colors hover:text-purple-300"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll to explore
        </span>
        <FaArrowDown size={14} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
