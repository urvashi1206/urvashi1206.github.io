import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiTableau, SiOracle } from "react-icons/si";
import { FaNodeJs, FaPython, FaJava, FaDatabase, FaGitAlt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

// Icon animation variants with random duration
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// Generate a random duration for each icon
const getRandomDuration = () => Math.random() * 2 + 1.5; // Random duration between 1.5s and 3.5s

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {[
          { Icon: FaPython, label: "Python", color: "text-yellow-400" },
          { Icon: FaJava, label: "Java", color: "text-red-500" },
          { Icon: SiOracle, label: "Oracle", color: "text-red-700" },
          { Icon: FaDatabase, label: "SQL / PL-SQL", color: "text-blue-500" },
          { Icon: FaGitAlt, label: "Git", color: "text-orange-600" },
          { Icon: RiReactjsLine, label: "ReactJS", color: "text-cyan-400" },
          { Icon: SiTableau, label: "Tableau", color: "text-blue-500" },
          { Icon: SiMongodb, label: "MongoDB", color: "text-green-500" },
          { Icon: FaNodeJs, label: "NodeJS", color: "text-green-500" },
          { Icon: BiLogoPostgresql, label: "PostgreSQL", color: "text-sky-700" },
        ].map(({ Icon, label, color }, index) => (
          <motion.div
            key={index}
            variants={iconVariants(getRandomDuration())} // Use random duration
            initial="initial"
            animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-800 p-4"
          >
            <Icon className={`text-7xl ${color}`} />
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
