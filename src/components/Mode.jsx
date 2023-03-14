import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

//Funzione che se presente 'Theme' nel localStorage
// returna il suo valore o di default return 'dark-mode'
const getThemeFromLocalStorage = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } else {
    return "dark-mode";
  }
};

const Mode = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  useEffect(() => {
    //Attacca classe e titolo all html
    document.documentElement.className = theme;

    //inserisco valore di theme nel localStorage ogni volta che  viene mutato il suo state
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <div className="flex gap-3 ">
        <HiOutlineSun
          className="cursor-pointer text-secondary hover:text-white"
          size={24}
          onClick={() => setTheme("light-mode")}
        ></HiOutlineSun>
        <HiOutlineMoon
          className="cursor-pointer text-secondary hover:text-white"
          size={24}
          onClick={() => setTheme("dark-mode")}
        ></HiOutlineMoon>
      </div>
    </div>
  );
};

export default Mode;
