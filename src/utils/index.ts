import dayjs from 'dayjs';

/**
 * Converts a camelCase string to words with spaces.
 *
 * @param {string} camelCaseString - The camelCase string to convert.
 * @returns {string} - The converted string with spaces between words.
 */
function convertCamelCaseToWords(camelCaseString: string) {
  const words = camelCaseString
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

/**
 * Formats the given number of bytes into a human-readable storage size.
 *
 * @param {number} bytes - The number of bytes to format.
 * @returns {string} - The formatted storage size with appropriate units.
 */
function formatStorageSize(bytes: number) {
  const kilobyte = 1024;
  const megabyte = kilobyte * 1024;
  const gigabyte = megabyte * 1024;
  const terabyte = gigabyte * 1024;

  const options = { maximumFractionDigits: 2, minimumFractionDigits: 0 };

  if (bytes < kilobyte) {
    return bytes + ' Bytes';
  } else if (bytes < megabyte) {
    return (bytes / kilobyte).toLocaleString(undefined, options) + ' KB';
  } else if (bytes < gigabyte) {
    return (bytes / megabyte).toLocaleString(undefined, options) + ' MB';
  } else if (bytes < terabyte) {
    return (bytes / gigabyte).toLocaleString(undefined, options) + ' GB';
  } else {
    return (bytes / terabyte).toLocaleString(undefined, options) + ' TB';
  }
}

/**
 * Determines the CSS opacity class based on sorting direction and type.
 *
 * @param {string | boolean} direction - Sorting direction ('asc', 'desc', or false if not sorted).
 * @param {'up' | 'down'} type - Sorting arrow type ('up' or 'down').
 * @returns {string} - CSS opacity class.
 */
const arrowSortingClassOpacity = (
  direction: string | boolean,
  type: 'up' | 'down'
) => {
  if (direction === 'desc' && type === 'down') return 'opacity-[.3]';
  else if (direction === 'asc' && type === 'up') return 'opacity-[.3]';
  else return 'opacity-[1]';
};

/**
 * Formats a date by adding the specified duration in days to the current date.
 *
 * @param {number} duration - The duration in days to add to the current date.
 * @returns {string} - The formatted date string.
 */
const dateFormatter = (duration: number) => {
  return dayjs(new Date()).add(duration, 'd').format();
};

const processEnv = {
  BASE_ENDPOINT:
    process.env.BASE_ENDPOINT || 'https://sfe-m3if.onrender.com/api/v1',
  DEV_ENVIRONMENT: process.env.NODE_ENV === 'development'
};

export const UTILS = {
  formatStorageSize,
  dateFormatter,
  arrowSortingClassOpacity,
  convertCamelCaseToWords,
  processEnv
};
