import { CiSearch } from "react-icons/ci";

export const HeaderInput = () => {
  return (
    <div className="flex items-center gap-2 h-7 rounded-xl bg-[#1C1C1C]/[0.05] px-2">
      <CiSearch
        size="16"
        color="#6B7280"
        className="min-w-[16px] text-gray-500"
      />
      <input
        type="text"
        placeholder="Search"
        className="flex-1 h-[28px] bg-transparent text-gray-500 border-none outline-none placeholder:text-gray-400"
      />
      <span className="flex items-center justify-center px-2 py-[2px] rounded bg-[#F3F4F6] text-gray-400 text-xs font-semibold">
        ⌘ /
      </span>
    </div>
  );
};
