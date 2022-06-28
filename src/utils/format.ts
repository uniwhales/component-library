export function formatNumber(x: number | string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const formatter = (maximum: boolean) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: maximum ? 3 : 7,
  // minimumFractionDigits: 0,

  // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0,
  // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const abbreviateNumber = (num: number) => {
  if (num < 1000) {
    return num.toFixed(2);
  }
  if (num > 999 && num <= 99999.99) {
    return new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3, notation: 'compact', compactDisplay: 'short' }).format(num);
  }
  if (num >= 100000 && num <= 999999.99) {
    return new Intl.NumberFormat('en-US', { maximumSignificantDigits: 5, notation: 'compact', compactDisplay: 'short' }).format(num);
  }
  if (num >= 1000000) {
    return new Intl.NumberFormat('en-US', { maximumSignificantDigits: 5, notation: 'compact', compactDisplay: 'short' }).format(num);
  }
  return num.toFixed(2);
};
