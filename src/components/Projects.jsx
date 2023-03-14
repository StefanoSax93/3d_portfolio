import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, demo } from "../assets";
import { SectionLayout } from "../layout";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          In this section you can see some of the projects i have developed so
          far. Each project is briefly described with links to code repositories
          and live demos in it.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-cell"
      >
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className="flex flex-col gap-1">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient border-2 border-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <div
                onClick={() => window.open(demo_code_link, "_blank")}
                className={`${
                  demo_code_link ? "block" : "hidden"
                } black-gradient border-2 border-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer`}
              >
                <img
                  src={demo}
                  alt="demo"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-color-primary font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default SectionLayout(Projects, "projects");
