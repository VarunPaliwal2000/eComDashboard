import { MdBugReport, MdPerson, MdWifi } from "react-icons/md";
import {
  activities,
  contacts,
  notifications,
} from "../../mockData/dashboardData";
import { RightSidebarInfoGrid } from "./RightSidebarInfoGrid";

const RightSidebar = () => {
  // mockData.js

  return (
    <aside className="w-[280px] border-l border-[#1C1C1C1A] pt-5 pr-4 pl-4 flex flex-col gap-3">
      <RightSidebarInfoGrid data={notifications} title={"Notifications"} />
      <RightSidebarInfoGrid
        data={activities}
        title={"Activities"}
        connected={true}
      />
      <RightSidebarInfoGrid data={contacts} title={"Contacts"} />
    </aside>
  );
};

export default RightSidebar;
