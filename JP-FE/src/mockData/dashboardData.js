import { MdBugReport, MdPerson, MdWifi } from "react-icons/md";

export const data = {
  customers: { count: 3781, growthPercent: 11.01 },
  orders: { count: 1219, growthPercent: -0.03 },
  revenue: {
    amount: 695,
    growthPercent: 15.03,
    currentWeek: 58211,
    previousWeek: 68768,
  },
  growth: { percent: 30.1, growthPercent: 6.08 },
  projections: [
    { month: "Jan", actual: 18, projection: 22 },
    { month: "Feb", actual: 21, projection: 25 },
    { month: "Mar", actual: 19, projection: 22 },
    { month: "Apr", actual: 23, projection: 27 },
    { month: "May", actual: 16, projection: 18 },
    { month: "Jun", actual: 21, projection: 25 },
  ],
  revenueByLocation: [
    { location: "New York", revenue: 72000 },
    { location: "San Francisco", revenue: 39000 },
    { location: "Sydney", revenue: 25000 },
  ],
};

export const projectionVsActualData = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

export const revenueChartData = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const totalSalesPieChartData = [
  { name: "Direct", value: 300.56, color: "#222222" },
  { name: "Affiliate", value: 135.18, color: "#7de39e" },
  { name: "Sponsored", value: 154.02, color: "#93A8FF" },
  { name: "E-mail", value: 48.96, color: "#90b4e8" },
];

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

export const metrics = [
  {
    title: "Customers",
    value: "3,781",
    change: "+11.01%",
    positive: true,
    bgColor: "bg-[#E3F5FF]",
  },
  {
    title: "Orders",
    value: "1,219",
    change: "-0.03%",
    positive: false,
    bgColor: "bg-[#F7F9FB]",
  },
  {
    title: "Revenue",
    value: "$695",
    change: "+15.03%",
    positive: true,
    bgColor: "bg-[#F7F9FB]",
  },
  {
    title: "Growth",
    value: "30.1%",
    change: "+6.08%",
    positive: true,
    bgColor: "bg-[#E5ECF6]",
  },
];

export const LOCATION_DATA = [
  { name: "New York", revenue: 72, color: "bg-blue-400" },
  { name: "San Francisco", revenue: 39, color: "bg-blue-400" },
  { name: "Sydney", revenue: 25, color: "bg-blue-400" },
  { name: "Singapore", revenue: 61, color: "bg-blue-400" },
];
