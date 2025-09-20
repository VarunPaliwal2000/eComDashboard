import { metrics } from "../mockData/dashboardData";
import MetricSingleTile from "./MetricSingleTile";

// MetricsGrid.js
export default function MetricsTiles() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-7 w-full max-w-2xl mx-auto">
      {metrics.map((m, idx) => (
        <MetricSingleTile key={idx} {...m} />
      ))}
    </div>
  );
}
