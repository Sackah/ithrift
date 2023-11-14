/**
 * @param {string} isoDateString - date in iso format
 * @returns {string} the date in the format - 24th November 2023, at 5:15 pm
 */

export function convertToStandardTime(isoDateString: string) {
  const date = new Date(isoDateString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const standardTime = date.toLocaleString("en-US", options);

  return standardTime;
}
