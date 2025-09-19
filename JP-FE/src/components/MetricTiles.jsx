import MetricSingleTile from "./MetricSingleTile";

// MetricsGrid.js
export default function MetricsTiles() {
  const metrics = [
    {
      title: "Customers",
      value: "3,781",
      change: "+11.01%",
      positive: true,
      bgColor: "bg-[#E3F5FF]",
    },
    {
      title: "Orders",
      value: "1,219",
      change: "-0.03%",
      positive: false,
      bgColor: "bg-[#F7F9FB]",
    },
    {
      title: "Revenue",
      value: "$695",
      change: "+15.03%",
      positive: true,
      bgColor: "bg-[#F7F9FB]",
    },
    {
      title: "Growth",
      value: "30.1%",
      change: "+6.08%",
      positive: true,
      bgColor: "bg-[#E5ECF6]",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-[28px] w-full max-w-2xl mx-auto">
      {metrics.map((m, idx) => (
        <MetricSingleTile key={idx} {...m} />
      ))}
    </div>
  );
}
