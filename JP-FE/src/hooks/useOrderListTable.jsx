import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { ordersData } from "../mockData/orderData";

export function useOrderListTable() {
  const [data] = useState(ordersData);
  const [sorting, setSorting] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");

  const columns = useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <input
            type="checkbox"
            checked={table.getIsAllPageRowsSelected()}
            ref={(el) => {
              if (el) el.indeterminate = table.getIsSomePageRowsSelected();
            }}
            onChange={table.getToggleAllPageRowsSelectedHandler()}
            className="w-4 h-4 rounded border-gray-300"
            aria-label="Select all orders"
          />
        ),
        cell: ({ row }) => (
          <input
            type="checkbox"
            checked={row.getIsSelected()}
            ref={(el) => {
              if (el) el.indeterminate = row.getIsSomeSelected();
            }}
            onChange={row.getToggleSelectedHandler()}
            className="w-4 h-4 rounded border-gray-300"
            aria-label={`Select order ${row.original.id}`}
          />
        ),
      },
      {
        accessorKey: "id",
        header: "Order ID",
        cell: (info) => (
          <span className="font-inter font-normal text-xs leading-[18px] tracking-normal text-[#1C1C1C]">
            {info.getValue()}
          </span>
        ),
      },
      {
        accessorKey: "user",
        header: "User",
        cell: ({ row }) => (
          <div className="flex items-center space-x-3">
            <img
              src={row.original.user.avatar}
              alt={`${row.original.user.name} avatar`}
              className="w-8 h-8 rounded-full object-cover"
              loading="lazy"
            />
            <span className="font-inter font-normal text-xs leading-[18px] tracking-normal text-[#1C1C1C]">
              {row.original.user.name}
            </span>
          </div>
        ),
      },
      {
        accessorKey: "project",
        header: "Project",
        cell: (info) => (
          <span className="font-inter font-normal text-xs leading-[18px] tracking-normal text-[#1C1C1C]">
            {info.getValue()}
          </span>
        ),
      },
      {
        accessorKey: "address",
        header: "Address",
        cell: (info) => (
          <span className="font-inter font-normal text-xs leading-[18px] tracking-normal text-[#1C1C1C]">
            {info.getValue()}
          </span>
        ),
      },
      {
        accessorKey: "date",
        header: "Date",
        cell: (info) => (
          <div className="flex items-center space-x-1 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z"
              />
            </svg>
            <span className="font-inter font-normal text-xs leading-[18px] tracking-normal text-[#1C1C1C]">
              {info.getValue()}
            </span>
          </div>
        ),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
          <span
            className={`flex items-center gap-2 font-inter font-normal text-xs leading-[18px] tracking-normal ${row.original.status.color}`}
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="4" />
            </svg>
            <span>{row.original.status.label}</span>
          </span>
        ),
      },
      {
        id: "actions",
        header: "",
        cell: () => (
          <span
            className="text-gray-400 cursor-pointer select-none"
            aria-label="Actions"
          >
            ...
          </span>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: { sorting, rowSelection, globalFilter },
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: true,
    getRowId: (row) => row.id,
  });

  return { table, globalFilter, setGlobalFilter };
}
