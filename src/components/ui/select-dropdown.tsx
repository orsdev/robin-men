'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { cn } from '@/lib';
import { FC } from 'react';

interface SelectDropdown {
  placeholder?: string;
  defaultValue?: string;
  onChange(value: string): void;
  classes?: string;
  value?: string;
  options: Array<{ label: string; value: string | number }>;
}

export const SelectDropdown: FC<SelectDropdown> = ({
  placeholder,
  onChange,
  classes = '',
  defaultValue = '',
  value = '',
  options = []
}) => {
  return (
    <Select
      onValueChange={(value: string) => {
        onChange(value);
      }}
      defaultValue={defaultValue}
      value={value || defaultValue}
    >
      <SelectTrigger
        className={cn(
          'min-w-[100px] w-full bg-others-50 rounded-[4px] border-none px-[10px]',
          classes
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options?.map((opt) => (
            <SelectItem value={opt.value.toString()} key={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
