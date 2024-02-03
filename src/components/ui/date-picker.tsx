'use client';

import { useState } from 'react';
import dayjs from 'dayjs';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { Matcher } from 'react-day-picker';

interface DatePicker {
  onChange(value: Date): void;
  value: Date | undefined;
}

export function DatePicker({ onChange, value }: DatePicker) {
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
          onSelect={(date) => {
            onChange(date as Date);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
