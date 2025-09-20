import { useLocation } from "react-router-dom";
import { prettyLabel } from "../../utils/PathToLabelConvertor";

export const HeaderPathInfo = ({ darkMode }) => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  const colorMain = darkMode ? "#D1D5DB" : "#1C1C1C";
  const colorDim = darkMode
    ? "rgba(209, 213, 219, 0.4)"
    : "rgba(28, 28, 28, 0.4)";
  const colorSlash = darkMode ? "rgba(75, 85, 99, 1)" : "rgba(28, 28, 28, 0.2)";

  return (
    <div className="flex gap-1 items-center">
      {segments.map((part, idx) => (
        <span
          key={part}
          className="font-inter font-normal text-[14px] leading-[20px] tracking-[0] text-center"
          style={{
            color: idx === segments.length - 1 ? colorMain : colorDim,
          }}
        >
          <div className="flex gap-1">
            {idx > 0 && (
              <span className="text-[14px]" style={{ color: colorSlash }}>
                /
              </span>
            )}
            {prettyLabel(part)}
          </div>
        </span>
      ))}
    </div>
  );
};
