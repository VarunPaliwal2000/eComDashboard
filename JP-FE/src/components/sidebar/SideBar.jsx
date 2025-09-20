import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext"; // adjust import path
import getModuleName from "../../utils/getModuleName";
import MenuRecursive from "./MenuRecursive";

export default function Sidebar({ darkMode, sideBarMenu }) {
  const location = useLocation();
  const moduleName = getModuleName(location?.pathname);
  const [open, setOpen] = useState(new Set([moduleName || "Default"]));
  const [tabNavActive, setTabNavActive] = useState(1);
  const tabNavs = ["Favorites", "Recently"];
  const handleToggle = (label) => {
    setOpen((prev) => {
      const s = new Set(prev);
      if (s.has(label)) s.delete(label);
      else s.add(label);
      return s;
    });
  };
  if (!sideBarMenu) {
    return <div>No data found.</div>;
  }
  const menuData = sideBarMenu?.MENU_DATA;

  return (
    <aside
      style={{
        backgroundColor: darkMode ? "#121212" : "#ffffff",
        borderRight: darkMode ? "1px solid #2C2C2C" : "1px solid #1C1C1C1A",
        color: darkMode ? "#E5E7EB" : "#1C1C1C",
      }}
      className="w-[212px] pt-5 pr-4 pl-4 flex flex-col gap-2"
    >
      {/* Header */}
      <div className="flex items-center h-8 w-[180px] rounded-lg px-1 gap-2">
        <div
          style={{ backgroundColor: darkMode ? "#4B5563" : "#E5E7EB" }}
          className="rounded-full w-8 h-8 overflow-hidden"
        />
        <span
          className="font-semibold tracking-tight"
          style={{ color: darkMode ? "#E5E7EB" : "#1C1C1C" }}
        >
          ByeWind
        </span>
      </div>

      {/* Tabs */}
      <div className="flex flex-col w-[180px] min-h-[104px] pb-3 gap-1">
        <div className="flex items-center w-[180px] h-7 rounded-lg gap-2">
          {tabNavs?.map((item, index) => (
            <span
              key={index}
              onClick={() => setTabNavActive(index)}
              style={{
                color:
                  tabNavActive === index
                    ? darkMode
                      ? "rgba(209, 213, 219, 0.87)"
                      : "rgba(28, 28, 28, 0.4)"
                    : darkMode
                    ? "#6B7280"
                    : "rgba(28, 28, 28, 0.2)",
              }}
              className="cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal text-center"
            >
              {item}
            </span>
          ))}
        </div>

        <ul className="flex items-center w-[180px] h-7 rounded-lg pt-1 pb-1 pl-2 pr-2 gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: darkMode ? "#6B7280" : "#D1D5DB" }}
          />
          <span
            className="font-normal text-[14px] leading-[20px] tracking-normal"
            style={{ color: darkMode ? "#D1D5DB" : "#1C1C1C" }}
          >
            Overview
          </span>
        </ul>
        <ul className="flex items-center w-[180px] h-7 rounded-lg pt-1 pb-1 pl-2 pr-2 gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: darkMode ? "#6B7280" : "#D1D5DB" }}
          />
          <span
            className="font-normal text-[14px] leading-[20px] tracking-normal"
            style={{ color: darkMode ? "#D1D5DB" : "#1C1C1C" }}
          >
            Projects
          </span>
        </ul>
      </div>

      {menuData[tabNavs[tabNavActive]]?.map(
        ({ section, headerClass, items }) => (
          <React.Fragment
            key={section}
            className={`${headerClass} flex flex-col w-[180px] min-h-[168px] pb-3 gap-1`}
          >
            {items.length > 0 ? (
              <>
                <div className="flex flex-col w-[180px] h-7 rounded-lg pt-1 pb-1 pr-3 pl-3">
                  <span
                    className="font-normal text-[14px] leading-[20px] tracking-normal"
                    style={{
                      color: darkMode
                        ? "rgba(209,213,219,0.4)"
                        : "rgba(28,28,28,0.4)",
                    }}
                  >
                    {section}
                  </span>
                </div>
                <MenuRecursive
                  items={items}
                  open={open}
                  toggle={handleToggle}
                  parentPath={section}
                />
              </>
            ) : (
              <div>Nope</div>
            )}
          </React.Fragment>
        )
      )}
    </aside>
  );
}
