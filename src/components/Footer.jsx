import React from "react";
import { styles } from "../styles";
import { ImGithub, ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <div
      className={`${styles.paddingX} py-[50px] w-full flex justify-between items-center py-5 bg-tertiary text-color-primary`}
    >
      <div className="sm:w-[400px] w-[200px]">
        Thank you for visting my website. I hope you enjoyed it
      </div>
      <div className="flex md:flex-row flex-col gap-3">
        <a href="https://www.linkedin.com/in/stefano-saccocci-a67164200/">
          <ImLinkedin size={25}></ImLinkedin>
        </a>
        <a href="https://github.com/StefanoSax93">
          <ImGithub size={25}></ImGithub>
        </a>
      </div>
    </div>
  );
};

export default Footer;
