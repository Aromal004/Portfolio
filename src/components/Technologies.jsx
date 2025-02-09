import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaReact } from "react-icons/fa";
import { SiC, SiMysql, SiPostgresql, SiDjango } from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { motion } from "framer-motion";

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

const Technologies = () => {
  return (
    <div id="Skills" className="mt-[-50px] lg:mt-[-70px] pb-14 lg:pb-24">
      
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl lg:text-6xl lg:leading-normal tracking-tight font-bold"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {[
          { icon: FaPython, color: "text-yellow-500", duration: 2 },
          { icon: FaJava, color: "text-red-600", duration: 3 },
          { icon: FaHtml5, color: "text-orange-500", duration: 3.5 },
          { icon: FaCss3Alt, color: "text-blue-500", duration: 4 },
          { icon: FaJs, color: "text-yellow-400", duration: 4.5 },
          { icon: FaGitAlt, color: "text-orange-600", duration: 5.5 },
          { icon: SiPostgresql, color: "text-sky-700", duration: 6.5 },
          { icon: SiDjango, color: "text-green-600", duration: 7 },
          { icon: FaReact, color: "text-cyan-400", duration: 7.5 },
        ].map(({ icon: Icon, color, duration, label }, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={iconVariants(duration)}
            className="p-4"
          >
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
