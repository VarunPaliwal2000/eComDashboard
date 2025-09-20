import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import { MENU_DATA } from "../../mockData/sidebardata";
import getModuleName from "../../utils/getModuleName";
import MenuRecursive from "./MenuRecursive";

export default function Sidebar() {
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
  return (
    <aside className="w-[212px] min-h-screen border-r border-[#1C1C1C1A] pt-5 pr-4 pb-5 pl-4 flex flex-col gap-2">
      {/* Header */}
      <div className="flex items-center h-8 w-[180px] rounded-lg px-1 gap-2">
        <div className="rounded-full w-8 h-8 bg-gray-200 overflow-hidden" />
        <span className="font-semibold tracking-tight">ByeWind</span>
      </div>
      {/* Tabs */}
      <div className="flex flex-col w-[180px] min-h-[104px] pb-3 gap-1">
        <div className="flex items-center w-[180px] h-7 rounded-lg gap-2">
          {tabNavs?.map((item, index) => (
            <span
              key={index}
              onClick={() => setTabNavActive(index)}
              className={`cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal text-center ${
                tabNavActive === index ? "text-[#1C1C1C66]" : "text-[#1C1C6633]"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        <ul className="flex items-center w-[180px] h-7 rounded-lg pt-1 pb-1 pl-2 pr-2 gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-gray-300" />
          <span className="font-normal text-[14px] leading-[20px] tracking-normal text-[#1C1C1C]">
            {"Overview"}
          </span>
        </ul>
        <ul className="flex items-center w-[180px] h-7 rounded-lg pt-1 pb-1 pl-2 pr-2 gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-gray-300" />
          <span className="font-normal text-[14px] leading-[20px] tracking-normal text-[#1C1C1C]">
            {"Projects"}
          </span>
        </ul>
      </div>
      {MENU_DATA[tabNavs[tabNavActive]]?.map(
        ({ section, headerClass, items }) => (
          <React.Fragment
            key={section}
            className={`flex flex-col w-[180px] min-h-[168px] pb-3 gap-1 ${headerClass}`}
          >
            {items.length > 0 ? (
              <>
                <div className="flex flex-col w-[180px] h-7 rounded-lg pt-1 pb-1 pr-3 pl-3">
                  <span className="font-normal text-[14px] leading-[20px] tracking-normal text-[rgba(28,28,28,0.4)]">
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
