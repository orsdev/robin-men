'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { FC } from 'react';

interface SelectDropdown {
  placeholder?: string;
  defaultValue?: string;
  onChange(value: string): void;
  options: Array<{ label: string; value: string }>;
}

export const SelectDropdown: FC<SelectDropdown> = ({
  placeholder,
  onChange,
  defaultValue = '',
  options = []
}) => {
  return (
    <Select
      onValueChange={(value: string) => {
        onChange(value);
      }}
      defaultValue={defaultValue}
    >
      <SelectTrigger className="min-w-[100px] w-full bg-others-50 rounded-[4px] border-none px-[10px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options?.map((opt) => (
            <SelectItem value={opt.value} key={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
