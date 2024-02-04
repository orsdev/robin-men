'use client';

import dayjs from 'dayjs';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { UTILS } from '@/utils';

interface DatePicker {
  onChange(value: Date): void;
  minDate?: Date | undefined;
  maxDate?: Date | undefined;
  value: Date | undefined;
}

export function DatePicker({ onChange, value, minDate, maxDate }: DatePicker) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full min-w-full max-w-full h-[55px] justify-start text-left font-normal border border-solid border-muted bg-others-5 text-muted',
            !value && 'text-muted-foreground'
          )}
        >
          {value ? (
            dayjs(value).format('DD - MM - YYYY')
          ) : (
            <span className="text-muted">dd - mm - yyyy</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Calendar
          mode="single"
          selected={value}
          defaultMonth={value}
          onSelect={(date) => {
            onChange(date as Date);
          }}
          fromDate={minDate ? UTILS.addDaysToDate(minDate, 1) : undefined}
          toDate={maxDate ? UTILS.removeDaysFromDate(maxDate, 1) : undefined}
          disabled={[
            { from: new Date(2024, 1, 18), to: new Date(2024, 1, 29) }
          ]}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
