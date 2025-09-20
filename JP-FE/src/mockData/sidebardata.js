import { MdBugReport, MdPerson, MdWifi } from "react-icons/md";

export const MENU_DATA = {
  Recently: [
    {
      section: "Dashboards",
      headerClass: "pl-9",
      items: [
        {
          label: "Default",
          icon: "Default",
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
          label: "Project",
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
          label: "Order List",
          icon: "orderlist",
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
  ],
  Favorites: [],
};

// data for rightsidebar
export const notifications = [
  {
    id: 1,
    icon: MdBugReport,
    message: "You have a bug that needs...",
    time: "Just now",
    section: "Notification",
  },
  {
    id: 2,
    icon: MdPerson,
    message: "New user registered",
    time: "59 minutes ago",
    section: "Notification",
  },
  {
    id: 3,
    icon: MdBugReport,
    message: "You have a bug that needs...",
    time: "12 hours ago",
    section: "Notification",
  },
  {
    id: 4,
    icon: MdWifi,
    message: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
    section: "Notification",
  },
];
export const activities = [
  {
    id: 1,
    section: "Activities",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    message: "You have a bug that needs...",
    time: "Just now",
  },
  {
    id: 2,
    section: "Activities",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    message: "Released a new version",
    time: "59 minutes ago",
  },
  {
    id: 3,
    section: "Activities",
    avatar: "https://randomuser.me/api/portraits/women/13.jpg",
    message: "Submitted a bug",
    time: "12 hours ago",
  },
  {
    id: 4,
    section: "Activities",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    message: "Modified A data in Page X",
    time: "Today, 11:59 AM",
  },
  {
    id: 5,
    section: "Activities",
    avatar: "https://randomuser.me/api/portraits/men/16.jpg",
    message: "Deleted a page in Project X",
    time: "Feb 2, 2023",
  },
];

export const contacts = [
  {
    id: 1,
    name: "Natali Craig",
    section: "Contacts",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Drew Cano",
    section: "Contacts",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 3,
    name: "Orlando Diggs",
    section: "Contacts",
    avatar: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    id: 4,
    name: "Andi Lane",
    section: "Contacts",
    avatar: "https://randomuser.me/api/portraits/women/83.jpg",
  },
  {
    id: 5,
    name: "Kate Morrison",
    section: "Contacts",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 6,
    name: "Koray Okumus",
    section: "Contacts",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];
