const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
  maximumFractionDigits: 0,
});

export const formatCurrency = (number: number) => {
  return CURRENCY_FORMATER.format(number);
};
