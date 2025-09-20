import React from "react";
import ProjectionVSActualsGraph from "../components/graphs/ProjectionVSActualsGraph";
import RevenueChart from "../components/graphs/RevenueChart";
import TotalSalesPiechart from "../components/graphs/TotalSalesPieChart";
import Loader from "../components/Loader";
import MetricsTiles from "../components/MetricTiles";
import RevenueByLocation from "../components/RevenueByLocation";
import TopSellingProductsTable from "../components/tables/TopSellingProdtable";
import { useDashboardData } from "../hooks/useDashboardData";

const Dashboard = ({ darkMode }) => {
  const { data: apiResponse, loading } = useDashboardData("dashboard");
  if (loading) {
    return Loader;
  }

  if (!apiResponse) {
    return <div>No data found.</div>;
  }
  const {
    LOCATION_DATA,
    metrics,
    products,
    projectionVsActualData,
    revenueChartData,
    totalSalesPieChartData,
  } = apiResponse; // where apiResponse is the object received from your API

  console.log("useDashboardData", apiResponse);
  return (
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
            <MetricsTiles darkMode={darkMode} metrics={metrics} />
          </div>
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: darkMode ? "#FFFFFF0D" : "#F7F9FB" }}
          >
            <ProjectionVSActualsGraph
              darkMode={darkMode}
              projectionVsActualData={projectionVsActualData}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-7 h-[318px]">
          <div
            className="rounded-2xl col-span-2 p-6"
            style={{ backgroundColor: darkMode ? "#FFFFFF0D" : "#F7F9FB" }}
          >
            <RevenueChart
              darkMode={darkMode}
              revenueChartData={revenueChartData}
            />
          </div>
          <div>
            <RevenueByLocation darkMode={darkMode} data={LOCATION_DATA} />
          </div>
          <div
            className="rounded-2xl h-[336px] col-span-2 p-6"
            style={{ backgroundColor: darkMode ? "#FFFFFF0D" : "#F7F9FB" }}
          >
            <TopSellingProductsTable darkMode={darkMode} products={products} />
          </div>
          <div
            className="rounded-2xl h-[336px]"
            style={{ backgroundColor: darkMode ? "#FFFFFF0D" : "#F7F9FB" }}
          >
            <TotalSalesPiechart
              darkMode={darkMode}
              totalSalesPieChartData={totalSalesPieChartData}
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
