'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@radix-ui/react-dropdown-menu';
import { Eye, MoreHorizontal, XCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import { UTILS } from '@/utils';
import { SortingArrows } from '../ui/sorting-arrows';

export type ChatMessages = {
  id?: number;
  full_name: string;
  message_sent: number;
  media_storage_used: number;
  date_created: string;
  media_sent: number;
};

type ChatMessagesColumns = {
  handleView(value: ChatMessages): void;
  handleDisable(value: ChatMessages): void;
};

export enum DirectMessagesFilterColumnsEnum {
  STORAGE = 'media_storage_used',
  DATE_CREATED = 'date_created',
  MESSAGES_SENT = 'message_sent'
}

export const ChatMessagesColumns = ({
  handleView,
  handleDisable
}: ChatMessagesColumns): ColumnDef<ChatMessages>[] => [
  {
    accessorKey: 'full_name',
    header: () => <div className="uppercase text-muted text-sm">Users</div>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('full_name')}</div>
    )
  },
  {
    accessorKey: 'message_sent',
    id: DirectMessagesFilterColumnsEnum.MESSAGES_SENT,
    filterFn: (rows: any, columnIds, filterValues: string) => {
      // If filter values are not provided or empty, return all rows
      if (!filterValues || filterValues.length === 0) {
        return rows;
      }

      // If the specified column values are not available, return all rows
      if (!rows.getValue(columnIds)) return rows;

      const filterRange = UTILS.convertStringToRangeArray(filterValues);

      const [min, max] = filterRange;
      const rowsValue = rows.getValue(columnIds);

      // Check if min and max are numbers, then filter rows within the specified range.
      if (typeof min === 'number' && typeof max === 'number') {
        return rowsValue >= min && rowsValue <= max;
      } else if (!max) {
        // If only a minimum value is provided, filter rows with values greater than or equal to the minimum.
        return rowsValue >= min;
      } else {
        // If no valid conditions are met, return the original rows.
        return rows;
      }
    },
    header: ({ column }) => {
      const sortingDirection = column.getIsSorted();
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="uppercase text-muted text-sm flex gap-1"
        >
          Message Sent
          <SortingArrows direction={sortingDirection as string} />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('message_sent')}</div>
    )
  },
  {
    accessorKey: 'media_storage_used',
    id: DirectMessagesFilterColumnsEnum.STORAGE,
    filterFn: (rows: any, columnIds, filterValues: string) => {
      // If filter values are not provided or empty, return all rows
      if (!filterValues || filterValues.length === 0) {
        return rows;
      }

      // If the specified column values are not available, return all rows
      if (!rows.getValue(columnIds)) return rows;

      const filterRange = UTILS.convertStringToRangeArray(filterValues);

      const [min, max] = filterRange;
      const rowsValue = rows.getValue(columnIds);

      // Check if min and max are numbers, then filter rows within the specified range.
      if (typeof min === 'number' && typeof max === 'number') {
        return rowsValue >= min && rowsValue <= max;
      } else if (!max) {
        // If only a minimum value is provided, filter rows with values greater than or equal to the minimum.
        return rowsValue >= min;
      } else {
        // If no valid conditions are met, return the original rows.
        return rows;
      }
    },
    header: ({ column }) => {
      const sortingDirection = column.getIsSorted();

      return (
        <Button
          variant="ghost"
          className="uppercase text-muted text-sm flex gap-1"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Media storage Used
          <SortingArrows direction={sortingDirection as string} />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">
        {UTILS.formatStorageSize(row.getValue('media_storage_used'))}
      </div>
    )
  },
  {
    accessorKey: 'date_created',
    id: DirectMessagesFilterColumnsEnum.DATE_CREATED,
    filterFn: (rows: any, columnIds, filterValues: string) => {
      // If filter values are not provided or empty, return all rows
      if (!filterValues || filterValues.length === 0) {
        return rows;
      }

      // If the specified column values are not available, return all rows
      if (!rows.getValue(columnIds)) return rows;

      // Split the filter range into 'from' and 'to' dates
      const filterRange = filterValues.split('-');
      const [from, to] = filterRange;

      // Get the value of the specified column in the current row
      const rowsValue = rows.getValue(columnIds);

      // Convert filter 'from' and 'to' dates to Unix timestamps using dayjs
      const dateFrom = dayjs(from).unix();
      const dateTo = dayjs(to).unix();

      // Convert the column value to a Unix timestamp
      const rowsValueToUnix = dayjs(rowsValue).unix();

      // Check if the column value is within the specified date range
      const isWithinRange =
        rowsValueToUnix >= dateFrom && rowsValueToUnix <= dateTo;

      // Return the result of the filter
      return isWithinRange;
    },
    header: ({ column }) => {
      const sortingDirection = column.getIsSorted();
      return (
        <Button
          variant="ghost"
          className="uppercase text-muted text-sm flex gap-1"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date Created
          <SortingArrows direction={sortingDirection as string} />
        </Button>
      );
    },
    cell: ({ row }) => {
      const value = row.getValue('date_created') as string;
      const formattedDate = dayjs(value).format('DD MMM, YYYY');

      return <div className="capitalize">{formattedDate}</div>;
    }
  },
  {
    accessorKey: 'media_sent',
    header: ({ column }) => {
      const sortingDirection = column.getIsSorted();
      return (
        <Button
          variant="ghost"
          className="uppercase text-muted text-sm flex gap-1"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Media Sent
          <SortingArrows direction={sortingDirection as string} />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('media_sent')}</div>
    )
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const { original } = row;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 focus-visible:border-none"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-white py-4 shadow-sm rounded-md space-y-1 min-w-[190px] border border-others-600 z-[8]"
          >
            <DropdownMenuItem
              className="flex justify-between items-center gap-2 cursor-pointer hover:outline-none hover:bg-slate-100 py-[8px] px-[16px]"
              onClick={() => {
                handleView(original);
              }}
            >
              <span> View</span>

              <Eye size={15} />
            </DropdownMenuItem>
            <hr />
            <DropdownMenuItem
              className=" flex justify-between items-center gap-2 cursor-pointer hover:outline-none hover:bg-slate-100 py-[8px] px-[16px] text-red-500"
              onClick={() => {
                handleDisable(original);
              }}
            >
              <span>Disable</span>
              <XCircle size={15} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];
