export default function RevenueByLocation({ darkMode, data }) {
  const maxRevenue = Math.max(...data.map((l) => l.revenue));
  return (
    <div
      className="rounded-xl p-5 w-[320px] shadow space-y-4"
      style={{
        backgroundColor: darkMode ? "#FFFFFF0D" : "#F7F9FB",
        color: darkMode ? "#E5E7EB" : "#23272E",
      }}
    >
      <h3 className="font-semibold text-lg">Revenue by Location</h3>
      <div className="relative h-24 w-full flex items-center justify-center">
        <div
          className="w-full h-24 rounded flex items-center justify-center text-sm"
          style={{
            backgroundColor: darkMode ? "#2A2E43" : "#E5E7EB",
            color: darkMode ? "#CBD5E1" : "#6B7280",
          }}
        >
          World Map
        </div>
      </div>
      <div className="space-y-4">
        {data.map((location) => (
          <div key={location.name}>
            <div className="flex justify-between items-center font-sans font-normal text-3 leading-[18px] space-y-[10px]">
              <span>{location.name}</span>
              <span
                className="text-[15px] font-medium"
                style={{ color: darkMode ? "#CBD5E1" : "#313957" }}
              >
                {location.revenue}K
              </span>
            </div>
            <div className="flex w-full items-center">
              <div
                className="w-full h-[2px] rounded-[80px] relative overflow-hidden"
                style={{ backgroundColor: darkMode ? "#334155" : "#F1F1F1" }}
              >
                <div
                  className="h-full rounded-[80px] absolute left-0 top-0"
                  style={{
                    width: `${(location.revenue / maxRevenue) * 100}%`,
                    backgroundColor: darkMode ? "#6188B8" : "#A8C5DA",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
