export const eventDateFormat = (date: Date, tz: string = "America/New_York") =>
  // TODO: get language dynamically
  new Intl.DateTimeFormat("en-us", {
    weekday: "short", // Abbreviated day of the week (Sun)
    month: "short", // Abbreviated month name (Dec)
    day: "numeric", // Numeric day of the month (31)
    hour: "numeric", // Numeric hour (9)
    minute: "numeric", // Numeric minute (00)
    hour12: true,
    timeZone: tz,
  }).format(date);

export const formatFanNumber = (fanNumber: number) =>
  new Intl.NumberFormat("en-US", { notation: "compact" }).format(fanNumber);