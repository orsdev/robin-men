'use client';

import { ChatMessagesColumns } from '@/components/chat';
import { CustomTable } from '@/components/ui/custom-table';
import { Input } from '@/components/ui/input';
import { CustomPagination } from '@/components/ui/pagination';
import { DirectMessagesPageSize, useDirectMessages } from '@/hooks/query';
import { useCustomTable, useDebounce } from '@/hooks/utils';
import { Search } from 'lucide-react';
import { useState } from 'react';

export function ChatDirectMessages() {
  const [currentPage, setCurrentPage] = useState(1);
  const { direct_messages, isLoadingMessages, totalPages, isFetching } =
    useDirectMessages({
      currentPage
    });
  const { debouncedValue, handleInputChange, value } = useDebounce();

  const tableColumn = [
    ...ChatMessagesColumns({
      handleView(value) {
        alert(JSON.stringify(value, null, 2));
      },
      handleDisable(value) {
        console.log(value);
      }
    })
  ];

  //   Table hook
  const { hasData, table } = useCustomTable({
    columns: tableColumn,
    data: direct_messages,
    currentPage,
    globalFilter: debouncedValue,
    totalItems: totalPages,
    pageSize: DirectMessagesPageSize,
    onGlobalFilterChange: handleInputChange
  });

  return (
    <>
      {/* Search input */}
      <div className="flex items-center justify-end">
        <div className="flex items-center mb-4">
          <Input
            placeholder="Search..."
            value={value}
            onChange={(event) => handleInputChange(event.target.value)}
            className="max-w-[264px] h-[45px] placeholder:text-muted border-r-0 focus-visible:[box-shadow:none] focus-visible:border-none focus-visible:outline-none"
          />
          <div className="rounded-md border border-neutral-200 bg-white px-3 flex items-center h-[45px] border-l-0 stroke-muted">
            <Search size={20} stroke="inherit" />
          </div>
        </div>
      </div>

      {/* Table */}
      <CustomTable
        columns={tableColumn}
        table={table}
        hasData={hasData}
        isLoadingData={isLoadingMessages || isFetching}
        paginationComponent={() => {
          return (
            <div className="rounded-md border border-t-0 py-[30px] bg-white w-full">
              <CustomPagination
                handlePageClick={(value) => {
                  const { selected } = value;

                  if (selected >= 0) {
                    setCurrentPage(selected + 1);
                  }
                }}
                pageSize={DirectMessagesPageSize}
                page={currentPage}
                total={totalPages}
              />
            </div>
          );
        }}
      />
    </>
  );
}
