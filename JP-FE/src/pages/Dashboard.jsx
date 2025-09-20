import ProjectionVSActualsGraph from "../components/graphs/ProjectionVSActualsGraph";
import RevenueChart from "../components/graphs/RevenueChart";
import TotalSalesPiechart from "../components/graphs/TotalSalesPieChart";
import MetricsTiles from "../components/MetricTiles";
import RevenueByLocation from "../components/RevenueByLocation";
import TopSellingProductsTable from "../components/tables/TopSellingProdtable";

const Dashboard = () => (
  <div className="p-[28px]">
    <div className="font-semibold text-[14px] leading-[20px] pb-4">
      eCommerce
    </div>
    <div className="grid gap-7">
      <div className="grid grid-cols-2 gap-7">
        <div className="h-[252px]">
          <MetricsTiles />
        </div>
        <div className="bg-[#F7F9FB] rounded-2xl h-[252px] p-6">
          <ProjectionVSActualsGraph />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-7 h-[318px]">
        <div className="bg-[#F7F9FB] rounded-2xl  col-span-2 p-6">
          <RevenueChart />
        </div>
        <div>
          <RevenueByLocation />
        </div>
        <div className="bg-[#F7F9FB] rounded-2xl h-[336px] col-span-2 p-6">
          <TopSellingProductsTable />
        </div>
        <div className="bg-[#F7F9FB] rounded-2xl h-[336px]">
          <TotalSalesPiechart />
        </div>
        <div></div>
      </div>
    </div>
  </div>
);

export default Dashboard;
