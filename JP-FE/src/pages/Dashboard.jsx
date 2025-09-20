import React from "react";
import ProjectionVSActualsGraph from "../components/graphs/ProjectionVSActualsGraph";
import RevenueChart from "../components/graphs/RevenueChart";
import TotalSalesPiechart from "../components/graphs/TotalSalesPieChart";
import MetricsTiles from "../components/MetricTiles";
import RevenueByLocation from "../components/RevenueByLocation";
import TopSellingProductsTable from "../components/tables/TopSellingProdtable";

const Dashboard = ({ darkMode }) => (
  <div
    className="p-[28px]"
    style={{
      backgroundColor: darkMode ? "#121212" : "#ffffff",
      color: darkMode ? "#E5E7EB" : "#1C1C1C",
    }}
  >
    <div className="font-semibold text-[14px] leading-[20px] pb-4">
      eCommerce
    </div>
    <div className="grid gap-7 h-full">
      <div className="grid grid-cols-2 gap-7 h-[252px]">
        <div className="">
          <MetricsTiles darkMode={darkMode} />
        </div>
        <div
          className="rounded-2xl p-6"
          style={{ backgroundColor: darkMode ? "#FFFFFF0D" : "#F7F9FB" }}
        >
          <ProjectionVSActualsGraph darkMode={darkMode} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-7 h-[318px]">
        <div
          className="rounded-2xl col-span-2 p-6"
          style={{ backgroundColor: darkMode ? "#FFFFFF0D" : "#F7F9FB" }}
        >
          <RevenueChart darkMode={darkMode} />
        </div>
        <div>
          <RevenueByLocation darkMode={darkMode} />
        </div>
        <div
          className="rounded-2xl h-[336px] col-span-2 p-6"
          style={{ backgroundColor: darkMode ? "#FFFFFF0D" : "#F7F9FB" }}
        >
          <TopSellingProductsTable darkMode={darkMode} />
        </div>
        <div
          className="rounded-2xl h-[336px]"
          style={{ backgroundColor: darkMode ? "#FFFFFF0D" : "#F7F9FB" }}
        >
          <TotalSalesPiechart darkMode={darkMode} />
        </div>
        <div></div>
      </div>
    </div>
  </div>
);

export default Dashboard;
