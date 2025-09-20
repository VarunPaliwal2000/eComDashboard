import React, { useContext } from "react";
import { Cell, Pie, PieChart } from "recharts";
import ThemeContext from "../../context/ThemeContext";
import { totalSalesPieChartData } from "../../mockData/dashboardData";

const total = totalSalesPieChartData.reduce((acc, item) => acc + item.value, 0);
const percentage = ((totalSalesPieChartData[0].value / total) * 100).toFixed(1);

export default function TotalSalesPiechart() {
  const { darkMode } = useContext(ThemeContext);

  const bgColor = darkMode ? "#222" : "#fff";
  const textColor = darkMode ? "#E5E7EB" : "#222";
  const labelTextColor = darkMode ? "#D1D5DB" : "#222";

  return (
    <div
      className="flex flex-col items-center p-6"
      style={{ color: textColor }}
    >
      <div
        className="font-inter font-semibold text-[16px] leading-[20px] mb-2"
        style={{ color: textColor }}
      >
        Total Sales
      </div>
      <div className="flex justify-center items-center mb-4 relative">
        <PieChart width={120} height={120}>
          <Pie
            data={totalSalesPieChartData}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={55}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            paddingAngle={2}
            cornerRadius={8}
          >
            {totalSalesPieChartData.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
        {/* Center percentage label */}
        <div
          className="absolute top-[43px] left-[41px] w-14 h-8 rounded-lg flex items-center justify-center text-xs font-semibold"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          {percentage}%
        </div>
      </div>
      <div className="w-full m-2">
        {totalSalesPieChartData.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between mb-2 last:mb-0"
            style={{ color: labelTextColor }}
          >
            <span className="flex items-center">
              <span
                className="inline-block w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="font-inter text-[13px] font-normal">
                {item.name}
              </span>
            </span>
            <span className="font-inter text-[13px] font-normal">
              ${item.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
