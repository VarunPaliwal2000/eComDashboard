import { useLocation } from "react-router-dom";
import { prettyLabel } from "../../utils/PathToLabelConvertor";

export const HeaderPathInfo = () => {
  const { pathname } = useLocation(); 
  const segments = pathname.split("/").filter(Boolean);
  return (
    <div className="flex gap-1 items-center ">
      {segments.map((part, idx) => (
        <span
          key={part}
          className={`
          font-inter
          font-normal
          text-[14px]
          leading-[20px]
          tracking-[0]
          text-center
          ${
            idx === segments.length - 1
              ? " text-[#1C1C1C]"
              : " text-[#1C1C1C]/[0.4]"
          }`}
        >
          <div className="flex gap-1">
            {idx > 0 && (
              <span className="text-[14px] text-[#1C1C1C]/[0.2]">/</span>
            )}
            {prettyLabel(part)}
          </div>
        </span>
      ))}
    </div>
  );
};
