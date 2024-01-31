import { UTILS } from '@/utils';
import { ApexOptions } from 'apexcharts';
import dayjs from 'dayjs';

const DEFAULT_CHAT_OPTIONS = {
  chart: {
    width: '100%',
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  tooltip: {
    enabled: true,
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      const currentDataPoint = series[seriesIndex][dataPointIndex];
      const currentDay = w.globals.categoryLabels[dataPointIndex];

      return (
        '<div class=" h-auto relative bg-others-900 text-white  max-w-[300px] mx-auto w-full py-[8px] px-[11px]">' +
        '<div class="flex items-center justify-start">' +
        '<span>' +
        currentDay +
        ': ' +
        currentDataPoint +
        ' Active Users</span>' +
        '</div>' +
        '</div>'
      );
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    colors: ['#EA8D51'],
    width: 2
  },
  fill: {
    type: 'solid',
    colors: ['#ea8d5126']
  },
  labels: [
    UTILS.dateFormatter(11),
    UTILS.dateFormatter(12),
    UTILS.dateFormatter(13),
    UTILS.dateFormatter(14),
    UTILS.dateFormatter(15),
    UTILS.dateFormatter(16),
    UTILS.dateFormatter(17)
  ],
  yaxis: { show: false },
  grid: { show: false },
  xaxis: {
    labels: {
      hideOverlappingLabels: false,
      style: {
        colors: '#566BA0',
        fontSize: '12px',
        fontWeight: 600
      },
      formatter: function (value: any) {
        return dayjs(value).format('ddd')?.toUpperCase();
      }
    }
  }
} as ApexOptions;

export const UICONSTANTS = {
  DEFAULT_CHAT_OPTIONS
};
