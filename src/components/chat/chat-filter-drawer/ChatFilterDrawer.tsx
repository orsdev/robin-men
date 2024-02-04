'use client';

import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent } from '@/components/ui/drawer';
import { X as XICON } from 'lucide-react';
import { SelectDropdown } from '@/components/ui/select-dropdown';
import { ColumnFiltersState, Table } from '@tanstack/react-table';
import { ChatMessages, DirectMessagesFilterColumnsEnum } from '..';
import { DatePicker } from '@/components/ui/date-picker';
import { useChatFilter } from './use-chat-filter';
import { TIME_FRAME_DATA, TIME_FRAME_ENUM } from './constants';
import { TimeFrame } from './components';

interface ChatFilterDrawer {
  table: Table<ChatMessages>;
  onClearFilter(): void;
  onCloseDrawer(): void;
  open: boolean;
  onFilter(value: ColumnFiltersState): void;
}

export function ChatFilterDrawer({
  table,
  onFilter,
  onClearFilter,
  onCloseDrawer,
  open = false
}: ChatFilterDrawer) {
  const {
    handleSetTimeFrame,
    handleAddDateRange,
    handleClearFilters,
    handleSetFormData,
    selectedFilters,
    selectedTimeFrame,
    setSelectedFilters,
    formData
  } = useChatFilter({
    table,
    onClearFilter,
    onCloseDrawer
  });

  return (
    <>
      <Drawer direction="right" open={open}>
        <DrawerContent className="h-full">
          <div className="flex flex-col h-full gap-3">
            {/* Header */}
            <div className="h-[40px] px-2">
              <DrawerClose className="bg-white w-full">
                <div className="flex justify-between items-center gap-4 w-full">
                  <h3 className="text-[20px]">Filter Table</h3>
                  <XICON color="#D53120" size={20} onClick={onCloseDrawer} />
                </div>
              </DrawerClose>
            </div>

            {/* Time frame */}
            <div className="flex gap-[12px] flex-wrap items-center mt-[33px]">
              {TIME_FRAME_DATA.map(({ label, value }) => (
                <TimeFrame
                  key={value}
                  label={label}
                  selected={selectedTimeFrame === value}
                  handleClick={() => {
                    handleSetTimeFrame(value);
                  }}
                />
              ))}
            </div>

            <div className="flex-1 mt-[30px] space-y-[26px] overflow-y-auto px-2 w-full">
              {/* Date Picker */}
              <div className="flex gap-4 w-full flex-col gap-y-[26px] sm:flex-row">
                {/* From */}
                <div className="flex-1">
                  <span className="text-md text-text">Date From</span>
                  <DatePicker
                    onChange={(date) => {
                      handleSetFormData({ name: 'from', value: date });
                    }}
                    maxDate={formData['to']}
                    value={formData['from']}
                  />
                </div>
                {/* To */}
                <div className="flex-1">
                  <span className="text-md text-text">Date To</span>
                  <DatePicker
                    onChange={(date) => {
                      handleSetFormData({ name: 'to', value: date });
                    }}
                    minDate={formData['from']}
                    value={formData['to']}
                  />
                </div>
              </div>
              {/* Messages */}
              <div>
                <span className="text-md text-text">Messages</span>
                <SelectDropdown
                  classes="border border-solid border-muted h-[55px] px-4 focus:border-none focus:outline-none focus:ring-none focus:shadow-none focus-visible:outline-none focus-visible:shadow-none text-muted"
                  value={formData['messages']}
                  onChange={(value) => {
                    const current_column = table.getColumn(
                      DirectMessagesFilterColumnsEnum.MESSAGES_SENT
                    )!;

                    const remainingFilters = selectedFilters.filter(
                      (item) => item.id !== current_column.id
                    );

                    setSelectedFilters([
                      ...remainingFilters,
                      { id: current_column.id, value }
                    ]);

                    handleSetFormData({ name: 'messages', value });
                  }}
                  options={[
                    { label: '0 - 500 Messages', value: '0-500' },
                    { label: '500 - 2000 Messages', value: '500-2000' },
                    { label: '2000+ Messages', value: '2000+' }
                  ]}
                  placeholder="Please Select..."
                />
              </div>

              {/* Storage used */}
              <div>
                <span className="text-md text-text">Media Storage Used</span>
                <SelectDropdown
                  classes="border border-solid border-muted h-[55px] px-4 focus:border-none focus:outline-none focus:ring-none focus:shadow-none focus-visible:outline-none focus-visible:shadow-none text-muted"
                  value={formData['storage']}
                  onChange={(value) => {
                    const current_column = table.getColumn(
                      DirectMessagesFilterColumnsEnum.STORAGE
                    )!;

                    const remainingFilters = selectedFilters.filter(
                      (item) => item.id !== current_column.id
                    );

                    setSelectedFilters([
                      ...remainingFilters,
                      { id: current_column.id, value }
                    ]);

                    handleSetFormData({ name: 'storage', value });
                  }}
                  options={[
                    { label: '0 - 50MB', value: '0-50000000' },
                    { label: '50MB - 200MB', value: '50000000-200000000' },
                    { label: '200MB-1GB', value: '200000000-1000000000' },
                    { label: '1GB+', value: '1000000000' }
                  ]}
                  placeholder="Please Select..."
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 h-[100px] md:h-[160px]">
              <button
                className="inline-block h-[42px] w-full items-center justify-center text-md font-medium bg-others-400 transition duration-300 hover:bg-blue-500 text-white rounded-full sm:rounded-[30px] py-[4px] px-[15px] transform active:scale-[.992]"
                onClick={() => {
                  const filterValue = handleAddDateRange();
                  onFilter([...filterValue]);

                  onCloseDrawer();
                }}
              >
                Filter Table
              </button>
              <Button
                variant="ghost"
                className="text-others-200 font-normal transition duration-300 rounded-full h-[42px] w-full transform active:scale-[.992]"
                onClick={handleClearFilters}
              >
                Clear Filter
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
