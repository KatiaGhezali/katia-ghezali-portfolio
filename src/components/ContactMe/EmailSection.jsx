import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const EmailSection = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="bg-gray-600 p-20 text-2xl text-center text-white">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 6 }}
      >
        This website is still under construction. However, I am always looking
        for new opportunities. So if you want to collab, ask about something, or
        just say hi,
        <motion.div
          animate={{
            color: ["#b9b3b3", "#00FF00", "#b9b3b3", "#00FF00"],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="font-bold text-"
        >
          Do not be a stranger!
        </motion.div>
        <div>Here is where you can reach out:</div>
      </motion.h1>
      <div className="flex justify-center items-center mt-4">
        <Link
          href="https://github.com/KatiaGhezali"
          className="mx-4 hover:text-[#00FF00]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 6 }}
          >
            <FaGithub className="text-4xl" />
          </motion.div>
        </Link>
        <Link
          href="https://linkedin.com/in/KatiaGhezali"
          className="mx-4 hover:text-[#00FF00]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 6 }}
          >
            <FaLinkedin className="text-4xl" />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default EmailSection;
