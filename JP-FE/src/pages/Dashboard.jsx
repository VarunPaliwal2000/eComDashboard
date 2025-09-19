import ProjectionVSActualsGraph from "../components/graphs/ProjectionVSActualsGraph";
import RevenueChart from "../components/graphs/RevenueChart";
import MetricsTiles from "../components/MetricTiles";

const Dashboard = () => (
  <div className="p-[28px]">
    <div className="font-semibold text-[14px] leading-[20px] pb-4">
      eCommerce
    </div>
    <div className="grid gap-7">
      {/* 1st Row: Four stats cards */}
      <div className="grid grid-cols-2 gap-7">
        <MetricsTiles />
        <div className="bg-[#F7F9FB] rounded-2xl">
          <ProjectionVSActualsGraph />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-7">
        <div className="bg-[#F7F9FB] rounded-2xl h-[300px] col-span-2 p-6">
          <RevenueChart />
        </div>
        <div></div>
      </div>
      {/* <div className="">Projections vs Actuals</div> */}
      {/* 2nd Row: Projections + Revenue charts */}
      {/* <div className=""> */}
      {/* </div> */}
      <div className="">Revenue by Location</div>
    </div>
  </div>
);

export default Dashboard;
