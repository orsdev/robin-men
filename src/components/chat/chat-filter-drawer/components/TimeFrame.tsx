import { cn } from '@/lib';
import React, { FC } from 'react';

interface TimeFrame {
  label: string;
  selected?: boolean;
  handleClick(): void;
}

export const TimeFrame: FC<TimeFrame> = ({ label, handleClick, selected }) => {
  return (
    <button
      className={cn(
        'h-[40px] m-w-[70px] rounded-[100px] flex items-center justify-center text-sm px-[16px] py-[10px] border border-solid border-neutral-200',
        {
          'border-neutral-300 bg-neutral-400 text-neutral-300': selected
        }
      )}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
