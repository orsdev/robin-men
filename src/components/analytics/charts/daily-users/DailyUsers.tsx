'use client';

import { ApexAreaChart } from '@/components/ui/area-chart';
import { SelectDropdown } from '@/components/ui/select-dropdown';

const DaysDropdownOptions = [
  { label: '7 Days', value: '7' },
  { label: '14 Days', value: '14' },
  { label: '21 Days', value: '21' },
  { label: '30 Days', value: '30' }
];

const ActivitiesDropdownOptions = [
  { label: 'Activity 1', value: '1' },
  { label: 'Activity 2', value: '2' },
  { label: 'Activity 3', value: '3' },
  { label: 'Activity 4', value: '4' }
];

export const ActiveDailyUsers = () => {
  return (
    <div className="py-[22px] px-[24px] bg-white rounded-[5px] border border-solid border-others-600">
      <div className="mb-[40px] flex flex-col sm:flex-row items-center justify-between gap-[20px]">
        <h5 className="uppercase text-sm font-semibold text-accent w-[140px]">
          Active Daily User
        </h5>
        <div className="flex gap-[10px] w-full max-w-[300px]">
          <div className="w-[110px]">
            <SelectDropdown
              placeholder="Select..."
              options={DaysDropdownOptions}
              defaultValue="30"
              onChange={(value) => {
                alert(`You chose ${value}`);
              }}
            />
          </div>
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
