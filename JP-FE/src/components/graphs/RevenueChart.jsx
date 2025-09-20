import { useContext } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ThemeContext from "../../context/ThemeContext";

const RevenueChart = ({ revenueChartData }) => {
  const { darkMode } = useContext(ThemeContext);

  const axisColor = darkMode ? "#9CA3AF" : "#6B7280";
  const textColor = darkMode ? "#E5E7EB" : "#1F2937";
  const gridStroke = darkMode ? "#374151" : "#E5E7EB";

  return (
    <>
      <div
        className="ml-8 flex items-center font-inter justify-start gap-8 font-semibold text-[14px] leading-[20px] mb-3"
        style={{ color: textColor }}
      >
        Revenue
        <div>
          <span
            className="w-2 h-2 rounded-full inline-block mr-2"
            style={{ backgroundColor: darkMode ? "#F9FAFB" : "#000" }}
          ></span>
          <span className="font-inter font-normal text-[12px] leading-[18px]">
            Current Week&nbsp;
            <span className="font-semibold text-[12px] leading-[18px]">
              $58,211
            </span>
          </span>
        </div>
        <div>
          <span
            className="w-2 h-2 rounded-full inline-block mr-2"
            style={{ backgroundColor: "#D6E6F5" }}
          ></span>
          <span className="font-inter font-normal text-[12px] leading-[18px]">
            Previous Week&nbsp;
            <span className="font-semibold text-[12px] leading-[18px]">
              $68,768
            </span>
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={revenueChartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid
            horizontal={true}
            vertical={false}
            stroke={gridStroke}
          />
          <XAxis
            dataKey="name"
            stroke={axisColor}
            tick={{ fill: textColor, fontSize: 12, fontFamily: "Inter" }}
          />
          <YAxis
            axisLine={false}
            stroke={axisColor}
            tick={{ fill: textColor, fontSize: 12, fontFamily: "Inter" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? "#1F2937" : "#fff",
              borderColor: darkMode ? "#374151" : "#ccc",
              color: textColor,
              fontFamily: "Inter",
            }}
            itemStyle={{ color: textColor }}
            labelStyle={{ color: textColor }}
          />
          <Line type="monotone" dataKey="pv" stroke="#A8C5DA" fill="#A8C5DA" />
          <Line type="monotone" dataKey="uv" stroke="#C6C7F8" fill="#C6C7F8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default RevenueChart;
