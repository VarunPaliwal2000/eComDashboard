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
import { revenueChartData } from "../../mockData/dashboardData";

const RevenueChart = () => {
  return (
    <>
      <div className="ml-8 flex items-center font-inter justify-start gap-8 font-semibold text-[14px] leading-[20px] mb-3">
        Revenue
        {/* Current Week */}
        <div>
          <span className="w-2 h-2 rounded-full bg-black inline-block mr-2"></span>
          <span className="font-inter font-normal text-[12px] leading-[18px] text-black">
            Current Week&nbsp;
            <span className="font-semibold text-[12px] leading-[18px] text-black">
              $58,211
            </span>
          </span>
        </div>
        <div>
          {/* Previous Week */}
          <span className="w-2 h-2 rounded-full bg-[#D6E6F5] inline-block mr-2"></span>
          <span className="font-inter font-normal text-[12px] leading-[18px] text-black">
            Previous Week&nbsp;
            <span className="font-semibold text-[12px] leading-[18px] text-black">
              $68,768
            </span>
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={revenueChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal={true} vertical={false} stroke="#eceef0" />
          <XAxis dataKey="name" />
          <YAxis axisLine={false} />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#A8C5DA" fill="#A8C5DA" />
          <Line type="monotone" dataKey="uv" stroke="#1C1C1C" fill="#1C1C1C" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default RevenueChart;
