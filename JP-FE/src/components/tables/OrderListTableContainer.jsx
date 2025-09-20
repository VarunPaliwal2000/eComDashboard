import React from "react";
import { useOrderListTable } from "../../hooks/useOrderListTable";
import { HeaderInput } from "../header/HeaderInput";
import OrderListTable from "./OrderListTable";

export default function OrderListTableContainer({ darkMode }) {
  const { table } = useOrderListTable();
  const bgColor = darkMode ? "#121212" : "white";
  const btnBg = darkMode ? "#FFFFFF0D" : "bg-gray-100";
  const textColor = darkMode ? "#E5E7EB" : "#000";

  return (
    <div
      className="p-6 rounded-md shadow-sm max-w-7xl"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <h2 className="text-lg font-semibold mb-4" style={{ color: textColor }}>
        Order List
      </h2>
      <div
        className="flex items-center justify-between mb-3 space-x-3 rounded-xl"
        style={{ backgroundColor: darkMode ? btnBg : undefined }}
      >
        <div className="flex">
          {/* Add button */}
          <button className="p-2 rounded" aria-label="Add">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          {/* Filter button */}
          <button className="p-2 rounded" aria-label="Filter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a2 2 0 01-.293 1.293l-5.414 5.414a2 2 0 00-.586 1.414V19l-4-2v-5.879a2 2 0 00-.586-1.414L3.293 7.293A2 2 0 013 6V4z"
              />
            </svg>
          </button>
          {/* Sort button */}
          <button className="p-2 rounded" aria-label="Sort">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h8m-8 6h12"
              />
            </svg>
          </button>
          {/* Search input */}
        </div>
        <HeaderInput />
      </div>
      <OrderListTable table={table} darkMode={darkMode} />
      {/* Pagination */}
      <div
        className="flex justify-end mt-4 space-x-2 text-sm"
        style={{ color: darkMode ? "#9CA3AF" : "#6B7280" }}
      >
        <button
          aria-label="Previous Page"
          className={`p-2 rounded cursor-pointer disabled:opacity-50 ${
            darkMode ? "hover:bg-gray-600" : "hover:text-gray-700"
          }`}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          &lt;
        </button>
        {table.getPageCount() > 0 &&
          [...Array(table.getPageCount()).keys()].map((pageIndex) => (
            <button
              key={pageIndex}
              className={`p-2 rounded cursor-pointer ${
                pageIndex === table.getState().pagination.pageIndex
                  ? darkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-300"
                  : ""
              }`}
              onClick={() => table.setPageIndex(pageIndex)}
              style={{ color: darkMode ? "#E5E7EB" : undefined }}
            >
              {pageIndex + 1}
            </button>
          ))}
        <button
          aria-label="Next Page"
          className={`p-2 rounded cursor-pointer disabled:opacity-50 ${
            darkMode ? "hover:bg-gray-600" : "hover:text-gray-700"
          }`}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
