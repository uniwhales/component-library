export function formatNumber(x:number | string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const formatter = (maximum:boolean) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: maximum ? 3 : 7,
  // minimumFractionDigits: 0,

  // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0,
  // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
