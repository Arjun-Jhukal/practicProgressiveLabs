import { useReactTable, getCoreRowModel, getFilteredRowModel, flexRender, getPaginationRowModel, getSortedRowModel } from "@tanstack/react-table";
import { useState } from "react";
// import { DateTime } from "luxon";

const BasicTable = ({ data, columns }) => {
  const [sorting, setSorting] = useState([]);
  const [filterData, setFilterData] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting: sorting, globalFilter: filterData },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFilterData,
  });

  return (
    <div className="container">
      <input type="text" value={filterData} onChange={(e) => setFilterData(e.target.value)} />
      <table className="table">
        <thead className="thead">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext)}
                  {{ asc: "ASC", desc: "DESC" }[header.column.getIsSorted() ?? null]}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="tbody">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => table.setPageIndex(0)}>First Page</button>
        <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>
          Previous Page
        </button>
        <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>
          Next Page
        </button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>Last Page</button>
      </div>
    </div>
  );
};

export default BasicTable;
