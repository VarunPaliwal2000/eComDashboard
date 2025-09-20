import { flexRender } from "@tanstack/react-table";

export default function OrderListTable({ table, darkMode }) {
  const textColor = darkMode ? "#E5E7EB" : "#000";
  const rowBgSelected = darkMode ? "#374151" : "#F3F4F6"; 
  const rowBgNormal = darkMode ? "#121212" : "#fff";
  const borderColor = darkMode ? "#4B5563" : "#E5E7EB"; 
  return (
    <table className="w-full border-collapse table-auto text-sm text-left">
      <thead
        style={{
          borderBottom: `1px solid ${borderColor}`,
          textColor: textColor,
        }}
      >
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="p-2 font-medium"
                style={{ textColor: textColor }}
              >
                {header.isPlaceholder ? null : (
                  <div
                    className={
                      header.column.getCanSort()
                        ? "cursor-pointer select-none flex items-center"
                        : ""
                    }
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: " \u2191",
                      desc: " \u2193",
                    }[header.column.getIsSorted()] ?? null}
                  </div>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            style={{
              backgroundColor: row.getIsSelected()
                ? rowBgSelected
                : rowBgNormal,
              borderBottom: `1px solid ${borderColor}`,
              textColor: textColor,
            }}
          >
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className="p-2"
                style={{ textColor: textColor }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
