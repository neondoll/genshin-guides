export function formatPercent(value: number, options: Intl.NumberFormatOptions & { locale?: string } = {}): string {
  const { locale = "ru-RU", ...formatOptions } = options;

  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    style: "percent",
    ...formatOptions,
  }).format(value);
}
