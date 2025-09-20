export const RightSidebarInfoGrid = ({ data, key, title, connected, darkMode }) => {
  return (
    <div key={key} className="flex flex-col w-[240px]">
      <div className="flex flex-col w-[240px] rounded-[8px] pt-2 pr-1 pb-2 pl-1">
        <span
          className="font-inter font-semibold text-[14px] leading-[20px] tracking-[0px]"
          style={{ color: darkMode ? "#E5E7EB" : "#1C1C1C" }}
        >
          {title}
        </span>
      </div>
      {data?.map((item, idx) => {
        const Icon = item.icon;

        return (
          <div
            className="flex flex-row w-[232px] rounded-[8px] p-1 gap-2"
            key={idx}
          >
            {Icon && (
              <Icon
                size={20}
                style={{ color: darkMode ? "#D1D5DB" : "#4B5563" }}
                className="flex-shrink-0"
              />
            )}
            {item?.avatar && (
              <div className="flex flex-col items-center">
                <img
                  src={item.avatar}
                  alt={`${item.name} avatar`}
                  className="w-6 h-6 rounded-full object-cover"
                  loading="lazy"
                />
                {connected && idx < data?.length - 1 && (
                  <div
                    className="w-0.25 h-3 my-1"
                    style={{
                      borderLeft: "2px dashed",
                      borderColor: darkMode ? "#4B5563" : "#D1D5DB",
                      backgroundColor: darkMode ? "#4B5563" : "#D1D5DB",
                    }}
                  />
                )}
              </div>
            )}
            <div className="flex flex-col w-[192px] h-8 rounded-[8px]">
              {item?.name && (
                <span
                  className="font-inter font-normal text-[14px] leading-[20px] tracking-[0px]"
                  style={{ color: darkMode ? "#E5E7EB" : "#1C1C1C" }}
                >
                  {item?.name}
                </span>
              )}
              {item?.message && (
                <span
                  className="font-inter font-normal text-[14px] leading-[20px] tracking-[0px]"
                  style={{ color: darkMode ? "#CBD5E1" : "#1C1C1C" }}
                >
                  {item?.message}
                </span>
              )}
              {item?.time && (
                <span
                  className="font-inter font-normal text-[12px] leading-[18px] tracking-[0px]"
                  style={{ color: darkMode ? "#94A3B8" : "rgba(28, 28, 28, 0.4)" }}
                >
                  {item?.time}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
