export enum TIME_FRAME_ENUM {
  TODAY = 'TODAY',
  LAST7DAYS = 'LAST7DAYS',
  THISMONTH = 'THISMONTH',
  LAST3MONTHS = 'LAST3MONTHS',
  DEFAULT = ''
}

export const TIME_FRAME_DATA = [
  { label: 'Today', value: TIME_FRAME_ENUM.TODAY },
  { label: 'Last 7 days', value: TIME_FRAME_ENUM.LAST7DAYS },
  { label: 'This month', value: TIME_FRAME_ENUM.THISMONTH },
  { label: 'Last 3 months', value: TIME_FRAME_ENUM.LAST3MONTHS }
] as const;
