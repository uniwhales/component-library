export const getDate = (unixTimestamp: number) => {
  const timestamp = new Date(unixTimestamp * 1000);
  const date = timestamp.toLocaleDateString();
  const time = timestamp.toLocaleTimeString();

  return { date, time };
};
