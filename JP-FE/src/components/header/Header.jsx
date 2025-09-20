import { useContext } from "react";
import {
  MdHistory,
  MdMenuBook,
  MdOutlineNotifications,
  MdStarBorder,
} from "react-icons/md";
import ThemeContext from "../../context/ThemeContext";
import ThemeToggle from "../ThemeToggle";
import { HeaderInput } from "./HeaderInput";
import { HeaderPathInfo } from "./HeaderPathInfo";
const Header = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <header
      className="flex justify-between p-4 border-b"
      style={{
        borderColor: darkMode ? "#2C2C2C" : "#1C1C1C1A",
        backgroundColor: darkMode ? "#121212" : "transparent",
        color: darkMode ? "#E5E7EB" : "#1C1C1C",
      }}
    >
      <div id="header-right" className="flex gap-3 justify-center items-center">
        <MdMenuBook size={20} color={darkMode ? "#E5E7EB" : "#000000"} />
        <MdStarBorder size={20} color={darkMode ? "#E5E7EB" : "#000000"} />
        <HeaderPathInfo darkMode={darkMode} />
      </div>
      <div id="header-left" className="flex gap-3 justify-center items-center">
        <HeaderInput darkMode={darkMode} />
        <ThemeToggle darkMode={darkMode} />
        <MdHistory size={20} color={darkMode ? "#E5E7EB" : "#000000"} />
        <MdOutlineNotifications
          size={20}
          color={darkMode ? "#E5E7EB" : "#000000"}
        />
        <MdMenuBook size={20} color={darkMode ? "#E5E7EB" : "#000000"} />
      </div>
    </header>
  );
};

export default Header;
