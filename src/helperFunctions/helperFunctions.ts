export function convertToStandardTime(isoDateString: string) {
  let date = new Date(isoDateString);

  let options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  let standardTime = date.toLocaleString("en-US", options);

  standardTime = standardTime.replace(",", " at");

  return standardTime;
}
