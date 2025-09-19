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

const data = [
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

const ProjectionVSActualsGraph = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
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
  );
};

export default ProjectionVSActualsGraph;
