'use client';

import { ApexAreaChart } from '@/components/ui/area-chart';
import { SelectDropdown } from '@/components/ui/select-dropdown';

const ActivitiesDropdownOptions = [
  { label: 'Activity 1', value: '1' },
  { label: 'Activity 2', value: '2' },
  { label: 'Activity 3', value: '3' },
  { label: 'Activity 4', value: '4' }
];

export const ActiveMonthlyUsers = () => {
  return (
    <div className="py-[22px] px-[24px] bg-white rounded-[5px] border border-solid border-others-600">
      <div className="mb-[40px] flex flex-col sm:flex-row items-center justify-between gap-[20px]">
        <h5 className="uppercase text-sm font-semibold text-accent">
          Monthly Active Users
        </h5>
        <div className="flex gap-[10px] w-full sm:max-w-[150px]">
          <div className="flex-1">
            <SelectDropdown
              placeholder="All Activities"
              options={ActivitiesDropdownOptions}
              onChange={(value) => {
                alert(`You chose ${value}`);
              }}
            />
          </div>
        </div>
      </div>
      <div className="h-[250px]">
        <ApexAreaChart
          options={{
            stroke: {
              colors: ['#15ae73'],
              width: 2
            },
            fill: {
              type: 'solid',
              colors: ['#15ae731a']
            }
          }}
          series={[
            {
              name: 'Users',
              data: [53, 61, 27, 54, 43, 19, 46]
            }
          ]}
        />
      </div>
    </div>
  );
};
