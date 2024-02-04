export enum TimeFrameEnum {
  TODAY = 'TODAY',
  LAST7DAYS = 'LAST7DAYS',
  THISMONTH = 'THISMONTH',
  LAST3MONTHS = 'LAST3MONTHS',
  DEFAULT = ''
}

export const TimeFrameData = [
  { label: 'Today', value: TimeFrameEnum.TODAY },
  { label: 'Last 7 days', value: TimeFrameEnum.LAST7DAYS },
  { label: 'This month', value: TimeFrameEnum.THISMONTH },
  { label: 'Last 3 months', value: TimeFrameEnum.LAST3MONTHS }
];
