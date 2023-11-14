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
