import { LOCATION_DATA } from "../mockData/dashboardData";

const maxRevenue = Math.max(...LOCATION_DATA.map((l) => l.revenue));

export default function RevenueByLocation() {
  return (
    <div className="rounded-xl bg-[#F7F9FB] p-5 w-[320px] shadow space-y-4">
      <h3 className="font-semibold text-lg text-[#23272E]">
        Revenue by Location
      </h3>
      <div className="relative h-24 w-full flex items-center justify-center">
        {/* Placeholder for world map image or svg */}
        <div className="w-full h-24 rounded bg-gray-100 flex items-center justify-center text-sm text-gray-500">
          {/* Replace this div with a real world map image/svg for production */}
          World Map
          {/* Optionally, dot icons can be laid out here using absolute positioning for each city */}
          {/* <FaCircle className="absolute left-8 top-6 text-blue-600" size={11} /> */}
        </div>
      </div>
      <div className="space-y-4">
        {LOCATION_DATA.map((location) => (
          <div key={location.name}>
            <div className="flex justify-between items-center font-sans font-normal text-3 leading-[18px] space-y-[10px]">
              <span>{location.name}</span>
              <span className="text-[#313957] text-[15px] font-medium">
                {location.revenue}K
              </span>
            </div>
            <div className="flex w-full items-center">
              <div className="w-full h-[2px] bg-[#F1F1F1] rounded-[80px] relative overflow-hidden">
                {/* Main progress fill */}
                <div
                  className="h-full rounded-[80px] bg-[#A8C5DA] absolute left-0 top-0"
                  style={{
                    width: `${(location.revenue / maxRevenue) * 100}%`,
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
