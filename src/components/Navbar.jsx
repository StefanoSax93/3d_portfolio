import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";
import { BiMenuAltRight } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import Mode from "./Mode";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-tertiary`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />

          <p className="text-color-primary text-[18px] font-bold cursor-pointer flex">
            Stefano &nbsp;{" "}
            <span className="xs:block hidden">| Web Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-6">
          {/* ciclo sui link */}
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
            <Mode />
          </li>
        </ul>

        {toggle ? (
          <CgClose
            size={34}
            className="md:hidden text-color-primary cursor-pointer"
            onClick={() => setToggle(!toggle)}
          ></CgClose>
        ) : (
          <BiMenuAltRight
            size={34}
            className="md:hidden text-color-primary cursor-pointer"
            onClick={() => setToggle(!toggle)}
          ></BiMenuAltRight>
        )}

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-tertiary md:hidden absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex flex-col gap-3">
            {/* ciclo sui link */}
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            <li>
              <Mode />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
