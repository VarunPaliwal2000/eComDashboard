import React, { useState } from "react";
import {
  MdAccountCircle,
  MdApartment,
  MdFolderOpen,
  MdKeyboardArrowRight,
  MdMenuBook,
  MdOutlineShoppingCart,
  MdPersonOutline,
  MdRssFeed,
  MdSpaceDashboard,
} from "react-icons/md";

const ICONS = {
  Default: MdSpaceDashboard,
  eCommerce: MdOutlineShoppingCart,
  Projects: MdFolderOpen,
  "Online Courses": MdMenuBook,
  "User Profile": MdPersonOutline,
  Account: MdAccountCircle,
  Corporate: MdApartment,
  Blog: MdRssFeed,
};

const MENU_DATA = [
  {
    section: "Dashboards",
    headerClass: "pl-9",
    items: [
      {
        label: "Default",
        icon: "Default",
        active: true,
        submenu: [
          { label: "Overview" },
          { label: "Projects" },
          { label: "Campaigns" },
          { label: "Documents" },
          { label: "Followers" },
        ],
      },
      {
        label: "eCommerce",
        icon: "eCommerce",
        submenu: [
          { label: "Overview" },
          { label: "Projects" },
          { label: "Campaigns" },
          { label: "Documents" },
          { label: "Followers" },
        ],
      },
      {
        label: "Projects",
        icon: "Projects",
        submenu: [
          { label: "Overview" },
          { label: "Projects" },
          { label: "Campaigns" },
          { label: "Documents" },
          { label: "Followers" },
        ],
      },
      {
        label: "Online Courses",
        icon: "Online Courses",
        submenu: [
          { label: "Overview" },
          { label: "Projects" },
          { label: "Campaigns" },
          { label: "Documents" },
          { label: "Followers" },
        ],
      },
    ],
  },
  {
    section: "Pages",
    headerClass: "pl-9 mt-6",
    items: [
      {
        label: "User Profile",
        icon: "User Profile",
        submenu: [
          { label: "Overview" },
          { label: "Projects" },
          { label: "Campaigns" },
          { label: "Documents" },
          { label: "Followers" },
        ],
      },
      {
        label: "Account",
        icon: "Account",
        submenu: [
          { label: "Overview" },
          { label: "Projects" },
          { label: "Campaigns" },
          { label: "Documents" },
          { label: "Followers" },
        ],
      },
      {
        label: "Corporate",
        icon: "Corporate",
        submenu: [
          { label: "Overview" },
          { label: "Projects" },
          { label: "Campaigns" },
          { label: "Documents" },
          { label: "Followers" },
        ],
      },
      {
        label: "Blog",
        icon: "Blog",
        submenu: [
          { label: "Overview" },
          { label: "Projects" },
          { label: "Campaigns" },
          { label: "Documents" },
          { label: "Followers" },
        ],
      },
    ],
  },
];

function MenuRecursive({ items, open, toggle, level = 0 }) {
  return (
    <ul className={level === 0 ? "" : "mt-2 space-y-[8px]"}>
      {items.map((item) => {
        const Icon = item.icon ? ICONS[item.icon] : null;
        const isOpen = open.has(item.label);

        return (
          <li key={item.label} className={level === 0 ? "mb-2" : ""}>
            <div
              className={`flex items-center w-[180px] h-7 rounded-lg pt-1 pb-1 pr-2 pl-2 gap-1 ${
                item.active
                  ? " bg-[#1C1C1C0D] text-[#1C1C1C]"
                  : "text-gray-700 hover:bg-gray-50"
              }                 
              ${level === 0 ? "" : "pl-14"}
              relative cursor-pointer transition-all`}
              onClick={item.submenu ? () => toggle(item.label) : undefined}
            >
              {item.submenu && (
                <MdKeyboardArrowRight
                  size={20}
                  className={`ml-1 transition-transform duration-200 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              )}
              {Icon && <Icon size={20} className="flex-shrink-0 mr-3" />}
              <span className="font-normal text-[14px] leading-[20px] tracking-normal text-[#1C1C1C]">
                {item.label}
              </span>

              {item.active && (
                <span className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-full bg-[#1C1C1C]" />
              )}
            </div>
            {item.submenu && isOpen && (
              <MenuRecursive
                items={item.submenu}
                open={open}
                toggle={toggle}
                level={level + 1}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(new Set(["User Profile"]));
  const [tabNavActive, setTabNavActive] = useState(0);
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
      {MENU_DATA.map(({ section, headerClass, items }) => (
        <React.Fragment
          key={section}
          className={`flex flex-col w-[180px] min-h-[168px] pb-3 gap-1 ${headerClass}`}
        >
          <div className="flex flex-col w-[180px] h-7 rounded-lg pt-1 pb-1 pr-3 pl-3">
            <span className="font-normal text-[14px] leading-[20px] tracking-normal text-[rgba(28,28,28,0.4)]">
              {section}
            </span>
          </div>
          <MenuRecursive items={items} open={open} toggle={handleToggle} />
        </React.Fragment>
      ))}
    </aside>
  );
}
