import MetricSingleTile from "./MetricSingleTile";

export default function MetricsTiles({metrics}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-7 w-full max-w-2xl mx-auto">
      {metrics.map((m, idx) => (
        <MetricSingleTile key={idx} {...m} />
      ))}
    </div>
  );
}
