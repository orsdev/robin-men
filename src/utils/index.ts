import dayjs from 'dayjs';

function convertCamelCaseToWords(camelCaseString: string) {
  const words = camelCaseString
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

function bytesToGigabytes(bytes: number) {
  const gigabytes = Math.round(bytes / (1024 * 1024 * 1024));
  return gigabytes;
}

const dateFormatter = (duration: number) => {
  return dayjs(new Date()).add(duration, 'd').format();
};

const processEnv = {
  BASE_ENDPOINT:
    process.env.BASE_ENDPOINT || 'https://sfe-m3if.onrender.com/api/v1',
  DEV_ENVIRONMENT: process.env.NODE_ENV === 'development'
};

export const UTILS = {
  bytesToGigabytes,
  dateFormatter,
  convertCamelCaseToWords,
  processEnv
};
