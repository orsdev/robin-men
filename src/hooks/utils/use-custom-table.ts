'use client';

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import { Dispatch, SetStateAction, useMemo, useState } from 'react';

interface CustomTableProps<Data> {
  data: Array<Data>;
  currentPage: number;
  columns: Array<ColumnDef<Data, any>>;
  pageSize?: number;
  totalItems?: number;
  columnFilters?: ColumnFiltersState;
  globalFilter?: string;
  onFilterChange?: Dispatch<SetStateAction<ColumnFiltersState>>;
  onGlobalFilterChange?(val: string): void;
}

const emptyArray = [] as []; // Fixes table.getRowModel().rows multiple rendering

export const useCustomTable = <Data>({
  data,
  columns,
  globalFilter,
  onGlobalFilterChange,
  onFilterChange,
  totalItems,
  columnFilters = [],
  currentPage = 1,
  pageSize = 10
}: CustomTableProps<Data>) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const hasData = data && data?.length > 0;

  const pagination = useMemo(
    () => ({
      pageIndex: currentPage - 1,
      pageSize
    }),
    [currentPage, pageSize]
  );

  const table = useReactTable({
    columns,
    data: data ?? emptyArray,
    onColumnFiltersChange: onFilterChange,
    onGlobalFilterChange: onGlobalFilterChange,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    pageCount: totalItems || 0,
    manualPagination: true,
    state: {
      columnFilters,
      pagination,
      sorting,
      globalFilter
    },
    debugTable: true
  });

  return {
    hasData,
    filterColumns: columnFilters,
    onFilterChange,
    total: totalItems || 0,
    table
  };
};
