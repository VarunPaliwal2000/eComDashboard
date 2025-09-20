import React from "react";
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
import { projectionVsActualData } from "../../mockData/dashboardData";

const ProjectionVSActualsGraph = () => {
  return (
    <>
      <div className="font-inter font-semibold text-[14px] leading-[20px]">
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
          <CartesianGrid horizontal={true} vertical={false} stroke="#eceef0" />
          <XAxis dataKey="name" />
          <YAxis axisLine={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#A8C5DA" barSize={20} />
          <Bar dataKey="uv" stackId="a" fill="#d0dfeb" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default ProjectionVSActualsGraph;
