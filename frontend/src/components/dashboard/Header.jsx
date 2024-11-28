import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MySvgIcon from "../../assets/name-logo-favicon.svg";
import MySvgIconDark from "../../assets/name-logo-white.svg";
import { useTheme } from "@/pages/DarkMode/ThemeProvider";
import { ModeToggle } from "@/pages/DarkMode/ModeToggle";

function Header() {
  const theme = useTheme();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    console.log(path);
  })

  return (
    <div className="flex justify-between items-center p-4 bg-secondary shadow-md">
      <img
        className="w-auto h-6 xs:h-10 sm:h-10"
        src={theme === "dark" ? MySvgIconDark : MySvgIcon}
        alt="logo"
      />

      <ul className="flex gap-6">
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path === "/home/dashboard" ? "text-primary font-bold" : ""
          }`}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path === "/home/questions" ? "text-primary font-bold" : ""
          }`}
        >
          Questions
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path === "/home/upgrade" ? "text-primary font-bold" : ""
          }`}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path === "/home/hiw" ? "text-primary font-bold" : ""
          }`}
        >
          How it works?
        </li>
      </ul>

      <ModeToggle />
    </div>
  );
}

export default Header;
