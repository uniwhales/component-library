export const getDate = (unixTimestamp: number) => {
  const date = (new Date(unixTimestamp * 1000)).toISOString().split('T')[0];
  const time = (new Date(unixTimestamp * 1000)).toISOString().split('T')[1].split('.')[0];

  return { date, time };
};
