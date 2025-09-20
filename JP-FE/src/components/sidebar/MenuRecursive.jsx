import React, { useContext } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ICONS } from "../../assets/icon";
import ThemeContext from "../../context/ThemeContext"; // adjust path as needed

export default function MenuRecursive({
  items,
  open,
  toggle,
  level = 0,
  parentPath = "",
}) {
  const { darkMode } = useContext(ThemeContext);
  const searchparams = window.location.search;

  const cn = (...classes) => classes.filter(Boolean).join(" ");

  return (
    <ul className={level === 0 ? "" : "mt-2 space-y-[8px]"}>
      {items.map((item) => {
        const Icon = item.icon ? ICONS[item.icon] : null;
        const isOpen = open.has(item.label);
        const itemPath = `${parentPath.toLowerCase()}/${item.label
          .toLowerCase()
          .replace(/\s+/g, "-")}`;

        return (
          <li key={item.label} className={level === 0 ? "mb-2" : ""}>
            <NavLink
              to={itemPath + searchparams || "#"}
              className={cn(
                "flex items-center w-[180px] h-7 rounded-lg pt-1 pb-1 pr-2 pl-2 gap-1 relative cursor-pointer transition-all",
                isOpen
                  ? darkMode
                    ? "bg-[#F7F9FB1A] text-gray-200"
                    : "bg-[#1C1C1C0D] text-[#1C1C1C]"
                  : darkMode
                  ? "text-gray-300 hover:bg-gray-700"
                  : "text-gray-700 hover:bg-gray-50",
                level === 0 ? "" : "pl-14"
              )}
              onClick={
                item.submenu
                  ? (e) => {
                      e.preventDefault();
                      toggle(item.label);
                    }
                  : undefined
              }
            >
              {item.submenu && (
                <MdKeyboardArrowRight
                  size={20}
                  className={cn(
                    "ml-1 transition-transform duration-200",
                    isOpen ? "rotate-90" : ""
                  )}
                />
              )}
              {Icon && <Icon size={20} className="flex-shrink-0 mr-1" />}
              <span className="font-normal text-[14px] leading-[20px] tracking-normal">
                {item.label}
              </span>

              {isOpen && (
                <span
                  className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-full"
                  style={{ backgroundColor: darkMode ? "#E5E7EB" : "#1C1C1C" }}
                />
              )}
            </NavLink>
            {item.submenu && isOpen && (
              <MenuRecursive
                items={item.submenu}
                open={open}
                toggle={toggle}
                level={level + 1}
                parentPath={itemPath}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
