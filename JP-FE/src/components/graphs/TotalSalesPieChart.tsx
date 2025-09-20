import { Cell, Pie, PieChart } from "recharts";
import { totalSalesPieChartData } from "../../mockData/dashboardData";

const total = totalSalesPieChartData.reduce((acc, item) => acc + item.value, 0);
// Example: Assuming the main segment is "Direct"
const percentage = ((totalSalesPieChartData[0].value / total) * 100).toFixed(1);

export default function TotalSalesPiechart() {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="font-inter font-semibold text-[16px] leading-[20px] mb-2">
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
        <div className="absolute top-[43px] left-[41px] w-14 h-8 rounded-lg bg-[#222] text-white flex items-center justify-center text-xs font-semibold">
          {percentage}%
        </div>
      </div>
      <div className="w-full m-2">
        {totalSalesPieChartData.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between mb-2 last:mb-0"
          >
            <span className="flex items-center">
              <span
                className="inline-block w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="font-inter text-[13px] font-normal text-gray-900">
                {item.name}
              </span>
            </span>
            <span className="font-inter text-[13px] font-normal text-gray-900">
              ${item.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
