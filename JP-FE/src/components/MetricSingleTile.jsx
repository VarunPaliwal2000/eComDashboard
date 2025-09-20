export default function MetricSingleTile({
  title,
  value,
  change,
  positive,
  bgColor,
}) {
  return (
    <div
      className={`flex flex-col w-full min-w-[200px] h-[112px] rounded-2xl p-6 gap-2  shadow-sm ${bgColor}`}
    >
      <span className="font-medium text-gray-700">{title}</span>
      <div className="flex justify-between">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
        <span
          className={`font-medium text-xs mt-2 flex items-center ${
            positive ? "text-green-600" : "text-red-500"
          }`}
        >
          {change} {positive ? "\u2191" : "\u2193"}
        </span>
      </div>
    </div>
  );
}
