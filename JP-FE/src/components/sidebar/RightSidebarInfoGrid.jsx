export const RightSidebarInfoGrid = ({ data, key, title, connected }) => {
  return (
    <div key={key} className="flex flex-col w-[240px]">
      <div className="flex flex-col w-[240px] rounded-[8px] pt-2 pr-1 pb-2 pl-1">
        <span className="font-inter font-semibold text-[14px] leading-[20px] tracking-[0px] text-[#1C1C1C]">
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
            {Icon && <Icon size={20} />}
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
                    className="w-0.25 h-3 bg-gray-300 my-1"
                    style={{ borderLeft: "2px dashed #d1d5db" }}
                  />
                )}
              </div>
            )}
            <div className="flex flex-col w-[192px] h-8 rounded-[8px]">
              {item?.name && (
                <span className="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#1C1C1C]">
                  {item?.name}
                </span>
              )}
              {item?.message && (
                <span className="font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#1C1C1C]">
                  {item?.message}
                </span>
              )}

              {item?.time && (
                <span className="font-inter font-normal text-[12px] leading-[18px] tracking-[0px] text-[#1C1C1C]/40">
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
