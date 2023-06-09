import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionLayout } from "../layout";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-text-primary`}>
          Overview
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi! I am Stefano and i am a full-stack web developer. Since i was a
        child i have always been passionate about tecnology, so after some bad
        choices i finally deceided to enter the world of programming, and it was
        the best choice of my life.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((el, index) => (
          <ServiceCard key={el.title} index={index} {...el} />
        ))}
      </div>
    </>
  );
};

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 1)}
        className="w-full green-pink-gradient p-[1px] 
        rounded-[20px] shadow-card cursor-cell"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12
        min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3
            className="text-color-primary text-[20px] 
          font-bold text-center"
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default SectionLayout(About, "about");
