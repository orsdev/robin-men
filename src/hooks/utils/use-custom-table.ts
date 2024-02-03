'use client';

import {
  ColumnDef,
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
import { useMemo, useState } from 'react';

interface CustomTableProps<Data> {
  data: Array<Data>;
  currentPage: number;
  columns: Array<ColumnDef<Data, any>>;
  pageSize?: number;
  totalItems?: number;
  globalFilter?: string;
  onGlobalFilterChange?(val: string): void;
}

const emptyArray = [] as []; // Fixes table.getRowModel().rows multiple rendering

export const useCustomTable = <Data>({
  data,
  columns,
  globalFilter,
  onGlobalFilterChange,
  totalItems,
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
      pagination,
      sorting,
      globalFilter
    },
    debugTable: true
  });

  return {
    hasData,
    total: totalItems || 0,
    table
  };
};
