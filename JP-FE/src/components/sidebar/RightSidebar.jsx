import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import {
  activities,
  contacts,
  notifications,
} from "../../mockData/dashboardData";
import { RightSidebarInfoGrid } from "./RightSidebarInfoGrid";

const RightSidebar = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <aside
      className="w-[280px] border-l pt-5 pr-4 pl-4 flex flex-col gap-3"
      style={{
        backgroundColor: darkMode ? "#121212" : "#ffffff",
        borderColor: darkMode ? "#2C2C2C" : "#1C1C1C1A",
        color: darkMode ? "#E5E7EB" : "#1C1C1C",
      }}
    >
      <RightSidebarInfoGrid
        data={notifications}
        title={"Notifications"}
        darkMode={darkMode}
      />
      <RightSidebarInfoGrid
        data={activities}
        title={"Activities"}
        connected={true}
        darkMode={darkMode}
      />
      <RightSidebarInfoGrid
        data={contacts}
        title={"Contacts"}
        darkMode={darkMode}
      />
    </aside>
  );
};

export default RightSidebar;
