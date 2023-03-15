import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionLayout } from "../layout";
import { technologies, CV } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  //utilizzo lo useEffect per gestire la grandezza dell'animazione 3D quando
  // cambia la mediaQuery
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:700px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    //cleanup function
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Here you can see the technologies I have learned by following the
        6-month full stack developer course at Boolean Academy and continuing to
        study as a self-taught learner.
      </motion.p>
      <div className="mt-24 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28 cursor-pointer" key={technology.name}>
            {isMobile ? (
              <img src={technology.icon} alt="" />
            ) : (
              <BallCanvas icon={technology.icon} />
            )}
            {/*  */}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[100px]">
        <a href={CV} download>
          <button type="button" className="my-btn">
            <p className="my-btn-stars-text">Download CV</p>
            <div id="my-btn-container-stars">
              <div id="my-btn-stars"></div>
            </div>
            <div id="my-btn-glow">
              <div className="my-btn-circle"></div>
              <div className="my-btn-circle"></div>
            </div>
          </button>
        </a>
      </div>
    </>
  );
};

export default SectionLayout(Tech, "");
