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
function formatStorageSize(byte: number) {
  const kilobyte = 1024;
  const megabyte = kilobyte * 1024;
  const gigabyte = megabyte * 1024;
  const terabyte = gigabyte * 1024;

  const options = { maximumFractionDigits: 2, minimumFractionDigits: 0 };

  if (byte < kilobyte) {
    return byte + ' Bytes';
  } else if (byte < megabyte) {
    return (byte / kilobyte).toLocaleString(undefined, options) + ' KB';
  } else if (byte < gigabyte) {
    return (byte / megabyte).toLocaleString(undefined, options) + ' MB';
  } else if (byte < terabyte) {
    return (byte / gigabyte).toLocaleString(undefined, options) + ' GB';
  } else {
    return (byte / terabyte).toLocaleString(undefined, options) + ' TB';
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

/**
 * Converts a string representing a range to an array of numbers.
 * If the string contains '+', returns an array with just the number.
 * If the string contains '-', splits the string at '-' and converts each part to a number.
 *
 * @param {string} inputString - The input string representing a range.
 * @returns {number[]} An array of numbers representing the range.
 */
function convertStringToRangeArray(inputString: string) {
  if (inputString.includes('+')) {
    // If the string contains '+', return an array with just the number
    return [parseInt(inputString, 10)];
  } else {
    // Otherwise, split the string at '-' and convert each part to a number
    return inputString.split('-').map(Number);
  }
}

/**
 * Adds a specified number of days to a given date.
 *
 * @param {Date} date - The initial date.
 * @param {number} days - The number of days to add.
 * @returns {Date} - A new Date object with the specified days added.
 */
function addDaysToDate(date: Date, days: number) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

/**
 * Remove a specified number of days to a given date.
 *
 * @param {Date} date - The initial date.
 * @param {number} days - The number of days to remove.
 * @returns {Date} - A new Date object with the specified days added.
 */
function removeDaysFromDate(date: Date, days: number) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - days);
  return newDate;
}

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
  convertStringToRangeArray,
  addDaysToDate,
  removeDaysFromDate,
  processEnv
};
