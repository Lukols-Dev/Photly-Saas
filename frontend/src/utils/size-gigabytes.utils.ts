export const bytesToSize = (bytes: number): string => {
  if (!bytes) return "-";

  const units = ["byte", "kilobyte", "megabyte", "gigabyte", "terabyte"];

  const navigatorLocal =
    navigator.languages && navigator.languages.length >= 0
      ? navigator.languages[0]
      : "en-US";
  const unitIndex = Math.max(
    0,
    Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1)
  );

  return Intl.NumberFormat(navigatorLocal, {
    style: "unit",
    unit: units[unitIndex],
  }).format(bytes / 1024 ** unitIndex);
};

export const bytesToPercentage = (bytes: number, maxSize: number): number => {
  if (!bytes || !maxSize) return 0;
  const oneGB = 1000000000;
  const percentage = (Math.abs(bytes) / (oneGB * maxSize)) * 100;
  return Math.abs(percentage);
};
