'use client';

import dynamic from 'next/dynamic';
import { FC, useEffect } from 'react';
import { UICONSTANTS } from './constants';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

interface AreaChart {
  options?: any;
  series: Array<{
    name: string;
    data: Array<number>;
  }>;
}

export const ApexAreaChart: FC<AreaChart> = ({ options = {}, series }) => {
  // This is a hack to fix the chart not showing up on the first load
  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;

    if (typeof window !== 'undefined') {
      timeout = setTimeout(() => {
        window && window.dispatchEvent(new Event('resize'));
      }, 2500);
    }

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ReactApexChart
      type="area"
      options={{ ...UICONSTANTS.DEFAULT_CHAT_OPTIONS, ...options }}
      series={series}
      width="100%"
      height="100%"
    />
  );
};
