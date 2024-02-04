import { UTILS } from '@/utils';
import { FC } from 'react';

interface StatCard {
  label: string;
  value: number;
  remaining_bytes?: string;
  is_bytes?: boolean;
}

export const StatCard: FC<StatCard> = ({
  label,
  value,
  remaining_bytes = '',
  is_bytes = false
}) => {
  return (
    <div
      className="py-[22px] px-[24px] bg-white rounded-[5px] border border-solid border-others-600"
      data-testid="stat_card"
    >
      <p role="paragraph" className="uppercase text-sm text-accent">
        {UTILS.convertCamelCaseToWords(label)}
      </p>
      <h3 className="mt-[12px] text-[28px] text-accent font-semibold">
        {is_bytes && (
          <span aria-label="value">{UTILS.formatStorageSize(value)}</span>
        )}
        {is_bytes && remaining_bytes && (
          <span className="text-[15px]" aria-label="remaining">
            {' '}
            <span>of</span> {remaining_bytes} GB
          </span>
        )}
        {!is_bytes && value}
      </h3>
    </div>
  );
};
