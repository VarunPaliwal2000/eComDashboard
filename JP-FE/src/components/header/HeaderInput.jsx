import { CiSearch } from "react-icons/ci";

export const HeaderInput = ({ darkMode }) => {
  return (
    <div
      className="flex items-center gap-2 h-7 rounded-xl px-2"
      style={{
        backgroundColor: darkMode
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(28, 28, 28, 0.05)",
      }}
    >
      <CiSearch
        size={16}
        color={darkMode ? "#9CA3AF" : "#6B7280"}
        className="min-w-[16px]"
      />
      <input
        type="text"
        placeholder="Search"
        className="flex-1 h-[28px] bg-transparent border-none outline-none text-[14px]"
        style={{
          color: darkMode ? "#D1D5DB" : "#6B7280",
          caretColor: darkMode ? "#D1D5DB" : "#6B7280",
        }}
        placeholderTextColor={darkMode ? "#9CA3AF" : "#A1A1AA"}
      />
      <span
        className="flex items-center justify-center px-2 py-[2px] rounded text-xs font-semibold"
        style={{
          backgroundColor: darkMode ? "#3F3F46" : "#F3F4F6",
          color: "#9CA3AF",
        }}
      >
        ⌘ /
      </span>
    </div>
  );
};
