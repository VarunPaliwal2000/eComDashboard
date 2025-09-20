import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ThemeContext from "../../context/ThemeContext";
import { projectionVsActualData } from "../../mockData/dashboardData";

const ProjectionVSActualsGraph = () => {
  const { darkMode } = useContext(ThemeContext);

  const gridStroke = darkMode ? "#2C2C2C" : "#eceef0";
  const axisStroke = darkMode ? "#888888" : "#666666";
  const tooltipStyle = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#eee" : "#000",
  };
  const legendTextColor = darkMode ? "#ddd" : "#000";

  return (
    <>
      <div
        className="font-inter font-semibold text-[14px] leading-[20px]"
        style={{ color: darkMode ? "#ddd" : "#1C1C1C" }}
      >
        Projections vs Actuals
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={projectionVsActualData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            horizontal={true}
            vertical={false}
            stroke={gridStroke}
          />
          <XAxis dataKey="name" stroke={axisStroke} />
          <YAxis axisLine={false} stroke={axisStroke} />
          <Tooltip
            contentStyle={tooltipStyle}
            itemStyle={{ color: tooltipStyle.color }}
            cursor={{ fill: darkMode ? "#444" : "#ccc" }}
          />
          <Legend wrapperStyle={{ color: legendTextColor }} />
          <Bar dataKey="pv" stackId="a" fill={"#A8C5DA"} barSize={20} />
          <Bar dataKey="uv" stackId="a" fill={"#d0dfeb"} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default ProjectionVSActualsGraph;
