import React from "react";
import { CiSearch } from "react-icons/ci";
import {
  MdHistory,
  MdMenuBook,
  MdOutlineNotifications,
  MdStarBorder,
} from "react-icons/md";
import ThemeToggle from "../ThemeToggle";
import { HeaderInput } from "./HeaderInput";
import { HeaderPathInfo } from "./HeaderPathInfo";

const Header = () => {
  return (
    <header className="flex justify-between p-4 border-b border-[#1C1C1C1A] ">
      <div
        id="header-right"
        className="flex gap-3 justify-center items-center"
      >
        <MdMenuBook size={20} />
        <MdStarBorder size={20} />
        <HeaderPathInfo />
      </div>
      <div id="header-left" className="flex gap-3 justify-center items-center">
        <HeaderInput />
        <ThemeToggle />
        <MdHistory size={20} />
        <MdOutlineNotifications size={20} />
        <MdMenuBook size={20} />
      </div>
    </header>
  );
};

export default Header;
