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

export const ChatMessagesData: ChatMessages[] = [
  {
    id: 1,
    full_name: 'devon lane',
    message_sent: 100,
    media_storage_used: 1153433.6,
    date_created: '2023-01-18T16:05:09.838Z',
    media_sent: 21
  },
  {
    id: 2,
    full_name: 'darrel steward',
    message_sent: 200,
    media_storage_used: 1258291.2,
    date_created: '2023-02-18T16:05:09.838Z',
    media_sent: 4
  },
  {
    id: 3,
    full_name: 'leslie alexandra',
    message_sent: 300,
    media_storage_used: 1363148.8,
    date_created: '2023-03-18T16:05:09.838Z',
    media_sent: 82
  },
  {
    id: 4,
    full_name: 'john smith',
    message_sent: 100,
    media_storage_used: 1468006.4,
    date_created: '2023-04-18T16:05:09.838Z',
    media_sent: 6
  },
  {
    id: 5,
    full_name: 'james martin',
    message_sent: 100,
    media_storage_used: 1153433.6,
    date_created: '2023-05-18T16:05:09.838Z',
    media_sent: 10
  }
];

type ChatMessagesColumns = {
  handleView(value: ChatMessages): void;
  handleDisable(value: ChatMessages): void;
};

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
