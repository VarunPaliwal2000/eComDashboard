import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function MetricSingleTile({
  title,
  value,
  change,
  key,
  positive,
  bgColor,
  textColor,
  darkbgColor,
  darktextcolor,
}) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      key={key}
      className={`flex flex-col w-full min-w-[200px] h-[112px] rounded-2xl p-6 gap-2 shadow-sm ${
        darkMode ? darkbgColor ?? bgColor : bgColor
      } `}
    >
      <span
        className="font-medium"
        style={{
          color: darkMode ? darktextcolor ?? textColor : textColor,
        }}
      >
        {title}
      </span>
      <div className="flex justify-between">
        <span
          className="text-3xl font-bold"
          style={{
            color: darkMode ? darktextcolor ?? textColor : textColor,
          }}
        >
          {value}
        </span>

        <span
          className={`font-medium text-xs mt-2 flex items-center ${
            positive
              ? "text-green-600 dark:text-green-400"
              : "text-red-500 dark:text-red-400"
          }`}
        >
          {change} {positive ? "\u2191" : "\u2193"}
        </span>
      </div>
    </div>
  );
}
