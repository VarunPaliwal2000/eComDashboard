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
  { name: "Direct", value: 300.56, color: "#222222", darkColor: "#C6C7F8" },
  { name: "Affiliate", value: 135.18, color: "#7de39e" },
  { name: "Sponsored", value: 154.02, color: "#93A8FF" },
  { name: "E-mail", value: 48.96, color: "#90b4e8" },
];





export const metrics = [
  {
    title: "Customers",
    value: "3,781",
    change: "+11.01%",
    positive: true,
    bgColor: "bg-[#E3F5FF]",
    textColor: "#111827",
  },
  {
    title: "Orders",
    value: "1,219",
    change: "-0.03%",
    positive: false,
    bgColor: "bg-[#E3F5FF]",
    darkbgColor: "bg-[#FFFFFF0D]",
    textColor: "#111827",
    darktextcolor: "#F3F4F6",
  },
  {
    title: "Revenue",
    value: "$695",
    change: "+15.03%",
    positive: true,
    bgColor: "bg-[#F7F9FB]",
    darkbgColor: "bg-[#FFFFFF0D]",
    textColor: "#111827",
    darktextcolor: "#F3F4F6",
  },
  {
    title: "Growth",
    value: "30.1%",
    change: "+6.08%",
    positive: true,
    textColor: "#111827",
    bgColor: "bg-[#E5ECF6]",
  },
];

export const LOCATION_DATA = [
  { name: "New York", revenue: 72, color: "bg-blue-400" },
  { name: "San Francisco", revenue: 39, color: "bg-blue-400" },
  { name: "Sydney", revenue: 25, color: "bg-blue-400" },
  { name: "Singapore", revenue: 61, color: "bg-blue-400" },
];

export const products = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.5,
    quantity: 37,
    amount: 4754.5,
  },
  {
    name: "Half Sleeve  Shirt",
    price: 39.99,
    quantity: 64,
    amount: 2559.36,
  },
  {
    name: "Lightweight Jacket",
    price: 20.0,
    quantity: 184,
    amount: 3680.0,
  },
  {
    name: "Marco Shoes",
    price: 79.49,
    quantity: 64,
    amount: 1965.81,
  },
];
