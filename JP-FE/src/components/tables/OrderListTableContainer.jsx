import React from "react";
import OrderListTable from "./OrderListTable";
import { useOrderListTable } from "../../hooks/useOrderListTable";

export default function OrderListTableContainer() {
  const { table, globalFilter, setGlobalFilter } = useOrderListTable();

  return (
    <div className="p-6 bg-white rounded-md shadow-sm max-w-7xl">
      <h2 className="text-lg font-semibold mb-4">Order List</h2>
      <div className="flex items-center mb-3 space-x-3">
        {/* Add button */}
        <button
          className="p-2 bg-gray-100 rounded hover:bg-gray-200"
          aria-label="Add"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
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
        <button
          className="p-2 bg-gray-100 rounded hover:bg-gray-200"
          aria-label="Filter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
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
        <button
          className="p-2 bg-gray-100 rounded hover:bg-gray-200"
          aria-label="Sort"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
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
        <input
          type="search"
          placeholder="Search"
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="ml-auto p-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <OrderListTable table={table} />
      {/* Pagination */}
      <div className="flex justify-end mt-4 space-x-2 text-sm text-gray-500">
        <button
          aria-label="Previous Page"
          className="p-2 hover:text-gray-700 rounded disabled:opacity-50"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          &lt;
        </button>
        {table.getPageCount() > 0 &&
          [...Array(table.getPageCount()).keys()].map((pageIndex) => (
            <button
              key={pageIndex}
              className={`p-2 rounded hover:bg-gray-200 ${
                pageIndex === table.getState().pagination.pageIndex
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => table.setPageIndex(pageIndex)}
            >
              {pageIndex + 1}
            </button>
          ))}
        <button
          aria-label="Next Page"
          className="p-2 hover:text-gray-700 rounded disabled:opacity-50"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
