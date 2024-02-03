'use client';

import {
  ColumnDef,
  Table as TableProp,
  flexRender
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { TableLoader } from './table-loader';
import { ReactNode } from 'react';

interface CustomTableProps<Data, Column> {
  columns: ColumnDef<Column>[];
  table: TableProp<Data>;
  hasData: boolean;
  isLoadingData: boolean;
  paginationComponent?(): ReactNode;
}

export function CustomTable<Data, Column>({
  hasData,
  isLoadingData,
  table,
  paginationComponent,
  columns
}: CustomTableProps<Data, Column>) {
  return (
    <div className="w-full">
      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader className="hover:bg-transparent">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header, index) => {
                  const classes = index === 0 ? 'px-5' : 'px-0';
                  return (
                    <TableHead key={header.id} className={classes}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {/* Empty Data */}
            {!isLoadingData && !hasData && (
              <TableRow className="hover:bg-transparent">
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center justify-center"
                >
                  <span> No results.</span>
                </TableCell>
              </TableRow>
            )}
            {hasData && table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="hover:bg-slate-100"
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <></>
            )}

            {/* Loading state */}
            {isLoadingData && <TableLoader colSpan={columns?.length} />}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center">
        {paginationComponent && paginationComponent()}
      </div>
    </div>
  );
}
