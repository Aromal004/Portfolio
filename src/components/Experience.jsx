import { motion } from "framer-motion";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <div id="Experience" className="lg:mt-[-70px] pb-24 text-white">
        
      {/* Heading with Animation */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl lg:text-6xl lg:leading-normal tracking-tight font-bold"
      >
        Experience
      </motion.h2>

      <div className="mt-[-15px] lg:mt-0">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Year - Left Side */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-gray-400">{experience.year}</p>
            </motion.div>

            {/* Experience Details - Right Side */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-lg">
                {experience.role}{" "}
                <span className="text-sm text-gray-400">- {experience.company}</span>
              </h3>
              <p className="mb-4 text-gray-300">{experience.description}</p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mt-3">
                {experience.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 text-sm bg-gray-800 border border-gray-600 rounded-full"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
